/**
 * Extension functions and extensions for common, built-in
 * String methods.
 */
declare global {
    interface String {
        trim(matcher?: (letter: string) => boolean): string;
        capitalize(): string;
        isCapitalized(): boolean;
    }
    
}

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
    let endIndex = this.length - 1;
    
    while(matcher(this[startIndex]) && startIndex < this.length) {
        startIndex++;
    }

    while(matcher(this[endIndex]) && endIndex > 0) {
        endIndex--;
    }

    //Start is inclusive, end is exclusive.
    return this.slice(startIndex, endIndex + 1)
}

/**
 * Capitalizes a given string.
 * 
 * @param string the string to be capitalized. 
 * @returns the capitalized string
 */
String.prototype.capitalize = function(): string {
    //When string[0] is ῳ, calling toUpperCase() turns it to ΩΙ.
    //When capitalizing, we want the iota to be lowercase, too;
    //Therefore, we store the uppercase string first, then slice it after 
    //the first character.
    const upperCase = this.toUpperCase();
    return upperCase.charAt(0) + upperCase.slice(1).toLowerCase();
  }

/**
 * Checks whether a given string is capitalized.
 * 
 * @returns true if and only if this string equals this.capitalize().
 */
String.prototype.isCapitalized = function(): boolean {
    return this === this.capitalize()
}  
export default {};