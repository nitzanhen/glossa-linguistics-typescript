import presentInflectionFunctions from './presentInflectionFunctions';
import futureInflectionFunctions from './futureInflectionFunctions';
import aoristInflectionFunctions from './aoristInflectionFunctions';
import perfectInflectionFunctions from './perfectInflectionFunctions';
import { VerbProperties } from 'key';

const inflectionFunctions = {
  ...presentInflectionFunctions,
  ...futureInflectionFunctions,
  ...aoristInflectionFunctions,
  ...perfectInflectionFunctions
}

function getInflectionFunction(properties: VerbProperties) {
  
}

/**
 * Contains helpful functions for inflecting verbs.
 * 
 * @since 18/05/20
 */
const VerbInflectionService = {
  suggestInflection(properties: VerbProperties): string {
    const { principalPart, tense, voice } = properties;
    (inflectionFunctions as any)[tense.name]
  }
};

export default VerbInflectionService;