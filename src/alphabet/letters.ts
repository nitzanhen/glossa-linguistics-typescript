import diacritics, { stripDiacritics, Diacritic } from './diacritics';

/**
 * List of Greek letters. 
 * Each letter is kept here in its lower-case form; to obtain the upper-case form,
 * toUpperCase() can be used.
 * The value for each letter contains its type (vowel or consonant) as well as its phonetic class (for almost all letters).
 * 
 * @since 29/05/20
 */
const letters = {
    'α': { type: 'vowel' },
    'β': { type: 'consonant', class: 'labial' },
    'γ': { type: 'consonant', class: 'palatal' },
    'δ': { type: 'consonant', class: 'dental' },
    'ε': { type: 'vowel', class: 'short' },
    'ζ': { type: 'consonant', class: 'double' },
    'η': { type: 'vowel', class: 'long' },
    'θ': { type: 'consonant', class: 'dental' },
    'ι': { type: 'vowel' },
    'κ': { type: 'consonant', class: 'palatal' },
    'λ': { type: 'consonant', class: 'liquid' },
    'μ': { type: 'consonant', class: 'nasal' },
    'ν': { type: 'consonant', class: 'nasal' },
    'ξ': { type: 'consonant', class: 'double' },
    'ο': { type: 'vowel', class: 'short' },
    'π': { type: 'consonant', class: 'palatal' },
    'ρ': { type: 'consonant', class: 'liquid' },
    'σ': { type: 'consonant', class: 'sibilant' },
    'τ': { type: 'consonant', class: 'dental' },
    'υ': { type: 'vowel' },
    'φ': { type: 'consonant', class: 'labial' },
    'χ': { type: 'consonant', class: 'palatal' },
    'ψ': { type: 'consonant', class: 'double' },
    'ω': { type: 'vowel', class: 'long' },
};

/**
 * @returns true if the string is a letter of the Greek alphabet, and false otherwise.
 * Can optionally test "strictly", meaning an accented letter (i.e. a letter with any diacritic symbol)
 * will not count as a Greek letter.
 * 
 * @param letter the string to be tested.
 * @param strict whether to test strictly or not, defaults to false. 
 */
export function isGreekLetter(letter: string, strict: boolean = false): boolean {
    if (!strict) {
        letter = stripDiacritics(letter);
    }
    return letters.hasOwnProperty(letter);
}


/**
 * @returns true if the string is a sequence of letters of the Greek alphabet, 
 * and false otherwise. Note that spaces and puncuation marks are not letters.
 * Can optionally test "strictly", meaning an accented text (i.e. a text with any diacritic symbol)
 * will not count as Greek text.
 * 
 * @param letter the string to be tested.
 * @param strict whether to test strictly or not, defaults to false. 
 */
export function isGreekString(string: string, strict: boolean = false): boolean {
    return Array.from(string).every(letter => isGreekLetter(letter, strict));
}

//------ Vowels ------//


/**
 * Iota-subscript, unlike the other diacritics, makes a difference when it
 * comes to determining whether a vowel is a monophthong or diphthong; all
 * vowels with iota subscript are diphthongs.
 * 
 * the safeDiacritics array constains the keys of all diacritics except the iota
 * subscript, and is used to strip only the safe diacritics in the useMonophthong()
 * and useDiphthong() functions.
 */
const safeDiacritics = (() => {
    const { iota_subscript, ...otherDiacritics } = diacritics;
    return Object.keys(otherDiacritics) as Diacritic[];
})();

//Monophthongs 

/**
 * Readonly collection of the monophthongs (single vowels) of the Greek alphabet,
 * sorted by alphabet order.
 */
export const monophtongs = Object.freeze(
    Object.entries(letters)
        .filter(([_, props]) => props.type === 'vowel')
        .map(([letter, _]) => letter)
        .sort()
);

/**
 * Monophthong type; should match the possible values of the monophthongs array.
 * Note that technically, the Monophthong type is not limited to the values below;
 * using the isMonophthong() method, any *accented* variant of the union elements 
 * can be inferred as a Monophthong.
 */
export type Monophthong = 'α' | 'ε' | 'η' | 'ι' | 'ο' | 'υ' | 'ω';

