import GrammaticalProperties from '../GrammaticalProperties';
import AdjectiveKeyProperties from './AdjectiveKeyProperties';

/**
 * @since 03/08/20
 */
interface AdjectiveProperties extends GrammaticalProperties, AdjectiveKeyProperties {
    variant: "two-suffixed" | "three-suffixed";
    class: "second_declension" | "third_declension" | "us-eia-u" | "sibilant-stem"
}

export default AdjectiveProperties;