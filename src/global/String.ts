const toLowerCase = String.prototype.toLowerCase;

/**
 * Override of the default toLowerCase() implementation;
 * in addition to the default behaviour, the toLowerCase()
 * function will also replace occurences of ωι, ηι and ᾱι (case insensitive)
 * with ῳ, ῃ and ᾳ, respectively, to retain consistency for
 * the common forms of the improper diphthongs.
 * 
 * Diacritics on the diphthongs above will be carried over to 
 * their replaced form, except for the diaresis - the diaresis
 * will act as a veto, preventing the combination from even being 
 * replaced (as it marks two separate vowels, not a diphthong).
 * 
 * @since 07/06/20
 */
String.prototype.toLowerCase = function (): string {
    return toLowerCase.call(this)
        .normalize("NFD")
        //Note - \u0308 is unicode for the combining diaresis
        .replace(/ωι([^\u0308])|ωι$/g, 'ῳ$1')
        .replace(/ηι([^\u0308])|ηι$/g, 'ῃ$1')
        .replace(/α\u0304ι([^\u0308])|α\u0304ι$/g, 'ᾳ$1')
        .normalize('NFC');
};

const toUpperCase = String.prototype.toUpperCase;

/**
 * Override of the default toUpperCase implementation;
 * in addition to the default behaviour, the toUpperCase()
 * function will also replace occurences of ᾳ with ᾱι,
 * before transforming into the upper case (in the default manner),
 * to retain consistency for the common forms of the improper diphthongs.
 * 
 * Diacritics on the diphthong will be carried over to 
 * the replaced form.
 * 
 * @since 07/06/20
 */
String.prototype.toUpperCase = function (): string {
    const replaced = this.normalize("NFD")
        .replace('ᾳ'.normalize("NFD"), 'ᾱι')
        .normalize("NFC");
    return toUpperCase.call(replaced);
};

export default {};