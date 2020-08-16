import GrammaticalProperties from '../GrammaticalProperties';
import AdjectiveKeyProperties from './AdjectiveKeyProperties';
import { AdjectiveSuffixVariant, AdjectiveClassVariant } from 'linguistics/variant/AdjectiveVariants';

/**
 * @since 03/08/20
 */
interface AdjectiveProperties extends GrammaticalProperties, AdjectiveKeyProperties {
    variant: AdjectiveSuffixVariant;
    class: AdjectiveClassVariant;
}

export default AdjectiveProperties;