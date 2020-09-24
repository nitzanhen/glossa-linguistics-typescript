import VerbFormProperties from "../VerbFormProperties";
import ParticipleKeyProperties from "./ParticipleKeyProperties";

interface ParticipleFormProperties extends ParticipleKeyProperties {};
class ParticipleFormProperties extends VerbFormProperties {
  constructor(properties: ParticipleFormProperties) {
    super(properties);
  }
}

export default ParticipleFormProperties;