const toLowerCase = String.prototype.toLowerCase;

/**
 * Override of the default toLowerCase() implementation;
 * in addition to the default behaviour, the toLowerCase()
 * function will also replace occurences of ωι, ηι and ᾱι (case insensitive)
 * with ῳ, ῃ and ᾳ, respectively, to retain consistency for
 * the common forms of the improper diphthongs.
 * 
 * Diacritics on the diphthongs above will be carried over to 
 * their replaced form, except for the diaeresis - the diaeresis
 * will act as a veto, preventing the combination from even being 
 * replaced (as it marks two separate vowels, not a diphthong).
 * 
 * @since 07/06/20
 */
String.prototype.toLowerCase = function (): string {
    return toLowerCase.call(this)
        .normalize("NFD")
        //Note - \u0308 is unicode for the combining diaeresis
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

declare global {
    interface String {
        trim(matcher?: (letter: string) => boolean): string 
    }
    
}

const trim = String.prototype.trim

/**
 * Trims the string by the given matcher function.
 * If no matcher function is passed, it calls the default trim method;
 * 
 * @param matcher the matcher to test by. Characters that return true when
 * passed to this argument in the beginning or end of this string will be removed.
 * @returns the trimmed string, according to the matcher if one was passed.
 */
String.prototype.trim = function(matcher?: (letter: string) => boolean): string {
    if(!matcher) {
        return trim.call(this);
    }
    //The indices the interval between of which to slice
    let startIndex = 0; 
    let endIndex = 0;
    
    while(matcher(this[startIndex]) && startIndex < this.length) {
        startIndex++;
    }

    while(matcher(this[endIndex]) && endIndex > 0) {
        endIndex--;
    }

    //Start is inclusive, end is exclusive.
    return this.slice(startIndex, endIndex + 1)
}

export default {};