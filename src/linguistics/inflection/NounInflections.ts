import { KeyMap } from '#/structure';
import { NounKey } from '#/key';

import Inflections from './Inflections';
import Inflection from './Inflection';

/**
 * Collection of inflections of a Greek noun.
 * 
 * @since 27/04/20
 */
class NounInflections extends Inflections {
    //------ Fields ------//

    private inflections: KeyMap<NounKey, Inflection<NounKey>>;

    //------ Constructor ------//

    constructor() {
        super();
        this.inflections = new KeyMap();
    }
}

export default NounInflections;