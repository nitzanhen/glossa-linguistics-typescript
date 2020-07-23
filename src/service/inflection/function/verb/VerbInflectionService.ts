import presentInflectionFunctions from './presentInflectionFunctions';
import futureInflectionFunctions from './futureInflectionFunctions';
import aoristInflectionFunctions from './aoristInflectionFunctions';
import perfectInflectionFunctions from './perfectInflectionFunctions';

/**
 * Contains helpful functions for inflecting verbs.
 * 
 * @since 18/05/20
 */
const VerbInflectionService = {
  ...presentInflectionFunctions,
  ...futureInflectionFunctions,
  ...aoristInflectionFunctions,
  ...perfectInflectionFunctions
};

export default VerbInflectionService;