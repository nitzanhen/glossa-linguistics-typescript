import Inflections from "./Inflections";
import { KeyMap } from "structure";
import { AdjectiveKey } from "key";
import Inflection from "./Inflection";

/**
 * Collection of inflections for a Greek adjective.
 * 
 * @since 16/08/20
 */
class AdjectiveInflections extends Inflections {

    //------ Fields ------//

    private inflection: KeyMap<AdjectiveKey, Inflection<AdjectiveKey>>;

    //------ Constructor ------//

    constructor() {
        super();
        this.inflection = new KeyMap();
    }
}

export default AdjectiveInflections;