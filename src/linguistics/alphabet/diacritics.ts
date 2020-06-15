
/**
 * Contains a list of diacritical symbols used in Greek, specifically in their
 * combining forms.
 */
const diacritics = {
    acute: '\u0301',
    circumflex: '\u0342', //Perispomeni.
    grave: '\u0300',
    macron: '\u0304',
    breve: '\u0306',
    smooth_breathing: '\u0313',
    rough_breathing: '\u0314', //Reversed Comma Above
    iota_subscript: '\u0345', //Ypogegrammeni
    diaeresis: '\u0308',
};

/**
 * For convenience, defining a diacritic as a key of the diacritics object.
 */
export type Diacritic = keyof typeof diacritics;

type stripDiacriticsOptions = Partial<{
    blacklist: Diacritic[],
    retain: Diacritic[];
}>;
/**
 * Removes diacritics from the given text.
 * 
 * @param text the text to strip diacritics from
 * @param blacklist the diacritics to strip. By default, removes all diacritics.
 * @param retain diacritics to retain. This overrides the blacklist param; a diacritic
 * present in both will not be removed.
 * @returns the cleaned text
 */
export function stripDiacritics(text: string, {
    blacklist = Object.keys(diacritics) as Diacritic[],
    retain = []
}: stripDiacriticsOptions = {}): string {
    //Map blacklist keys to symbols, then concatanate for regex
    const concattedDiacritics = blacklist
        .filter(key => !retain.includes(key))
        .map(key => diacritics[key])
        .reduce((acc, value) => acc + value, '');

    //Build regex that matches any diacritic
    const regex = new RegExp(`[${concattedDiacritics}]`, "g");

    //Denormalize and replace by regex
    const stripped = text.normalize("NFD").replace(regex, "");

    //Recompose and return
    return stripped.normalize("NFC");
}

/**
 * Utility function to strip only the accents of a text; preserves other diacritics
 * 
 * @param text the text to strip from.
 * @returns the stripped text.
 */
export function stripAccents(text: string): string {
    return stripDiacritics(text, { blacklist: ["acute", "circumflex", "macron"] });
}

/**
 * Checks whether a given text is accented; will return true if and only if text
 * is equal to text stipped of accents (stripAccents(text))
 * 
 * @param text the text to check
 */
export function isAccented(text: string): boolean {
    return text === stripAccents(text);
}

/**
 * @returns true if and only if char has the diacritic argument (that is, when decomposing char,
 * the received string contains the diacritic). This function technically works for strings spanning
 * more than a single letter - in which case it checks whether the diacritic exists somewhere in the string -
 * but would typically be used to check a single character.
 * 
 * @param char the character (or string) to test for the diacritic.
 * @param diacritic the diacritic to test for.
 */
export function containsDiacritic(char: string, diacritic: Diacritic): boolean {
    return char.normalize("NFD").includes(diacritics[diacritic]);
}

/**
 * Helper functions that returns a number for each diacritic symbol denoting its
 * "order" - how early or late should it appear (unicode-wise) in a string.
 * A lower order denotes an earlier presence. 
 * For example, we'd always want to place a macron char before an acute char,
 * so its order will be lower.
 * 
 * Note that the function expects the diacritic mark itself! not its name;
 * e.g. '\u0301', not 'acute'.
 * 
 * @param diacritic the diacritic symbol *itself* to get the order for. 
 * Diacritic marks that are not in the diacritics object are supported as well; 
 * their order will be the highest
 * @returns the order of the diacritic
 */
function orderOf(diacritic: string): number {
    const { acute, circumflex, grave, macron, breve, smooth_breathing, rough_breathing, iota_subscript, diaeresis } = diacritics;
    switch (diacritic) {
        case iota_subscript:
            return 0;
        case macron:
            return 1;
        case diaeresis:
            return 2;
        case breve:
            return 3;
        case smooth_breathing:
        case rough_breathing:
            return 4;
        case acute:
        case circumflex:
        case grave:
            return 5;

        default:
            return Infinity;
    }
}

/**
 * Helper functions that tests whether a given character is a diacritic
 * symbol (in the general sense; whether it is a part of the unicode diacritic block).
 * @param char the char to test
 * @returns true if char is a diacritic, and false otherwise
 */
const isDiacritic = (char: string) => /([\u0300-\u036F])/.test(char);

/**
 * Orders the diacritics blocks in the given string.
 * 
 * @param text the text whose diacritics to order.
 * @returns the ordered text.
 */
export function orderDiacritics(text: string): string {
    const chars = Array.from(text.normalize("NFD"));
    const charsOrdered: string[] = [];

    let diacriticGroup: string[] = [];
    chars.forEach(char => {
        if (isDiacritic(char)) {
            diacriticGroup.push(char);
        }
        else {
            if (diacriticGroup.length > 0) {
                //char is not a diacritic, but diacritic group is not empty.
                //Therefore, we've just moved from a diacritic group back to letters.
                //Order the group and push it to the charsOrdered array.
                //Sort by order ascending.
                diacriticGroup.sort((d1, d2) => orderOf(d1) - orderOf(d2));
                charsOrdered.concat(diacriticGroup);
                diacriticGroup = [];
            }

            charsOrdered.push(char);
        }
    });

    //back to string and return
    return charsOrdered.reduce((string, char) => string + char, '').normalize("NFC");
}

export default Object.freeze(diacritics);