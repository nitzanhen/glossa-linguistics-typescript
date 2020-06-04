import { NonFunctionProperties } from '#/util/typeUtils';
import { permutationsOf } from '#/util/collectionUtils';

import Key from './Key';

type FilterKey<K extends Key> = {
    [P in keyof NonFunctionProperties<K>]?: Array<K[P]>
};

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