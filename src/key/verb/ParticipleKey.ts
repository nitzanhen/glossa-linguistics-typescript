import VerbKey from './VerbKey';
import PrincipalPart from '../../linguistics/property/PrincipalPart';
import Tense from '../../linguistics/property/Tense';
import Voice from '../../linguistics/property/Voice';
import Case from '../../linguistics/property/Case';
import Number from '../../linguistics/property/Number';

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