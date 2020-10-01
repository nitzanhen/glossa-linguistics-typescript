import { AdjectiveFormProperties } from "key";
import standardInflectionFunctions from "./standardInflectionFunctions";
import standardTwoSuffixedInflectionFunctions from "./standardTwoSuffixesInflectionFunctions";

const inflectionFunctions = {
  ...standardInflectionFunctions,
  ...standardTwoSuffixedInflectionFunctions
}

const AdjectiveInflectionService = {
  suggestInflection(properties: AdjectiveFormProperties): string {
    const functions = inflectionFunctions as any;
    const { baseInflection: root, case_, gender, number, variant } = properties;

    const inflect = functions[variant][gender.name][case_.name][number.name]

    if(!inflect) {
      throw new RangeError();
    }
    return inflect(root)
  }
};

export default AdjectiveInflectionService;