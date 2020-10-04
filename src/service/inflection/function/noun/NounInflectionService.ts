import { Declension } from "linguistics/property";
import { NotImplementedError } from "error";
import NounFormProperties from "key/noun/NounFormProperties";

import nounInflectionFunctions from "./NounInflectionFunctions";

/**
 * Collection of functions dealing with Greek noun inflections.
 *
 * @since 04/05/20
 */
const NounInflectionService = {
  /**
   * Inflects the given root, according to the given parameters.
   * Note that the inflection is to be treated as a suggestion, and in reality
   * many irregularities or minor rules may have the actual form different than the
   * suggested inflection returned by this function.
   *
   * @param key the key, I.E the collection of properties, to inflect by.
   * @param declension the noun's declension.
   * @returns the inflected form.
   *
   * @throws RangeError if an invalid set of properties was passed.
   * @throws NotImplementedError if an attempt to form a third-declension noun is made.
   *
   * @todo support for third declension, contract verbs, accenting.
   */
  suggestInflection(properties: NounFormProperties): string {
    if (!NounFormProperties.validateVariant(properties)) {
      throw new RangeError(
        "variant argument does not match the other properties' constraints: " +
        properties
      );
    }

    const {
      baseInflection: root,
      gender,
      declension,
      variant,
      case_,
      number,
    } = properties;

    //Third declension is currently not supported
    if (declension === Declension.THIRD_DECLENSION) {
      throw new NotImplementedError(
        "Inflection suggestions for third-declension nouns are not yet supported"
      );
    }

    //We're good to go.
    const inflectionFunctions = nounInflectionFunctions as any;

    const inflect =
      declension === Declension.FIRST_DECLENSION
        ? inflectionFunctions[declension.name][gender.name]?.[variant!!][
        case_.name
        ][number.name]
        : inflectionFunctions[declension.name][gender.name]?.[case_.name][
        number.name
        ];

    if (!inflect) {
      throw new RangeError(
        "No such inflection function; invalid set of properties passed: " +
        JSON.stringify(properties)
      );
    } else {
      return inflect(root);
    }
  },
};

export default Object.freeze(NounInflectionService);
