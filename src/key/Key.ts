import Hashable from '../hash/Hashable';
import Hasher from '../hash/Hasher';

/**
 * Common ancestor to all Key instances.
 *
 * @since 12/04/20
 */
abstract class Key<V> implements Hashable<V> {

    //------ Fields ------//

    public abstract readonly hasher: Hasher<V, string | number>;

    //------ Constructor ------//

    constructor() { }

}

export default Key;
