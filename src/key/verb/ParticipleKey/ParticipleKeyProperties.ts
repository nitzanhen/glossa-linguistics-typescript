import { Case, Number } from 'linguistics/property';

import VerbKeyProperties from '../VerbKeyProperties';

interface ParticipleKeyProperties extends VerbKeyProperties {
    case_: Case;
    number: Number;
};

export default ParticipleKeyProperties;