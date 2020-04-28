import IllegalEnumValueError from '../../error/IllegalEnumValueError';
import Time from './Time';
import Aspect from './Aspect';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Tense {
  //------ Instances ------//

  static readonly PRESENT = new Tense(
    'present', 0,
    Time.PRESENT,
    Aspect.IMPERFECTIVE
  );
  static readonly IMPERFECT = new Tense(
    'imperfect', 1,
    Time.PAST,
    Aspect.IMPERFECTIVE
  );
  static readonly FUTURE = new Tense('future', 2, Time.FUTURE, Aspect.FUTURE);
  static readonly AORIST = new Tense('aorist', 3, Time.PAST, Aspect.AORIST);
  static readonly PERFECT = new Tense(
    'perfect', 4,
    Time.PRESENT,
    Aspect.PERFECTIVE
  );
  static readonly PLUPERFECT = new Tense(
    'pluperfect', 5,
    Time.PAST,
    Aspect.PERFECTIVE
  );
  static readonly FUTURE_PERFECT = new Tense(
    'future_perfect', 6,
    Time.FUTURE,
    Aspect.PERFECTIVE
  );



  //------ Static Methods ------//

  static get values() {
    return [
      this.PRESENT,
      this.IMPERFECT,
      this.FUTURE,
      this.AORIST,
      this.PERFECT,
      this.PLUPERFECT,
      this.FUTURE_PERFECT,
    ];
  }

  /**
   * Converts a string to its corresponding Tense instance.
   *
   * @param string the string to convert to Tense
   * @throws RangeError, if a string that has no corressonding Tense value was passed.
   * @returns the matching Tense
   */
  static fromString(string: string): Tense {
    // Works assuming the name property of the enum is identical to the variable's name (case insensitive).
    const value = (this as any)[string.toUpperCase()];
    if (value) {
      return value;
    }

    throw new RangeError(
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
    public readonly index: number,

    public readonly time: Time,
    public readonly aspect: Aspect
  ) { }

  //------ Methods ------//

  /**
   * Called when converting the Tense value to a string using JSON.Stringify.
   * Compare to the fromString() method, which deserializes the object.
   */
  public toJSON() {
    return this.name;
  }

  /**
   * Checks if this tense has infinitives (morphologically).
   *
   * @returns true if the tense has infinitive, or false otherwise.
   */
  public hasInfinitives(): boolean {
    switch (this) {
      case Tense.PRESENT:
      case Tense.FUTURE:
      case Tense.AORIST:
      case Tense.PERFECT:
        return true;

      case Tense.IMPERFECT:
      case Tense.PLUPERFECT:
      case Tense.FUTURE_PERFECT:
        return false;
    }

    throw new IllegalEnumValueError(
      'Impossible code reached; Tenses exhausted but no Tense matched.'
    );
  }

  /**
   * Checks if this tense is mediopassive, I.E if it has middle/passive forms,
   * or separate forms for middle and passive.
   *
   * @returns true if this tense is mediopassive, and false otherwise.
   */
  public isMediopassive(): boolean {
    switch (this) {
      case Tense.PRESENT:
      case Tense.IMPERFECT:
      case Tense.PERFECT:

      case Tense.PLUPERFECT:
      case Tense.FUTURE_PERFECT:
        return true;

      case Tense.AORIST:
      case Tense.FUTURE:
        return false;
    }
    throw new IllegalEnumValueError(
      'Impossible code reached; Tenses exhausted but no Tense matched.'
    );
  }
}

export default Tense;