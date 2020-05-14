import KeyProperties from '../KeyProperties';
import { Case, Number } from '../../linguistics/property';

interface NounProperties extends KeyProperties {
    baseInflection: string,
    case_: Case,
    number: Number
}

export default NounProperties;