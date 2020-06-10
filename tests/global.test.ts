import '#/global/String';
import { isConsonant, isVowel } from '#/linguistics/alphabet/letters';

describe("global modules", () => {
    test("String toUpperCase(), toLowerCase() override", () => {
        const testData = [
            ["ᾳ", "ᾳ"], ["ᾳε", "ᾳε"],
            ["ᾱι", "ᾳ"], ["ᾱιε", "ᾳε"],
            ["ῃ", "ῃ"], ["ῃε", "ῃε"],
            ["ηι", "ῃ"], ["ηιε", "ῃε"],
            ["ῳ", "ῳ"], ["ῳε", "ῳε"],
            ["ωι", "ῳ"], ["ωιε", "ῳε"],
            ["αϊ", "αϊ"], ["ηί", "ῄ"],
            ["ωῗ", "ωῗ"]
        ];

        testData.forEach(([input, output]) => {
            expect(input.toUpperCase().toLowerCase()).toBe(output);
        });
    });

    test("trim()", () => {
        expect('aaabbbaaa'.trim(letter => letter === 'a')).toBe('bbb');
        expect('   bbb   '.trim()).toBe('bbb');
        expect('   bbb   '.trim(undefined)).toBe('bbb');
        expect('bbb'.trim()).toBe('bbb');
        expect('ββααββ'.trim(letter => isConsonant(letter))).toBe('αα');
        expect('ββααββ'.trim(letter => isVowel(letter))).toBe('ββααββ');
    });

    test("capitalized()", () => {
        const examples: [string, string][] = [
            ["singular", "Singular"],
            ["aa_b", "Aa_b"],
            ["GREEK", "Greek"],
            ["ῳ", "Ωι"]
        ];
        examples.forEach(([string, capitalized]) => {
            expect(string.capitalize()).toBe(capitalized);
            expect(capitalized.isCapitalized()).toBe(true);
        });
    });
});