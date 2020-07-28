import { compose } from '#/util/functionUtils';

import { accentRecessively, enforceGeneralAccentRules } from '../../diacritic';

import suffixer from './suffixer';
import augment from './augment';
import contractor from './contractor';
import { euphonizer } from './euphony';


interface composeVerbInflectionFunctionOptions {
  endings?: "suffix" | "contract" | "euphonize",
  addAugment?: boolean,
  addRecessiveAccent?: boolean;
}

/**
 * Utility function to compose inflection functions easily.
 * Creates a function composition from the given options. 
 * 
 * @param suffix the suffix to add to arguments passed to the function returned from this factory.
 * @param endings the manner in which to add endings; can be "suffix", "contract", "euphonize" or "contract-optative". Defaults to "suffix".
 * If endings is "contract" or "euphonize" and a given combination of base and suffix cannot be contracted or euphonized
 * (accordingly), the method falls back to suffixing the base and ending.
 * @param addAugment whether an augment should be added or not. Defaults to false.
 * @param addRecessiveAccent whether the form should be accented recessively after transforming it. Defaults to true.
 * 
 * @returns a composed inflection function.
 */
function composeVerbInflectionFunction(suffix: string, {
  endings = "suffix",
  addAugment = false,
  addRecessiveAccent }
  : composeVerbInflectionFunctionOptions = {}) {

  if (typeof addRecessiveAccent === "undefined") {
    //If we're contracting, addRecessiveAccent should be disabled by default.
    addRecessiveAccent = endings !== "contract";
  }

  const endingsFunction = (() => {
    switch (endings) {
      case "suffix":
        return suffixer;
      case "contract":
        return contractor;
      case "euphonize":
        return euphonizer;
    }
  })();

  return compose(
    endingsFunction(suffix),
    addAugment && augment,
    addRecessiveAccent ? accentRecessively : enforceGeneralAccentRules
  );
}

export default composeVerbInflectionFunction;
