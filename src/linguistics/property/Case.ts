import { IllegalEnumValueError } from '../../error';

/**
 * @todo documentation
 *
 * @since 24/04/2020
 */
class Case {
    //------ Instances ------//

    static readonly NOMINATIVE = new Case('nominative', 0);
    static readonly GENITIVE = new Case('genitive', 1);
    static readonly DATIVE = new Case('dative', 2);
    static readonly ACCUSATIVE = new Case('accusative', 3);
    static readonly VOCATIVE = new Case('vocative', 4);

    //------ Static Methods ------//

    static get values(): Case[] {
        return [this.NOMINATIVE, this.GENITIVE, this.DATIVE, this.ACCUSATIVE, this.VOCATIVE];
    }

    /**
     * Converts a string to its corresponding Case instance.
     *
     * @param string the string to convert to Case
     * @throws IllegalEnumValueError, if a string that has no corressonding Case value was passed.
     * @returns the matching Case
     */
    static fromString(string: string): Case {
        // Works assuming the name property of the enum is identical to the variable's name.
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

        public readonly index: number
    ) { }

    //------ Methods ------//

    /**
     * Called when converting the Case value to a string using JSON.Stringify.
     * Compare to the fromString() method, which deserializes the object.
     */
    public toJSON() {
        return this.name;
    }
}

export default Case;
