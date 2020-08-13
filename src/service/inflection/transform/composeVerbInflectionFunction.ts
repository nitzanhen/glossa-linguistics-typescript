import { compose } from 'util/functionUtils';

import { accentRecessively, enforceGeneralAccentRules, addDiacritic } from '../../diacritic';

import suffixer from './suffixer';
import augment from './augment';
import contractor, { ContractAccentingOptions } from './contractor';
import { euphonizer } from './euphony';
import { stripAccents } from '../../../linguistics/alphabet/diacritics';

interface ComposeVerbInflectionFunctionOptions {
  endings?: "suffix" | "contract" | "euphonize",
  addAugment?: boolean,
  accenting?: ContractAccentingOptions;
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
  accenting }
  : ComposeVerbInflectionFunctionOptions = {}) {

  const endingsFunction = (() => {
    switch (endings) {
      case "suffix":
        return suffixer(suffix);
      case "contract":
        return contractor(suffix, accenting);
      case "euphonize":
        return euphonizer(suffix);
    }
  })();

  const accentingFunction = (() => {
    if (typeof accenting === "number") {
      //We're not contracting (contraction takes care of accenting itself), 
      //but there's an explicit syllable marked to be accented. Accent manually.
      return compose(
        stripAccents,
        text => addDiacritic(text, accenting as number, "acute"),
        enforceGeneralAccentRules
      );
    }
    else if (accenting === null) {
      //If accenting was explicitly marked as null, keep it so.
      return null;
    }
    else if (accenting === "recessive") {
      return accentRecessively;
    }
    else {
      //Accenting is undefined. Accemt recessively, unless contracting.
      return endings === "contract" ? null : accentRecessively;
    }
  })();

  return compose(
    endingsFunction,
    addAugment && augment,
    accentingFunction ?? enforceGeneralAccentRules
  );
}

export default composeVerbInflectionFunction;
