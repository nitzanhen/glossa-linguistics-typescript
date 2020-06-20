import Property from './Property';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Declension extends Property {
    //------ Instances ------//

    static readonly FIRST_DECLENSION = new Declension('first_declension', 0);
    static readonly SECOND_DECLENSION = new Declension('second_declension', 1);
    static readonly THIRD_DECLENSION = new Declension('third_declension', 2);

    //------ Static Methods ------//

    static get values(): Declension[] {
        return [this.FIRST_DECLENSION, this.SECOND_DECLENSION, this.THIRD_DECLENSION];
    }
}

export default Declension;