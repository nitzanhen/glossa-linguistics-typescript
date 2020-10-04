import { AdjectiveFormProperties } from "key";
import firstInflectionFunctions from "./firstInflectionFunctions";
import fourthInflectionFunctions from './fourthInflectionFunctions';
import secondInflectionFunctions from './secondInflectionFunctions';
import thirdInflectionFunctions from './thirdInflectionFunctions.ts';

const inflectionFunctions = {
  ...firstInflectionFunctions,
  ...secondInflectionFunctions,
  ...thirdInflectionFunctions,
  ...fourthInflectionFunctions
}

const AdjectiveInflectionService = {
  suggestInflection(properties: AdjectiveFormProperties): string {
    const functions = inflectionFunctions as any;
    const { baseInflection: root, case_, gender, number, variant } = properties;

    const inflect = functions[variant][gender.name][case_.name][number.name]

    if (!inflect) {
      throw new RangeError();
    }
    return inflect(root)
  }
};

export default AdjectiveInflectionService;