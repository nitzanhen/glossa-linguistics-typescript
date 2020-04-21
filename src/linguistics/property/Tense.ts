import IllegalEnumValueError from '../../error/IllegalEnumValueError';
import Time from './Time';
import Aspect from './Aspect';

/**
 * @todo doc
 *
 * @since 14/3/20
 */
class Tense {
  static readonly PRESENT = new Tense(
    'present',
    Time.PRESENT,
    Aspect.IMPERFECTIVE
  );
  static readonly IMPERFECT = new Tense(
    'imperfect',
    Time.PAST,
    Aspect.IMPERFECTIVE
  );
  static readonly FUTURE = new Tense('future', Time.FUTURE, Aspect.FUTURE);
  static readonly AORIST = new Tense('aorist', Time.PAST, Aspect.AORIST);
  static readonly PERFECT = new Tense(
    'perfect',
    Time.PRESENT,
    Aspect.PERFECTIVE
  );
  static readonly PLUPERFECT = new Tense(
    'pluperfect',
    Time.PAST,
    Aspect.PERFECTIVE
  );
  static readonly FUTURE_PERFECT = new Tense(
    'future_perfect',
    Time.FUTURE,
    Aspect.PERFECTIVE
  );

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

  private constructor(
    public readonly name: string,
    public readonly time: Time,
    public readonly aspect: Aspect
  ) {}

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
