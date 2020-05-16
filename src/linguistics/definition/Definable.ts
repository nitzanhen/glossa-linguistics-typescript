import Definitions from './Definitions';
import { Key } from '../../key';

/**
 * Denotes that an entity is definable - it can be defined.
 * In practice, the Definable interface adds a Definitions field that must be implemented
 * in the inheriting class.
 *
 * @since 12/04/20
 */
interface Definable<K extends Key> {
  definitions: Definitions<K>;
}

export default Definable;
