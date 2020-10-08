import { default as inflectionFunction } from "../../composition/composeAdjectiveInflectionFunction";

/**
 * Inflections functions for third-inflection adjectives, i.e. third declension, sibilant-stem adjectives.
 *
 * @since 05/10/20
 */
const thirdInflectionFunctions = {
  third: {
    masculine: {
      nominative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      genitive: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      dative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      accusative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      vocative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      }
    },
    feminine: {
      nominative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      genitive: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      dative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      accusative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      vocative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      }
    },
    neuter: {
      nominative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      genitive: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      dative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      accusative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      },
      vocative: {
        singular: inflectionFunction(),
        plural: inflectionFunction()
      }
    },
  }
};

export default thirdInflectionFunctions;