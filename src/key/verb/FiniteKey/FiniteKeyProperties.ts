import { Mood, Person, Number } from 'linguistics/property';

import VerbKeyProperties from '../VerbKeyProperties';

interface FiniteKeyProperties extends VerbKeyProperties {
    mood: Mood;
    person: Person;
    number: Number;
}

export default FiniteKeyProperties;