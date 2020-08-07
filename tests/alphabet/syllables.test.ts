
import { splitIntoSyllables, syllableType, vowelPartOf, ultimaIndex, penultIndex, antepenultIndex } from '#/linguistics/alphabet/syllables';

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

                //Checking negative index access
                const { length } = syllableTypes;
                if (length >= 1) {
                    expect(syllableType(word, -1)).toBe(syllableTypes[ultimaIndex(length)]);
                }
                if (length >= 2) {
                    expect(syllableType(word, -2)).toBe(syllableTypes[penultIndex(length)]);
                }
                if (length >= 3) {
                    expect(syllableType(word, -3)).toBe(syllableTypes[antepenultIndex(length)]);
                }
            });
        }
    });

    test("Extracting the vowel part", () => {
        for (const { syllables, vowelParts } of Object.values(testData)) {
            expect(vowelParts.length).toBe(syllables.length);
            const { length } = vowelParts;
            for (let i = 0; i < length; i++) {
                expect(vowelPartOf(syllables[i])).toBe(vowelParts[i]);
            }
        }
    });

    test("ultimaIndex(), penultIndex(), antepenultIndex()", () => {
        // Without length parameter
        expect(ultimaIndex()).toBe(-1);
        expect(penultIndex()).toBe(-2);
        expect(antepenultIndex()).toBe(-3);

        // With length parameter
        [1, 2, 3, 4].forEach(length => {
            expect(ultimaIndex(length)).toBe(length - 1);
            expect(penultIndex(length)).toBe(length - 2);
            expect(antepenultIndex(length)).toBe(length - 3);
        });
    });
});