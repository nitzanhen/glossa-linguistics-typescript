import { NounKey, NounFilterKey, FiniteKey, FiniteFilterKey, InfinitiveKey, InfinitiveFilterKey, ParticipleKey, ParticipleFilterKey, Key, AdjectiveKey, AdjectiveFilterKey } from 'key';
import { Case, PrincipalPart, Canister, Tense, Voice, Mood, Person, Number, Gender } from 'linguistics/property';
import Property from 'linguistics/property/Property';
import HasherService from 'service/hash';
import SortedSet from 'structure/SortedSet';
import { compareStrings } from 'util/stringUtils';

const testData: Record<keyof typeof HasherService, readonly { input: Key, hash: string; }[]>
    = {
    NounKey: [{
        input: new NounKey("base", Case.VOCATIVE, Number.SINGULAR),
        hash: '["base","vocative","singular"]'
    }],
    NounFilterKey: [{
        input: new NounFilterKey({
            baseInflection: new SortedSet<string>(compareStrings, "base1", "base2"),
            case_: new SortedSet<Case>(Property.compare, Case.GENITIVE, Case.DATIVE)
        }),
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
            principalPart: new SortedSet<PrincipalPart>(
                PrincipalPart.compare,
                new PrincipalPart(Canister.FIRST, "base1"),
                new PrincipalPart(Canister.FIRST, "base2")
            ),
            tense: new SortedSet<Tense>(Property.compare, Tense.PRESENT),
            voice: new SortedSet<Voice>(Property.compare, Voice.ACTIVE, Voice.MEDIOPASSIVE),
            person: new SortedSet<Person>(Property.compare, Person.FIRST_PERSON, Person.THIRD_PERSON),
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
            tense: new SortedSet<Tense>(Property.compare, Tense.AORIST, Tense.PERFECT),
            voice: new SortedSet<Voice>(Property.compare, Voice.ACTIVE)
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
            principalPart: new SortedSet<PrincipalPart>(PrincipalPart.compare, new PrincipalPart(Canister.SECOND, "base")),
            tense: new SortedSet<Tense>(Property.compare, Tense.FUTURE),
            case_: new SortedSet<Case>(Property.compare, Case.NOMINATIVE, Case.GENITIVE),
            number: new SortedSet<Number>(Property.compare, Number.PLURAL)
        }),
        hash: '[[["second","base"]],["future"],null,["nominative","genitive"],["plural"]]'
    }, {
        input: new ParticipleFilterKey({}),
        hash: '[null,null,null,null,null]'
    }],
    AdjectiveKey: [{
        input: new AdjectiveKey(
            "base",
            Gender.MASCULINE,
            Case.ACCUSATIVE,
            Number.PLURAL
        ),
        hash: '["base","masculine","accusative","plural"]'
    }],
    AdjectiveFilterKey: [{
        input: new AdjectiveFilterKey({
            baseInflection: new SortedSet<string>(compareStrings, "base1", "base2"),
            case_: new SortedSet<Case>(Property.compare, Case.DATIVE, Case.GENITIVE, Case.VOCATIVE),
            number: new SortedSet<Number>(Property.compare, Number.SINGULAR)
        }),
        hash: '[["base1","base2"],null,["genitive","dative","vocative"],["singular"]]'
    }]
};

export default testData;