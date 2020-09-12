import { FiniteFilterKey } from 'key';
import { Tense, Mood, Voice, Person, Number, PrincipalPart } from 'linguistics/property';
import Property from 'linguistics/property/Property';
import SortedSet from 'structure/SortedSet';

import Hasher from '../../../Hasher';

import principalPartHasher from '../../standard/verb/PrincipalPartHasher';

/** 
 * FiniteFilterKey hasher 
 * 
 * @since 17/05/20
 */
const FiniteFilterKeyHasher: Readonly<Hasher<FiniteFilterKey>> = {
    hash({ principalPart, tense, mood, voice, person, number }: FiniteFilterKey): string {
        const fields = [tense, mood, voice, person, number]

        const fieldsLists = fields.map(set => set?.toList())
        const principalPartHash = principalPart?.toList().map(pPart => principalPartHasher.hash(pPart))

        return JSON.stringify([principalPartHash, ...fieldsLists]);
    },
    unhash(hash: string): FiniteFilterKey {
        let [principalPartHash, tense, mood, voice, person, number] = JSON.parse(hash);

        //Map to PrincipalPart instances, then to SortedSet, or to undefined if null.
        let principalPart = principalPartHash?.map((pPartHash: [string, string]) => principalPartHasher.unhash(pPartHash));
        principalPart && (principalPart = new SortedSet<PrincipalPart>(PrincipalPart.compare, ...principalPart))

        //Map to Tense instances, then to SortedSet, or to undefined if null.
        tense = tense?.map((t: string) => Tense.fromString(t));
        tense && (tense = new SortedSet<Tense>(Property.compare, ...tense))

        //Map to Mood instances, then to SortedSet, or to undefined if null.
        mood = mood?.map((m: string) => Mood.fromString(m));
        mood && (mood = new SortedSet<Mood>(Property.compare, ...mood))

        //Map to Voice instances, then to SortedSet, or to undefined if null.
        voice = voice?.map((v: string) => Voice.fromString(v))
        voice && (voice = new SortedSet<Voice>(Property.compare, ...voice))

        //Map to Person instances, then to SortedSet, or to undefined if null.
        person = person?.map((p: string) => Person.fromString(p))
        person && (person = new SortedSet<Person>(Property.compare, ...person))

        //Map to Number instances, then to SortedSet, or to undefined if null.
        number = number?.map((n: string) => Number.fromString(n))
        number && (number = new SortedSet<Number>(Property.compare, ...number))

        return new FiniteFilterKey({ principalPart, tense, mood, voice, person, number });
    }
};

export default FiniteFilterKeyHasher;