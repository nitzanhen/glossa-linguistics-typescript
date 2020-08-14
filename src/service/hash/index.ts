import NounKeyHasher from './hashers/standard/noun/NounKeyHasher';
import FiniteKeyHasher from './hashers/standard/verb/FiniteKeyHasher';
import NounFilterKeyHasher from './hashers/filter/noun/NounFilterKeyHasher';
import FiniteFilterKeyHasher from './hashers/filter/verb/FiniteFilterKeyHasher';
import InfinitiveFilterKeyHasher from './hashers/filter/verb/InfinitiveFilterKeyHasher';
import ParticipleFilterKeyHasher from './hashers/filter/verb/ParticipleFilterKeyHasher';
import InfinitiveKeyHasher from './hashers/standard/verb/InfinitiveKeyHasher';
import ParticipleKeyHasher from './hashers/standard/verb/ParticipleKeyHasher';
import AdjectiveKeyHasher from './hashers/standard/adjective/AdjectiveKeyHasher';
import AdjectiveFilterKeyHasher from './hashers/filter/adjective/AdjectiveFilterKeyHasher';


/**
 * Collection of HashService objects that handle hashing and unhashing
 * of different hashable types.
 * 
 * @since 26/04/20
 */
const HashServices = {
    NounKey: NounKeyHasher,
    NounFilterKey: NounFilterKeyHasher,
    FiniteKey: FiniteKeyHasher,
    FiniteFilterKey: FiniteFilterKeyHasher,
    InfinitiveKey: InfinitiveKeyHasher,
    InfinitiveFilterKey: InfinitiveFilterKeyHasher,
    ParticipleKey: ParticipleKeyHasher,
    ParticipleFilterKey: ParticipleFilterKeyHasher,
    AdjectiveKey: AdjectiveKeyHasher,
    AdjectiveFilterKey: AdjectiveFilterKeyHasher
};

export default Object.freeze(HashServices);