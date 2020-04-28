import { Hasher } from '../Hasher';
import { NounKey, FiniteKey, InfinitiveKey, ParticipleKey } from '../../../key';
import { Case, Number, PrincipalPart, Tense, Voice, Mood, Person, Canister } from '../../../linguistics/property';

/**
 * Collection of Hashers for Greek hashables.
 * 
 * @since 28/04/20
 */

/** NounKey Hasher */
export const NounKeyHasher: Hasher<NounKey> = {
    hash(target: NounKey): string {
        return [target.baseInflection, target.case_.name, target.number.name].join(',');
    },
    unhash(hash: string): NounKey {
        const [baseInflection, case_, number] = hash.split(',');
        return new NounKey(
            baseInflection,
            Case.fromString(case_),
            Number.fromString(number)
        );
    }
};

/** PrincipalPart hasher (private) */
const principalPartHasher: Hasher<PrincipalPart> = {
    hash(target: PrincipalPart): string {
        return target.canister.name + ";" + target.baseInflection;
    },
    unhash(hash: string): PrincipalPart {
        const [canister, baseInflection] = hash.split(';');
        return new PrincipalPart(Canister.fromString(canister), baseInflection);
    }
};

/** FiniteKey Hasher */
export const FiniteKeyHasher: Hasher<FiniteKey> = {
    hash(target: FiniteKey): string {
        const { principalPart, tense, voice, mood, person, number } = target;
        return [principalPartHasher.hash(principalPart), tense.name, voice.name, mood.name, person.name, number.name].join(',');
    },
    unhash(hash: string): FiniteKey {
        const [principalPartHash, tense, voice, mood, person, number] = hash.split(',');
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
export const InfinitiveKeyHasher: Hasher<InfinitiveKey> = {
    hash(target: InfinitiveKey): string {
        const { principalPart, tense, voice } = target;
        return [principalPartHasher.hash(principalPart), tense.name, voice.name].join(',');
    },
    unhash(hash: string): InfinitiveKey {
        const [principalPartHash, tense, voice] = hash.split(',');
        return new InfinitiveKey(
            principalPartHasher.unhash(principalPartHash),
            Tense.fromString(tense),
            Voice.fromString(voice),
        );
    }
};

/** ParticipleKey Hasher */
export const ParticipleKeyHasher: Hasher<ParticipleKey> = {
    hash(target: ParticipleKey): string {
        const { principalPart, tense, voice, case_, number } = target;
        return [principalPartHasher.hash(principalPart), tense.name, voice.name, case_.name, number.name].join(',');
    },
    unhash(hash: string): ParticipleKey {
        const [principalPartHash, tense, voice, case_, number] = hash.split(',');
        return new ParticipleKey(
            principalPartHasher.unhash(principalPartHash),
            Tense.fromString(tense),
            Voice.fromString(voice),
            Case.fromString(case_),
            Number.fromString(number)
        );
    }
};