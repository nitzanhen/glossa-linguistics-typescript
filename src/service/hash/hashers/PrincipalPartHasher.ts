import Hasher from '../Hasher';
import { PrincipalPart, Canister } from '../../../linguistics/property';

/** PrincipalPart hasher (private) */
const principalPartHasher: Readonly<Hasher<PrincipalPart>> = {
    hash(target: PrincipalPart): string {
        return JSON.stringify([target.canister.name, target.baseInflection]);
    },
    unhash(hash: string): PrincipalPart {
        const [canister, baseInflection] = JSON.parse(hash);
        return new PrincipalPart(Canister.fromString(canister), baseInflection);
    }
};

export default principalPartHasher;