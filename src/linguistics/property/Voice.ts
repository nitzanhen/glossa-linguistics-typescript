import Tense from './Tense';

/**
 * @todo doc
 *
 * @since 14/3/20
 */
class Voice {
  static readonly ACTIVE = new Voice('active');
  static readonly MIDDLE = new Voice('middle');
  static readonly PASSIVE = new Voice('passive');
  static readonly MEDIOPASSIVE = new Voice('mediopassive'); //???

  static get values(): Voice[] {
    return [this.ACTIVE, this.MIDDLE, this.PASSIVE, this.MEDIOPASSIVE];
  }

  private constructor(public readonly name: string) {}

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

    throw new Error(
      'Impossible code reached; Tenses exhausted but no Tense matched.'
    );
  }
}

export default Voice;
