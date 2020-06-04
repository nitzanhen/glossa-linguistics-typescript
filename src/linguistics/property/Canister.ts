import { IllegalEnumValueError } from '#/error';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Canister {
  //------ Instances ------//

  static readonly FIRST = new Canister('first', 0);
  static readonly SECOND = new Canister('second', 1);
  static readonly THIRD = new Canister('third', 2);
  static readonly FOURTH = new Canister('fourth', 3);
  static readonly FIFTH = new Canister('fifth', 4);
  static readonly SIXTH = new Canister('sixth', 5);

  //------ Static Methods ------//

  static get values(): Canister[] {
    return [this.FIRST, this.SECOND, this.THIRD, this.FOURTH, this.FIFTH, this.SIXTH];
  }

  /**
   * Converts a string to its corresponding Canister instance.
   *
   * @param string the string to convert to Canister
   * @throws IllegalEnumValueError, if a string that has no corressonding Canister value was passed.
   * @returns the matching Canister
   */
  static fromString(string: string): Canister {
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
   * Called when converting the Canister value to a string using JSON.Stringify.
   * Compare to the fromString() method, which deserializes the object.
   */
  public toJSON() {
    return this.name;
  }
}

export default Canister;