import Definition from './Definition';
import Key from '../../key2/Key';
import KeyMap from '../../structure/KeyMap';

/**
 * @since 12/04/20
 */
class Definitions<K extends Key> extends KeyMap<K, Definition> { }

export default Definitions;
