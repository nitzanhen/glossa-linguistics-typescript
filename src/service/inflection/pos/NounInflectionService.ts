import { Case, Number, Declension, Gender } from '../../../linguistics/property';

/**
 * Collection of functions dealing with Greek noun inflections.
 * 
 * @since 04/05/20
 */

/**
 * Retrieves the root of a Greek noun, for inflecting nouns.
 * Expects to receive the nominative singular form of the noun.
 * 
 * @param nomSg the nominative singular form of the noun
 * @returns the root of the noun, as a string.
 */
export function getRootOf(nomSg: string): string {
    throw new Error('not implemented.');
}

export const inflection_suffixes = {
    first_declension: {
        feminine: {
            alpha: {
                long: {
                    nominative: { singular: "ᾱ", plural: "αι" },
                    genitive: { singular: "ᾱς", plural: "ων" },
                    dative: { singular: "ᾳ", plural: "αις" },
                    accusative: { singular: "ᾱν", plural: "ᾱς" },
                    vocative: { singular: "ᾱ", plural: "αι" }
                },
                short: {
                    nominative: { singular: "α", plural: "αι" },
                    genitive: { singular: "ᾱς", plural: "ων" },
                    dative: { singular: "ᾳ", plural: "αις" },
                    accusative: { singular: "αν", plural: "ᾱς" },
                    vocative: { singular: "α", plural: "αι" }
                }
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

            },
            eta: {

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
    third_declension: {
        masculine: {

        },
        feminine: {

        },
        neuter: {

        }
    }
};

/**
 * Inflects the given root, according to the given parameters
 * 
 * @param root the root on top of which to inflect.
 * @param declension the noun's declension.
 * @param case_ the case by which to inflect.
 * @param number the number by which to inflect.
 * @returns the inflected form.
 * 
 * @todo support for contract verbs.
 */
export function inflect(root: string, declension: Declension, gender: Gender, case_: Case, number: Number): string {
    throw new Error('not implemented.');
}