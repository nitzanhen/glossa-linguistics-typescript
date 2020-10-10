import { default as inflectionFunction } from "../../composition/composeAdjectiveInflectionFunction";

/**
 * Inflections functions for second-inflection adjectives, i.e. us-eia-u adjectives.
 * 
 * I have not found an example of an adjective with us-eia-u endings whose accent is not consistently on the
 * suffixes; thus I shall be assuming it always is.
 * In the case that I'm wrong, the inflection functions here should probably be more complex - implementing logic somewhat similar
 * to the logic of contracting verbs, in which the uncontracted form is first created, then contracted.
 *
 * @since 05/10/20
 */
const secondInflectionFunctions = {
  second: {
    masculine: {
      nominative: {
        singular: inflectionFunction("ύς"),
        plural: inflectionFunction("εῖς")
      },
      genitive: {
        singular: inflectionFunction("έος"),
        plural: inflectionFunction("έων")
      },
      dative: {
        singular: inflectionFunction("εῖ"),
        plural: inflectionFunction("έσι(ν)")
      },
      accusative: {
        singular: inflectionFunction("ύν"),
        plural: inflectionFunction("εῖς")
      },
      vocative: {
        singular: inflectionFunction("ύ"),
        plural: inflectionFunction("εῖς")
      }
    },
    feminine: {
      nominative: {
        singular: inflectionFunction("εῖα"),
        plural: inflectionFunction("εῖαι")
      },
      genitive: {
        singular: inflectionFunction("εῖᾱς"),
        plural: inflectionFunction("ειῶν")
      },
      dative: {
        singular: inflectionFunction("είᾱͅ"),
        plural: inflectionFunction("είαις")
      },
      accusative: {
        singular: inflectionFunction("εῖαν"),
        plural: inflectionFunction("είᾱς")
      },
      vocative: {
        singular: inflectionFunction("εῖα"),
        plural: inflectionFunction("εῖαι")
      }
    },
    neuter: {
      nominative: {
        singular: inflectionFunction("ύ"),
        plural: inflectionFunction("έα")
      },
      genitive: {
        singular: inflectionFunction("έος"),
        plural: inflectionFunction("έων")
      },
      dative: {
        singular: inflectionFunction("εῖ"),
        plural: inflectionFunction("έσι(ν)")
      },
      accusative: {
        singular: inflectionFunction("ύ"),
        plural: inflectionFunction("έα")
      },
      vocative: {
        singular: inflectionFunction("ύ"),
        plural: inflectionFunction("έα")
      }
    },
  }
};

export default secondInflectionFunctions;