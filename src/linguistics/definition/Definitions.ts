import { Key, FilterKey } from '#/key';
import { KeyMap, Tree } from '#/structure';

import Definition from './Definition';

/**
 * A mapping between FilterKey classes (inheriting from both Key and Filter Key, see the readme.md file at /key),
 * and Definition object.
 */
class Definitions<K extends Key> extends KeyMap<Key & FilterKey<K>, Tree<Definition>> { }

export default Definitions;
