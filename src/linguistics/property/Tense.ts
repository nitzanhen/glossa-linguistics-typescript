import IllegalEnumValueError from '../../error/IllegalEnumValueError';

/**
 * @todo doc
 *
 * @since 14/3/20
 */
class Tense {
  static readonly PRESENT = new Tense('present');
  static readonly IMPERFECT = new Tense('imperfect');
  static readonly FUTURE = new Tense('future');
  static readonly AORIST = new Tense('aorist');
  static readonly PERFECT = new Tense('perfect');
  static readonly PLUPERFECT = new Tense('pluperfect');
  static readonly FUTURE_PERFECT = new Tense('future_perfect');

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

  private constructor(public readonly name: string) {}

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
