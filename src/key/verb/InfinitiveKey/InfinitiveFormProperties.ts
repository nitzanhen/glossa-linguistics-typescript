import VerbFormProperties from "../VerbFormProperties";
import InfinitiveKeyProperties from "./InfinitiveKeyProperties";

interface InfinitiveFormProperties extends VerbFormProperties, InfinitiveKeyProperties {}
class InfinitiveFormProperties {
  constructor(properties: VerbFormProperties & InfinitiveKeyProperties) {
    Object.assign(this, properties)
  }
}

export default InfinitiveFormProperties;