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
}

export default Mood;