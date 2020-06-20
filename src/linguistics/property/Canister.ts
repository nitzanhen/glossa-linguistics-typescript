import Property from './Property';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Canister extends Property {
  //------ Instances ------//

  static readonly FIRST = new Canister('first', 0);
  static readonly SECOND = new Canister('second', 1);
  static readonly THIRD = new Canister('third', 2);
  static readonly FOURTH = new Canister('fourth', 3);
  static readonly FIFTH = new Canister('fifth', 4);
  static readonly SIXTH = new Canister('sixth', 5);

  //------ Static Methods ------//

  static get values(): Canister[] {
    return [this.FIRST, this.SECOND, this.THIRD, this.FOURTH, this.FIFTH, this.SIXTH];
  }
}

export default Canister;