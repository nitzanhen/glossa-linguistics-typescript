import FilterKey from '../../FilterKey';
import FiniteKey from './FiniteKey';
import Key from '../../Key';

interface FiniteFilterKey extends FilterKey<FiniteKey> { };
class FiniteFilterKey extends Key {
    constructor(properties: FilterKey<FiniteKey>) {
        super(properties);
    }
}

export default FiniteFilterKey;