import Key from '../Key';
import FilterKey from '../FilterKey';
import NounKey from '../../key/noun/NounKey';

interface NounFilterKey extends FilterKey<NounKey> {};
class NounFilterKey extends Key {
}

const k = new NounFilterKey(3, 2);
k.case_ = []