import { IllegalEnumValueError } from '../../error';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Declension {
    //------ Instances ------//

    static readonly FIRST_DECLENSION = new Declension('first_declension', 0);
    static readonly SECOND_DECLENSION = new Declension('second_declension', 1);
    static readonly THIRD_DECLENSION = new Declension('third_declension', 2);

    //------ Static Methods ------//

    static get values(): Declension[] {
        return [this.FIRST_DECLENSION, this.SECOND_DECLENSION, this.THIRD_DECLENSION];
    }

    /**
     * Converts a string to its corresponding Declension instance.
     *
     * @param string the string to convert to Declension
     * @throws IllegalEnumValueError, if a string that has no corressonding Declension value was passed.
     * @returns the matching Declension
     */
    static fromString(string: string): Declension {
        // Works assuming the name property of the enum is identical to the variable's name (case insensitive).
        const value = (this as any)[string.toUpperCase()];
        if (value) {
            return value;
        }

        throw new IllegalEnumValueError(
            `Illegal argument passed to fromString(): ${string} does not correspond to any instance of the enum ${
            (this as any).prototype.constructor.name
            }`
        );
    }

    //------ Constructor------//

    private constructor(
        /** name of the instance */
        public readonly name: string,

        /** index of the instance */
        public readonly index: number
    ) { }

    //------ Methods ------//

    /**
     * Called when converting the Declension value to a string using JSON.Stringify.
     * Compare to the fromString() method, which deserializes the object.
     */
    public toJSON() {
        return this.name;
    }
}

export default Declension;