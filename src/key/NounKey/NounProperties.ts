import KeyProperties from '../KeyProperties';
import { Case, Number } from '../../linguistics/property';

/**
 * @since 14/05/20
 */
interface NounProperties extends KeyProperties {
    baseInflection: string;
    case_: Case;
    number: Number;
}

export default NounProperties;