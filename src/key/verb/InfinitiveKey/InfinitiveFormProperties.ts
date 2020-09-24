import VerbFormProperties from "../VerbFormProperties";
import InfinitiveKeyProperties from "./InfinitiveKeyProperties";

interface InfinitiveFormProperties extends InfinitiveKeyProperties {}
class InfinitiveFormProperties extends VerbFormProperties {
  constructor(properties: InfinitiveFormProperties) {
    super(properties);
  }
}

export default InfinitiveFormProperties;