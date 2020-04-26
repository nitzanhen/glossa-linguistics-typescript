import Definitions from '../definition/Definitions';
import Definable from '../definition/Definable';
import Inflectable from '../inflection/Inflectable';
import Inflections from '../inflection/Inflections';
import Masterable from '../../mastery/Masterable';
import Mastery from '../../mastery/Mastery';

/**
 * Base class for Greek words.
 *
 * @since 21/04/20
 */
abstract class GreekWord<P>
  implements Definable<P>, Inflectable<P>, Masterable {


  //------ Fields ------//

  abstract definitions: Definitions<P>;
  abstract inflections: Inflections<P>;
  abstract mastery: Mastery;

  public mnemonic: string;
  public readonly creationDate: Date;
  public comments: string;

  //------ Constructor ------//

  public constructor(mnemonic: string, creationDate: Date, comments: string) {
    this.mnemonic = mnemonic;
    this.creationDate = creationDate;
    this.comments = comments;
  }
}

export default GreekWord;
