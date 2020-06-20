
import { addDiacriticVowel, addDiacritic, transformDiacritic, enforceGeneralAccentRules } from '#/service/diacritic';

import testData from './Diacritic.testdata';

describe("Diacritic service", () => {
    test("Adding diacritics to vowels", () => {
        testData.addDiacriticVowel.forEach(([input, diacritic, result]) => {
            expect(addDiacriticVowel(input, diacritic)).toBe(result);
        });
    });

    test("Adding diacritics to words", () => {
        testData.addDiacritic.forEach(([input, syllableIndex, diacritic, result]) => {
            expect(addDiacritic(input, syllableIndex, diacritic)).toBe(result);
        });
    });

    test("Transforming diacritics", () => {
        testData.transformDiacritic.forEach(({ word, options, result }) => {
            expect(transformDiacritic(word, options)).toBe(result);
        });
    });

    test("Enforcing general accenting rules", () => {
        testData.enforcingGeneralAccentingRules.forEach(([input, output]) => {
            expect(enforceGeneralAccentRules(input)).toBe(output);
        });
    });

});