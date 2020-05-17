import Definition from './Definition';
import Key from '../../key/Key';
import KeyMap from '../../structure/KeyMap';
import { FilterKey } from '../../key';
import Tree from '../../structure/Tree';

/**
 * A mapping between FilterKey classes (inheriting from both Key and Filter Key, see the readme.md file at /key),
 * and Definition object.
 */
class Definitions<K extends Key> extends KeyMap<Key & FilterKey<K>, Tree<Definition>> { }

export default Definitions;
