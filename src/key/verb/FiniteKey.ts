import VerbKey from './VerbKey';
import PrincipalPart from '../../linguistics/property/PrincipalPart';
import Tense from '../../linguistics/property/Tense';
import Voice from '../../linguistics/property/Voice';
import Person from '../../linguistics/property/Person';
import Number from '../../linguistics/property/Number';

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
        public person: Person,
        public number: Number
    ) {
        super(principalPart, tense, voice);
    }
}

export default FiniteKey;