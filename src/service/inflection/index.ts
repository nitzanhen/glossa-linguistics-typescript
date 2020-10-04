import NounInflectionService from './function/noun/NounInflectionService';
import VerbInflectionService from './function/verb/VerbInflectionService';
import AdjectiveInflectionService from './function/adjective/AdjectiveInflectionServer';

/**
 * A collection of services that provides inflection functionality for different parts of speech.
 * 
 * @since 05/05/20 
 */
const InflectionServices = {
    GreekNoun: NounInflectionService,
    GreekVerb: VerbInflectionService,
    GreekAdjective: AdjectiveInflectionService
};

export default InflectionServices;