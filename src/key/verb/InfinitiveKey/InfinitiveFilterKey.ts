import FilterKey from '../../FilterKey';
import InfinitiveKey from './InfinitiveKey';
import Key from '../../Key';

interface InfinitiveFilterKey extends FilterKey<InfinitiveKey> { };
class InfinitiveFilterKey extends Key {
    constructor(properties: FilterKey<InfinitiveKey>) {
        super(properties);
    }
}

export default InfinitiveFilterKey;