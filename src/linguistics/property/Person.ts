import Property from './Property';

/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Person extends Property {
  //------ Instances ------//

  static readonly FIRST_PERSON = new Person('first_person', 0);
  static readonly SECOND_PERSON = new Person('second_person', 1);
  static readonly THIRD_PERSON = new Person('third_person', 2);

  //------ Static Methods ------//

  static get values(): Person[] {
    return [this.FIRST_PERSON, this.SECOND_PERSON, this.THIRD_PERSON];
  }
}

export default Person;