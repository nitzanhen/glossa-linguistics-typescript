import { parameterized as multipleInflections } from '#/util/functionUtils';

import { composeVerbInflectionFunction as inflectionFunction } from '../../transform';

//Used as syntactic sugar to shorten { addAugment: true } to { addAugment } when calling inflectionFunction(),
//Similar to React's boolean props. 
const addAugment = true;

/**
 * Inflection functions for the present aspect inflections - present, imperfect.
 * @see Readme.md under the same directory
 * 
 * @since 23/07/20
 */
const presentInflectionFunctions = {
  present: {
    indicative: {
      active: {
        singular: {
          first: inflectionFunction('ω', { endings: "contract" }),
          second: inflectionFunction('εις', { endings: "contract" }),
          third: inflectionFunction('ει', { endings: "contract" }),
        },
        plural: {
          first: inflectionFunction('ομεν', { endings: "contract" }),
          second: inflectionFunction('ετε', { endings: "contract" }),
          third: inflectionFunction('ουσι(ν)', { endings: "contract" }),
        },
      },
      mediopassive: {
        singular: {
          first: inflectionFunction('ομαι', { endings: "contract" }),
          second: multipleInflections(
            inflectionFunction('ῃ', { endings: "contract" }),
            inflectionFunction('ει', { endings: "contract" })
          ),
          third: inflectionFunction('ομαι', { endings: "contract" }),
        },
        plural: {
          first: inflectionFunction('ομεν', { endings: "contract" }),
          second: inflectionFunction('ετε', { endings: "contract" }),
          third: inflectionFunction('ον', { endings: "contract" }),
        },
      },
    },
    subjunctive: {
      active: {
        singular: {
          first: inflectionFunction('ω', { endings: "contract" }),
          second: inflectionFunction('ῃς', { endings: "contract" }),
          third: inflectionFunction('ῃ', { endings: "contract" }),
        },
        plural: {
          first: inflectionFunction('ωμεν', { endings: "contract" }),
          second: inflectionFunction('ητε', { endings: "contract" }),
          third: inflectionFunction('ωσι(ν)', { endings: "contract" }),
        },
      },
      mediopassive: {
        singular: {
          first: inflectionFunction('ωμαι', { endings: "contract" }),
          second: inflectionFunction('ῃ', { endings: "contract" }),
          third: inflectionFunction('ηται', { endings: "contract" }),
        },
        plural: {
          first: inflectionFunction('ωμεθα', { endings: "contract" }),
          second: inflectionFunction('ησθε', { endings: "contract" }),
          third: inflectionFunction('ωνται', { endings: "contract" }),
        },
      },
    },
    optative: {
      standard: {
        active: {
          singular: {
            first: inflectionFunction('οιμι', { endings: "contract" }),
            second: inflectionFunction('οις', { endings: "contract" }),
            third: inflectionFunction('οι', { endings: "contract" }),
          },
          plural: {
            first: inflectionFunction('οιμεν', { endings: "contract" }),
            second: inflectionFunction('οιτε', { endings: "contract" }),
            third: inflectionFunction('οιεν', { endings: "contract" }),
          },
        },
        mediopassive: {
          singular: {
            first: inflectionFunction('οιμην', { endings: "contract" }),
            second: inflectionFunction('οιο', { endings: "contract" }),
            third: inflectionFunction('οιτο', { endings: "contract" }),
          },
          plural: {
            first: inflectionFunction('οιμεθα', { endings: "contract" }),
            second: inflectionFunction('οισθε', { endings: "contract" }),
            third: inflectionFunction('οιντο', { endings: "contract" }),
          },
        },
      },
      contract: {
        active: {
          singular: {
            first: multipleInflections(
              inflectionFunction('οιην', { endings: "contract" }),
              inflectionFunction('οῑμι', { endings: "contract" })
            ),
            second: multipleInflections(
              inflectionFunction('οιης', { endings: "contract" }),
              inflectionFunction('οῑς', { endings: "contract" })
            ),
            third: multipleInflections(
              inflectionFunction('οιη', { endings: "contract" }),
              inflectionFunction('οῑ', { endings: "contract" })
            )
          },
          plural: {
            first: multipleInflections(
              inflectionFunction('οῑμεν', { endings: "contract" }),
              inflectionFunction('οιημεν', { endings: "contract" })
            ),
            second: multipleInflections(
              inflectionFunction('οῑτε', { endings: "contract" }),
              inflectionFunction('οιητε', { endings: "contract" })
            ),
            third: multipleInflections(
              inflectionFunction('οιεν', { endings: "contract" }),
              inflectionFunction('οιησαν', { endings: "contract" })
            )
          },
        },
        mediopassive: {
          singular: {
            first: inflectionFunction("οῑμην", { endings: "contract" }),
            second: inflectionFunction("οῑο", { endings: "contract" }),
            third: inflectionFunction("οῑτο", { endings: "contract" }),
          },
          plural: {
            first: inflectionFunction("οῑμεθα", { endings: "contract" }),
            second: inflectionFunction("οῑσθε", { endings: "contract" }),
            third: inflectionFunction("οῑντο", { endings: "contract" }),
          },
        },
      }
    },
    imperative: {
      active: {
        singular: {
          second: inflectionFunction('ε', { endings: "contract" }),
          third: inflectionFunction('ετω', { endings: "contract" }),
        },
        plural: {
          second: inflectionFunction('ετε', { endings: "contract" }),
          third: inflectionFunction('οντων', { endings: "contract" }),
        },
      },
      mediopassive: {
        singular: {
          second: inflectionFunction('ου', { endings: "contract" }),
          third: inflectionFunction('εσθω', { endings: "contract" }),
        },
        plural: {
          second: inflectionFunction('εσθε', { endings: "contract" }),
          third: inflectionFunction('εσθων', { endings: "contract" }),
        },
      },
    },
  },
  imperfect: {
    indicative: {
      active: {
        singular: {
          first: inflectionFunction('ον', { endings: "contract", addAugment }),
          second: inflectionFunction('ες', { endings: "contract", addAugment }),
          third: inflectionFunction('ε(ν)', { endings: "contract", addAugment }),
        },
        plural: {
          first: inflectionFunction('ομεν', { endings: "contract", addAugment }),
          second: inflectionFunction('ετε', { endings: "contract", addAugment }),
          third: inflectionFunction('ον', { endings: "contract", addAugment }),
        },
      },
      mediopassive: {
        singular: {
          first: inflectionFunction('ομην', { endings: "contract", addAugment }),
          second: inflectionFunction('ου', { endings: "contract", addAugment }),
          third: inflectionFunction('ετο', { endings: "contract", addAugment }),
        },
        plural: {
          first: inflectionFunction('ομεθα', { endings: "contract", addAugment }),
          second: inflectionFunction('εσθε', { endings: "contract", addAugment }),
          third: inflectionFunction('οντο', { endings: "contract", addAugment }),
        },
      },
    }
  },
};

export default presentInflectionFunctions;