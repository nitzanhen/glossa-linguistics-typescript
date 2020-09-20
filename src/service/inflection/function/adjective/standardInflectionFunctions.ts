import { default as inflectionFunction } from '../../composition/composeAdjectiveInflectionFunction';

/**
 * Inflections functions for standard adjectives, i.e. adjectives in
 * the first and second declension, with three suffix groups - for the masculine,
 * feminine and neuter.
 * This collection of inflection functions corresponds to the {@link {AdjectiveClassVariant}} value "standard".
 * 
 * @since 20/09/20
 */
const standardInflectionFunctions = {
    masculine: {
        nominative: {
            singular: inflectionFunction("ος"),
            plural: inflectionFunction("οι")
        },
        genitive: {
            singular: inflectionFunction("ου"),
            plural: inflectionFunction("ων")
        },
        dative: {
            singular: inflectionFunction("ῳ"),
            plural: inflectionFunction("οις")
        },
        accusative: {
            singular: inflectionFunction("ον"),
            plural: inflectionFunction("ους")
        },
        vocative: {
            singular: inflectionFunction("ε"),
            plural: inflectionFunction("οι")
        },
    },
    feminine: {
        alpha: {
            nominative: {
                singular: inflectionFunction('ᾱ'),
                plural: inflectionFunction('αι'),
            },
            genitive: {
                singular: inflectionFunction('ᾱς'),
                plural: inflectionFunction('ων'),
            },
            dative: {
                singular: inflectionFunction('ᾱͅ'),
                plural: inflectionFunction('αις'),
            },
            accusative: {
                singular: inflectionFunction('ᾱν'),
                plural: inflectionFunction('ᾱς'),
            },
            vocative: {
                singular: inflectionFunction('ᾱ'),
                plural: inflectionFunction('αι'),
            },
        },
        eta: {
            nominative: {
                singular: inflectionFunction("η"),
                plural: inflectionFunction("αι")
            },
            genitive: {
                singular: inflectionFunction("ης"),
                plural: inflectionFunction("ων")
            },
            dative: {
                singular: inflectionFunction("ῃ"),
                plural: inflectionFunction("αις")
            },
            accusative: {
                singular: inflectionFunction("ην"),
                plural: inflectionFunction("ᾱς")
            },
            vocative: {
                singular: inflectionFunction("η"),
                plural: inflectionFunction("αι")
            },
        }
    },
    neuter: {
        nominative: {
            singular: inflectionFunction("ον"),
            plural: inflectionFunction("α")
        },
        genitive: {
            singular: inflectionFunction("ου"),
            plural: inflectionFunction("ων")
        },
        dative: {
            singular: inflectionFunction("ῳ"),
            plural: inflectionFunction("οις")
        },
        accusative: {
            singular: inflectionFunction("ον"),
            plural: inflectionFunction("α")
        },
        vocative: {
            singular: inflectionFunction("ον"),
            plural: inflectionFunction("α")
        },
    }
}

export default standardInflectionFunctions;