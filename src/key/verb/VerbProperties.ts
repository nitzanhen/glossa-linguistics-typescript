import KeyProperties from '../KeyProperties';
import { PrincipalPart, Tense, Voice } from '../../linguistics/property';

interface VerbProperties extends KeyProperties {
    principalPart: PrincipalPart;
    tense: Tense;
    voice: Voice;
}

export default VerbProperties;