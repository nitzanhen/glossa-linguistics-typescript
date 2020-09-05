import { compose } from "util/functionUtils";
import { suffixer } from "../transform";
import { enforceGeneralAccentRules } from "service/diacritic";

/**
 * Utility function to compose noun inflection functions easily.
 * Creates an inflection function from the given objects.
 * 
 * @param suffix the suffix that this inflection function adds.
 * @returns an inflection function, defined by the given options. 
 */
function composeNounInflectionFunction(suffix: string) {
    return compose(
        suffixer(suffix),
        enforceGeneralAccentRules
    )
};

export default composeNounInflectionFunction;