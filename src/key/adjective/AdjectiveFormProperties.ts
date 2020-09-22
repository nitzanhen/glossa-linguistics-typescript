import GrammaticalProperties from '../GrammaticalProperties';
import AdjectiveKeyProperties from './AdjectiveKeyProperties';
import { AdjectiveClassVariant } from 'linguistics/variant/AdjectiveVariants';

/**
 * @since 03/08/20
 */
interface AdjectiveFormProperties extends GrammaticalProperties, AdjectiveKeyProperties {
    class: AdjectiveClassVariant;
}

export default AdjectiveFormProperties;