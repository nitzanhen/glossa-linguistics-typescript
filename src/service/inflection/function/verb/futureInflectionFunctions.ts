import { parameterized as multipleInflections } from 'util/functionUtils';

import { composeVerbInflectionFunction as inflectionFunction } from '../../transform';
import { penultIndex } from '../../../../linguistics/alphabet/syllables';

/**
 * Inflection functions for the future aspect inflections.
 * @see Readme.md under the same directory
 * 
 * @since 23/07/20
 */
const futureInflectionFunctions = {
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
        infinitive: inflectionFunction('ειν', { endings: "contract" })
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
        infinitive: inflectionFunction('εσθαι', { endings: "contract" })
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
        infinitive: inflectionFunction('θησεσθαι')
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
};

export default futureInflectionFunctions;