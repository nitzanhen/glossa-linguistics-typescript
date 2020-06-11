import { Diacritic } from "#/linguistics/alphabet/diacritics";
import { splitIntoSyllables, vowelPartOf } from "#/linguistics/alphabet/syllables";
import { isMonophthong } from "../../linguistics/alphabet/letters";


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
    if(!syllables[syllableIndex]) {
        throw new RangeError(`syllableIndex out of bounds: ${syllableIndex}, for word ${word} with ${syllables.length} syllables.`);
    }

    const syllable = syllables[syllableIndex];
    const vowelPart = vowelPartOf(syllable);
    if(isMonophthong(vowelPart)) {
        vowelPart
    }
    else {
        //vowelPart is a diphthong
        vowelPart
    }
}

interface DiacriticTransformOptions {

}

/**
 * 
 * @param word 
 */
export function transformDiacritic(word: string,) {

}

/**
 * Accents a word recessively, i.e. puts a 
 * @param word 
 */
/* export function accentRecessively(word: string): string {
    word = stripAccents(word);
    const syllables = splitIntoSyllables(word);

    //Accent the antepenult, or the first syllable if the word is short.
    if (syllables.length > 2) {

    }
} */

export function enforceGeneralAccentRules(word: string): string {

}