import { splitIntoSyllables } from '#/linguistics/alphabet/syllables';

describe("syllables.ts", () => {
    test("Splitting into syllables", () => {
        const testData = {
            'φῦλα': ['φῦ', 'λα'],
            'φύλλα': ['φύλ', 'λα'],
            'ἅκρον': ['ἅ', 'κρον'],
            'ἄρχων': ['ἄρ', 'χων'],
            'οἶστρος': ['οἶ', 'στρος'],
            'ἄνθραξ': ['ἄν', 'θραξ'],
            'τάξις': ['τά', 'ξις'],
        };

        for(const [word, syllables] of Object.entries(testData)) {
            expect(splitIntoSyllables(word)).toEqual(syllables)
        }
    });
});