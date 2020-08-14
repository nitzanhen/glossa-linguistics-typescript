import { KeyProperties } from '..';
import { Gender, Case, Number } from 'linguistics/property';

/**
 * @since 03/08/20
 */
interface AdjectiveKeyProperties extends KeyProperties {
    baseInflection: string;
    gender: Gender;
    case_: Case;
    number: Number;
}

export default AdjectiveKeyProperties;