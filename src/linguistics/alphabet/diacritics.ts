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
    diaresis: '\u0308',
};

/**
 * For convenience, defining a diacritic as a key of the diacritics object.
 */
export type Diacritic = keyof typeof diacritics;

/**
 * Removes diacritics from the given text.
 * 
 * @param text the text to strip diacritics from
 * @param blacklist the diacritics to strip. By default, removes all diacritics.
 * @returns the cleaned text
 */
export function stripDiacritics(text: string, blacklist: Diacritic[] = Object.keys(diacritics) as Diacritic[]): string {
    //Map blacklist keys to symbols, then concatanate for regex
    const concattedDiacritics = blacklist
        .map(key => diacritics[key])
        .reduce((acc, value) => acc + value, '');

    //Build regex that matches any diacritic
    const regex = new RegExp(`[${concattedDiacritics}]`, "g");

    //Denormalize and replace by regex
    const stripped = text.normalize("NFD").replace(regex, "");

    //Recompose and return
    return stripped.normalize("NFC");
}

export default Object.freeze(diacritics);