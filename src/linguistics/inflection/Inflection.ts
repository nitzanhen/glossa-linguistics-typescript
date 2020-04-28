import Key from '../../key/Key';
import Masterable from '../../mastery/Masterable';

/**
 * Base inflection class.
 *
 * @since 21/04/20
 */
interface Inflection<K extends Key> extends Masterable {
  root?: Inflection<K>;
  key: K;
  form: string;
}

export default Inflection;
