import Key from '../../key/Key';
import Inflection from './Inflection';

/**
 * Base class for Inflection collections.
 *
 * @since 21/04/20
 */
class Inflections<K extends Key> extends Map<K, Inflection<K>> {}

export default Inflections;
