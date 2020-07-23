import { parameterized as multipleInflections, compose } from '#/util/functionUtils';

import { composeVerbInflectionFunction as inflectionFunction, contractor } from '../../transform';
import suffixer from '../../transform/suffixer';

//Used as syntactic sugar to shorten { addAugment: true } to { addAugment } when calling inflectionFunction(),
//Similar to React's boolean props. 
const addAugment = true;

/**
 * Inflection functions for the perfect aspect inflections - perfect, pluperfect, future perfect.
 * @see Readme.md under the same directory
 * 
 * @since 23/07/20
 */
const perfectInflectionFunctions = {
  perfect: {
    active: {
      indicative: {
        singular: {
          first: inflectionFunction("α"),
          second: inflectionFunction("ας"),
          third: inflectionFunction("ε(ν)")
        },
        plural: {
          first: inflectionFunction("αμεν"),
          second: inflectionFunction("ατε"),
          third: inflectionFunction("ᾱσι(ν)")
        }
      },
      subjunctive: {
        /** RARE and periphrastic. */
      },
      optative: {
        /** RARE and periphrastic. */
      },
      imperative: {
        /** VERY RARE */
      }
    },
    mediopassive: {
      indicative: {
        singular: {
          first: inflectionFunction("μαι", { endings: "euphonize" }),
          second: inflectionFunction("σαι", { endings: "euphonize" }),
          third: inflectionFunction("ται", { endings: "euphonize" })
        },
        plural: {
          first: inflectionFunction("μεθα", { endings: "euphonize" }),
          second: inflectionFunction("σθε", { endings: "euphonize" }),
          //TODO perhiphrastic inflections
          //third: inflectionFunction("", { endings: "euphonize" })
        }
      },
      subjunctive: {
        /** RARE and periphrastic. */
      },
      optative: {
        /** RARE and periphrastic. */
      },
      imperative: {
        /** VERY RARE */
      }
    },
  },
  pluperfect: {
    active: {
      indicative: {
        singular: {
          first: inflectionFunction("η"),
          second: inflectionFunction("ης"),
          third: inflectionFunction("ει(ν)")
        },
        plural: {
          first: inflectionFunction("εμεν"),
          second: inflectionFunction("ετε"),
          third: inflectionFunction("εσαν")
        },
      }
    },
    mediopassive: {
      indicative: {
        singular: {
          first: inflectionFunction("μην", { endings: "euphonize" }),
          second: inflectionFunction("σο", { endings: "euphonize" }),
          third: inflectionFunction("το", { endings: "euphonize" })
        },
        plural: {
          first: inflectionFunction("μεθα", { endings: "euphonize" }),
          second: inflectionFunction("σθε", { endings: "euphonize" }),
          //TODO perhiphrastic inflections
          //third: inflectionFunction("", { endings: "euphonize" })
        }
      }
    },
  },
  future_perfect: {
    //RARE, peripherastic inflections should be implemented beforehand.
  },
};

export default perfectInflectionFunctions;