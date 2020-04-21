/**
 * Container for methods connecting the add word view and the linguistic backend.
 * The generic type P is the part of speech the service deals with.
 *
 * @since 21/4/20
 */
interface AddWordService<P> {
  /**
   * Generates the data needed for the core block of the word.
   * Contains definitions and other properties, common or pos-specific.
   */
  generateCoreBlock(): never;

  /**
   * Generates the data needed for an inflection block of the word.
   */
  generateInflectionBlock(): never;

  /**
   * Generates overview of block to be suggested to the user (to be generated).
   */
  generateBlockSuggestions(): never;
}

export default AddWordService;
