import NounKey from '../../../key/noun/NounKey';
import { Hasher } from '../Hasher';
import FiniteKey from '../../../key/verb/FiniteKey';
import InfinitiveKey from '../../../key/verb/InfinitiveKey';
import ParticipleKey from '../../../key/verb/ParticipleKey';
import Case from '../../../';

/**
 * Collection of Hashers for Greek hashables.
 * 
 * @since 28/04/20
 */

/** NounKey Hasher */
export const NounKeyHasher: Hasher<NounKey> = {
    hash(target: NounKey): string {
        return [target.baseInflection, target.case_.name, target.number.name].join(',');
    },
    unhash(hash: string): NounKey {
        const [baseInflection, caseName, numberName] = hash.split(',');
        return new NounKey(baseInflection, Case.);
    }
};

/** FiniteKey Hasher */
export const FiniteKeyHasher: Hasher<FiniteKey> = {

};

/** InfinitiveKey Hasher */
export const InfinitiveKeyHasher: Hasher<InfinitiveKey> = {

};

/** ParticipleKey Hasher */
export const ParticipleKeyHasher: Hasher<ParticipleKey> = {

};