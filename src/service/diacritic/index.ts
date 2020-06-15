import diacritics, { Diacritic, stripDiacritics, stripAccents, containsDiacritic, orderDiacritics } from "#/linguistics/alphabet/diacritics";
import { splitIntoSyllables, vowelPartOf, syllableType } from "#/linguistics/alphabet/syllables";

/**
 * Contains useful functions for adding and transforming diacritics.
 * 
 * @since 11/06/20
 */

/**
 * Adds a diacritic mark to the syllable at the given index of the word.
 * This function is especially useful for accenting syllables.
 * 
 * @param word to word to accent.
 * @param syllableIndex the index of the syllable in the passed word.
 * @param diacritic the diacritic to add.
 * @returns the word, with the requested syllable accented.
 * @throws RangeError if the syllableIndex is out of the word's syllable array's bounds.
 */
export function addDiacritic(word: string, syllableIndex: number, diacritic: Diacritic) {
    const syllables = splitIntoSyllables(word);
    if (!syllables[syllableIndex]) {
        throw new RangeError(`syllableIndex out of bounds: ${syllableIndex}, for word ${word} with ${syllables.length} syllables.`);
    } 

    const syllable = syllables[syllableIndex];
    const vowelPart = vowelPartOf(syllable);
    const accentedSyllable = addDiacriticVowel(syllable, diacritic)
    syllables[syllableIndex] = accentedSyllable;
    return syllables.join("");
}

/**
 * Adds the given diacritic to the given vowel.
 * 
 * @param vowel the vowel to be appended the diacritic.
 * @param diacritic the diacritic to be added.
 * 
 * @returns the accented vowel.
 */
export function addDiacriticVowel(vowel: string, diacritic: Diacritic): string {
    return orderDiacritics(vowel + diacritics[diacritic]);
}


interface DiacriticTransformOptions {
    originIndex: number;
    originDiacritic?: Diacritic,
    destinationIndex: number,
    destinationDiacritic: Diacritic;
}

/**
 * Transforms a diacritic. Can be used to add, move or remove diacritics from a word.
 * 
 * @param word the word perform the operation on.
 * @param originIndex the index of the syllable whose diacritic is being transformed
 * @param originDiacritic the diacritic to be transformed; useful when a syllable has multiple
 * diacritics. If originDiacritic is not specified, all accents will be omitted.
 * @param destinationIndex the index of the syllable onto which the diacritic will be moved.
 * Defaults to the destinationIndex.
 * @param destinationDiacritic the diacritic to which originDiacritic is to be transformed.
 * @returns the word, with the diacritic transformed.
 * @throws RangeError if originIndex or destinationInde are out of the word's syllables' bounds.
 */
export function transformDiacritic(word: string, { originIndex,
    originDiacritic,
    destinationIndex,
    destinationDiacritic
}: DiacriticTransformOptions) {
    const syllables = splitIntoSyllables(word);
    if (originIndex < 0 || originIndex > syllables.length) {
        throw new RangeError(`originIndex argument exceeds syllable bounds; word ${word} has ${syllables.length} syllables, whereas originIndex is ${originIndex}`);
    }
    else if (destinationIndex < 0 || destinationIndex > syllables.length) {
        throw new RangeError(`destinationIndex argument exceeds syllable bounds; word ${word} has ${syllables.length} syllables, whereas destinationIndex is ${originIndex}`);
    }
    else {
        let originSyllable = syllables[originIndex];

        originSyllable = originDiacritic
            ? stripDiacritics(word, { blacklist: [originDiacritic] })
            : stripAccents(originSyllable);

        word = addDiacritic(word, destinationIndex, destinationDiacritic);

        return word;
    }
}

/**
 * Enforces the two general rules of accenting Greek word:
 * 1. The acute can stay on the antepenult only if the ultima is short,
 * or ends with -αι or -οι. Otherwise, it moves to the penult.
 * 2. If the penult is naturally long and the ultima is short or
 * ends with -αι or -οι, an accent on the penult will be transformed into 
 * a circumflex; otherwise, it will be an acute.
 * 
 * @param word the word to check
 * @returns the word with accenting corrected, if needed.
 */
export function enforceGeneralAccentRules(word: string): string {
    const syllables = splitIntoSyllables(word);
    const ultima = syllables[syllables.length - 1];

    const antepenultIndex = syllables.length - 3;
    const penultIndex = syllables.length - 2;

    const isUltimaShort = syllableType(word, syllables.length - 1) === 'short'
        || stripAccents(ultima).endsWith("αι")
        || stripAccents(ultima).endsWith("οι");

    if (syllables.length > 2 && !isUltimaShort) {
        const antepenult = syllables[antepenultIndex];
        if (containsDiacritic(antepenult, "acute")) {
            //Move to penult
            word = transformDiacritic(word, {
                originIndex: antepenultIndex,
                originDiacritic: "acute",
                destinationIndex: penultIndex,
                destinationDiacritic: "acute"
            });
        }
    }

    if (syllables.length > 1 && isUltimaShort) {
        if (syllableType(word, penultIndex) === "longByNature") {
            word = transformDiacritic(word, {
                originIndex: penultIndex,
                originDiacritic: "acute",
                destinationIndex: penultIndex,
                destinationDiacritic: "circumflex"
            });
        }
    }

    return word;
}