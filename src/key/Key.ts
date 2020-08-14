import { getClassName } from 'util/typeUtils';
import HashServices from 'service/hash';

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

    /**
     * Constructor for the Key class. Can accept any object as argument,
     * however should generally be passed nothing. Filter Key subclasses should pass their own
     * fields in the object, enforced by the local constructor to only contain the props contained in the corresponding
     * property interface wrapped by the FilterKey type. 
     * 
     * For example, InfinitiveKey's constructor should pass nothing to this method, but InfinitiveFilterKey's method
     * should pass in properties of the FilterKey<InfinitiveKeyProperties> type.
     * 
     * @param args: the object of arguments to pass into the constructor. In practice, assigns all properties of the args object
     * to this.
     */
    constructor(args?: object) {
        if (args) {
            Object.assign(this, args);
        }
    }

    //------ Methods ------//

    public hash(): string {
        return (<any>HashServices)[getClassName(this)].hash(this);
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
