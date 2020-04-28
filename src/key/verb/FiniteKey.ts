import VerbKey from './VerbKey';
import { Tense, Voice, Person, Number, PrincipalPart, Mood } from '../../linguistics/property';

/**
 * Key for Greek finite forms of verbs
 * 
 * @since 27/04/20
 */
class FiniteKey extends VerbKey {
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