/**
 * @returns true if the passed letter param is in the monophthongs array, and false otherwise.
 * Can optionally test "strictly", meaning an accented monophthong (i.e. a monophthong with any diacritic symbol)
 * will not count as a monophthong.
 * 
 * @param letter the string to be tested. 
 * @param strict whether to test strictly or not, defaults to false.
 */
export function isMonophthong(letter: string, strict: boolean = false): letter is Monophthong {
    const { iota_subscript, ...otherDiacritics } = diacritics;

    if (!strict) {
        //DON'T remove iota subscript; all vowels with iota subscript are diphthongs
        letter = stripDiacritics(letter, safeDiacritics);
    }
    return monophtongs.includes(letter);
}

//Diphthongs

/**
 * Readonly collection of the diphthongs ("double vowels") of the Greek alphabet.
 * 
 * Note the difference between "αι" and "ᾳ"; the former is the proper diphthong, while the
 * latter is the improper diphthong (ᾱι, in iota adscript). 
 */
export const diphthongs = Object.freeze(
    ["αι", "αυ", "ει", "ευ", "ηυ", "οι", "ου", "υι", "ᾳ", "ῃ", "ῳ"]
);

/**
 * Diphthong type; should match the possible values of the diphthongs array.
 * Note that technically, the Diphthong type is not limited to the values below;
 * using the isDiphthong() method, any *accented* variant of the union elements 
 * can be inferred as a Diphthong.
 */
export type Diphthong = "αι" | "αυ" | "ει" | "ευ" | "ηυ" | "οι" | "ου" | "υι" | "ᾳ" | "ῃ" | "ῳ";

/**
 * @returns true if the passed letter param is in the diphthongs array, and false otherwise.
 * Can optionally test "strictly", meaning an accented diphthongs (i.e. a diphthongs with any diacritic symbol)
 * will not count as a diphthongs.
 * 
 * @param letter the string to be tested. 
 * @param strict whether to test strictly or not, defaults to false.
 */
export function isDiphthong(letter: string, strict: boolean = false): letter is Diphthong {
    if (!strict) {
        letter = stripDiacritics(letter, safeDiacritics);
    }
    return diphthongs.includes(letter);
}

//Vowels

/**
 * Readonly collection of the vowels (monophthongs and diphthongs) 
 * of the Greek alphabet.
 */
export const vowels = Object.freeze(monophtongs.concat(diphthongs));

/**
 * Vowel type; should match the possible values of the vowels array.
 * Note that technically, the Vowel type is not limited to the values below;
 * using the isVowel() method, any *accented* variant of the union elements
 * can be inferred as a Vowel.
 */
export type Vowel = Monophthong | Diphthong;

/**
 * @returns true if the passed letter param is in the vowels array, and false otherwise.
 * Can optionally test "strictly", meaning an accented vowel (i.e. a vowel with any diacritic symbol)
 * will not count as a vowel.
 * 
 * @param letter the string to be tested. 
 * @param strict whether to test strictly or not, defaults to false.
 */
export function isVowel(letter: string, strict: boolean = false): letter is Vowel {
    return isMonophthong(letter, strict) || isDiphthong(letter, strict);
}

//------ Consonants ------//

/**
 * Readonly collection of the consonants of the Greek alphabet,
 * sorted by alphabet order.
 */
export const consonants = Object.freeze(
    Object.entries(letters)
        .filter(([_, props]) => props.type === 'consonant')
        .map(([letter, _]) => letter)
        .sort()
);

/**
 * Consonant type; should match the possible values of the consonants array.
 * Technically, a rho with rhough breathing also counts as a consonant (when testing
 * with isConsonant(), the strict parameter being passed false), even though
 * it's not present here.
 */
export type Consonant = 'β' | 'γ' | 'δ' | 'ζ' | 'θ' | 'κ' | 'λ' | 'μ' | 'ν' |
    'ξ' | 'π' | 'ρ' | 'σ' | 'τ' | 'φ' | 'χ' | 'ψ';

/**
 * @returns true if the passed letter param is in the consonants array, and false otherwise.
 * A rho with rough breathing counts as a consonants, and passing it to this method returns true.
 * 
 * @param letter the string to be tested. 
 */
export function isConsonant(letter: string): letter is Consonant {
    //Remove rough breathing mark in case the letter is rho
    letter = stripDiacritics(letter, ["rough_breathing"]);

    return consonants.includes(letter);
}

export default Object.freeze(letters);