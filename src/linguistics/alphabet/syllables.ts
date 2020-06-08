import { InvalidLanguageError } from '#/error';
import { isConsonant, isVowel, Consonant, isStop, isLiquid, isNasal, isGreekString } from './letters';
import { containsDiacritic } from './diacritics';

/**
 * Contains useful functions for working with and categorizing syllables.
 *
 * @since 07/06/20
 */

/**
 * Splits a Greek word up into its syllables.
 * 
 * @param word the word to split into syllables.
 * @returns the syllables, as a list of strings.
 * @throws InvalidLanguageError if a non-Greek text is passed as the word argument
 */
export function splitIntoSyllables(word: string): string[] {
    if (!isGreekString(word)) {
        throw new InvalidLanguageError(`Passed non-Greek form "${word}"; this functions expects a Greek string.`);
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

        //Now, we move to the vowel group. First, we know char is now a vowel:
        currentSyllable += char;
        i++;
        char = characters[i];

        //Add letters to the vowel group until it reaches the breaking point -
        //It's a vowel itself, but stops being so when adding the next character
        while (i <= maxCharIndex && isVowel(vowelGroup + char)) {
            vowelGroup += char;
            i++;
            if (i > maxCharIndex)
                break;
            else {
                char = characters[i];
                //A vowel with a diaresis following another vowel begins a new syllable
                if (containsDiacritic(char, "diaresis")) {
                    break;
                }
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

        if (i >= maxCharIndex) {
            //We're past the last letter, exit the loop.
            break;
        }
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