import { Gender, Declension } from '#/linguistics/property';
import { DeclensionVariant } from '#/linguistics/variant';

import NounProperties from './NounProperties';
import ExtendedKeyProperties from '../ExtendedKeyProperties';



/**
 * @since 16/05/20
 */
interface ExtendedNounProperties extends ExtendedKeyProperties, NounProperties {
    gender: Gender,
    declension: Declension,
    variant?: DeclensionVariant;
}

namespace ExtendedNounProperties {
    /**
     * Validates that the variant matches the other properties of this instance.
     *
     * @returns true if this key is valid, and false otherwise
     */
    export function validateVariant(properties: ExtendedNounProperties): boolean {
        //Ensuring variant is a safe argument 
        const { gender, declension, variant } = properties;

        if (declension === Declension.FIRST_DECLENSION) {
            if (!variant) {
                //For first-declension nouns, the inflection variant is required.
                return false;
            }
            else if (gender === Gender.MASCULINE && !["alpha", "eta"].includes(variant)) {
                //First-declension masculine nouns must be of either the alpha or eta variant.
                return false;
            }
            else if (gender === Gender.FEMININE && variant === "alpha") {
                //First-declension feminine nouns must be one of the alpha-long, alpha-short, or eta variants.
                return false;
            }
        }

        return true;
    }
}

export default ExtendedNounProperties;