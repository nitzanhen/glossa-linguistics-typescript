import { Case, Number } from 'linguistics/property';

import Key from '../Key';
import NounKeyProperties from './NounKeyProperties';

/**
 * @since 27/04/20
 */
class NounKey extends Key implements NounKeyProperties {

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