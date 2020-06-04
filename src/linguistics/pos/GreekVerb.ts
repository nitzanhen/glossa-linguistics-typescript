import { Mastery } from '#/mastery';
import { VerbKey } from '#/key';

import { VerbInflections } from '../inflection';

import GreekWord from './GreekWord';

class GreekVerb extends GreekWord<VerbKey> {
    //------ Fields ------//

    public readonly inflections: VerbInflections;

    public readonly mastery: Mastery;

    //------ Constructor ------//

    public constructor(
        inflections: VerbInflections,
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

export default GreekVerb;
