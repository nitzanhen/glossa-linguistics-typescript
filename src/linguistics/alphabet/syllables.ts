import "global/String";

import { InvalidLanguageError } from 'error';
import { isConsonant, isVowel, Consonant, isStop, isLiquid, isNasal, isGreekString, isDiphthong, isDouble, Vowel, isLongMonophthong } from './letters';
import { containsDiacritic } from './diacritics';

/**
 * Contains useful functions for working with and categorizing syllables.
 *
 * @since 07/06/20
 */

/**
 * Returns the ultima index for a word with the given amount of syllables,
 * or -1 if no amount is passed. The default returned value is useful for
 * functions accepting negative syllable index values.
 * @see syllableType() in this module, addDiacritic(), transformDiacritic() in the diacritic service module.
 * 
 * @param arg the number *of syllables* of the word, or an array of syllables. Optional.
 * @returns the ultima index for the word, or -1 if no length was passed.
 */
export const ultimaIndex = (arg: number | string[] = 0) => typeof arg === "number"
    ? arg - 1
    : arg.length - 1;

/**
 * Returns the penult index for a word with the given amount of syllables,
 * or -2 if no amount is passed. The default returned value is useful for
 * functions accepting negative syllable index values.
 * @see syllableType() in this module, addDiacritic(), transformDiacritic() in the diacritic service module.
 * 
 * @param length the number *of syllables* of the word, or an array of syllables. Optional.
 * @returns the penult index for the word, or -2 if no length was passed.
 */
export const penultIndex = (arg: number | string[] = 0) => typeof arg === "number"
    ? arg - 2
    : arg.length - 2;

/**
 * Returns the antepenult index for a word with the given amount of syllables,
 * or -3 if no amount is passed. The default returned value is useful for
 * functions accepting negative syllable index values.
 * @see syllableType() in this module, addDiacritic(), transformDiacritic() in the diacritic service module.
 * 
 * @param length the number *of syllables* of the word, or an array of syllables. Optional.
 * @returns the antepenult index for the word, or -3 if no length was passed.
 */
export const antepenultIndex = (arg: number | string[] = 0) => typeof arg === "number"
    ? arg - 3
    : arg.length - 3;

/**
 * Splits a Greek word up into its syllables.
 * 
 * @param word the word to split into syllables.
 * @returns the syllables, as a list of strings.
 * @throws InvalidLanguageError if a non-Greek text is passed as the word argument
 */
export function splitIntoSyllables(word: string): string[] {
    if (!isGreekString(word)) {
        throw new InvalidLanguageError(`Passed non-Greek form "${word}"; this function expects a Greek string.`);
    }

    const syllables: string[] = [];

    //Each syllable has a vowel (group). This is a utility variable 
    let vowelGroup = '';

    let currentSyllable = '';

    const characters = Array.from(word);
    const maxCharIndex = characters.length - 1;

    let i = 0;
    while (i < characters.length) {
        let char = characters[i];

        //Add the starting consonant group to the syllable
        while (isConsonant(char)) {
            currentSyllable += char;
            i++;
            if (i > maxCharIndex)
                break;
            else
                char = characters[i];
        }

        //Add letters to the vowel group until it reaches the breaking point -
        //It's a vowel itself, but stops being so when adding the next character
        while (i <= maxCharIndex && isVowel(vowelGroup + char)) {
            vowelGroup += char;
            i++;
            if (i > maxCharIndex)
                break;
            else {
                char = characters[i];
            }
        }

        currentSyllable += vowelGroup;
        vowelGroup = '';

        //The Vowel group has ended. char can now
        //be either a consonant or a vowel
        if (i <= maxCharIndex && isConsonant(char)) {
            //char is a consonant. We need to check what comes after it.
            if (i === maxCharIndex) {
                //Char is the last letter in the word, and no word comes after it.
                //Therefore,add it to the current syllable
                currentSyllable += char;
                i++;
            }
            else {
                const nextChar = characters[i + 1];
                if (isConsonant(nextChar) && !arePronouncedTogether(char as Consonant, nextChar)) {
                    //char is followed by a consonant, but they are not pronounced together;
                    //therefore, they are pronounced separately - the first consonant should go
                    //into this syllable.
                    currentSyllable += char;
                    i++;
                }

                //nextChar is a vowel, or another consonant such that the two are pronounced together.
                //Either way, they both belong in the next syllable, and we can continue.
            }
        }

        //We're done with the syllable. Add it to the syllables array and reset.
        syllables.push(currentSyllable);
        currentSyllable = '';
        /* 
                if (i >= maxCharIndex) {
                    //We're past the last letter, exit the loop.
                    break;
                } */
    }

    return syllables;
}

