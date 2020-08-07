import { stripAccents, isAccented, Diacritic } from "#/linguistics/alphabet/diacritics";
import { vowelPartOf, splitIntoSyllables, ultimaIndex } from '#/linguistics/alphabet/syllables';

import { addDiacriticVowel, accentRecessively, addDiacritic } from "../../diacritic";
import { suffix as suffixFunction } from './suffixer';

/**
 * Map of contraction combinations, used in contractVowels().
 * Each combination of two (valid) indices gives a contracted output,
 * e.g. contractions['α']['ε'] gives ᾱ'.
 */
const contractions: Record<string, Record<string, string>> = {
    'α': {
        'ε': 'ᾱ',
        'ει': 'ᾱͅ',
        'η': 'ᾱ',
        'ῃ': 'ᾱͅ',
        'ο': 'ω',
        'οι': 'ῳ',
        'ου': 'ω',
        'ω': 'ω',
    },
    'ε': {
        'ε': 'ει',
        'ει': 'ει',
        'η': 'η',
        'ῃ': 'ῃ',
        'ο': 'ου',
        'οι': 'οι',
        'ου': 'ου',
        'ω': 'ω',
    },
    'ο': {
        'ε': 'ου',
        'ει': 'οι',
        'η': 'ω',
        'ῃ': 'οι',
        'ο': 'ου',
        'οι': 'οι',
        'ου': 'ου',
        'ω': 'ω',
    }
};

const possibleContractionPrefixes = Object.keys(contractions);
const possibleContractionSuffixes = Object.keys(contractions['α']);

/**
 * Contracts the two vowels, according to the rules of vowel contraction.
 * 
 * This action also transforms the accent accordingly:
 * if vowel1 is accented, its accent will be transformed into a circumflex on the resulting vowel.
 * If vowel2 is accented, its accent will be carried on, and appear as an acute on the resulting vowel.
 * Otherwise, the result will stay unaccented.
 * This function assumes valid accenting, that is, vowel1 and vowel2 cannot both be accented at the same time.
 *  
 * @param vowel1 The first vowel. Must be 'α', 'ε', 'ο', or an accented variant of one of them.
 * @param vowel2 The second vowel.
 * @returns the contracted result.
 * 
 * @throws RangeError if 
 * - vowel1 is not α, ε, ο, or an accented variant.
 * or
 * - vowel2 is not ε, ει, η, ῃ, ο, οι, ου, ω, or an accented variant.
 */
export function contractVowels(vowel1: string, vowel2: string): string {
    if (!possibleContractionPrefixes.includes(stripAccents(vowel1, true))) {
        //Can't (and shouldn't) contract!
        throw new RangeError(`Can't contract! vowel1 must be α, ε, ο, or an accented variant. Instead received: ${vowel1}`);
    }
    else if (!possibleContractionSuffixes.includes(stripAccents(vowel2, true))) {
        //Can't (and shouldn't) contract!
        throw new RangeError(`Can't contract! vowel2 must be ε, ει, η, ῃ, ο, οι, ου, ω, or an accented variant. Instead received: ${vowel2}`);
    }

    let accent: Diacritic | null = isAccented(vowel1)
        ? 'circumflex'
        : isAccented(vowel2)
            ? 'acute'
            : null;


    let contracted = contractions[stripAccents(vowel1, true)][stripAccents(vowel2, true)];
    if (accent) {
        contracted = addDiacriticVowel(contracted, accent);
    }

    return contracted;
}

export type ContractAccentingOptions = "recessive" | number | null;

/**
 * Adds the given Greek suffix to the base form, performing contraction between the two.
 * By default, the function automatically accents the form recessively.
 * 
 * @param base the base form.
 * @param suffix the suffix to add to it.
 * @param accenting whether to automatically accent or not. 
 * If it's a number, it will be regarded as the syllable to accent (negative values will be treated like Python's negative index access),
 * **before contracting**, counting backwards from the end of the simple concatanation of the base and suffix.
 * If it's a truthy value, accent will be applied recessively. Defaults to recessive accenting. 
 * @returns the contracted form, or base if suffix is an empty string.
 * @throws RangeError if:
 * - vowel1 is not α, ε, ο, or an accented variant.
 * or
 * - vowel2 is not ε, ει, η, ῃ, ο, οι, ου, ω, or an accented variant.  
 */
export function contract(base: string, suffix: string, accenting: ContractAccentingOptions = "recessive"): string {
    if (suffix.length === 0) {
        return base;
    }

    /*
     * In the case of recessive accenting a contract verb, the (recessive) accenting 
     * needs to be applied *before* contracting the base and the suffix. Otherwise,
     * if accenting is for example applied after contraction (as would be more convenient),
     * mismatches can occur, notably in the case of a 3+ syllable work with short ultima.
     * 
     * This, if accenting recessively, the "raw" sum of the base and suffix should be recessively
     * accented, then split up back into base and suffix, with the recessive accent applied.
     * Then, contraction can proceed as usual.
     */
    if (accenting !== null && accenting !== undefined) {
        let suffixed = base + suffix;
        suffixed = accenting === "recessive"
            ? accentRecessively(suffixed)
            : addDiacritic(suffixed, accenting, "acute");

        //Should normally be equal to base.length; however in extreme cases the addition of the accent may lengthen the base.
        const sliceIndex = suffixed.length - suffix.length;
        [base, suffix] = [suffixed.slice(0, sliceIndex), suffixed.slice(sliceIndex)];
    }

    const baseSyllables = splitIntoSyllables(base);

    const contractionPrefix = vowelPartOf(baseSyllables[ultimaIndex(baseSyllables.length)]);

    const isSuffixDiphthong = suffix.length > 1
        //If the first two letters of the suffix are a possible contraction suffix, take them as contractions suffix.
        //Otherwise, take only the first.  
        && possibleContractionSuffixes.includes(
            stripAccents(suffix.slice(0, 2), true)
        );

    const contractionSuffix = isSuffixDiphthong
        ? suffix.slice(0, 2)
        : suffix[0];

    const contracted = contractVowels(contractionPrefix, contractionSuffix);

    return base.slice(0, base.length - contractionPrefix.length) + contracted + suffix.slice(isSuffixDiphthong ? 2 : 1);
}

/**
 * Helper for creating functions that add a given suffix to contract verb root;
 * useful for inflection suffix trees of contract verb.
 * 
 * @see VerbInflectionService
 * 
 * @param suffix the suffix that the returned function should append.
 * @param fallback a function to call if contracting fails (throws an error). Defaults to the suffix function.
 * 
 * @returns a *function* which receives a string and returns it appended by the given suffix.
 */
function contractor(suffix: string, accenting: ContractAccentingOptions = "recessive", fallback: (base: string, suffix: string) => string = suffixFunction) {
    return function (base: string): string {
        try {
            return contract(base, suffix, accenting);
        }
        catch (error) {
            if (error instanceof RangeError) {
                return fallback(base, suffix);
            }
            throw error;
        }
    };
}

export default contractor;