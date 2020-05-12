import HashServices from '../service/hash';
import { getClassName } from '../util/typeUtils';

/**
 * Common ancestor to all Key instances.
 * Keys as a concept bear a close relation to Hash and Hashing, and generally should be implemented
 * such that two Key instances of the same class are equal if and only if their hash values are strictly equal (I.E as an homomorphism).
 * For an implementation of key equality as a relation, see the equals() method.
 *
 * Every subclass of the Key class should also implement from another interface, either a KeyProperties-extending property interface, or a FilterKey type
 * of such an interface.
 * 
 * See the readme file in this directory for more information.
 * @since 12/04/20
 */
abstract class Key {

    //------ Constructor ------//

    constructor() {
    }

    //------ Methods ------//

    public hash(): string {
        return HashServices[getClassName(this)].hash(this);
    }

    /**
     * Checks whether two keys are equal, using the hash relation. 
     * 
     * @param other the key to test equality against.
     * @returns true if the keys are equal, and false otherwise. 
     */
    public equals(other: Key): boolean {
        return getClassName(this) === getClassName(other)
            && this.hash() === other.hash();
    }
}

export default Key;
