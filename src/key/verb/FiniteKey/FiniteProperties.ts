import VerbProperties from '../VerbProperties';
import { Mood, Person, Number } from '../../../linguistics/property';

interface FiniteProperties extends VerbProperties {
    mood: Mood;
    person: Person;
    number: Number;
}

export default FiniteProperties;