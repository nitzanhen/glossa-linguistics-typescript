import { InvalidLanguageError } from '#/error';
import { isGreekString, isConsonant, Vowel, isVowel } from '#/linguistics/alphabet/letters';
import { splitIntoSyllables } from '../../linguistics/alphabet/syllables';
import { stripDiacritics } from '../../linguistics/alphabet/diacritics';
import '#/global/String';

/**
 * The augment() function receives a verb form and augments it.
 * 
 * @param verb the verb form to augment
 * @return the augmented form
 * @throws InvalidLanguageError if a non-Greek text is passed as the verb argument.
 */
function augment(verb: string): string {
    if (!isGreekString(verb)) {
        throw new InvalidLanguageError(`Non-Greek text passed to the augment() function: ${verb}`);
    }

    const firstSyllable = splitIntoSyllables(verb)[0];

    const firstLetter = firstSyllable[0];
    if (isConsonant(firstLetter)) {
        //Syllabic augment
        if (stripDiacritics(firstLetter) === 'ρ') {
            //A rho is doubled when augmented; replace it with two rhos, 
            //prefixed by the syllabic augment.
            return 'ἐρρ' + verb.slice(1);
        }
        else {
            //Standard syllabic augment
            return 'ἐ' + verb;
        }
    }
    else {
        //Temporal augment - replace the first syllable by its lengthened counterpart
        const vowelGroup = firstSyllable.trim(letter => !isVowel(letter));

        const firstSyllableAugmented = firstSyllable
        .replace(vowelGroup, temporalAugmentOf(vowelGroup))
      
        //Replace the first syllable by the augmented variant.
        return firstSyllableAugmented + verb.slice(firstSyllable.length)
    }
}

/**
 * @returns the temporal augment prefix of a vowel.
 * @param vowel the vowel whose augmented prefix to get.
 * Expects vowel to be *entirely in the lower case*
 */
function temporalAugmentOf(vowel: string): string {
    const decomposed = vowel.normalize("NFD");
    let bare = stripDiacritics(decomposed, { retain: ['iota_subscript'] });

    const lengthened = (() => {
        switch (bare) {
            case 'α':
            case 'ε':
                return 'η';
            case 'ι':
                return 'ῑ';
            case 'ο':
                return 'ω';
            case 'υ':
                return 'ῡ';
            case 'αι':
            case 'ει':
            case 'ᾳ':
                return 'ῃ';
            case 'αυ':
            case 'ευ':
                return 'ηυ';
            case 'οι':
                return 'ῳ';
            default:
                return bare;
        }
    })();

    return decomposed.replace(bare, lengthened).normalize("NFC");
}

export default augment;