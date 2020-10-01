import { default as inflectionFunction } from '../../composition/composeAdjectiveInflectionFunction';
import standardInflectionFunctions from './standardInflectionFunctions';

/**
 * Inflections functions for standard adjectives with two suffixes, i.e. adjectives in
 * the first and second declension, with two suffix groups - for the masculine/feminine, and neuter.
 * This collection of inflection functions corresponds to the {@link {AdjectiveClassVariant}} value "standard".
 * 
 * @since 20/09/20
 */
const standardTwoSuffixesInflectionFunctions = {
  standard_two_suffixes: {
    masculine_feminine: standardInflectionFunctions.standard.masculine,
    neuter: standardInflectionFunctions.standard.neuter
  }
};

export default standardTwoSuffixesInflectionFunctions;