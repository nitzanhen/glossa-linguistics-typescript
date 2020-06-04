import { Case, Number } from '#/linguistics/property';

import KeyProperties from '../KeyProperties';

/**
 * @since 14/05/20
 */
interface NounProperties extends KeyProperties {
    baseInflection: string;
    case_: Case;
    number: Number;
}

export default NounProperties;