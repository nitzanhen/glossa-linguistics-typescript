/**
 * Generic hasher interface mapping between a hash of type H (typically a string)
 * and a generic type T (to be hashed).
 * 
 * If the hasher uses string-casted numbers, the numbers should typically be integers.
 * Otherwise, the strings this hashers maps into should typically be indicative of the properties
 * they were created from.
 * 
 * Note that the hasher should form a one-to-one correspondence between the possible instances of the type
 * and a subset of the strings. Meaning, unhash(hash(target)) should always equal target (in values, not reference equality),
 * and vice versa.
 * 
 * @since 26/04/20
 */
interface Hasher<T, H = string> {
    hash(target: T): H;
    unhash(hash: H): T;
}

export default Hasher;