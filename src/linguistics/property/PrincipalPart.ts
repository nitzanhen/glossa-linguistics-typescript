import { compareStrings } from 'util/stringUtils';
import Canister from './Canister';
import Property from './Property';

/**
 * @todo doc
 *
 * @since 14/3/20
 */
class PrincipalPart {

  /**
   * Compares two principal parts; sorting by this comparison gives a list sorted
   * by canister (index), ascending, then by baseInflection, lexographically.
   * 
   * @param p1 the first principal part 
   * @param p2 the second principal part
   * @returns a number indicating the order of p1 and p2.
   */
  static compare(p1: PrincipalPart, p2: PrincipalPart): number {
    const canisterDelta = Property.compare(p1.canister, p2.canister)
    if (canisterDelta !== 0) {
      return canisterDelta;
    }
    return compareStrings(p1.baseInflection, p2.baseInflection);
  }

  //------ Constructor ------//

  public constructor(
    public canister: Canister,
    public baseInflection: string
  ) { }

}

export default PrincipalPart;
