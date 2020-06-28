import { parameterized as multipleInflections } from '#/util/functionUtils';

import { composeVerbInflectionFunction as inflectionFunction } from '../../transform';

//Used as syntactic sugar to shorten { addAugment: true } to { addAugment } when calling inflectionFunction(),
//Similar to React's boolean props. 
const addAugment = true;

/**
 * Verb inflection function collection.
 *
 * Order is tense -> mood -> voice -> number -> person.
 *
 * @since 19/05/20
 */
const VerbInflectionFunctions = {
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
  future: {
    indicative: {
      active: {
        singular: {
          first: inflectionFunction('ω'),
          second: inflectionFunction('εις'),
          third: inflectionFunction('ει'),
        },
        plural: {
          first: inflectionFunction('ομεν'),
          second: inflectionFunction('ετε'),
          third: inflectionFunction('ουσι(ν)'),
        },
      },
      middle: {
        singular: {
          first: inflectionFunction('ομαι'),
          second: multipleInflections(
            inflectionFunction('ῃ'),
            inflectionFunction('ει')
          ),
          third: inflectionFunction('εται'),
        },
        plural: {
          first: inflectionFunction('ομεθα'),
          second: inflectionFunction('εσθε'),
          third: inflectionFunction('ονται'),
        },
      },
      passive: {
        singular: {
          first: inflectionFunction('ομαι'),
          second: multipleInflections(
            inflectionFunction('ῃ'),
            inflectionFunction('ει')
          ),
          third: inflectionFunction('εται'),
        },
        plural: {
          first: inflectionFunction('ομεθα'),
          second: inflectionFunction('εσθε'),
          third: inflectionFunction('ονται'),
        },
      },
    },
    optative: {
      active: {
        singular: {
          first: inflectionFunction('οιμι'),
          second: inflectionFunction('οις'),
          third: inflectionFunction('οι'),
        },
        plural: {
          first: inflectionFunction('οιμεν'),
          second: inflectionFunction('οιτε'),
          third: inflectionFunction('οιεν'),
        },
      },
      middle: {
        singular: {
          first: inflectionFunction('οιμην'),
          second: inflectionFunction('οιο'),
          third: inflectionFunction('οιτο'),
        },
        plural: {
          first: inflectionFunction('οιμεθα'),
          second: inflectionFunction('οισθε'),
          third: inflectionFunction('οιντο'),
        },
      },
      passive: {
        singular: {
          first: inflectionFunction('οιμην'),
          second: inflectionFunction('οιο'),
          third: inflectionFunction('οιτο'),
        },
        plural: {
          first: inflectionFunction('οιμεθα'),
          second: inflectionFunction('οισθε'),
          third: inflectionFunction('οιντο'),
        },
      },
    },
  },
  aorist: {
    first: {
      indicative: {
        active: {
          singular: {
            first: inflectionFunction('α', { addAugment }),
            second: inflectionFunction('ας', { addAugment }),
            third: inflectionFunction('ε', { addAugment }),
          },
          plural: {
            first: inflectionFunction('αμεν', { addAugment }),
            second: inflectionFunction('ατε', { addAugment }),
            third: inflectionFunction('αν', { addAugment }),
          },
        },
        middle: {
          singular: {
            first: inflectionFunction('αμην', { addAugment }),
            second: inflectionFunction('ω', { addAugment }),
            third: inflectionFunction('ατο', { addAugment }),
          },
          plural: {
            first: inflectionFunction('αμεθα', { addAugment }),
            second: inflectionFunction('ασθε', { addAugment }),
            third: inflectionFunction('αντο', { addAugment }),
          },
        },
        passive: {
          singular: {
            first: inflectionFunction('ην', { addAugment }),
            second: inflectionFunction('ης', { addAugment }),
            third: inflectionFunction('η', { addAugment }),
          },
          plural: {
            first: inflectionFunction('ημεν', { addAugment }),
            second: inflectionFunction('ητε', { addAugment }),
            third: inflectionFunction('ησαν', { addAugment }),
          },
        },
      },
      subjunctive: {
        active: {
          singular: {
            first: inflectionFunction('ω'),
            second: inflectionFunction('ῃς'),
            third: inflectionFunction('ῃ'),
          },
          plural: {
            first: inflectionFunction('ωμεν'),
            second: inflectionFunction('ητε'),
            third: inflectionFunction('ωσι(ν)'),
          },
        },
        middle: {
          singular: {
            first: inflectionFunction('ωμαι'),
            second: inflectionFunction('ῃ'),
            third: inflectionFunction('ηται'),
          },
          plural: {
            first: inflectionFunction('ωμεθα'),
            second: inflectionFunction('ησθε'),
            third: inflectionFunction('ωνται'),
          },
        },
        passive: {

        }
      },
      optative: {
        active: {

        },
        middle: {

        },
        passive: {
          singular: {
            first: inflectionFunction('ην', { addAugment }),
            second: inflectionFunction('ης', { addAugment }),
            third: inflectionFunction('η', { addAugment }),
          },
          plural: {
            first: inflectionFunction('ημεν', { addAugment }),
            second: inflectionFunction('ητε', { addAugment }),
            third: inflectionFunction('ησαν', { addAugment }),
          },
        },
      },
      imperative: {
        active: {

        },
        middle: {

        },
        passive: {

        }
      }
    },
    second: {
      indicative: {
        active: {
        },
        middle: {
        },
        passive: {
        },
        subjunctive: {
          active: {
          },
          middle: {
          },
          passive: {

          }
        },
        optative: {
          active: {

          },
          middle: {

          },
          passive: {

          }
        },
        imperative: {
          active: {

          },
          middle: {

          },
          passive: {

          }
        }
      },
    },
  },
  perfect: {
    indicative: {
      active: {
      },
      mediopassive: {
      },
    },
    subjunctive: {
      active: {
      },
      mediopassive: {
      },
    },
    optative: {
      active: {
      },
      mediopassive: {
      },
    },
    imperative: {
      active: {
      },
      mediopassive: {
      },
    }
  },
  pluperfect: {
    indicative: {
      active: {
      },
      mediopassive: {
      },
    },
  },
  future_perfect: {
    indicative: {
      active: {
      },
      mediopassive: {
      },
    },
    optative: {
      active: {
      },
      mediopassive: {
      },
    },
  },
};

export default VerbInflectionFunctions;
