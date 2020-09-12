import { NounFilterKey } from 'key';
import { Case, Number } from 'linguistics/property';
import Property from 'linguistics/property/Property';
import SortedSet from 'structure/SortedSet';
import { compareStrings } from 'util/stringUtils';

import Hasher from '../../../Hasher';

/** 
 * NounFilterKey hasher 
 * 
 * @since 17/05/20
 */
const NounFilterKeyHasher: Readonly<Hasher<NounFilterKey>> = {
    hash({ baseInflection, case_, number }: NounFilterKey): string {
        const fields = [baseInflection, case_, number]

        //Convert to lists
        const fieldLists = fields.map(set => set?.toList())

        return JSON.stringify(fieldLists);
    },
    unhash(hash: string): NounFilterKey {
        let [baseInflection, case_, number] = JSON.parse(hash);

        //Map to SortedSet, or to undefined if null
        baseInflection = baseInflection ? new SortedSet<string>(compareStrings, ...baseInflection) : undefined;

        //Map to Case instances, then to SortedSet, or to undefined if null.
        case_ = case_?.map((c: string) => Case.fromString(c))
        case_ && (case_ = new SortedSet<Case>(Property.compare, ...case_))

        //Map to Number instances, then to SortedSet, or to undefined if null.
        number = number?.map((n: string) => Number.fromString(n))
        number && (number = new SortedSet<Number>(Property.compare, ...number))

        return new NounFilterKey({ baseInflection, case_, number });
    }
};

export default NounFilterKeyHasher;