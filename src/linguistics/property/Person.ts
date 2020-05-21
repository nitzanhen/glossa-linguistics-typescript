import { IllegalEnumValueError } from '../../error';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Person {
  //------ Instances ------//

  static readonly FIRST_PERSON = new Person('first_person', 0);
  static readonly SECOND_PERSON = new Person('second_person', 1);
  static readonly THIRD_PERSON = new Person('third_person', 2);

  //------ Static Methods ------//

  static get values(): Person[] {
    return [this.FIRST_PERSON, this.SECOND_PERSON, this.THIRD_PERSON];
  }

  /**
   * Converts a string to its corresponding Person instance.
   *
   * @param string the string to convert to Person
   * @throws IllegalEnumValueError, if a string that has no corressonding Person value was passed.
   * @returns the matching Person
   */
  static fromString(string: string): Person {
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
   * Called when converting the Person value to a string using JSON.Stringify.
   * Compare to the fromString() method, which deserializes the object.
   */
  public toJSON() {
    return this.name;
  }
}

export default Person;