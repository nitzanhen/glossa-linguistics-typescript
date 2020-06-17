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
    'π': { type: 'consonant', class: 'labial' },
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
 * Utility method for extracting of a group of letters from the letters object below 
 * (by a given property value). In essence, filters only the letters 
 * with the given type or class name.
 * 
 * @param property the property to extract by.
 * @param value the value of the property argument to filter by.
 * @returns The letters with the passed type argument, sorted by alphabet order, as a readonly array.
 */
export function extractLetters(property: 'type' | 'class', value: string): readonly string[] {
    return Object.freeze(
        Object.entries(letters)
            .filter(([_, props]) => (props as any)[property] === value)
            .map(([letter, _]) => letter)
            .sort()
    );
}


/**
 * @returns true if the string is a letter of the Greek alphabet, and false otherwise.
 * Can optionally test "strictly", meaning an accented letter (i.e. a letter with any diacritic symbol)
 * will not count as a Greek letter.
 * 
 * @param letter the string to be tested.
 * @param strict whether to test strictly or not, defaults to false. 
 */
export function isGreekLetter(letter: string, strict: boolean = false): boolean {
    letter = letter.toLowerCase();

    if (!strict) {
        letter = stripDiacritics(letter);
    }
    return letters.hasOwnProperty(letter) || letter === 'ς';
}

/**
 * @returns true if the string is a sequence of letters of the Greek alphabet, 
 * and false otherwise. Note that spaces and puncuation marks are not letters.
 * Can optionally test "strictly", meaning an accented text (i.e. a text with any diacritic symbol)
 * will not count as Greek text.
 * 
 * Due to complex diacritic combinations of diacritics spanning more than a single character (thus creating
 * "empty" characters in the string, which do not pass isGreekLetter() by themselves), the string must be stripped of diacritics
 * as a whole.
 * 
 * @param letter the string to be tested.
 * @param strict whether to test strictly or not, defaults to false. 
 */
export function isGreekString(string: string, strict: boolean = false): boolean {
    string = string.toLowerCase();

    if (!strict) {
        string = stripDiacritics(string);
    }

    return Array.from(string).every(char => letters.hasOwnProperty(char) || char === 'ς');
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
 *//* 
const safeDiacritics = (() => {
const { iota_subscript, ...otherDiacritics } = diacritics;
return Object.keys(otherDiacritics) as Diacritic[];
})();

//For diphthongs, the diaeresis must be retained as well.
const diphthongSafeDiacritics = safeDiacritics.filter(diacritic => diacritic !== 'diaeresis') */

//Monophthongs 

/**
 * Readonly collection of the monophthongs (single vowels) of the Greek alphabet,
 * sorted by alphabet order.
 */
export const monophthongs = extractLetters('type', 'vowel');

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
    letter = letter.toLowerCase();

    if (!strict) {
        letter = stripDiacritics(letter, { retain: ['iota_subscript'] });
    }
    return monophthongs.includes(letter);
}

//Long & short monophthongs

/**
 * Readonly collection of the short monophthongs of the Greek alphabet,
 * sorted by alphabet order.
 */
export const shortMonophthongs = extractLetters('class', 'short');

/**
 * @returns true if the passed letter param is in the shortMonophthongs array, and false otherwise.
 * Can optionally test "strictly", meaning an accented monophthong (i.e. a monophthong with any diacritic symbol)
 * will not count as a short monophthong.
 * 
 * @param letter the string to be tested. 
 * @param strict whether to test strictly or not, defaults to false.
 */
export function isShortMonophthong(letter: string, strict: boolean = false): boolean {
    letter = letter.toLowerCase();

    if (!strict) {
        letter = stripDiacritics(letter, { retain: ['iota_subscript'] });
    }

    return shortMonophthongs.includes(letter);
}

/**
 * Readonly collection of the long monophthongs of the Greek alphabet,
 * sorted by alphabet order.
 */
export const longMonophthongs = extractLetters('class', 'long');

/**
 * @returns true if the passed letter param is in the longMonophthongs array, and false otherwise.
 * Can optionally test "strictly", meaning an accented monophthong (i.e. a monophthong with any diacritic symbol)
 * will not count as a long monophthong.
 * 
 * @param letter the string to be tested. 
 * @param strict whether to test strictly or not, defaults to false.
 */
export function isLongMonophthong(letter: string, strict: boolean = false): boolean {
    letter = letter.toLowerCase();

    if (!strict) {
        letter = stripDiacritics(letter, { retain: ['iota_subscript'] });
    }

    return longMonophthongs.includes(letter);
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
    letter = letter.toLowerCase();

    if (!strict) {
        letter = stripDiacritics(letter, { retain: ["iota_subscript", "diaeresis"] });
    }
    return diphthongs.includes(letter);
}

