import { default as inflectionFunction } from '../../composition/composeAdjectiveInflectionFunction';

const adjectiveInflectionFunctions = {
    second_declension: {
        three_suffixed: {
            masculine: {
                singular: {
                    nominative: inflectionFunction("ος"),
                    genitive: inflectionFunction("ου"),
                    dative: inflectionFunction("ῳ"),
                    accusative: inflectionFunction("ον"),
                    vocative: inflectionFunction()
                },
                plural: {
                    nominative: inflectionFunction("η"),
                    genitive: inflectionFunction("ης"),
                    dative: inflectionFunction("ῃ"),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                }
            },
            feminine: {
                singular: {
                    nominative: inflectionFunction(),
                    genitive: inflectionFunction(),
                    dative: inflectionFunction(),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                },
                plural: {
                    nominative: inflectionFunction(),
                    genitive: inflectionFunction(),
                    dative: inflectionFunction(),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                }
            },
            neuter: {
                singular: {
                    nominative: inflectionFunction(),
                    genitive: inflectionFunction(),
                    dative: inflectionFunction(),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                },
                plural: {
                    nominative: inflectionFunction(),
                    genitive: inflectionFunction(),
                    dative: inflectionFunction(),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                }
            }
        },
        two_suffixed: {
            masculine_feminine: {
                singular: {
                    nominative: inflectionFunction(),
                    genitive: inflectionFunction(),
                    dative: inflectionFunction(),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                },
                plural: {
                    nominative: inflectionFunction(),
                    genitive: inflectionFunction(),
                    dative: inflectionFunction(),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                }
            },
            neuter: {
                singular: {
                    nominative: inflectionFunction(),
                    genitive: inflectionFunction(),
                    dative: inflectionFunction(),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                },
                plural: {
                    nominative: inflectionFunction(),
                    genitive: inflectionFunction(),
                    dative: inflectionFunction(),
                    accusative: inflectionFunction(),
                    vocative: inflectionFunction()
                }
            }
        },

    },
    third_declension: {

    },
    "us-eia-u": {

    },
    sibilant_stem: {

    }
};

export default adjectiveInflectionFunctions;