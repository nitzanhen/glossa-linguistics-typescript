import { parameterized as multipleInflections, compose } from '#/util/functionUtils';

import { composeVerbInflectionFunction as inflectionFunction } from '../../transform';
import suffixer from '../../transform/suffixer';
import { ultimaIndex, penultIndex } from '../../../../linguistics/alphabet/syllables';
import { stripAccents } from '../../../../linguistics/alphabet/diacritics';

//Used as syntactic sugar to shorten { addAugment: true } to { addAugment } when calling inflectionFunction(),
//Similar to React's boolean props. 
const addAugment = true;

/**
 * Inflection functions for the aorist aspect inflections - first & ssecond aorist.
 * @see Readme.md under the same directory
 * 
 * @since 23/07/20
 */
const aoristInflectionFunctions = {
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
          infinitive: inflectionFunction("αι", { accenting: penultIndex() })
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
          infinitive: inflectionFunction("ασθαι")
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
          infinitive: inflectionFunction("ηναι", { accenting: penultIndex() })
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
          singular: {
            first: compose(
              suffixer("ε"),
              inflectionFunction('ω', { endings: "contract" })
            ),
            second: compose(
              suffixer("ε"),
              inflectionFunction('ῃς', { endings: "contract" })
            ),
            third: compose(
              suffixer("ε"),
              inflectionFunction('ῃ', { endings: "contract" })
            ),
          },
          plural: {
            first: compose(
              suffixer("ε"),
              inflectionFunction('ωμεν', { endings: "contract" })
            ),
            second: compose(
              suffixer("ε"),
              inflectionFunction('ητε', { endings: "contract" })
            ),
            third: compose(
              suffixer("ε"),
              inflectionFunction('ωσι(ν)', { endings: "contract" })
            ),
          },
        }
      },
      optative: {
        active: {
          singular: {
            first: inflectionFunction("σαιμι"),
            second: multipleInflections(
              inflectionFunction("σειας"),
              inflectionFunction("σαις"),
            ),
            third: multipleInflections(
              inflectionFunction("σειε(ν)"),
              inflectionFunction("σαι"),
            )
          },
          plural: {
            first: inflectionFunction("σαιμεν"),
            second: inflectionFunction("σαιτε"),
            third: multipleInflections(
              inflectionFunction("σειαν"),
              inflectionFunction("σαιεν"),
            )
          }
        },
        middle: {
          singular: {
            first: inflectionFunction("σαιμην"),
            second: inflectionFunction("σαιο"),
            third: inflectionFunction("σαιτο"),
          },
          plural: {
            first: inflectionFunction("σαιμεθα"),
            second: inflectionFunction("σαισθε"),
            third: inflectionFunction("σαιντο"),
          }
        },
        passive: {
          singular: {
            first: inflectionFunction("ειην"),
            second: inflectionFunction("ειης"),
            third: inflectionFunction("ειη"),
          },
          plural: {
            first: inflectionFunction("ειημεν"),
            second: inflectionFunction("ειητε"),
            third: inflectionFunction("ειησαν"),
          }
        },
      },
      imperative: {
        active: {
          singular: {
            second: inflectionFunction("ον"),
            third: inflectionFunction("ατω"),
          },
          plural: {
            second: inflectionFunction("ατε"),
            third: inflectionFunction("αντων"),
          },
        },
        middle: {
          singular: {
            second: inflectionFunction("αι"),
            third: inflectionFunction("ασθω"),
          },
          plural: {
            second: inflectionFunction("ασθε"),
            third: inflectionFunction("ασθων"),
          },
        },
        passive: {
          singular: {
            second: inflectionFunction("ητι"),
            third: inflectionFunction("ητω"),
          },
          plural: {
            second: inflectionFunction("ητε"),
            third: inflectionFunction("εντων"),
          },
        }
      }
    },
    second: {
      indicative: {
        active: {
          singular: {
            first: inflectionFunction("ον", { addAugment }),
            second: inflectionFunction("ες", { addAugment }),
            third: inflectionFunction("ε(ν)", { addAugment }),
          },
          plural: {
            first: inflectionFunction("ομεν", { addAugment }),
            second: inflectionFunction("ετε", { addAugment }),
            third: inflectionFunction("ον", { addAugment }),
          },
          infinitive: compose(
            stripAccents,
            inflectionFunction("εῖν", { accenting: null })
          )
        },
        middle: {
          singular: {
            first: inflectionFunction("ομην", { addAugment }),
            second: inflectionFunction("ου", { addAugment }),
            third: inflectionFunction("ετο", { addAugment }),
          },
          plural: {
            first: inflectionFunction("ομεθα", { addAugment }),
            second: inflectionFunction("εσθε", { addAugment }),
            third: inflectionFunction("οντο", { addAugment }),
          },
          infinitive: inflectionFunction("εσθαι", { accenting: penultIndex() })
        },
        passive: {
          singular: {
            first: inflectionFunction("ην", { addAugment }),
            second: inflectionFunction("ης", { addAugment }),
            third: inflectionFunction("η", { addAugment }),
          },
          plural: {
            first: inflectionFunction("ημεν", { addAugment }),
            second: inflectionFunction("ητε", { addAugment }),
            third: inflectionFunction("ησαν", { addAugment }),
          },
          infinitive: inflectionFunction("ηναι", { accenting: penultIndex() })
        },
        subjunctive: {
          active: {
            singular: {
              first: inflectionFunction("ω"),
              second: inflectionFunction("ῃς"),
              third: inflectionFunction("ῃ"),
            },
            plural: {
              first: inflectionFunction("ωμεν"),
              second: inflectionFunction("ητε"),
              third: inflectionFunction("ωσι(ν)"),
            }
          },
          middle: {
            singular: {
              first: inflectionFunction("ωμαι"),
              second: inflectionFunction("ῃ"),
              third: inflectionFunction("ηται"),
            },
            plural: {
              first: inflectionFunction("ωμεθα"),
              second: inflectionFunction("ησθε"),
              third: inflectionFunction("ωνται"),
            }
          },
          passive: {
            singular: {
              first: compose(
                suffixer("ε"),
                inflectionFunction("ω", { endings: "contract" })
              ),
              second: compose(
                suffixer("ε"),
                inflectionFunction("ῃς", { endings: "contract" })
              ),
              third: compose(
                suffixer("ε"),
                inflectionFunction("ῃ", { endings: "contract" })
              ),
            },
            plural: {
              first: compose(
                suffixer("ε"),
                inflectionFunction("ωμεν", { endings: "contract" })
              ),
              second: compose(
                suffixer("ε"),
                inflectionFunction("ητε", { endings: "contract" })
              ),
              third: compose(
                suffixer("ε"),
                inflectionFunction("ωσι(ν)", { endings: "contract" })
              ),
            },
          }
        },
        optative: {
          active: {
            singular: {
              first: inflectionFunction("οιμι"),
              second: inflectionFunction("οις"),
              third: inflectionFunction("οι"),
            },
            plural: {
              first: inflectionFunction("οιμεν"),
              second: inflectionFunction("οιτε"),
              third: inflectionFunction("οιεν"),
            }
          },
          middle: {
            singular: {
              first: inflectionFunction("οιμην"),
              second: inflectionFunction("οιο"),
              third: inflectionFunction("οιτο"),
            },
            plural: {
              first: inflectionFunction("οιμεθα"),
              second: inflectionFunction("οισθε"),
              third: inflectionFunction("οιντο"),
            }
          },
          passive: {
            singular: {
              first: inflectionFunction("ειην"),
              second: inflectionFunction("ειης"),
              third: inflectionFunction("ειη"),
            },
            plural: {
              first: inflectionFunction("ειημεν"),
              second: inflectionFunction("ειητε"),
              third: inflectionFunction("ειησαν"),
            }
          },
        },
        imperative: {
          active: {
            singular: {
              second: inflectionFunction("ε"),
              third: inflectionFunction("ετω"),
            },
            plural: {
              second: inflectionFunction("ετε"),
              third: inflectionFunction("οντων"),
            }
          },
          middle: {
            singular: {
              second: inflectionFunction("ου", { accenting: ultimaIndex() }),
              third: inflectionFunction("εσθω"),
            },
            plural: {
              second: inflectionFunction("εσθε"),
              third: inflectionFunction("εσθων"),
            }
          },
          passive: {
            singular: {
              second: inflectionFunction("ηθι"),
              third: inflectionFunction("ητω"),
            },
            plural: {
              second: inflectionFunction("ητε"),
              third: inflectionFunction("εντων"),
            }
          }
        }
      },
    },
  },
};

export default aoristInflectionFunctions;