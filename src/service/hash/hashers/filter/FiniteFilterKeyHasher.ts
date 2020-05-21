import Hasher from '../../Hasher';
import { FiniteFilterKey } from '../../../../key';
import principalPartHasher from '../PrincipalPartHasher';
import { Tense, Mood, Voice, Person, Number } from '../../../../linguistics/property';

/** 
 * FiniteFilterKey hasher 
 * 
 * @since 17/05/20
 */
const FiniteFilterKeyHasher: Readonly<Hasher<FiniteFilterKey>> = {
    hash(target: FiniteFilterKey): string {
        const { principalPart, tense, mood, voice, person, number } = target;
        const principalPartHash = principalPart
            ? principalPart.map(pPart => principalPartHasher.hash(pPart))
            : undefined;

        return JSON.stringify([principalPartHash, tense, mood, voice, person, number]);
    },
    unhash(hash: string): FiniteFilterKey {
        let [principalPartHash, tense, mood, voice, person, number] = JSON.parse(hash);

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

        mood = mood
            //Map to Moods
            ? mood.map((hash: string) => Mood.fromString(hash))
            //moodh is null. Convert to undefined
            : undefined;

        voice = voice
            //Map to Voices
            ? voice.map((hash: string) => Voice.fromString(hash))
            //voice is null. Convert to undefined
            : undefined;

        person = person
            //Map to Persons
            ? person.map((hash: string) => Person.fromString(hash))
            //person is null. Convert to undefined
            : undefined;

        number = number
            //Map to Numbers
            ? number.map((hash: string) => Number.fromString(hash))
            //number is null. Convert to undefined
            : undefined;

        return new FiniteFilterKey({ principalPart, tense, mood, voice, person, number });
    }
};

export default FiniteFilterKeyHasher;