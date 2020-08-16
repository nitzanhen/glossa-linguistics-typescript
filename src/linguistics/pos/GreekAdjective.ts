import GreekWord from "./GreekWord";
import { AdjectiveKey } from "key";
import { Mastery } from "mastery";
import { AdjectiveInflections } from "linguistics/inflection";

/**
 * Class for Greek adjectives.
 * 
 * @since 16/08/20
 */
class GreekAdjective extends GreekWord<AdjectiveKey> {
    //------ Fields ------//

    public readonly inflections: AdjectiveInflections;

    public readonly mastery: Mastery;

    //------ Constructor ------//

    public constructor(
        inflections: AdjectiveInflections,
        mastery: Mastery,
        mnemonic: string,
        creationDate: Date,
        comments: string,
    ) {
        super(mnemonic, creationDate, comments);
        this.inflections = inflections;
        this.mastery = mastery;
    }
}

export default GreekAdjective;