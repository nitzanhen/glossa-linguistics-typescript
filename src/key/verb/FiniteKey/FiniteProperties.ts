import { Mood, Person, Number } from 'linguistics/property';

import VerbProperties from '../VerbProperties';

interface FiniteProperties extends VerbProperties {
    mood: Mood;
    person: Person;
    number: Number;
}

export default FiniteProperties;