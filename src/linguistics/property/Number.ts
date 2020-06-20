import Property from './Property';

/**
 * @todo documentation
 *
 * @since 24/04/2020
 */
class Number extends Property {
  //------ Instances ------//

  static readonly SINGULAR = new Number('singular', 0);
  static readonly PLURAL = new Number('plural', 1);

  //------ Static Methods ------//

  static get values(): Number[] {
    return [this.SINGULAR, this.PLURAL];
  }
}

export default Number;
