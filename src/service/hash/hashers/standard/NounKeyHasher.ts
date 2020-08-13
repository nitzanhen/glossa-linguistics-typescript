import { NounKey } from 'key';
import { Case, Number } from 'linguistics/property';

import Hasher from '../../Hasher';

/** 
 * NounKey Hasher 
 * 
 * @since 28/04/20
 */
const NounKeyHasher: Readonly<Hasher<NounKey>> = {
    hash(target: NounKey): string {
        return JSON.stringify([target.baseInflection, target.case_.name, target.number.name]);
    },
    unhash(hash: string): NounKey {
        const [baseInflection, case_, number] = JSON.parse(hash);
        return new NounKey(
            baseInflection,
            Case.fromString(case_),
            Number.fromString(number)
        );
    }
};

export default NounKeyHasher;