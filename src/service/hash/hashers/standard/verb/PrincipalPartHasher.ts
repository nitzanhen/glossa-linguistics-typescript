import Hasher from '../../../Hasher';
import { PrincipalPart, Canister } from 'linguistics/property';

/** 
 * PrincipalPart pseudo-hasher (private). 
 * Since principal parts are not actually hashed by themselves, but used as a helper
 * when hashing other types containing it, it *does not* behave like other hashers, to
 * prevent problems when passing an-already stringified string to JSON.stringify.
 * 
 * Rather, hash() manipulates the PrincipalPart instance to a form compatible with the following 
 * JSON.stringify, and unhash() performs the inverse operation on the received string.
 * The principalPartHasher, therefore, is a hasher in the sense that unhash(hash(p)) always equals p.
 *  
 */
const principalPartHasher: Readonly<Hasher<PrincipalPart, [string, string]>> = {
    hash(target: PrincipalPart):[string, string]  {
        return [target.canister.name, target.baseInflection];
    },
    unhash(hash: [string, string]): PrincipalPart {
        const [canister, baseInflection] = hash;
        return new PrincipalPart(Canister.fromString(canister), baseInflection);
    }
};

export default principalPartHasher;