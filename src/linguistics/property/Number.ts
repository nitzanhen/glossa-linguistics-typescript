import { IllegalEnumValueError } from '#/error';

/**
 * @todo documentation
 *
 * @since 24/04/2020
 */
class Number {
  //------ Instances ------//

  static readonly SINGULAR = new Number('singular', 0);
  static readonly PLURAL = new Number('plural', 1);

  //------ Static Methods ------//

  static get values(): Number[] {
    return [this.SINGULAR, this.PLURAL];
  }

  /**
   * Converts a string to its corresponding Number instance.
   *
   * @param string the string to convert to Number
   * @throws IllegalEnumValueError, if a string that has no corressonding Number value was passed.
   * @returns the matching Number
   */
  static fromString(string: string): Number {
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
    /** The name of the instance */
    public readonly name: string,

    /** Index of the instance */
    public readonly index: number
  ) { }

  //------ Methods ------//

  /**
   * Called when converting the Number value to a string using JSON.Stringify.
   * Compare to the fromString() method, which deserializes the object.
   */
  public toJSON() {
    return this.name;
  }
}

export default Number;
