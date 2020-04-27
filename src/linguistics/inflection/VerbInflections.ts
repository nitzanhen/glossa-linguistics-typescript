import Inflections from './Inflections';
import KeyMap from '../../structure/KeyMap';
import FiniteKey from '../../key/verb/FiniteKey';
import Inflection from './Inflection';
import InfinitiveKey from '../../key/verb/InfinitiveKey';
import ParticipleKey from '../../key/verb/ParticipleKey';

/**
 * Collection of inflections for a Greek verb.
 * 
 * @since 27/04/20
 */
class VerbInflections extends Inflections {
    //------ Fields ------//

    private finiteInflections: KeyMap<FiniteKey, Inflection<FiniteKey>>;
    private infinitives: KeyMap<InfinitiveKey, Inflection<InfinitiveKey>>;
    private participles: KeyMap<ParticipleKey, Inflection<ParticipleKey>>;

    //------ Constructor ------//

    public constructor() {
        super();
        this.finiteInflections = new KeyMap();
        this.infinitives = new KeyMap();
        this.participles = new KeyMap();
    }
}

export default VerbInflections;