import Key from '../Key';
import GreekVerb from '../../linguistics/pos/GreekVerb';
import PrincipalPart from '../../linguistics/property/PrincipalPart';
import Tense from '../../linguistics/property/Tense';
import Voice from '../../linguistics/property/Voice';

/**
 * Base implementation of a filter key, for Greek verbs.
 * Puts a constraint on the Key values, such that it extending classes
 * must have the type extend VerbInflections
 *
 * @see Key
 * @since 12/04/20
 */
abstract class VerbKey extends Key {
    //------ Constructor ------//

    public constructor(
        public principalPart: PrincipalPart,
        public tense: Tense,
        public voice: Voice
    ) {
        super();
    }
}

export default VerbKey;