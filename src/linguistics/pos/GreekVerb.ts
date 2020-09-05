import { Mastery } from 'mastery';
import { VerbKey } from 'key';

import { VerbInflections } from '../inflection';

import GreekWord, { GreekWordConstructorOptions } from './GreekWord';

type GreekVerbConstructorOptions = GreekWordConstructorOptions<VerbKey> & Pick<GreekVerb, "inflections" | "mastery">;

/**
 * Class for Greek Nouns.
 */
class GreekVerb extends GreekWord<VerbKey> {
    //------ Fields ------//

    public readonly inflections: VerbInflections;

    public readonly mastery: Mastery;

    //------ Constructor ------//

    public constructor({
        inflections,
        mastery,
        mnemonic,
        creationDate,
        comments,
    }: GreekVerbConstructorOptions) {
        super({ mnemonic, creationDate, comments });
        this.inflections = inflections;
        this.mastery = mastery;
    }
}

export default GreekVerb;
