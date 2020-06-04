import { Case, Number } from '#/linguistics/property';

import VerbProperties from '../VerbProperties';

interface ParticipleProperties extends VerbProperties {
    case_: Case;
    number: Number;
};

export default ParticipleProperties;