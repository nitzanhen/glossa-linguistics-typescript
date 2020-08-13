import { IllegalEnumValueError } from 'error';

import Property from './Property';

/**
 * @todo documentation
 *
 * @since 24/04/2020
 */
class Case extends Property {
    //------ Instances ------//

    static readonly NOMINATIVE = new Case('nominative', 0);
    static readonly GENITIVE = new Case('genitive', 1);
    static readonly DATIVE = new Case('dative', 2);
    static readonly ACCUSATIVE = new Case('accusative', 3);
    static readonly VOCATIVE = new Case('vocative', 4);

    //------ Static Methods ------//

    static get values(): Case[] {
        return [this.NOMINATIVE, this.GENITIVE, this.DATIVE, this.ACCUSATIVE, this.VOCATIVE];
    }
}

export default Case;
