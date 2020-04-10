import Tense from './Tense';
import IllegalEnumValueError from '../../error/IllegalEnumValueError';

/**
 * @todo doc
 *
 * @since 14/3/20
 */
class Mood {
  static readonly INDICATIVE = new Mood('indicative');
  static readonly SUBJUNCTIVE = new Mood('subjunctive');
  static readonly OPTATIVE = new Mood('optative');
  static readonly IMPERATIVE = new Mood('imperative');

  static get values() {
    return [this.INDICATIVE, this.SUBJUNCTIVE, this.OPTATIVE, this.IMPERATIVE];
  }

  private constructor(public readonly name: string) {}

  /**
   * Returns the morphologically-sound moods of a tense.
   *
   * @param tense the tense whose moods are wanted.
   * @returns the morphologically possible moods of the given tense.
   */
  public moodsOf(tense: Tense): Mood[] {
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
}

export default Mood;
