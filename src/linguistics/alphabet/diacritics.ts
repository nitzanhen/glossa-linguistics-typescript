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
    return stripDiacritics(text, { blacklist: ["acute", "circumflex", "macron"] })
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

export default Object.freeze(diacritics);