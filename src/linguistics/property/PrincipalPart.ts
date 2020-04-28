import Canister from './Canister';

/**
 * @todo doc
 *
 * @since 14/3/20
 */
class PrincipalPart {

  //------ Constructor ------//

  public constructor(
    public canister: Canister,
    public baseInflection: string
  ) { }

}

export default PrincipalPart;
