
import { splitIntoSyllables, syllableType, vowelPartOf } from '#/linguistics/alphabet/syllables';

import testData from './syllables.testdata';

describe("syllables.ts", () => {
    test("Splitting into syllables", () => {
        for (const [word, { syllables }] of Object.entries(testData)) {
            expect(splitIntoSyllables(word)).toEqual(syllables);
        }
    });

    test("Categorizing syllable types", () => {
        for (const [word, { syllableTypes }] of Object.entries(testData)) {
            syllableTypes.forEach((type, syllableIndex) => {
                expect(syllableType(word, syllableIndex)).toBe(type);
            });
        }
    });

    test("Extracting the vowel part", () => {
        for (const { syllables, vowelParts } of Object.values(testData)) {
            expect(vowelParts.length).toBe(syllables.length);
            const length = vowelParts.length;
            for (let i = 0; i < length; i++) {
                expect(vowelPartOf(syllables[i])).toBe(vowelParts[i]);
            }
        }
    });
});