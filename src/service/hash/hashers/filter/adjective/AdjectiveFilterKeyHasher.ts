
import { AdjectiveFilterKey } from 'key'
import { Gender, Case, Number } from 'linguistics/property';
import Property from 'linguistics/property/Property';
import SortedSet from 'structure/SortedSet';
import { compareStrings } from 'util/stringUtils';

import Hasher from '../../../Hasher'

/**
 * @since 15/08/20
 */
const AdjectiveFilterKeyHasher: Readonly<Hasher<AdjectiveFilterKey>> = {
    hash({ baseInflection, gender, case_, number }: AdjectiveFilterKey): string {
        const fields = [baseInflection, gender, case_, number];

        //Convert to lists
        const fieldLists = fields.map(set => set?.toList())

        return JSON.stringify(fieldLists);
    },
    unhash(hash: string): AdjectiveFilterKey {
        let [baseInflection, gender, case_, number] = JSON.parse(hash);

        //Map to SortedSet, or to undefined if null
        baseInflection = baseInflection ? new SortedSet<string>(compareStrings, ...baseInflection) : undefined;

        //Map to Gender instances, then to SortedSet, or to undefined if null.]
        gender = gender?.map((g: string) => Gender.fromString(g));
        gender && (gender = new SortedSet<Gender>(Property.compare, ...gender));

        //Map to Case instances, then to SortedSet, or to undefined if null.
        case_ = case_?.map((c: string) => Case.fromString(c))
        case_ && (case_ = new SortedSet<Case>(Property.compare, ...case_));

        //Map to Number instances, then to SortedSet, or to undefined if null.
        number = number?.map((n: string) => Number.fromString(n))
        number && (number = new SortedSet<Number>(Property.compare, ...number));

        return new AdjectiveFilterKey({ baseInflection, gender, case_, number });
    }
}

export default AdjectiveFilterKeyHasher;