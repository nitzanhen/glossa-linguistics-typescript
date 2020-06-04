import { IllegalEnumValueError } from '#/error';

/**
 * @todo documentation
 *
 * @since 24/04/2020
 */
class Gender {
    //------ Instances ------//

    static readonly MASCULINE = new Gender('masculine', 0);
    static readonly FEMININE = new Gender('feminine', 1);
    static readonly NEUTER = new Gender('neuter', 2);

    //------ Static Methods ------//

    static get values(): Gender[] {
        return [this.MASCULINE, this.FEMININE, this.NEUTER];
    }

    /**
     * Converts a string to its corresponding Gender instance.
     *
     * @param string the string to convert to Gender
     * @throws IllegalEnumValueError, if a string that has no corressonding Gender value was passed.
     * @returns the matching Gender
     */
    static fromString(string: string): Gender {
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
        /**
         * The name of the instance
         */
        public readonly name: string,

        /**
         * index of the instance
         */
        public readonly index: number
    ) { }

    //------ Methods ------//

    /**
     * Called when converting the Gender value to a string using JSON.Stringify.
     * Compare to the fromString() method, which deserializes the object.
     */
    public toJSON() {
        return this.name;
    }
}

export default Gender;