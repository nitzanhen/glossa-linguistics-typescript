import GrammaticalProperties from "key/GrammaticalProperties";
import VerbKeyProperties from "./VerbKeyProperties";


interface VerbFormProperties extends GrammaticalProperties, VerbKeyProperties {
  deponent: boolean;
  contract: boolean;
  stemClass: "omega"; /** @todo */
}

export default VerbFormProperties;