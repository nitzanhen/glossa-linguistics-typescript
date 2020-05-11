import { Hasher } from '../Hasher';
import { NounKey, FiniteKey, InfinitiveKey, ParticipleKey } from '../../../key';
import { Case, Number, PrincipalPart, Tense, Voice, Mood, Person, Canister } from '../../../linguistics/property';

/**
 * Collection of Hashers for Greek hashables.
 * 
 * @since 28/04/20
 */

/** NounKey Hasher */
export const NounKeyHasher: Readonly<Hasher<NounKey>> = {
    hash(target: NounKey): string {
        return JSON.stringify([target.baseInflection, target.case_.name, target.number.name]);
    },
    unhash(hash: string): NounKey {
        const [baseInflection, case_, number] = JSON.parse(hash);
        return new NounKey(
            baseInflection,
            Case.fromString(case_),
            Number.fromString(number)
        );
    }
};

/** PrincipalPart hasher (private) */
const principalPartHasher: Readonly<Hasher<PrincipalPart>> = {
    hash(target: PrincipalPart): string {
        return JSON.stringify([target.canister.name, target.baseInflection]);
    },
    unhash(hash: string): PrincipalPart {
        const [canister, baseInflection] = JSON.parse(hash);
        return new PrincipalPart(Canister.fromString(canister), baseInflection);
    }
};

/** FiniteKey Hasher */
export const FiniteKeyHasher: Readonly<Hasher<FiniteKey>> = {
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

/** InfinitiveKey Hasher */
export const InfinitiveKeyHasher: Readonly<Hasher<InfinitiveKey>> = {
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

/** ParticipleKey Hasher */
export const ParticipleKeyHasher: Readonly<Hasher<ParticipleKey>> = {
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