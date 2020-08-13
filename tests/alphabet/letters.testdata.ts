import diacritics from 'linguistics/alphabet/diacritics';

const { iota_subscript } = diacritics;

const testData = {
    vowelTests: {
        monophthongTests: ['α', 'ε', 'η', 'ι', 'ο', 'υ', 'ω'],
        diphthongTests: ["αι", "αυ", "ει", "ευ", "ηυ", "οι", "ου", "υι", "ᾳ", "ῃ", "ῳ"],
        nonGreekTests: ['a', 'o', 'nῳ', 'αa', 'א'],
        emptyTest: "",
        nonStrictMonophthongTests: ['ά', 'ῶ', 'ἡ', 'ὄ'],
        nonStrictDiphthongTests: ['οὐ', 'οῖ', 'ῷ', 'αὶ', 'εἰ', 'οῦ'],
        malformedTests: ['ῦῦ', 'ιῷ', 'ι' + iota_subscript, 'εια', "ια", 'ωε', 'οο', 'ου' + iota_subscript]
    },
    greekTests: {
        strings: ['φῦλα', 'φύλλα', 'ἅκρον', 'ἄρχων', 'οἶστρος', 'ἄνθραξ', 'τάξις', 'ἀρχή', 'ἧττον',
            'λείψω', 'φύλαξ', 'θεός', 'θύρᾱ', 'Ποσειδῶν',
            //The acute here is on the iota, just not displayed well because of the macron
            'Ἀφροδῑ́τη',
            'Ἥφαιστος', 'Θουκῡδίδης', 'Ἀχιλλεύς', 'Τροίᾱ', 'Βαῦκις', 'Ξέρξης', 'Κύκλωψ', 'Ῥέᾱ',
            'Δίρκη', 'Ὅμηρος', 'Σωκράτης', 'Μοῦσα', 'Ζεύς', 'Ἀγαμέμνων', 'Ὠκεανός', 'Φειδίᾱς', 'Λεύκιππος',
            //Breathing and acute are on Alpha
            'Ᾱ̔́ιδης',
            'Οἰδίπους', 'Εἰλείθυια', 'Γλαύκων', 'Χάρυβδις'
        ],
        letters: [
            ["α", false, true],
            ["α", true, true],
            ["Ξ", false, true],
            ["Ξ", true, true],
            ["ᾰ", false, true],
            ["ᾰ", true, false],
            ["ᾇ", false, true],
            ["ᾇ", true, false],
            ["ς", false, true],
            ["ς", true, true],
        ] as [string, boolean, boolean][]
    },
    consonantTests: {
        nasals: ["μ", "ν"],
        liquids: ["λ", "ρ", "ῥ"],
        labials: ["π", "β", "φ"],
        dentals: ["τ", "δ", "θ"],
        palatals: ["κ", "γ", "χ"],
        doubles: ["ζ", "ξ", "ψ"],
        sibilants: ["σ", "ς"],
        nonConsonants: ["κς", "βι", "א"]
    }
};

export default testData;