import '#/global/String';
import { splitIntoSyllables, syllableType } from '#/linguistics/alphabet/syllables';
import testData from './syllables.testdata';

describe("syllables.ts", () => {
    test("Splitting into syllables", () => {
        for (const [word, { syllables }] of Object.entries(testData)) {
            expect(splitIntoSyllables(word)).toEqual(syllables);
        }
    });

    test("Categorizing syllable types", () => {
        for (const [word, { syllableTypes }] of Object.entries(testData)) {
            console.log(word, syllableTypes);
            syllableTypes.forEach((type, syllableIndex) => {
                expect(syllableType(word, syllableIndex)).toBe(type);
            });
        }
    });
});