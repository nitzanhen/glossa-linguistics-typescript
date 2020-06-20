import { IllegalEnumValueError } from '#/error';

import Property from './Property';

import Time from './Time';
import Aspect from './Aspect';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Tense extends Property {
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
   * @see Property.fromString(string)
   */
  static fromString(string: string): Tense {
    return super.fromString(string) as Tense;
  }

  //------ Constructor ------//

  protected constructor(
    name: string,
    index: number,
    public time: Time,
    public aspect: Aspect
  ) {
    super(name, index);
  }

  //------ Methods ------//

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