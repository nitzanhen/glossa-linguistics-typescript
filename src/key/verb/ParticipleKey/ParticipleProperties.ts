import VerbProperties from '../VerbProperties';
import { Case, Number } from '../../../linguistics/property';

interface ParticipleProperties extends VerbProperties {
    case_: Case;
    number: Number;
};

export default ParticipleProperties;