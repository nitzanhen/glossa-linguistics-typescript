import { Mastery, Masterable } from '#/mastery';
/**
 * A definition for a word.
 * A Definition object has fields for the primary definitions - shorter, more accurate definitions of the word (closer to translations, in a sense),
 * and secondary definitions - more descriptive definitions. Only the primary definitions are practiced and tested later on.
 * As expected, the Definition class is Masterable.
 *
 * @since 12/04/20
 */
class Definition implements Masterable {
  //------ Fields ------//

  /** @property primary definitions */

  private primary: string[];
  get primaryDefinitions(): string[] {
    return this.primary;
  }
  set primaryDefinitions(definitions: string[]) {
    //Capitalize the definitions
    this.primary = definitions.map(definition => definition.capitalize());
  }

  /** @property secondary definitions */

  private secondary: string[];
  get secondaryDefinitions(): string[] {
    return this.secondary;
  }
  set secondaryDefinitions(definitions: string[]) {
    //Capitalize the definitions
    this.secondary = definitions.map(definition => definition.capitalize());
  }

  /** @property mastery */
  public mastery: Mastery;

  //------ Constructor -------//

  constructor(primaryDefinitions: string[], secondaryDefinitions: string[]) {
    this.primary = primaryDefinitions;
    this.secondary = secondaryDefinitions;
    this.mastery = new Mastery(0, /** @todo */ 1);
  }

  //------ Methods ------//

  public joinPrimaryDefinitions(): string {
    return this.primaryDefinitions.join(', ');
  }

  public joinSecondaryDefinitions(): string {
    return this.secondaryDefinitions.join(', ');
  }
}

export default Definition;
