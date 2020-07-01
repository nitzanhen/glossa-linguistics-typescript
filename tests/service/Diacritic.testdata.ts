import { Diacritic } from '#/linguistics/alphabet/diacritics';
import { DiacriticTransformOptions } from '#/service/diacritic';

const testData: {
    addDiacriticVowel: [string, Diacritic, string][],
    addDiacritic: [string, number, Diacritic, string][],
    transformDiacritic: { word: string, options: DiacriticTransformOptions, result: string; }[],
    enforcingGeneralAccentingRules: [string, string][];
    accentingRecessively: [string, string, boolean, boolean?][];
} = {
    addDiacriticVowel: [
        ["ἀ", "acute", "ἄ"],
        ["ἀ", "circumflex", "ἆ"],
        ["έ", "rough_breathing", "ἕ"],
        ["ὴ", "smooth_breathing", "ἢ"],
        ["ω", "iota_subscript", "ῳ"],
        ["ί", "diaeresis", "ΐ"],
        ["ὦ", "iota_subscript", "ᾦ"],
        ["ά", "macron", "ᾱ́"],
        ["ᾱ", "circumflex", "ᾶ"],
        ["ῡ", "circumflex", "ῦ"]
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
    ],
    transformDiacritic: [
        {
            word: "φυλὰ",
            options: {
                originIndex: 1,
                destinationIndex: 0,
                destinationDiacritic: "circumflex",
            },
            result: "φῦλα"
        },
        {
            word: "φυλὰ",
            options: {
                originIndex: 1,
                originDiacritic: "grave",
                destinationIndex: 0,
                destinationDiacritic: "circumflex",
            },
            result: "φῦλα"
        },
        {
            word: "φῦλα",
            options: {
                originIndex: 0,
                originDiacritic: "circumflex",
                destinationIndex: 1,
                destinationDiacritic: "grave"
            },
            result: "φυλὰ"
        },
        {
            word: "φῦλα",
            options: {
                originIndex: 0,
                destinationIndex: 1,
                destinationDiacritic: "grave"
            },
            result: "φυλὰ"
        },
        {
            word: "ἅκρον",
            options: {
                originIndex: 0,
                originDiacritic: "rough_breathing",
                destinationIndex: 0,
                destinationDiacritic: "smooth_breathing"
            },
            result: "ἄκρον"
        },
        {
            word: "ἄκρον",
            options: {
                originIndex: 0,
                originDiacritic: "acute",
                destinationIndex: 1,
                destinationDiacritic: "grave"
            },
            result: "ἀκρὸν"
        },
        {
            word: "ἅκρον",
            options: {
                originIndex: 0,
                destinationIndex: 1,
                destinationDiacritic: "grave"
            },
            result: "ἁκρὸν"
        },
    ],
    enforcingGeneralAccentingRules: [
        ["ᾱ̓́κρον", "ἆκρον"],
        ["ἆκρον", "ἆκρον"],
        ["οἴστρος", "οἶστρος"],
        ["οἶστρος", "οἶστρος"],
        ["ἥττον", "ἧττον"],
        ["ἧττον", "ἧττον"],
        ["Πόσειδων", "Ποσείδων"],
        ["Ποσείδων", "Ποσείδων"],
        ["Ἀφρόδῑτη", "Ἀφροδῑ́τη"],
        ["Ἀφροδῑ́τη", "Ἀφροδῑ́τη"],
        ["Θουκῡ́διδης", "Θουκῡδίδης"],
        ["Θουκῡδίδης", "Θουκῡδίδης"],
        ["Ἥφαιστοι", "Ἥφαιστοι"],
        ["τήξαι", "τῆξαι"],
        ["τῆξαι", "τῆξαι"]
    ],
    accentingRecessively: [
        ["οἰστρος", "οἶστρος", false],
        ["οἰστρος", "οἶστρος", true],
        ['Ἀφροδιτη', 'Ἀφροδίτη', false],
        ['Ἀφροδιτη', 'Ἀφροδίτη', true],
        ['Ἀφροδίτη', 'Ἀφροδίτη', true],
        ['Ἀφροδίτη', 'Ἀφροδίτη', false, true],
        ["τήξαι", "τῆξαι", true],
        ["τῆξαι", "τῆξαι", true],
        ["τῆξαι", "τῆξαι", false, true],
        ["Θουκῡ́διδης", "Θουκῡδίδης", false],
        ["Θουκῡ́διδης", "Θουκῡδίδης", true],
        ["Ποσειδων", "Ποσείδων", false],
        ["Ποσειδων", "Ποσείδων", true],
    ]
};

export default testData;