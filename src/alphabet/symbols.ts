/**
 * Contains a list of diacritical symbols used in Greek, specifically in their
 * combining forms.
 */
const symbols = {
    acute: '\u0301',
    circumflex: '\u0342', //Perispomeni.
    grave: '\u0300',
    macron: '\u0304',
    breve: '\u0306',
    smooth_breathing: '\u0313',
    rough_breathing: '\u0314', //Reversed Comma Above
    iota_subscript: '\u0345', //Ypogegrammeni
    diaresis: '\u0308',
}

/**
 * 
 * @param text 
 * @param blacklist 
 */
export function strip(text: string, blacklist?: (keyof typeof symbols)[]) {

}

export default Object.freeze(symbols);