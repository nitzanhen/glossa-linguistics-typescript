import { suffixer } from '../../transform';
import { multipleInflections } from '#/util/functionUtils';

/**
 * Verb inflection suffix collection.
 * Contains only the suffixes; prefixes (such as augments)
 * are not kept here.
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
          first: suffixer('ω'),
          second: suffixer('εις'),
          third: suffixer('ει'),
        },
        plural: {
          first: suffixer('ομεν'),
          second: suffixer('ετε'),
          third: suffixer('ουσι(ν)'),
        },
      },
      mediopassive: {
        singular: {
          first: suffixer('ομαι'),
          second: multipleInflections(suffixer('ῃ'), suffixer('ει')),
          third: suffixer('ομαι'),
        },
        plural: {
          first: suffixer('ομεν'),
          second: suffixer('ετε'),
          third: suffixer('ον'),
        },
      },
    },
    subjunctive: {
      active: {
        singular: {
          first: suffixer('ω'),
          second: suffixer('ῃς'),
          third: suffixer('ῃ'),
        },
        plural: {
          first: suffixer('ωμεν'),
          second: suffixer('ητε'),
          third: suffixer('ωσι(ν)'),
        },
      },
      mediopassive: {
        singular: {
          first: suffixer('ωμαι'),
          second: suffixer('ῃ'),
          third: suffixer('ηται'),
        },
        plural: {
          first: suffixer('ωμεθα'),
          second: suffixer('ησθε'),
          third: suffixer('ωνται'),
        },
      },
    },
    optative: {
      active: {
        singular: {
          first: suffixer('οιμι'),
          second: suffixer('οις'),
          third: suffixer('οι'),
        },
        plural: {
          first: suffixer('οιμεν'),
          second: suffixer('οιτε'),
          third: suffixer('οιεν'),
        },
      },
      mediopassive: {
        singular: {
          first: suffixer('οιμην'),
          second: suffixer('οιο'),
          third: suffixer('οιτο'),
        },
        plural: {
          first: suffixer('οιμεθα'),
          second: suffixer('οισθε'),
          third: suffixer('οιντο'),
        },
      },
    },
    imperative: {
      active: {
        singular: {
          second: suffixer('ε'),
          third: suffixer('ετω'),
        },
        plural: {
          second: suffixer('ετε'),
          third: suffixer('οντων'),
        },
      },
      mediopassive: {
        singular: {
          second: suffixer('ου'),
          third: suffixer('εσθω'),
        },
        plural: {
          second: suffixer('εσθε'),
          third: suffixer('εσθων'),
        },
      },
    },
  },
  imperfect: {
    active: {
      singular: {
        first: suffixer('ον'),
        second: suffixer('ες'),
        third: suffixer('ε(ν)'),
      },
      plural: {
        first: suffixer('ομεν'),
        second: suffixer('ετε'),
        third: suffixer('ον'),
      },
    },
    mediopassive: {
      singular: {
        first: suffixer('ομην'),
        second: suffixer('ου'),
        third: suffixer('ετο'),
      },
      plural: {
        first: suffixer('ομεθα'),
        second: suffixer('εσθε'),
        third: suffixer('οντο'),
      },
    },
  },
  future: {
    active: {
      singular: {
        first: suffixer('ω'),
        second: suffixer('εις'),
        third: suffixer('ει'),
      },
      plural: {
        first: suffixer('ομεν'),
        second: suffixer('ετε'),
        third: suffixer('ουσι(ν)'),
      },
    },
    middle: {
      singular: {
        first: suffixer('ομαι'),
        second: multipleInflections(suffixer('ῃ'), suffixer('ει')),
        third: suffixer('εται'),
      },
      plural: {
        first: suffixer('ομεθα'),
        second: suffixer('εσθε'),
        third: suffixer('ονται'),
      },
    },
    passive: {
      singular: {
        first: suffixer('ομαι'),
        second: multipleInflections(suffixer('ῃ'), suffixer('ει')),
        third: suffixer('εται'),
      },
      plural: {
        first: suffixer('ομεθα'),
        second: suffixer('εσθε'),
        third: suffixer('ονται'),
      },
    },
  },
  aorist: {
    active: {
      singular: {
        first: suffixer('α'),
        second: suffixer('ας'),
        third: suffixer('ε'),
      },
      plural: {
        first: suffixer('αμεν'),
        second: suffixer('ατε'),
        third: suffixer('αν'),
      },
    },
    middle: {
      singular: {
        first: suffixer('αμην'),
        second: suffixer('ω'),
        third: suffixer('ατο'),
      },
      plural: {
        first: suffixer('αμεθα'),
        second: suffixer('ασθε'),
        third: suffixer('αντο'),
      },
    },
    passive: {
      singular: {
        first: suffixer('ην'),
        second: suffixer('ης'),
        third: suffixer('η'),
      },
      plural: {
        first: suffixer('ημεν'),
        second: suffixer('ητε'),
        third: suffixer('ησαν'),
      },
    },
  },
  perfect: {},
  pluperfect: {},
  future_perfect: {},
};

export default VerbInflectionFunctions;
