import { Hasher } from './Hasher';
import { NounKeyHasher, FiniteKeyHasher, InfinitiveKeyHasher, ParticipleKeyHasher } from './hashable/greek';

/**
 * Collection of HashService objects that handle hashing and unhashing
 * of different hashable types.
 * 
 * @since 26/04/20
 */
const HashServices: Record<string, Hasher<any>> = {
    NounKey: NounKeyHasher,
    FiniteKey: FiniteKeyHasher,
    InfinitiveKey: InfinitiveKeyHasher,
    ParticipleKey: ParticipleKeyHasher
};

export default Object.freeze(HashServices);