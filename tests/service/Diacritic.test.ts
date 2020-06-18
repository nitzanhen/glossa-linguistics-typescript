import '#/global/String';
import { addDiacriticVowel, addDiacritic } from '#/service/diacritic';

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

    });

    test("Enforcing general accenting rules", () => {

    });

});