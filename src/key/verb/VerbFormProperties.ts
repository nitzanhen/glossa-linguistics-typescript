import GrammaticalProperties from "key/GrammaticalProperties";
import VerbKeyProperties from "./VerbKeyProperties";


interface VerbFormProperties extends VerbKeyProperties {
  deponent: boolean;
  contract: boolean;
  stemClass: "omega"; /** @todo */
}

class VerbFormProperties extends GrammaticalProperties {
  constructor(properties: VerbFormProperties) {
    super(properties);
  }
}

export default VerbFormProperties;