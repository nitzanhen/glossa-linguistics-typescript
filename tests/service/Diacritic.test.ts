import { Diacritic } from '#/linguistics/alphabet/diacritics';
import { addDiacriticVowel } from '#/service/diacritic';


const testData = {
    addDiacriticVowel: [
        ["ἀ", "acute", "ἄ"],
        ["ἀ", "circumflex", "ἆ"],
        ["έ", "rough_breathing", "ἕ"],
        ["ὴ", "smooth_breathing", "ἢ"],
        ["ω", "iota_subscript", "ῳ"],
        ["ί", "diaeresis", "ΐ"],
        ["ὦ", "iota_subscript", "ᾦ"],
        ["ά", "macron", "ᾱ́"]
    ] as [string, Diacritic, string][]
};

describe("Diacritic service", () => {
    test("Adding diacritics to vowels", () => {
        testData.addDiacriticVowel.forEach(([input, diacritic, result]) => {
            expect(addDiacriticVowel(input, diacritic)).toBe(result);
        });
    });

    test("Adding diacritics to words", () => {

    });

    test("Transforming diacritics", () => {

    });

    test("Enforcing general accenting rules", () => {

    });

});