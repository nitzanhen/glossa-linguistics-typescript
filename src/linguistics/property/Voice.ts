import Tense from './Tense';
import { IllegalEnumValueError } from '../../error';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Voice {
  //------ Instances ------//

  static readonly ACTIVE = new Voice('active', 0);
  static readonly MIDDLE = new Voice('middle', 1);
  static readonly PASSIVE = new Voice('passive', 1);
  static readonly MEDIOPASSIVE = new Voice('mediopassive', 1);

  //------ Static Methods ------//

  static get values(): Voice[] {
    return [this.ACTIVE, this.MIDDLE, this.PASSIVE, this.MEDIOPASSIVE];
  }

  /**
   * Converts a string to its corresponding Voice instance.
   *
   * @param string the string to convert to Voice
   * @throws IllegalEnumValueError, if a string that has no corressonding Voice value was passed.
   * @returns the matching Voice
   */
  static fromString(string: string): Voice {
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

  /**
  * Returns the morphologically-sound voices of a tense.
  *
  * @param tense the tense whose voices are wanted.
  * @returns the morphologically possible voices of the given tense.
  */
  public voicesOf(tense: Tense): Voice[] {
    switch (tense) {
      case Tense.PRESENT:
      case Tense.IMPERFECT:
      case Tense.PERFECT:
      case Tense.PLUPERFECT:
      case Tense.FUTURE_PERFECT:
        return [Voice.ACTIVE, Voice.MEDIOPASSIVE];

      case Tense.FUTURE:
      case Tense.AORIST:
        return [Voice.ACTIVE, Voice.MIDDLE, Voice.PASSIVE];
    }

    throw new IllegalEnumValueError(
      'Impossible code reached; Tenses exhausted but no Tense matched.'
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
   * Called when converting the Voice value to a string using JSON.Stringify.
   * Compare to the fromString() method, which deserializes the object.
   */
  public toJSON() {
    return this.name;
  }
}

export default Voice;
