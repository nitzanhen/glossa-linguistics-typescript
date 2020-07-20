import { parameterized as multipleInflections, compose } from '#/util/functionUtils';

import { composeVerbInflectionFunction as inflectionFunction, contractor } from '../../transform';
import suffixer from '../../transform/suffixer';

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
      middle: {
        singular: {
          first: inflectionFunction('ομαι', { endings: "contract" }),
          second: multipleInflections(
            inflectionFunction('ῃ', { endings: "contract" }),
            inflectionFunction('ει', { endings: "contract" })
          ),
          third: inflectionFunction('εται', { endings: "contract" }),
        },
        plural: {
          first: inflectionFunction('ομεθα', { endings: "contract" }),
          second: inflectionFunction('εσθε', { endings: "contract" }),
          third: inflectionFunction('ονται', { endings: "contract" }),
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
          singular: {
            first: compose(
              suffixer("έ"),
              contractor("ω")
            ),
            second: compose(
              suffixer("έ"),
              contractor("ῃς")
            ),
            third: compose(
              suffixer("έ"),
              contractor("ῃ")
            ),
          },
          plural: {
            first: compose(
              suffixer("έ"),
              contractor("ωμεν")
            ),
            second: compose(
              suffixer("έ"),
              contractor("ητε")
            ),
            third: compose(
              suffixer("έ"),
              contractor("ωσι(ν)")
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
          }
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
          }
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
          }
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
                suffixer("έ"),
                contractor("ω")
              ),
              second: compose(
                suffixer("έ"),
                contractor("ῃς")
              ),
              third: compose(
                suffixer("έ"),
                contractor("ῃ")
              ),
            },
            plural: {
              first: compose(
                suffixer("έ"),
                contractor("ωμεν")
              ),
              second: compose(
                suffixer("έ"),
                contractor("ητε")
              ),
              third: compose(
                suffixer("έ"),
                contractor("ωσι(ν)")
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
              second: inflectionFunction("οῦ", { addRecessiveAccent: false }),
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
