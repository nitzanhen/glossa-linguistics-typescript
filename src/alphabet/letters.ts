
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
 * @param letter the string to be tested
 */
export function isGreekLetter(letter: string): boolean {
    return letters.hasOwnProperty(letter);
}

/**
 * @returns true if the string is a sequence of letters of the Greek alphabet, 
 * and false otherwise. Note that spaces and puncuation marks are not letters.
 * @param text the test to be tested. 
 */
export function isGreekString(string: string): boolean {
    return Array.from(string).every(isGreekLetter);
}

/**
 * Readonly collection of the vowels of the Greek alphabet,
 * sorted by alphabet order.
 */
export const vowels = Object.freeze(
    Object.entries(letters)
        .filter(([_, props]) => props.type === 'vowel')
        .map(([letter, _]) => letter)
        .sort()
);

/**
 * @returns true if the passed letter param is in the vowels array, and false otherwise.
 * @todo should the letter be normalized (stipped of accents)? should separate methods exist
 * for testing normalized equality and strict equality?
 * @param letter the strring to be tested. 
 */
export function isVowel(letter: string): boolean {
    return vowels.includes(letter);
}

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
 * @returns true if the passed letter param is in the consonants array, and false otherwise.
 * @todo should the letter be normalized (stipped of accents, specifically for rho)? should separate methods exist
 * for testing normalized equality and strict equality?
 * @param letter the strring to be tested. 
 */
export function isConsonant(letter: string): boolean {
    return consonants.includes(letter);
}

export default Object.freeze(letters);