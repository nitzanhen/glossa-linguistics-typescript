import HashServices from '../service/hash';
import { getClassName } from '../util/classUtils';

/**
 * Common ancestor to all Key instances.
 * Keys as a concept bear a close relation to Hash and Hashing, and generally should be implemented
 * such that two Key instances of the same class are equal iff their hash values are strictly equal.
 * For an implementation of key equality as a relation, see the equals() method.
 *
 * @since 12/04/20
 */
abstract class Key {

    //------ Constructor ------//

    constructor() { }

    //------ Getters ------//

    public get hash() {
        return HashServices[getClassName(this)].hash(this);
    }

    //------ Methods ------//

    /**
     * Checks whether two keys are equal.
     * In practice, checks whether they're instances of the same class, and their hash
     * values match.
     * 
     * @param other the key to test equality against.
     * @returns true if the keys are equal, and false otherwise. 
     */
    public equals(other: Key) {
        return getClassName(this) === getClassName(other)
            && this.hash === other.hash;
    }
}

export default Key;
