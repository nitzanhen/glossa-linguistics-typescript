import { default as inflectionFunction } from '../../composition/composeNounInflectionFunction';

const nounInflectionFunctions = {
  first_declension: {
    feminine: {
      alpha_long: {
        nominative: {
          singular: inflectionFunction('ᾱ'),
          plural: inflectionFunction('αι'),
        },
        genitive: {
          singular: inflectionFunction('ᾱς'),
          plural: inflectionFunction('ων'),
        },
        dative: {
          singular: inflectionFunction('ᾳ'),
          plural: inflectionFunction('αις'),
        },
        accusative: {
          singular: inflectionFunction('ᾱν'),
          plural: inflectionFunction('ᾱς'),
        },
        vocative: {
          singular: inflectionFunction('ᾱ'),
          plural: inflectionFunction('αι'),
        },
      },
      alpha_short: {
        nominative: {
          singular: inflectionFunction('α'),
          plural: inflectionFunction('αι'),
        },
        genitive: {
          singular: inflectionFunction('ᾱς'),
          plural: inflectionFunction('ων'),
        },
        dative: {
          singular: inflectionFunction('ᾳ'),
          plural: inflectionFunction('αις'),
        },
        accusative: {
          singular: inflectionFunction('αν'),
          plural: inflectionFunction('ᾱς'),
        },
        vocative: {
          singular: inflectionFunction('α'),
          plural: inflectionFunction('αι'),
        },
      },
      eta: {
        nominative: {
          singular: inflectionFunction('η'),
          plural: inflectionFunction('αι'),
        },
        genitive: {
          singular: inflectionFunction('ης'),
          plural: inflectionFunction('ων'),
        },
        dative: {
          singular: inflectionFunction('ῃ'),
          plural: inflectionFunction('αις'),
        },
        accusative: {
          singular: inflectionFunction('ην'),
          plural: inflectionFunction('ᾱς'),
        },
        vocative: {
          singular: inflectionFunction('η'),
          plural: inflectionFunction('αι'),
        },
      },
    },
    masculine: {
      alpha: {
        nominative: {
          singular: inflectionFunction('ᾱς'),
          plural: inflectionFunction('αι'),
        },
        genitive: {
          singular: inflectionFunction('ου'),
          plural: inflectionFunction('ων'),
        },
        dative: {
          singular: inflectionFunction('ᾳ'),
          plural: inflectionFunction('αις'),
        },
        accusative: {
          singular: inflectionFunction('ᾱν'),
          plural: inflectionFunction('ᾱς'),
        },
        vocative: {
          singular: inflectionFunction('ᾱ'),
          plural: inflectionFunction('αι'),
        },
      },
      eta: {
        nominative: {
          singular: inflectionFunction('ης'),
          plural: inflectionFunction('αι'),
        },
        genitive: {
          singular: inflectionFunction('ου'),
          plural: inflectionFunction('ων'),
        },
        dative: {
          singular: inflectionFunction('ῃ'),
          plural: inflectionFunction('αις'),
        },
        accusative: {
          singular: inflectionFunction('ην'),
          plural: inflectionFunction('ᾱς'),
        },
        vocative: {
          singular: inflectionFunction('α'),
          plural: inflectionFunction('αι'),
        },
      },
    },
  },
  second_declension: {
    masculine: {
      nominative: {
        singular: inflectionFunction('ος'),
        plural: inflectionFunction('οι'),
      },
      genitive: {
        singular: inflectionFunction('ου'),
        plural: inflectionFunction('ων'),
      },
      dative: {
        singular: inflectionFunction('ῳ'),
        plural: inflectionFunction('οις'),
      },
      accusative: {
        singular: inflectionFunction('ον'),
        plural: inflectionFunction('ους'),
      },
      vocative: {
        singular: inflectionFunction('ε'),
        plural: inflectionFunction('οι'),
      },
    },
    neuter: {
      nominative: {
        singular: inflectionFunction('ον'),
        plural: inflectionFunction('α'),
      },
      genitive: {
        singular: inflectionFunction('ου'),
        plural: inflectionFunction('ων'),
      },
      dative: {
        singular: inflectionFunction('ῳ'),
        plural: inflectionFunction('οις'),
      },
      accusative: {
        singular: inflectionFunction('ον'),
        plural: inflectionFunction('α'),
      },
      vocative: {
        singular: inflectionFunction('ον'),
        plural: inflectionFunction('α'),
      },
    },
  },
  third_declension: null /** @todo */,
};

export default nounInflectionFunctions;
