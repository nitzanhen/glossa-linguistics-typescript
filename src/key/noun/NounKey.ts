import Key from '../../key2/Key';
import { Case, Number } from '../../linguistics/property';

/**
 * @since 27/04/20
 */
class NounKey extends Key {

    //------ Constrcutor ------//

    public constructor(
        public baseInflection: string,
        public case_: Case,
        public number: Number
    ) {
        super();
    }
}

export default NounKey;