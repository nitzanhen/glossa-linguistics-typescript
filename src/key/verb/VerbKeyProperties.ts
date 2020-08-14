import { PrincipalPart, Tense, Voice } from 'linguistics/property';

import KeyProperties from '../KeyProperties';

interface VerbKeyProperties extends KeyProperties {
    principalPart: PrincipalPart;
    tense: Tense;
    voice: Voice;
}

export default VerbKeyProperties;