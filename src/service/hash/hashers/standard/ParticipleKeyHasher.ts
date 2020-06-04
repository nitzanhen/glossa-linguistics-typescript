import { ParticipleKey } from '#/key';
import { Tense, Voice, Case, Number } from '#/linguistics/property';

import Hasher from '../../Hasher';

import principalPartHasher from '../PrincipalPartHasher';

/** 
 * ParticipleKey Hasher 
 * 
 * @since 28/04/20
 */
const ParticipleKeyHasher: Readonly<Hasher<ParticipleKey>> = {
    hash(target: ParticipleKey): string {
        const { principalPart, tense, voice, case_, number } = target;
        return JSON.stringify([principalPartHasher.hash(principalPart), tense.name, voice.name, case_.name, number.name]);
    },
    unhash(hash: string): ParticipleKey {
        const [principalPartHash, tense, voice, case_, number] = JSON.parse(hash);
        return new ParticipleKey(
            principalPartHasher.unhash(principalPartHash),
            Tense.fromString(tense),
            Voice.fromString(voice),
            Case.fromString(case_),
            Number.fromString(number)
        );
    }
};

export default ParticipleKeyHasher;