import { Number, Case, Declension, Gender } from '#/linguistics/property';
import { DeclensionVariant } from '#/linguistics/variant';
import { capitalize } from '#/util/stringUtils';

import InflectionServices from '../../inflection';

const inflectionService = InflectionServices["GreekNoun"];

/**
 * Service for adding nouns in the add word view.
 *
 * @since 21/4/20
 */
const AddNounService = {
    /**
     * Generates titles (overview) for a noun inflection block. Returns the titles as an tuple of strings, each representing a new line.
     * 
     * @param root the root noun to build the suggested inflection on top of.
     * @param number the number of the suggested block.
     * @returns a string,string tuple containing the base form, inflected by the given number, and the number's name.
     */
    generateBlockOverview(root: string, declension: Declension, gender: Gender, number: Number, variant?: DeclensionVariant): [string, string] {
        const baseForm = inflectionService.suggestInflection({
            baseInflection: root,
            declension,
            gender,
            case_: Case.NOMINATIVE,
            number,
            variant
        });
        return [baseForm, `(${number.name.capitalize()})`];
    },

    /**
     * Generates values for default suggestion blocks of a noun.
     * In practice, returns an array, each element of which is a string-Declension-Number tuple,
     * with value combinations for singular and plural inflections block suggestions.
     * Should be passed the root of the noun and the noun's declension.
     * 
     * The returned tuples contain the exact params that should be passed to the generateBlockOverview()
     * and generateInflectionBlock() functions to generate the overview text for the blocks.
     * 
     * @param root the noun's root.
     * @param declension the noun's declension.
     */
    generateDefaultBlockSuggestions(root: string, declension: Declension, gender: Gender, variant?: DeclensionVariant):
        [string, Declension, Gender, Number, DeclensionVariant | undefined][] {
        return [
            [root, declension, gender, Number.SINGULAR, variant],
            [root, declension, gender, Number.PLURAL, variant]
        ];
    },

    /**
     * Generates inflections for all five cases of the noun with the given declension and gender, 
     * in the given number. Returns the inflections as an array.
     * 
     * @param root the root of the noun to inflect upon.
     * @param declension the declension of the noun.
     * @param gender the gender of the noun.
     */
    generateInflectionBlock(root: string, declension: Declension, gender: Gender, number: Number, variant?: DeclensionVariant) {
        return Case.values
            .map(case_ => inflectionService.suggestInflection({
                baseInflection: root,
                declension,
                gender,
                case_,
                number,
                variant
            }));
    }
};

export default Object.freeze(AddNounService);
