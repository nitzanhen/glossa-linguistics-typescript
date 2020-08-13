import { IllegalEnumValueError } from 'error';

import Property from './Property';
import Tense from './Tense';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Mood extends Property {
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
}

export default Mood;