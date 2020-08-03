import { FilterKey, Key } from '..';
import AdjectiveKey from './AdjectiveKey';

/**
 * @since 03/08/20
 */
interface AdjectiveFilterKey extends FilterKey<AdjectiveKey> { }
class AdjectiveFilterKey extends Key {
  constructor(properties: FilterKey<AdjectiveKey>) {
    super(properties);
  }
}

export default AdjectiveFilterKey;
