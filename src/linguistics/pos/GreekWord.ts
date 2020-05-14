import Definitions from '../definition/Definitions';
import Definable from '../definition/Definable';
import Inflectable from '../inflection/Inflectable';
import Inflections from '../inflection/Inflections';
import Masterable from '../../mastery/Masterable';
import Mastery from '../../mastery/Mastery';
import Key from '../../key/Key';

/**
 * Base class for Greek words.
 *
 * @since 21/04/20
 */
abstract class GreekWord<K extends Key>
  implements Definable<K>, Inflectable, Masterable {


  //------ Fields ------//

  public readonly definitions: Definitions<K>;
  abstract readonly inflections: Inflections;
  abstract readonly mastery: Mastery;

  public mnemonic: string;
  public readonly creationDate: Date;
  public comments: string;

  //------ Constructor ------//

  public constructor(mnemonic: string, creationDate: Date, comments: string) {
    this.definitions = new Definitions();
    this.mnemonic = mnemonic;
    this.creationDate = creationDate;
    this.comments = comments;
  }
}

export default GreekWord;
