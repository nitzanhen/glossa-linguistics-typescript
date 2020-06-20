import Property from './Property';

/**
 * @todo documentation
 *
 * @since 24/04/2020
 */
class Gender extends Property {
    //------ Instances ------//

    static readonly MASCULINE = new Gender('masculine', 0);
    static readonly FEMININE = new Gender('feminine', 1);
    static readonly NEUTER = new Gender('neuter', 2);

    //------ Static Methods ------//

    static get values(): Gender[] {
        return [this.MASCULINE, this.FEMININE, this.NEUTER];
    }
}

export default Gender;