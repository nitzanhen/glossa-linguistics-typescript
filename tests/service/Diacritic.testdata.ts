import { Diacritic } from '#/linguistics/alphabet/diacritics';

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
    ],
    addDiacritic: [
        ['φυλα', 0, 'circumflex', 'φῦλα'],
        ['φυλα', 1, 'grave', 'φυλὰ'],
        ['ακρον', 0, 'rough_breathing', 'ἁκρον'],
        ['ἁκρον', 0, 'acute', 'ἅκρον'],
        ['οἰστρος', 0, 'circumflex', 'οἶστρος'],
        ['οῖστρος', 0, 'smooth_breathing', 'οἶστρος'],
        ['ἀρχη', 0, 'acute', 'ἄρχη'],
        ['ἀρχη', 1, 'acute', 'ἀρχή'],
        ['ἀρχη', 1, 'grave', 'ἀρχὴ'],
        ['Ἀφροδιτη', 2, 'acute', 'Ἀφροδίτη'],
        ['Ἀφροδίτη', 2, 'macron', 'Ἀφροδῑ́τη'],
        ['Ἀιδι', 0, 'acute', 'Ἀίδι'],
        ['Ἀίδι', 0, 'diaeresis', 'Ἀΐδι']
    ]
} as {
    addDiacriticVowel: [string, Diacritic, string][],
    addDiacritic: [string, number, Diacritic, string][];
};

export default testData;