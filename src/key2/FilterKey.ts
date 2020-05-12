import { Key } from '../key';
import { NonFunctionProperties } from '../util/typeUtils';
import { permutationsOf } from '../util/collectionUtils';

/**
 * bb
 */
type FilterKey<K extends Key> = {
    [P in keyof NonFunctionProperties<K>]?: Array<K[P]>
};

/**
 * As a namespace, FilterKey contains additional functionality regare
 */
namespace FilterKey {
    /**
     * 
     * @param key 
     */
    export function iteratePermutations<K extends Key>(key: FilterKey<K>) {
        return permutationsOf(Object.values(key));
    }
}

export default FilterKey;