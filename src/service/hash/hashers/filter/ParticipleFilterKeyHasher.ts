import { ParticipleFilterKey, FiniteFilterKey } from 'key';
import { Tense, Voice, Number, Case } from 'linguistics/property';

import Hasher from '../../Hasher';

import principalPartHasher from '../PrincipalPartHasher';

/**
 * Hasher for InfinitiveFilterKeys
 *
 * @since 17/05/20
 */
const ParticipleFilterKeyHasher: Readonly<Hasher<ParticipleFilterKey>> = {
    hash(target: ParticipleFilterKey): string {
        const { principalPart, tense, voice, case_, number } = target;
        const principalPartHash = principalPart
            ? principalPart.map(pPart => principalPartHasher.hash(pPart))
            : undefined;

        return JSON.stringify([principalPartHash, tense, voice, case_, number]);
    },
    unhash(hash: string): ParticipleFilterKey {
        let [principalPartHash, tense, voice, case_, number] = JSON.parse(hash);

        const principalPart = principalPartHash
            //Map to Principal Parts
            ? principalPartHash.map((pPartHash: [string, string]) => principalPartHasher.unhash(pPartHash))
            //principalPartHash is null. Convert to undefined
            : undefined;

        tense = tense
            //Map to Tenses
            ? tense.map((hash: string) => Tense.fromString(hash))
            //tense is null. Convert to undefined
            : undefined;

        voice = voice
            //Map to Voices
            ? voice.map((hash: string) => Voice.fromString(hash))
            //voice is null. Convert to undefined
            : undefined;

        case_ = case_
            //Map to Cases
            ? case_.map((hash: string) => Case.fromString(hash))
            //case_ is null. Convert to undefined
            : undefined;

        number = number
            //Map to Numbers
            ? number.map((hash: string) => Number.fromString(hash))
            //number is null. Convert to undefined
            : undefined;

        return new ParticipleFilterKey({ principalPart, tense, voice, case_, number });
    }
};

export default ParticipleFilterKeyHasher;