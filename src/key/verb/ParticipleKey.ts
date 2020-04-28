import VerbKey from './VerbKey';
import { Tense, Voice, Case, Number, PrincipalPart } from '../../linguistics/property';


/**
 * Key implementation for Greek participles
 * 
 * @since 27/04/20
 */
class ParticipleKey extends VerbKey {
    //------ Constructor ------//

    public constructor(
        principalPart: PrincipalPart,
        tense: Tense,
        voice: Voice,
        public case_: Case,
        public number: Number
    ) {
        super(principalPart, tense, voice);
    }
}

export default ParticipleKey;