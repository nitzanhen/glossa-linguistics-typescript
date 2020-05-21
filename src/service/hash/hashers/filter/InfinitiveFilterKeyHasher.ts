import Hasher from '../../Hasher';
import { InfinitiveFilterKey } from '../../../../key';
import principalPartHasher from '../PrincipalPartHasher';
import { Tense, Voice } from '../../../../linguistics/property';

/**
 * Hasher for InfinitiveFilterKeys
 *
 * @since 17/05/20
 */
const InfinitiveFilterKeyHasher: Readonly<Hasher<InfinitiveFilterKey>> = {
    hash(target: InfinitiveFilterKey): string {
        const { principalPart, tense, voice } = target;
        const principalPartHash = principalPart
            ? principalPart.map(pPart => principalPartHasher.hash(pPart))
            : undefined;

        return JSON.stringify([principalPartHash, tense, voice]);
    },
    unhash(hash: string): InfinitiveFilterKey {
        let [principalPart, tense, voice] = JSON.parse(hash);
        principalPart = principalPart
            //Map to Principal Parts
            ? principalPart.map((pPart: [string, string]) => principalPartHasher.unhash(pPart))
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

        return new InfinitiveFilterKey({ principalPart, tense, voice });
    }
};

export default InfinitiveFilterKeyHasher;