import FilterKey from '../../FilterKey';
import ParticipleProperties from './ParticipleProperties';
import Key from '../../Key';
import ParticipleKey from './ParticipleKey';

interface ParticipleFilterKey extends FilterKey<ParticipleKey> { };
class ParticipleFilterKey extends Key {
    constructor(properties: FilterKey<ParticipleKey>) {
        super(properties);
    }
}

export default ParticipleFilterKey;