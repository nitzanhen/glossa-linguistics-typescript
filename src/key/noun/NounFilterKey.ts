import Key from '../Key';
import FilterKey from '../FilterKey';
import NounKey from './NounKey';

/**
 * @since 14/05/20
 */
interface NounFilterKey extends FilterKey<NounKey> { };
class NounFilterKey extends Key {
    constructor(properties: FilterKey<NounKey>) {
        super(properties);
    }
}

export default NounFilterKey;