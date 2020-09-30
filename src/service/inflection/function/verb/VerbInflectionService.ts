import presentInflectionFunctions from "./presentInflectionFunctions";
import futureInflectionFunctions from "./futureInflectionFunctions";
import aoristInflectionFunctions from "./aoristInflectionFunctions";
import perfectInflectionFunctions from "./perfectInflectionFunctions";
import { VerbFormProperties } from "key";
import FiniteFormProperties from "key/verb/FiniteKey/FiniteFormProperties";
import { Mood, Tense, Voice } from "linguistics/property";
import { Function } from "util/typeUtils";
import { NotImplementedError } from "error";
import InfinitiveFormProperties from "key/verb/InfinitiveKey/InfinitiveFormProperties";
import ParticipleFormProperties from "key/verb/ParticipleKey/ParticipleFormProperties";

const inflectionFunctions = {
  ...presentInflectionFunctions,
  ...futureInflectionFunctions,
  ...aoristInflectionFunctions,
  ...perfectInflectionFunctions,
};

function getFiniteFunction({
  tense,
  contract,
  voice,
  mood,
  person,
  number,
  deponent,
  aoristVariant,
}: FiniteFormProperties): Function<string, string> | undefined {
  const functions = inflectionFunctions as any;

  if (deponent && voice === Voice.ACTIVE) {
    // Fetch mediopassive endings for deponent forms
    voice = Voice.MEDIOPASSIVE;
  }

  switch (tense) {
    case Tense.PRESENT:
      return functions["present"][contract ? "contract" : "standard"][
        voice.name
      ]?.[mood.name]?.[number.name]?.[person.name];

    case Tense.IMPERFECT:
      return functions["imperfect"];
    case Tense.FUTURE:
      return functions["future"][mood.name]?.[voice.name]?.[number.name]?.[
        person.name
      ];
    case Tense.AORIST:
      return functions["aorist"][aoristVariant!!][mood.name]?.[voice.name]?.[
        number.name
      ]?.[person.name];
    case Tense.PERFECT:
      return functions["perfect"]?.[voice.name]?.[mood.name]?.[number.name]?.[
        person.name
      ];
    case Tense.PLUPERFECT:
      return functions["pluperfect"]?.[voice.name]?.[mood.name]?.[
        number.name
      ]?.[person.name];
    case Tense.FUTURE_PERFECT:
      throw new NotImplementedError(); /** @todo */
  }
}

function getInfinitiveFunction({
  tense,
  contract,
  voice,
  aoristVariant,
}: InfinitiveFormProperties): Function<string, string> | undefined {
  const functions = inflectionFunctions as any;

  switch (tense) {
    case Tense.PRESENT:
      return functions["present"][contract ? "contract" : "standard"]?.[
        "indicative"
      ][voice.name].infinitive;
    case Tense.FUTURE:
      return functions["future"]["indicative"][voice.name]?.infinitive;
    case Tense.AORIST:
      return functions["aorist"][aoristVariant!!]["indicative"][voice.name]
        ?.infinitive;
    case Tense.PERFECT:
      return functions["perfect"][voice.name]?.["indicative"].infinitive;
  }

  return undefined;
}

/**
 * Contains helpful functions for inflecting verbs.
 *
 * @since 18/05/20
 */
const VerbInflectionService = {
  suggestInflection(properties: VerbFormProperties): string {
    /** @todo validation */

    const inflect = (() => {
      if (properties instanceof FiniteFormProperties) {
        return getFiniteFunction(properties);
      } else if (properties instanceof InfinitiveFormProperties) {
        return getInfinitiveFunction(properties);
      } else if (properties instanceof ParticipleFormProperties) {
        /** @todo */ throw new NotImplementedError();
      } else {
        throw new TypeError(
          "VerbFormProperties properties must be an instance of one of " +
            "FiniteFormProperties, InfinitiveFormProperties or ParticipleProperties"
        );
      }
    })();

    if (!inflect) {
      throw new RangeError();
    }
    const root = properties.principalPart.baseInflection;
    return inflect(root);
  },
};

export default VerbInflectionService;
