const nounInflectionSuffixes = {
    first_declension: {
        feminine: {
            alpha_long: {
                nominative: { singular: "ᾱ", plural: "αι" },
                genitive: { singular: "ᾱς", plural: "ων" },
                dative: { singular: "ᾳ", plural: "αις" },
                accusative: { singular: "ᾱν", plural: "ᾱς" },
                vocative: { singular: "ᾱ", plural: "αι" }
            },
            alpha_short: {
                nominative: { singular: "α", plural: "αι" },
                genitive: { singular: "ᾱς", plural: "ων" },
                dative: { singular: "ᾳ", plural: "αις" },
                accusative: { singular: "αν", plural: "ᾱς" },
                vocative: { singular: "α", plural: "αι" }
            },
            eta: {
                nominative: { singular: "η", plural: "αι" },
                genitive: { singular: "ης", plural: "ων" },
                dative: { singular: "ῃ", plural: "αις" },
                accusative: { singular: "ην", plural: "ᾱς" },
                vocative: { singular: "η", plural: "αι" }
            }
        },
        masculine: {
            alpha: {
                nominative: { singular: "ᾱς", plural: "αι" },
                genitive: { singular: "ου", plural: "ων" },
                dative: { singular: "ᾳ", plural: "αις" },
                accusative: { singular: "ᾱν", plural: "ᾱς" },
                vocative: { singular: "ᾱ", plural: "αι" }
            },
            eta: {
                nominative: { singular: "ης", plural: "αι" },
                genitive: { singular: "ου", plural: "ων" },
                dative: { singular: "ῃ", plural: "αις" },
                accusative: { singular: "ην", plural: "ᾱς" },
                vocative: { singular: "α", plural: "αι" }
            }
        }
    },
    second_declension: {
        masculine: {
            nominative: { singular: "ος", plural: "οι" },
            genitive: { singular: "ου", plural: "ων" },
            dative: { singular: "ῳ", plural: "οις" },
            accusative: { singular: "ον", plural: "ους" },
            vocative: { singular: "ε", plural: "οι" }
        },
        neuter: {
            nominative: { singular: "ον", plural: "α" },
            genitive: { singular: "ου", plural: "ων" },
            dative: { singular: "ῳ", plural: "οις" },
            accusative: { singular: "ον", plural: "α" },
            vocative: { singular: "ον", plural: "α" }
        }
    },
    third_declension: null /** @todo */
};

export default nounInflectionSuffixes;