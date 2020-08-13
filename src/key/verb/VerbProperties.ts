import { PrincipalPart, Tense, Voice } from 'linguistics/property';

import KeyProperties from '../KeyProperties';

interface VerbProperties extends KeyProperties {
    principalPart: PrincipalPart;
    tense: Tense;
    voice: Voice;
}

export default VerbProperties;