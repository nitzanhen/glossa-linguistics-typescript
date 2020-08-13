import { NounFilterKey } from 'key';
import { Case, Number } from 'linguistics/property';

import Hasher from '../../Hasher';

/** 
 * NounFilterKey hasher 
 * 
 * @since 17/05/20
 */
const NounFilterKeyHasher: Readonly<Hasher<NounFilterKey>> = {
    hash(target: NounFilterKey): string {
        const { baseInflection, case_, number } = target;
        return JSON.stringify([baseInflection, case_, number]);
    },
    unhash(hash: string): NounFilterKey {
        let [baseInflection, case_, number] = JSON.parse(hash);

        if(baseInflection === null) {
            baseInflection = undefined;
        }

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

        return new NounFilterKey({ baseInflection, case_, number });
    }
};

export default NounFilterKeyHasher;