import letters, { vowels, consonants } from '../src/alphabet/letters';

describe("lettes.ts", () => {
    test("letters, vowels & consonants objects", () => {
        expect(Object.keys(letters)).toHaveLength(24);
        Object.values(letters).forEach(({ type }) => {
            expect(["vowel", "consonant"]).toContain(type)
        })
        expect(Object.keys(vowels)).toHaveLength(7);
        expect(Object.keys(consonants)).toHaveLength(17);
    });

    /** @todo add tests for isVowel(), isGreekLetter(), etc. with accented letter tests. */
});