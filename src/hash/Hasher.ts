/**
 * Provides template methods for implementing hashing and unhashing functionality.
 * Accept a generic type T which is the type to be hashed, and a generic H to declare
 * which type T is being hashed to.
 * 
 * Note that while H extends string | number, it should in practice only be one of those - H should
 * only be a string or a number.
 * 
 * @since 26/04/20
 */
interface Hasher<T, H extends string | number> {
    hash(target: T): H;
    unhash(hash: H): T;
}

export default Hasher;