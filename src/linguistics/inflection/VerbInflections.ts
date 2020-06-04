import { KeyMap } from '#/structure';
import { FiniteKey, InfinitiveKey, ParticipleKey } from '#/key';

import Inflections from './Inflections';
import Inflection from './Inflection';


/**
 * Collection of inflections for a Greek verb.
 * 
 * @since 27/04/20
 */
class VerbInflections extends Inflections {
    //------ Fields ------//

    private readonly finiteInflections: KeyMap<FiniteKey, Inflection<FiniteKey>>;
    private readonly infinitives: KeyMap<InfinitiveKey, Inflection<InfinitiveKey>>;
    private readonly participles: KeyMap<ParticipleKey, Inflection<ParticipleKey>>;

    //------ Constructor ------//

    public constructor() {
        super();
        this.finiteInflections = new KeyMap();
        this.infinitives = new KeyMap();
        this.participles = new KeyMap();
    }
}

export default VerbInflections;