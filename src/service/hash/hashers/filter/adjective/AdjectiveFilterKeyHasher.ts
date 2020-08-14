
import { AdjectiveFilterKey } from 'key'
import { Gender, Case, Number } from 'linguistics/property';

import Hasher from '../../../Hasher'

/**
 * @since 15/08/20
 */
const AdjectiveFilterKeyHasher: Readonly<Hasher<AdjectiveFilterKey>> = {
    hash(target: AdjectiveFilterKey): string {
        const { baseInflection, gender, case_, number } = target;

        return JSON.stringify([baseInflection, gender, case_, number]);
    },
    unhash(hash: string): AdjectiveFilterKey {
        let [baseInflection, gender, case_, number] = JSON.parse(hash);

        if (baseInflection === null) {
            baseInflection = undefined;
        }

        gender = Boolean(gender)
            //Map to Gender instances    
            ? gender.map((g: string) => Gender.fromString(g))
            //gender is null. Convert to undefined
            : undefined

        case_ = Boolean(case_)
            //Map to Case instances    
            ? case_.map((c: string) => Case.fromString(c))
            //case_ is null. Convert to undefined
            : undefined;

        number = Boolean(number)
            //Map to Number instances    
            ? number.map((n: string) => Number.fromString(n))
            //number is null. Convert to undefined
            : undefined;

        return new AdjectiveFilterKey({ baseInflection, gender, case_, number })
    }
}

export default AdjectiveFilterKeyHasher;