import Hasher from './Hasher';

/**
 * Denotes that the implementing entity can be hashed.
 * Should typically be used with Key classes.
 * 
 * @since 26/04/20
 */
interface Hashable<T, H extends string | number = string | number> {
    hasher: Hasher<T, H>;
}

export default Hashable;