
import { augment } from '#/service/inflection/transform';
import { temporalAugmentOf } from '#/service/inflection/transform/augment';

import testData from './InflectionTransform.testdata';

describe("Inflection Transform Service", () => {

    test("augment()", () => {
        Object.entries(testData.augments).forEach(([verb, augmentedForm]) => {
            expect(augment(verb)).toBe(augmentedForm);
        });
    });

    test("temporalAugmentOf()", () => {
        testData.temporalAugments.forEach(([vowel, lengthened]) => {
            expect(temporalAugmentOf(vowel)).toBe(lengthened);
        });
    });
});