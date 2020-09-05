import { NounKey } from 'key';
import { Mastery } from 'mastery';

import { NounInflections } from '../inflection/';

import GreekWord, { GreekWordConstructorOptions } from './GreekWord';

type GreekNounConstructorOptions = GreekWordConstructorOptions<NounKey> & Pick<GreekNoun, "inflections" | "mastery">;

/**
 * Class for Greek Nouns.
 */
class GreekNoun extends GreekWord<NounKey> {
    //------ Fields ------//

    public readonly inflections: NounInflections;

    public readonly mastery: Mastery;

    //------ Constructor ------//

    public constructor({
        inflections,
        mastery,
        mnemonic,
        creationDate,
        comments,
    }: GreekNounConstructorOptions) {
        super({ mnemonic, creationDate, comments });
        this.inflections = inflections;
        this.mastery = mastery;
    }
}

export default GreekNoun;