/**
 * Checks whethers two consonants are pronounced together (in the same syllable).
 * 
 * @param firstConsonant the first consonant of the pair
 * @param secondConsonant the second consonant of the pair
 * @returns true if the consonants are pronounced together, and false otherwise.
 */
function arePronouncedTogether(firstConsonant: Consonant, secondConsonant: Consonant): boolean {
    if (firstConsonant === secondConsonant) {
        //Repeated consonants are pronounced separately
        return false;
    }
    else if (isStop(firstConsonant)
        && (isStop(secondConsonant) || isLiquid(secondConsonant) || isNasal(secondConsonant))) {
        return true;
    }
    else if (isLiquid(firstConsonant) || isNasal(firstConsonant)) {
        //If the first consonant is a liquid or nasal, the two consonants
        //are pronounced together if and only if they are the pair μν
        return (firstConsonant === 'μ' && secondConsonant === 'ν');
    }
    else if (firstConsonant === 'σ') {
        //The pronounciation of sigma is ambiguous; it may be pronounced together with the following 
        //consonant or not. Here, I'm assuming it is indeed pronounced together with any following consonant.
        return true;
    }
    else {
        //firstConsonant is a double consonant
        return false;
    }
}

export type SyllableType = "longByNature" | "longByPosition" | "short";
/**
 * @returns the type of the syllable, length-wise.
 * The possible return (syllable) types are "longByNature", "longByPosition" and "short".
 * 
 * @param syllable the syllable to examine.
 * If syllableIndex is negative, it will be counted from the ultima backwards,
 * like python's negative-index access. 
 * @throws RangeError if the syllableIndex is out of the word's syllable array's bounds. 
 */
export function syllableType(word: string, syllableIndex: number): SyllableType {
    const syllables = splitIntoSyllables(word);
    if (syllableIndex < 0) {
        syllableIndex += syllables.length;
    }

    if (!syllables[syllableIndex]) {
        throw new RangeError(`syllableIndex out of bounds: ${syllableIndex}, for word ${word} with ${syllables.length} syllables.`);
    }
    const syllable = syllables[syllableIndex];
    const vowelPart = vowelPartOf(syllable);

    if (isDiphthong(vowelPart)
        || containsDiacritic(vowelPart, "macron")
        || containsDiacritic(vowelPart, "circumflex")
        || isLongMonophthong(vowelPart)) {
        return "longByNature";
    }
    const vowelIndex = syllable.search(vowelPart);
    const followingConsonants = syllable.slice(vowelIndex + vowelPart.length);
    const nextSyllable = syllables[syllableIndex + 1];

    if ((followingConsonants && isDouble(followingConsonants[0]))
        || (nextSyllable && isDouble(nextSyllable[0]))
        || (followingConsonants && nextSyllable && isConsonant(nextSyllable[0]))
    ) {
        return "longByPosition";
    }
    else {
        //the vowelPart is a short vowel AND is not followed by separately-pronounced consonants
        //or a double consonant; therefore, it is a short syllable.
        return "short";
    }
}

/**
 * @returns the vowel part of a syllable.
 * 
 * @param syllable the syllable to extract from.
 */
export function vowelPartOf(syllable: string): Vowel {
    //Assuming the vowel is a grouped string, surrounded by two optional groups of consonants.
    return syllable.trim(letter => isConsonant(letter)) as Vowel;
}