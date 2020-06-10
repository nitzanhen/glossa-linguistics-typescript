import { suffixer } from '../../transform';

const nounInflectionFunctions = {
  first_declension: {
    feminine: {
      alpha_long: {
        nominative: {
          singular: suffixer('ᾱ'),
          plural: suffixer('αι'),
        },
        genitive: {
          singular: suffixer('ᾱς'),
          plural: suffixer('ων'),
        },
        dative: {
          singular: suffixer('ᾳ'),
          plural: suffixer('αις'),
        },
        accusative: {
          singular: suffixer('ᾱν'),
          plural: suffixer('ᾱς'),
        },
        vocative: {
          singular: suffixer('ᾱ'),
          plural: suffixer('αι'),
        },
      },
      alpha_short: {
        nominative: {
          singular: suffixer('α'),
          plural: suffixer('αι'),
        },
        genitive: {
          singular: suffixer('ᾱς'),
          plural: suffixer('ων'),
        },
        dative: {
          singular: suffixer('ᾳ'),
          plural: suffixer('αις'),
        },
        accusative: {
          singular: suffixer('αν'),
          plural: suffixer('ᾱς'),
        },
        vocative: {
          singular: suffixer('α'),
          plural: suffixer('αι'),
        },
      },
      eta: {
        nominative: {
          singular: suffixer('η'),
          plural: suffixer('αι'),
        },
        genitive: {
          singular: suffixer('ης'),
          plural: suffixer('ων'),
        },
        dative: {
          singular: suffixer('ῃ'),
          plural: suffixer('αις'),
        },
        accusative: {
          singular: suffixer('ην'),
          plural: suffixer('ᾱς'),
        },
        vocative: {
          singular: suffixer('η'),
          plural: suffixer('αι'),
        },
      },
    },
    masculine: {
      alpha: {
        nominative: {
          singular: suffixer('ᾱς'),
          plural: suffixer('αι'),
        },
        genitive: {
          singular: suffixer('ου'),
          plural: suffixer('ων'),
        },
        dative: {
          singular: suffixer('ᾳ'),
          plural: suffixer('αις'),
        },
        accusative: {
          singular: suffixer('ᾱν'),
          plural: suffixer('ᾱς'),
        },
        vocative: {
          singular: suffixer('ᾱ'),
          plural: suffixer('αι'),
        },
      },
      eta: {
        nominative: {
          singular: suffixer('ης'),
          plural: suffixer('αι'),
        },
        genitive: {
          singular: suffixer('ου'),
          plural: suffixer('ων'),
        },
        dative: {
          singular: suffixer('ῃ'),
          plural: suffixer('αις'),
        },
        accusative: {
          singular: suffixer('ην'),
          plural: suffixer('ᾱς'),
        },
        vocative: {
          singular: suffixer('α'),
          plural: suffixer('αι'),
        },
      },
    },
  },
  second_declension: {
    masculine: {
      nominative: {
        singular: suffixer('ος'),
        plural: suffixer('οι'),
      },
      genitive: {
        singular: suffixer('ου'),
        plural: suffixer('ων'),
      },
      dative: {
        singular: suffixer('ῳ'),
        plural: suffixer('οις'),
      },
      accusative: {
        singular: suffixer('ον'),
        plural: suffixer('ους'),
      },
      vocative: {
        singular: suffixer('ε'),
        plural: suffixer('οι'),
      },
    },
    neuter: {
      nominative: {
        singular: suffixer('ον'),
        plural: suffixer('α'),
      },
      genitive: {
        singular: suffixer('ου'),
        plural: suffixer('ων'),
      },
      dative: {
        singular: suffixer('ῳ'),
        plural: suffixer('οις'),
      },
      accusative: {
        singular: suffixer('ον'),
        plural: suffixer('α'),
      },
      vocative: {
        singular: suffixer('ον'),
        plural: suffixer('α'),
      },
    },
  },
  third_declension: null /** @todo */,
};

export default nounInflectionFunctions;
