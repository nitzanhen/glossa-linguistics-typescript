import { ParticipleFilterKey } from 'key';
import { Tense, Voice, Case, Number, PrincipalPart } from 'linguistics/property';
import Property from 'linguistics/property/Property';
import SortedSet from 'structure/SortedSet';

import Hasher from '../../../Hasher';

import principalPartHasher from '../../standard/verb/PrincipalPartHasher';

/**
 * Hasher for InfinitiveFilterKeys
 *
 * @since 17/05/20
 */
const ParticipleFilterKeyHasher: Readonly<Hasher<ParticipleFilterKey>> = {
    hash({ principalPart, tense, voice, case_, number }: ParticipleFilterKey): string {
        const fields = [tense, voice, case_, number];

        const fieldLists = fields.map(set => set?.toList());
        const principalPartHash = principalPart?.toList().map(pPart => principalPartHasher.hash(pPart));

        return JSON.stringify([principalPartHash, ...fieldLists]);
    },
    unhash(hash: string): ParticipleFilterKey {
        let [principalPartHash, tense, voice, case_, number] = JSON.parse(hash);

        //Map to PrincipalPart instances, then to SortedSet, or to undefined if null.
        let principalPart = principalPartHash?.map((pPartHash: [string, string]) => principalPartHasher.unhash(pPartHash));
        principalPart && (principalPart = new SortedSet<PrincipalPart>(PrincipalPart.compare, ...principalPart))

        //Map to Tense instances, then to SortedSet, or to undefined if null.
        tense = tense?.map((t: string) => Tense.fromString(t));
        tense && (tense = new SortedSet<Tense>(Property.compare, ...tense))

        //Map to Voice instances, then to SortedSet, or to undefined if null.
        voice = voice?.map((v: string) => Voice.fromString(v))
        voice && (voice = new SortedSet<Voice>(Property.compare, ...voice))

        //Map to Case instances, then to SortedSet, or to undefined if null.
        case_ = case_?.map((c: string) => Case.fromString(c))
        case_ && (case_ = new SortedSet<Case>(Property.compare, ...case_))

        //Map to Number instances, then to SortedSet, or to undefined if null.
        number = number?.map((n: string) => Number.fromString(n))
        number && (number = new SortedSet<Number>(Property.compare, ...number))

        return new ParticipleFilterKey({ principalPart, tense, voice, case_, number });
    }
};

export default ParticipleFilterKeyHasher;