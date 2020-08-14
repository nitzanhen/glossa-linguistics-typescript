import { PrincipalPart, Tense, Voice } from 'linguistics/property';

import Key from '../Key';
import VerbKeyProperties from './VerbKeyProperties';

/**
 * Base implementation of a filter key, for Greek verbs.
 * Puts a constraint on the Key values, such that it extending classes
 * must have the type extend VerbInflections
 *
 * @see Key
 * @since 12/04/20
 */
abstract class VerbKey extends Key implements VerbKeyProperties {
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
