import { IllegalEnumValueError } from '#/error';

import Tense from './Tense';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Mood {
  //------ Instances ------//

  static readonly INDICATIVE = new Mood('indicative', 0);
  static readonly SUBJUNCTIVE = new Mood('subjunctive', 1);
  static readonly OPTATIVE = new Mood('optative', 2);
  static readonly IMPERATIVE = new Mood('imperative', 3);

  //------ Static Methods ------//

  static get values(): Mood[] {
    return [this.INDICATIVE, this.SUBJUNCTIVE, this.OPTATIVE, this.IMPERATIVE];
  }

  /**
   * Converts a string to its corresponding Mood instance.
   *
   * @param string the string to convert to Mood
   * @throws IllegalEnumValueError, if a string that has no corressonding Mood value was passed.
   * @returns the matching Mood
   */
  static fromString(string: string): Mood {
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
  * Returns the morphologically-sound moods of a tense.
  *
  * @param tense the tense whose moods are wanted.
  * @returns the morphologically possible moods of the given tense.
  */
  public static moodsOf(tense: Tense): Mood[] {
    switch (tense) {
      case Tense.PRESENT:
      case Tense.AORIST:
      case Tense.PERFECT:
        return Mood.values;

      case Tense.IMPERFECT:
      case Tense.PLUPERFECT:
        return [Mood.INDICATIVE];

      case Tense.FUTURE:
      case Tense.FUTURE_PERFECT:
        return [Mood.INDICATIVE, Mood.OPTATIVE];
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



  /**
   * Called when converting the Mood value to a string using JSON.Stringify.
   * Compare to the fromString() method, which deserializes the object.
   */
  public toJSON() {
    return this.name;
  }
}

export default Mood;