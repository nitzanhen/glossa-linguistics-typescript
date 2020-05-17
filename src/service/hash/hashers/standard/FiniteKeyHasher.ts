import Hasher from '../../Hasher';
import { FiniteKey } from '../../../../key';
import principalPartHasher from '../PrincipalPartHasher';
import { Tense, Voice, Mood, Person, Number } from '../../../../linguistics/property';

/** 
 * FiniteKey Hasher
 * 
 * @since 28/04/20
 */
const FiniteKeyHasher: Readonly<Hasher<FiniteKey>> = {
    hash(target: FiniteKey): string {
        const { principalPart, tense, voice, mood, person, number } = target;
        return JSON.stringify([principalPartHasher.hash(principalPart), tense.name, voice.name, mood.name, person.name, number.name]);
    },
    unhash(hash: string): FiniteKey {
        const [principalPartHash, tense, voice, mood, person, number] = JSON.parse(hash);
        return new FiniteKey(
            principalPartHasher.unhash(principalPartHash),
            Tense.fromString(tense),
            Voice.fromString(voice),
            Mood.fromString(mood),
            Person.fromString(person),
            Number.fromString(number)
        );
    }
};

export default FiniteKeyHasher;