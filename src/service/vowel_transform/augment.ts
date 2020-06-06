import { InvalidLanguageError } from '#/error';
import { isGreekString } from '#/linguistics/alphabet/letters';

/**
 * The augment() function receives a verb form and augments it.
 * 
 * @param verb the verb form to augment
 * @return the augmented form
 * @throws InvalidLanguageError if a non-Greek text is passed as the verb argument.
 */
function augment(verb: string): string {
    if (!isGreekString(verb)) {
        throw new InvalidLanguageError(`Non-Greek text passed to the augment() function: ${verb}`);
    }


}

export default augment;