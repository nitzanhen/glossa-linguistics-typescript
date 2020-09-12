import { InfinitiveFilterKey } from 'key';
import { PrincipalPart, Tense, Voice } from 'linguistics/property';
import Property from 'linguistics/property/Property';
import SortedSet from 'structure/SortedSet';

import Hasher from '../../../Hasher';

import principalPartHasher from '../../standard/verb/PrincipalPartHasher';

/**
 * Hasher for InfinitiveFilterKeys
 *
 * @since 17/05/20
 */
const InfinitiveFilterKeyHasher: Readonly<Hasher<InfinitiveFilterKey>> = {
    hash({ principalPart, tense, voice }: InfinitiveFilterKey): string {
        const fields = [tense, voice];

        const fieldLists = fields.map(set => set?.toList());
        const principalPartHash = principalPart?.toList().map(pPart => principalPartHasher.hash(pPart))

        return JSON.stringify([principalPartHash, ...fieldLists]);
    },
    unhash(hash: string): InfinitiveFilterKey {
        let [principalPartHash, tense, voice] = JSON.parse(hash);

        //Map to PrincipalPart instances, then to SortedSet, or to undefined if null.
        let principalPart = principalPartHash?.map((pPartHash: [string, string]) => principalPartHasher.unhash(pPartHash));
        principalPart && (principalPart = new SortedSet<PrincipalPart>(PrincipalPart.compare, ...principalPart))

        //Map to Tense instances, then to SortedSet, or to undefined if null.
        tense = tense?.map((t: string) => Tense.fromString(t));
        tense && (tense = new SortedSet<Tense>(Property.compare, ...tense))

        //Map to Voice instances, then to SortedSet, or to undefined if null.
        voice = voice?.map((v: string) => Voice.fromString(v))
        voice && (voice = new SortedSet<Voice>(Property.compare, ...voice))

        return new InfinitiveFilterKey({ principalPart, tense, voice });
    }
};

export default InfinitiveFilterKeyHasher;