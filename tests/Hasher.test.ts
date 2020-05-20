import HasherService from '../src/service/hash';
import Hasher from '../src/service/hash/Hasher';
import { Key, NounKey, NounFilterKey, FiniteKey } from '../src/key';
import { Case, Number, PrincipalPart, Canister, Tense, Voice, Mood, Person } from '../src/linguistics/property';

describe("hashers", () => {
    test("HasherService contains only hashers", () => {
        Object.values(HasherService).forEach(service => {
            expect(service).toBe<Hasher<any>>(service);
        });
    });

    const testData: Record<keyof typeof HasherService, Readonly<{ input: Key, hash: string; }>> = {
        NounKey: {
            input: new NounKey("base", Case.VOCATIVE, Number.SINGULAR),
            hash: '["base", "vocative", "singular"]'
        },
        NounFilterKey: {
            input: new NounFilterKey({ baseInflection: ["base1", "base2"], case_: [Case.GENITIVE, Case.DATIVE] }),
            hash: '[["base1", "base2"], ["genitive", "dative"], null]'
        },
        FiniteKey: {
            input: new FiniteKey(
                new PrincipalPart(Canister.FIRST, "base"),
                Tense.PRESENT,
                Voice.MEDIOPASSIVE,
                Mood.SUBJUNCTIVE,
                Person.SECOND,
                Number.SINGULAR
            ),
            hash: '[["first", "base"], "present", "mediopassive", "subjunctive", "second", "singular"]'
        },
        FiniteFilterKey: {

        },
        InfinitiveKey: {

        },
        InfinitiveFilterKey: {

        },
        ParticipleKey: {

        },
        ParticipleFilterKey: {

        }
    };

    for (const [type, data] of Object.entries(testData)) {
        test(type, () => {
            const hasher = (<any>HasherService)[type];
            //Testing hashing
            expect(hasher.hash(data.input)).toBe(data.hash);

            //Testing hashing
            expect(hasher.unhash(data.hash)).toBe(data.input);
        });
    }
});