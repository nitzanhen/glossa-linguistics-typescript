import '#/global/String';
import { augment } from '#/service/inflection/transform';
import { temporalAugmentOf } from '#/service/inflection/transform/augment';

describe("Inflection Transform Service", () => {
    test("augment()", () => {
        const testData = {
            "ἄγ": "ἤγ",
            "ἀείρ": "ἠείρ",
            "αἰσθάν": "ᾐσθάν",
            "βασιλεύ": "ἐβασιλεύ",
            "δεύ": "ἐδεύ",
            "διδάσκ": "ἐδιδάσκ",
            "παιδεύ": "ἐπαιδεύ",
            "ῥίπτ": "ἐρρίπτ",
            "ῥάπτ": "ἐρράπτ",
            //Rough breathing is on upsilon.
            "ὑμνέ": "ῡ̔μνέ",
            "ὀρῑ́ν": "ὠρῑ́ν",
            "ἡσυχάζ": "ἡσυχάζ",
            //All diacritics are on the iota.
            "ἴσχ": "ῑ̓́σχ"
        };

        Object.entries(testData).forEach(([verb, augmentedForm]) => {
            expect(augment(verb)).toBe(augmentedForm);
        });
    });

    test("temporalAugmentOf()", () => {
        const testData = [
            ['α', 'η'], ['ε', 'η'], ['η', 'η'],
            ['ι', 'ῑ'], ['ῑ', 'ῑ'],
            ['ο', 'ω'], ['ω', 'ω'],
            ['υ', 'ῡ'], ['ῡ', 'ῡ'],
            ['αι', 'ῃ'], ['ει', 'ῃ'], ['ᾳ', 'ῃ'], ['ῃ', 'ῃ'],
            ['αυ', 'ηυ'], ['ευ', 'ηυ'], ['ηυ', 'ηυ'],
            ['οι', 'ῳ'], ['ῳ', 'ῳ'],
            ['υι', 'υι'], ['ου', 'ου'],
            ['ῗ', 'ῗ']
        ];

        testData.forEach(([vowel, lengthened]) => {
            expect(temporalAugmentOf(vowel)).toBe(lengthened);
        });
    });
});