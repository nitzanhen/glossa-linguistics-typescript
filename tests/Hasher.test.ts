import HasherService from '../src/service/hash';
import Hasher from '../src/service/hash/Hasher';
import { Key, NounKey, NounFilterKey, FiniteKey, FiniteFilterKey, InfinitiveKey, InfinitiveFilterKey, ParticipleKey, ParticipleFilterKey, FilterKey } from '../src/key';
import { Case, Number, PrincipalPart, Canister, Tense, Voice, Mood, Person } from '../src/linguistics/property';
import hash from '../src/service/hash';

describe("hashers", () => {
    test("HasherService contains only hashers", () => {
        Object.values(HasherService).forEach(service => {
            expect(service).toBe<Hasher<any>>(service);
        });
    });

    const testData: Record<keyof typeof HasherService, readonly { input: Key, hash: string; }[]> = {
        NounKey: [{
            input: new NounKey("base", Case.VOCATIVE, Number.SINGULAR),
            hash: '["base","vocative","singular"]'
        }],
        NounFilterKey: [{
            input: new NounFilterKey({ baseInflection: ["base1", "base2"], case_: [Case.GENITIVE, Case.DATIVE] }),
            hash: '[["base1","base2"],["genitive","dative"],null]'
        }, {
            input: new NounFilterKey({}),
            hash: '[null,null,null]'
        }],
        FiniteKey: [{
            input: new FiniteKey(
                new PrincipalPart(Canister.FIRST, "base"),
                Tense.PRESENT,
                Voice.MEDIOPASSIVE,
                Mood.SUBJUNCTIVE,
                Person.SECOND_PERSON,
                Number.SINGULAR
            ),
            hash: '[["first","base"],"present","mediopassive","subjunctive","second_person","singular"]'
        }],
        FiniteFilterKey: [{
            input: new FiniteFilterKey({
                principalPart: [
                    new PrincipalPart(Canister.FIRST, "base1"),
                    new PrincipalPart(Canister.FIRST, "base2")],
                tense: [Tense.PRESENT],
                voice: [Voice.ACTIVE, Voice.MEDIOPASSIVE],
                person: [Person.FIRST_PERSON, Person.THIRD_PERSON],
            }),
            hash: '[[["first","base1"],["first","base2"]],["present"],null,["active","mediopassive"],["first_person","third_person"],null]'
        }, {
            input: new FiniteFilterKey({}),
            hash: '[null,null,null,null,null,null]'
        }],
        InfinitiveKey: [{
            input: new InfinitiveKey(new PrincipalPart(Canister.THIRD, "base"), Tense.AORIST, Voice.MIDDLE),
            hash: '[["third","base"],"aorist","middle"]'
        }],
        InfinitiveFilterKey: [{
            input: new InfinitiveFilterKey({
                tense: [Tense.AORIST, Tense.PERFECT],
                voice: [Voice.ACTIVE]
            }),
            hash: '[null,["aorist","perfect"],["active"]]'
        }, {
            input: new InfinitiveFilterKey({}),
            hash: '[null,null,null]'
        }],
        ParticipleKey: [{
            input: new ParticipleKey(
                new PrincipalPart(Canister.SECOND, "base"),
                Tense.FUTURE,
                Voice.MIDDLE,
                Case.NOMINATIVE,
                Number.SINGULAR
            ),
            hash: '[["second","base"],"future","middle","nominative","singular"]'
        }],
        ParticipleFilterKey: [{
            input: new ParticipleFilterKey({
                principalPart: [new PrincipalPart(Canister.SECOND, "base")],
                tense: [Tense.FUTURE],
                case_: [Case.NOMINATIVE, Case.GENITIVE],
                number: [Number.PLURAL]
            }),
            hash: '[[["second","base"]],["future"],null,["nominative","genitive"],["plural"]]'
        }, {
            input: new ParticipleFilterKey({}),
            hash: '[null,null,null,null,null]'
        }]
    };

    for (const [type, data] of Object.entries(testData)) {
        const hasher = (<any>HasherService)[type] as Readonly<Hasher<any>>;
        data.forEach(({ input, hash }, i) => {
            test(`${type}(${i})`, () => {
                //Testing hashing
                expect(hasher.hash(input)).toBe(hash);

                //Testing unhashing
                expect(hasher.unhash(hash)).toEqual(input);
            });
        });

    }
});