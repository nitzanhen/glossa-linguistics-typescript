import { Tense, Voice, Person, Number, PrincipalPart, Mood } from 'linguistics/property';

import VerbKey from '../VerbKey';
import FiniteKeyProperties from './FiniteKeyProperties';

/**
 * Key for Greek finite forms of verbs
 * 
 * @since 27/04/20
 */
class FiniteKey extends VerbKey implements FiniteKeyProperties {
    //------ Constructor ------//

    public constructor(
        principalPart: PrincipalPart,
        tense: Tense,
        voice: Voice,
        public mood: Mood,
        public person: Person,
        public number: Number
    ) {
        super(principalPart, tense, voice);
    }
}

export default FiniteKey;