import { AdjectiveKey } from 'key'

import Hasher from '../../../Hasher'
import { Case, Gender, Number } from 'linguistics/property';

const AdjectiveKeyHasher: Readonly<Hasher<AdjectiveKey>> = {
    hash(target: AdjectiveKey): string {
        const { baseInflection, gender, case_, number } = target;

        return JSON.stringify([baseInflection, gender, case_, number]);
    },
    unhash(hash: string): AdjectiveKey {
        const [baseInflection, gender, case_, number] = JSON.parse(hash);

        return new AdjectiveKey(
            baseInflection,
            Gender.fromString(gender),
            Case.fromString(case_),
            Number.fromString(number)
        )
    }
}

export default AdjectiveKeyHasher;