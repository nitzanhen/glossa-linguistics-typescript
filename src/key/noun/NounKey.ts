import Key from '../Key';
import Case from '../../linguistics/property/Case';
import Number from '../../linguistics/property/Number';

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