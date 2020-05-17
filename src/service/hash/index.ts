import Hasher from './Hasher';
import NounKeyHasher from './hashers/standard/NounKeyHasher';
import FiniteKeyHasher from './hashers/standard/FiniteKeyHasher';
import InfinitiveKeyHasher from './hashers/standard/InfinitiveKeyHasher';
import ParticipleKeyHasher from './hashers/standard/ParticipleKeyHasher';
import NounFilterKeyHasher from './hashers/filter/NounFilterKeyHasher';
import FiniteFilterKeyHasher from './hashers/filter/FiniteFilterKeyHasher';
import InfinitiveFilterKeyHasher from './hashers/filter/InfinitiveFilterKeyHasher';
import ParticipleFilterKeyHasher from './hashers/filter/ParticipleFilterKeyHasher';


/**
 * Collection of HashService objects that handle hashing and unhashing
 * of different hashable types.
 * 
 * @since 26/04/20
 */
const HashServices: Record<string, Readonly<Hasher<any>>> = {
    NounKey: NounKeyHasher,
    NounFilterKey: NounFilterKeyHasher,
    FiniteKey: FiniteKeyHasher,
    FiniteFilterKey: FiniteFilterKeyHasher,
    InfinitiveKey: InfinitiveKeyHasher,
    InfinitiveFilterKey: InfinitiveFilterKeyHasher,
    ParticipleKey: ParticipleKeyHasher,
    ParticipleFilterKey: ParticipleFilterKeyHasher
};

export default Object.freeze(HashServices);