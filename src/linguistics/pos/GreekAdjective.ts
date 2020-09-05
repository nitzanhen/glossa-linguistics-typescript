import { AdjectiveKey } from "key";
import { Mastery } from "mastery";
import { AdjectiveInflections } from "linguistics/inflection";

import GreekWord, { GreekWordConstructorOptions } from "./GreekWord";

type GreekAdjectiveConstructorOptions = GreekWordConstructorOptions<AdjectiveKey> & Pick<GreekAdjective, "inflections" | "mastery">;

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

    public constructor({
        inflections,
        mastery,
        mnemonic,
        creationDate,
        comments,
    }: GreekAdjectiveConstructorOptions) {
        super({ mnemonic, creationDate, comments });
        this.inflections = inflections;
        this.mastery = mastery;
    }
}

export default GreekAdjective;