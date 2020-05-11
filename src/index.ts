import { FilterKey, NounKey } from './key';
import { Case } from './linguistics/property';

const x: FilterKey<NounKey> = {
    baseInflection: ["a", "b"],
    case_: [Case.NOMINATIVE, Case.GENITIVE],
    number: []
}