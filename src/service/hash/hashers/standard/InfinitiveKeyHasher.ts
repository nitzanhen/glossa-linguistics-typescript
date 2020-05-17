import Hasher from '../../Hasher';
import { InfinitiveKey } from '../../../../key';
import principalPartHasher from '../PrincipalPartHasher';
import { Tense, Voice } from '../../../../linguistics/property';

/** 
 * InfinitiveKey Hasher 
 * 
 * @since 28/04/20
 */
const InfinitiveKeyHasher: Readonly<Hasher<InfinitiveKey>> = {
    hash(target: InfinitiveKey): string {
        const { principalPart, tense, voice } = target;
        return JSON.stringify([principalPartHasher.hash(principalPart), tense.name, voice.name]);
    },
    unhash(hash: string): InfinitiveKey {
        const [principalPartHash, tense, voice] = JSON.parse(hash);
        return new InfinitiveKey(
            principalPartHasher.unhash(principalPartHash),
            Tense.fromString(tense),
            Voice.fromString(voice),
        );
    }
};

export default InfinitiveKeyHasher;