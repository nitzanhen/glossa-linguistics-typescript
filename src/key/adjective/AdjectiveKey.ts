import { Gender, Case, Number } from 'linguistics/property';

import { Key } from '..';
import AdjectiveKeyProperties from './AdjectiveKeyProperties';

/**
 * @since 03/08/20
 */
class AdjectiveKey extends Key implements AdjectiveKeyProperties {

    //------ Constructor ------//
    public constructor(
        public baseInflection: string,
        public gender: Gender,
        public case_: Case,
        public number: Number
    ) {
        super();
    }
}

export default AdjectiveKey;