import Inflections from './Inflections';
import Key from '../../key/Key';

interface Inflectable<K extends Key> {
  inflections: Inflections<K>;
}

export default Inflectable;