//Vowels

/**
 * Readonly collection of the vowels (monophthongs and diphthongs) 
 * of the Greek alphabet.
 */
export const vowels = Object.freeze(monophthongs.concat(diphthongs));

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
export const consonants = extractLetters('type', 'consonant');

/**
 * Consonant type; should match the possible values of the consonants array.
 * Technically, a rho with rhough breathing also counts as a consonant (when testing
 * with isConsonant(), the strict parameter being passed false), even though
 * it's not present here. The same goes for the form of sigma at the end of the word - ς.
 */
export type Consonant = 'β' | 'γ' | 'δ' | 'ζ' | 'θ' | 'κ' | 'λ' | 'μ' | 'ν' |
    'ξ' | 'π' | 'ρ' | 'σ' | 'τ' | 'φ' | 'χ' | 'ψ';

/**
 * @returns true if the passed letter param is in the consonants array, and false otherwise.
 * A rho with rough breathing counts as a consonants, and passing it to this method returns true.
 * The same goes for the ending form of sigma - ς.
 * 
 * @param letter the string to be tested. 
 */
export function isConsonant(letter: string): letter is Consonant {
    letter = letter.toLowerCase();

    //Remove rough breathing mark in case the letter is rho
    letter = stripDiacritics(letter, { blacklist: ["rough_breathing"] });

    return consonants.includes(letter) || letter === 'ς';
}

//Consonant types

//Liquids

/**
 * Readonly collection of the liquid consonants of the Greek alphabet,
 * sorted by alphabet order.
 */
export const liquids = extractLetters("class", "liquid");

/**
 * @returns true if the passed letter param is in the liquids array, and false otherwise.
 * A rho with rough breathing counts as a consonants, and passing it to this method returns true.
 * 
 * @param letter the string to be tested. 
 */
export function isLiquid(letter: string): boolean {
    letter = letter.toLowerCase();

    //Remove rough breathing mark in case the letter is rho
    letter = stripDiacritics(letter, { blacklist: ["rough_breathing"] });

    return liquids.includes(letter);
}

//Nasals

/**
 * Readonly collection of the nasal consonants of the Greek alphabet,
 * sorted by alphabet order.
 */
export const nasals = extractLetters("class", "nasal");

/**
 * @returns true if the passed letter param is in the nasals array, and false otherwise.
 * 
 * @param letter the string to be tested. 
 */
export function isNasal(letter: string): boolean {
    letter = letter.toLowerCase();

    return nasals.includes(letter);
}


//Labials

/**
 * Readonly collection of the labial consonant of the Greek alphabet,
 * sorted by alphabet order.
 */
export const labials = extractLetters("class", "labial");

/**
 * @returns true if the passed letter param is in the labials array, and false otherwise.
 * 
 * @param letter the string to be tested. 
 */
export function isLabial(letter: string): boolean {
    letter = letter.toLowerCase();

    return labials.includes(letter);
}

//Dentals

/**
 * Readonly collection of the dental consonants of the Greek alphabet,
 * sorted by alphabet order.
 */
export const dentals = extractLetters("class", "dental");

/**
 * @returns true if the passed letter param is in the dentals array, and false otherwise.
 * 
 * @param letter the string to be tested. 
 */
export function isDental(letter: string): boolean {
    letter = letter.toLowerCase();

    return dentals.includes(letter);
}


//Palatals

/**
 * Readonly collection of the palatal consonants of the Greek alphabet,
 * sorted by alphabet order.
 */
export const palatals = extractLetters("class", "palatal");

/**
 * @returns true if the passed letter param is in the palatals array, and false otherwise.
 * 
 * @param letter the string to be tested. 
 */
export function isPalatal(letter: string): boolean {
    letter = letter.toLowerCase();

    return palatals.includes(letter);
}

//Stops

/**
 * Readonly collection of the stops (also called mutes) 
 * of the Greek alphabet, sorted by alphabet order.
 */
export const stops = labials.concat(dentals, palatals);

/**
 * @returns true if the passed letter param is in the stops array, and false otherwise.
 * 
 * @param letter the string to be tested. 
 */
export function isStop(letter: string): boolean {
    return isLabial(letter) || isDental(letter) || isPalatal(letter);
}

//Doubles

/**
 * Readonly collection of the double consonants
 * of the Greek alphabet, sorted by alphabet order.
 */
export const doubles = extractLetters("class", "double");

/**
 * @returns true if the passed letter param is in the doubles array, and false otherwise.
 * 
 * @param letter the string to be tested. 
 */
export function isDouble(letter: string): boolean {
    letter = letter.toLowerCase();

    return doubles.includes(letter);
}

export default Object.freeze(letters);