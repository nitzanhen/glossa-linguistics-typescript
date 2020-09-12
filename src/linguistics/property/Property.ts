import { getClassName } from '../../util/typeUtils';

/**
 * The Proprety class is an abstraction of the different Grammatical properties (found under this directory).
 * Programmatic wise, these properties are very similar in their character, and the difference between them is almost
 * completely grammar wise. 
 * Separating the different properties into different classes allow to make a clear distinction (in the code) between
 * different grammatical properties.
 *
 * Each subclass of the Property class should construct its instances as static variables (being an enum), and implement
 * a static values() getter accordingly.
 * 
 * @since 20/06/2020
 */
abstract class Property {

    /**
     * Static Property functino to compare two Property instances (of the exact same type).
     * Comparison is done by property index.
     * 
     * Note that p1 and p2 must both be of the same subclass of Property.
     * @throws Type error if p1 and p2 are not of the same class, or that class is not a subclass of Property.
     * 
     * @param p1 the first instance.
     * @param p2 the second instance.
     * @returns a value indicating the comparison between the two instances; the value will be negative if p1 should come before p2,
     * positive if p2 should come before p1, and 0 if they're equivalent (and since a Property class has a limited number of instances - they're identical).
     */
    static compare<P extends Property>(p1: P, p2: P): number {
        const c1 = getClassName(p1);
        const c2 = getClassName(p2);

        if (!(p1 instanceof Property)) {
            throw new TypeError(`Both arguments of Property#compare must be instances of Property or one of its subclasses. Received p1 with class name ${c1}`)
        }
        if (!(p2 instanceof Property)) {
            throw new TypeError(`Both arguments of Property#compare must be instances of Property or one of its subclasses. Received p2 with class name ${c2}`)
        }
        if (c1 !== c2) {
            throw new TypeError('Both arguments of the compare function must be instances of the same class')
        }

        return p1.index - p2.index;
    }

    /**
     * Converts a string to its corresponding instance of the Property subclass.
     *
     * @param string the string to convert to the corresponding Property subclass's instance.
     * @throws RangeError, if a string that has no corresponding instance in the given Property's subclass was passed.
     * @returns the matching Property
     */
    static fromString(string: string): Property {
        // Works assuming the name property of the enum is identical to the variable's name (case insensitive).
        const value = (this as any)[string.toUpperCase()];
        if (value) {
            return value;
        }

        throw new RangeError(
            `Illegal argument passed to fromString(): ${string} does not correspond to any instance of the enum ${getClassName(this)
            }`
        );
    }

    //------ Constructor------//

    protected constructor(
        /** name of the instance */
        public readonly name: string,

        /** index of the instance */
        public readonly index: number
    ) { }

    //------ Methods ------//

    /**
     * Called when converting the Property value to a string using JSON.Stringify.
     * Compare to the fromString() method, which deserializes the object.
     */
    public toJSON() {
        return this.name;
    }
}

export default Property;