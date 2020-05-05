import GreekWord from './GreekWord';
import { NounKey } from '../../key';
import Mastery from '../../mastery/Mastery';
import NounInflections from '../inflection/NounInflections';

class GreekNoun extends GreekWord<NounKey> {
    //------ Fields ------//

    public readonly inflections: NounInflections;

    public readonly mastery: Mastery;

    //------ Constructor ------//

    public constructor(
        inflections: NounInflections,
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

export default GreekNoun;
