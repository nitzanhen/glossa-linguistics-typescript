import GrammaticalProperties from "../GrammaticalProperties";
import AdjectiveKeyProperties from "./AdjectiveKeyProperties";
import { AdjectiveVariant } from "linguistics/variant/AdjectiveVariants";
import { Embed } from "util/typeUtils";
import { Case, Gender, Number } from "linguistics/property";

type BaseProperties = GrammaticalProperties & AdjectiveKeyProperties;

/**
 * @since 03/08/20
 */
class AdjectiveFormProperties extends Embed<BaseProperties>() {
  public variant: AdjectiveVariant;

  constructor({
    variant,
    ...properties
  }: BaseProperties & { variant: AdjectiveVariant }) {
    super(properties);
    this.variant = variant;
  }
}

export default AdjectiveFormProperties;
