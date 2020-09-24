import VerbFormProperties from "../VerbFormProperties";
import FiniteKeyProperties from "./FiniteKeyProperties";

interface FiniteFormProperties extends FiniteKeyProperties {}
class FiniteFormProperties extends VerbFormProperties {
  constructor(properties: FiniteFormProperties) {
    super(properties);
  }
}

export default FiniteFormProperties;
