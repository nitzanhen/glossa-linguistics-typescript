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
class Property {

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
            `Illegal argument passed to fromString(): ${string} does not correspond to any instance of the enum ${
            getClassName(this)
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