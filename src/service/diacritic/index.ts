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
 * If trying to add a circumflex to a vowel that already has a macron, the macron will be removed.
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

    let syllable = syllables[syllableIndex];
    const vowelPart = vowelPartOf(syllable);
    /** @todo currently, adds diacritic to second letter always, 
     * in the case of a diphthong. Logic should be added for a case where  
     * accenting the first letter is more appropriate. */
    const accentedSyllable = syllable.replace(vowelPart, addDiacriticVowel(vowelPart, diacritic));
    syllables[syllableIndex] = accentedSyllable;
    return syllables.join("");
}

/**
 * Adds the given diacritic to the given vowel.
 * If trying to add a circumflex to a vowel that already has a macron, the macron will be removed.
 * 
 * @param vowel the vowel to be appended the diacritic.
 * @param diacritic the diacritic to be added.
 * 
 * @returns the accented vowel.
 */
export function addDiacriticVowel(vowel: string, diacritic: Diacritic): string {
    if (diacritic === "circumflex" && containsDiacritic(vowel, "macron")) {
        //Remove the macron to avoid redundancy.
        vowel = stripDiacritics(vowel, { blacklist: ["macron"] });
    }
    return orderDiacritics(vowel + diacritics[diacritic]);
}


export interface DiacriticTransformOptions {
    originIndex: number;
    originDiacritic?: Diacritic,
    destinationIndex: number,
    destinationDiacritic: Diacritic;
}

/**
 * Transforms a diacritic. Can be used to add, move or remove diacritics from a word.
 * If trying to add a circumflex to a vowel that already has a macron, the macron will be removed.
 * 
 * @param word the word perform the operation on.
 * @param originIndex the index of the syllable whose diacritic is being transformed
 * @param originDiacritic the diacritic to be transformed; useful when a syllable has multiple
 * diacritics. If originDiacritic is not specified, all *accents* will be omitted.
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
    const maxValidIndex = syllables.length - 1;
    if (originIndex < 0 || originIndex > maxValidIndex) {
        throw new RangeError(`originIndex argument exceeds syllable bounds; word ${word} has ${syllables.length} syllables, so the maximum valid index is ${maxValidIndex}, whereas originIndex is ${originIndex}`);
    }
    else if (destinationIndex < 0 || destinationIndex > maxValidIndex) {
        throw new RangeError(`destinationIndex argument exceeds syllable bounds; word ${word} has ${syllables.length} syllables, so the maximum valid index is ${maxValidIndex}, whereas destinationIndex is ${originIndex}`);
    }
    else {
        let originSyllable = syllables[originIndex];

        originSyllable = originDiacritic
            ? stripDiacritics(originSyllable, { blacklist: [originDiacritic] })
            : stripAccents(originSyllable);

        syllables[originIndex] = originSyllable;
        word = syllables.join("");


        word = addDiacritic(word, destinationIndex, destinationDiacritic);

        return word;
    }
}

/**
 * Enforces the two general rules of accenting Greek word:
 * 1. The acute can stay on the antepenult only if the ultima is short,
 * Otherwise, it moves to the penult.
 * 2. If the penult is naturally long and the ultima is short, 
 * an accent on the penult will be transformed into a circumflex; 
 * otherwise, it will be an acute.
 * Since an ultima ending with -αι or -οι counts as short everywhere except for
 * Greek verbs in the optative, the default behaviour of this function is to treat
 * such ultimas as short, but this can be reconfigured through the shortUltimateAiOi parameter.
 * 
 * @param word the word to check
 * @returns the word with accenting corrected, if needed.
 */
export function enforceGeneralAccentRules(word: string, shortUltimateAiOi: boolean = true): string {
    const syllables = splitIntoSyllables(word);
    const ultima = syllables[syllables.length - 1];

    const antepenultIndex = syllables.length - 3;
    const penultIndex = syllables.length - 2;

    const isUltimaShort = syllableType(word, syllables.length - 1) === 'short'
        || (shortUltimateAiOi && stripAccents(ultima).endsWith("αι"))
        || (shortUltimateAiOi && stripAccents(ultima).endsWith("οι"));

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

    if (syllables.length > 1
        && isUltimaShort
        && syllableType(word, penultIndex) === "longByNature"
        && containsDiacritic(syllables[penultIndex], "acute")
    ) {
        word = transformDiacritic(word, {
            originIndex: penultIndex,
            originDiacritic: "acute",
            destinationIndex: penultIndex,
            destinationDiacritic: "circumflex"
        });
    }

    return word;
}

/**
 * Accents a Green word recessively, i.e. puts the accent as far back
 * as possible.
 * In practice, this function puts an acute on the antepenult (or the first syllable,
 * if there's less than three syllables), and then calls enforceGeneralAccentRules() to
 * make sure the accenting is valid (and fix it if it isn't).
 * 
 * @param word the word to accent recessively.
 * @param clearAccents whether to clear existing accents before accenting. Defaults to true. 
 * @returns the word, accented recessively.
 */
export function accentRecessively(word: string, clearAccents: boolean = true): string {
    if (clearAccents) {
        word = stripAccents(word);
    }

    const syllables = splitIntoSyllables(word);
    const syllableToAccentIndex = Math.max(syllables.length - 3, 0);

    word = addDiacritic(word, syllableToAccentIndex, "acute");
    word = enforceGeneralAccentRules(word);

    return word;
}