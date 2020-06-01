import { Case, Number, Declension, Gender } from '../../../../linguistics/property';
import { NotImplementedError } from '../../../../error';
import ExtendedNounProperties from '../../../../key/NounKey/ExtendedNounProperties';
import nounInflectionSuffixes from './NounInflectionSuffixes';

/**
 * Collection of functions dealing with Greek noun inflections.
 * 
 * @since 04/05/20
 */
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
     * @throws NotImplementedError if an attempt to form a third-declension noun is made.
     * 
     * @todo support for third declension, contract verbs, accenting.
     */
    suggestInflection(properties: ExtendedNounProperties): string {
        if (!ExtendedNounProperties.validateVariant(properties)) {
            throw new RangeError("variant argument does not match the other properties' constraints: " + properties);
        }

        const { baseInflection: root, gender, declension, variant, case_, number, } = properties;

        //Third declension is currently not supported
        if (declension === Declension.THIRD_DECLENSION) {
            throw new NotImplementedError('Inflection suggestions for third-declension nouns are not yet supported');
        }

        //We're good to go.
        const suffixes = nounInflectionSuffixes as any;

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


