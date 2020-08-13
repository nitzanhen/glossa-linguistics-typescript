import { IllegalEnumValueError } from 'error';

import Property from './Property';
import Tense from './Tense';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Voice extends Property {
  //------ Instances ------//

  static readonly ACTIVE = new Voice('active', 0);
  static readonly MIDDLE = new Voice('middle', 1);
  static readonly PASSIVE = new Voice('passive', 2);
  static readonly MEDIOPASSIVE = new Voice('mediopassive', 3);

  //------ Static Methods ------//

  static get values(): Voice[] {
    return [this.ACTIVE, this.MIDDLE, this.PASSIVE, this.MEDIOPASSIVE];
  }

  /**
   * @see Property.fromString(string)
   */
  static fromString(string: string): Voice {
    return super.fromString(string) as Voice;
  }

  //------ Methods ------//

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
}

export default Voice;
