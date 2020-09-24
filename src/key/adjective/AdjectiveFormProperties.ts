import GrammaticalProperties from "../GrammaticalProperties";
import AdjectiveKeyProperties from "./AdjectiveKeyProperties";
import { AdjectiveVariant } from "linguistics/variant/AdjectiveVariants";


interface AdjectiveFormProperties extends AdjectiveKeyProperties {
  variant: AdjectiveVariant;
}
/**
 * @since 03/08/20
 */
class AdjectiveFormProperties extends GrammaticalProperties {
  public constructor(properties: AdjectiveFormProperties) {
    super(properties);
  }
}

export default AdjectiveFormProperties;
