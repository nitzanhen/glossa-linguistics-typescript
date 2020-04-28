import Inflections from './Inflections';
import KeyMap from '../../structure/KeyMap';
import NounKey from '../../key/noun/NounKey';
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