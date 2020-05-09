import { Case, Number, Declension, Gender } from '../../../linguistics/property';
import { NotImplementedError } from '../../../error';
import { NounKey } from '../../../key';

/**
 * Collection of functions dealing with Greek noun inflections.
 * 
 * @since 04/05/20
 */
/**
 * Retrieves the root of a Greek noun, for inflecting nouns.
 * Expects to receive the nominative singular form of the noun.
 * 
 * @param nomSg the nominative singular form of the noun
 * @returns the root of the noun, as a string.
 */
export function getRootOf(): string {
    throw new NotImplementedError();
}

export const inflection_suffixes = {
    first_declension: {
        feminine: {
            alpha_long: {
                nominative: { singular: "ᾱ", plural: "αι" },
                genitive: { singular: "ᾱς", plural: "ων" },
                dative: { singular: "ᾳ", plural: "αις" },
                accusative: { singular: "ᾱν", plural: "ᾱς" },
                vocative: { singular: "ᾱ", plural: "αι" }
            },
            alpha_short: {
                nominative: { singular: "α", plural: "αι" },
                genitive: { singular: "ᾱς", plural: "ων" },
                dative: { singular: "ᾳ", plural: "αις" },
                accusative: { singular: "αν", plural: "ᾱς" },
                vocative: { singular: "α", plural: "αι" }
            },
            eta: {
                nominative: { singular: "η", plural: "αι" },
                genitive: { singular: "ης", plural: "ων" },
                dative: { singular: "ῃ", plural: "αις" },
                accusative: { singular: "ην", plural: "ᾱς" },
                vocative: { singular: "η", plural: "αι" }
            }
        },
        masculine: {
            alpha: {
                nominative: { singular: "ᾱς", plural: "αι" },
                genitive: { singular: "ου", plural: "ων" },
                dative: { singular: "ᾳ", plural: "αις" },
                accusative: { singular: "ᾱν", plural: "ᾱς" },
                vocative: { singular: "ᾱ", plural: "αι" }
            },
            eta: {
                nominative: { singular: "ης", plural: "αι" },
                genitive: { singular: "ου", plural: "ων" },
                dative: { singular: "ῃ", plural: "αις" },
                accusative: { singular: "ην", plural: "ᾱς" },
                vocative: { singular: "α", plural: "αι" }
            }
        }
    },
    second_declension: {
        masculine: {
            nominative: { singular: "ος", plural: "οι" },
            genitive: { singular: "ου", plural: "ων" },
            dative: { singular: "ῳ", plural: "οις" },
            accusative: { singular: "ον", plural: "ους" },
            vocative: { singular: "ε", plural: "οι" }
        },
        neuter: {
            nominative: { singular: "ον", plural: "α" },
            genitive: { singular: "ου", plural: "ων" },
            dative: { singular: "ῳ", plural: "οις" },
            accusative: { singular: "ον", plural: "α" },
            vocative: { singular: "ον", plural: "α" }
        }
    },
    third_declension: null /** @todo */
};

export type FirstDeclensionVariant = "alpha" | "alpha_long" | "alpha_short" | "eta";
const NounInflectionService = {
    /**
     * Inflects the given root, according to the given parameters.
     * Note that the inflection is to be treated as a suggestion, and in reality
     * many irregularities or minor rules may have the actual form different than the
     * suggested inflection returned by this function.
     * 
     * @param key the key, I.E the collection of properties, to inflect by.
     * @param declension the noun's declension.
     * @returns the inflected form.
     * 
     * @throws RangeError if the variant does not match the other arguments.
     * @throws NotImplementedError if an attempt to form a third-declension nouun is made.
     * 
     * @todo support for third declension, contract verbs, accenting.
     */
    suggestInflection(key: NounKey, declension: Declension, gender: Gender, variant?: FirstDeclensionVariant): string {
        //Ensuring variant is a safe argument 
        if (declension === Declension.FIRST_DECLENSION) {
            if (!variant) {
                throw new RangeError("For first-declension nouns, the inflection variant is required.");
            }
            else if (gender === Gender.MASCULINE && !["alpha", "eta"].includes(variant)) {
                throw new RangeError("First-declension masculine nouns must be of either the alpha or eta variant.");
            }
            else if (gender === Gender.FEMININE && variant === "alpha") {
                throw new RangeError("First-declension feminine nouns must be one of the alpha-long, alpha-short, or eta variants.");
            }
        }
        //Third declension is currently not supported
        else if (declension === Declension.THIRD_DECLENSION) {
            throw new NotImplementedError('Inflection suggestions for third-declension nouns are not yet supported');
        }
        //We're good to go.
        const suffixes = inflection_suffixes as any;
        const { baseInflection: root, case_, number } = key;
        const suffix = declension === Declension.FIRST_DECLENSION
            ? suffixes[declension.name][gender.name]?.[variant!!][case_.name][number.name]
            : suffixes[declension.name][gender.name]?.[case_.name][number.name];

        if (!suffix) {
            throw new RangeError("No such suffix; invalid set of arguments passed: "
                + `${declension},${gender},${case_},${number},variant: ${variant}`);
        }
        else {
            return root + suffix;
        }
    }
};

export default Object.freeze(NounInflectionService);


