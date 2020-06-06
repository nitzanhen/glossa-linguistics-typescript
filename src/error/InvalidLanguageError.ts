
/**
 * An InvalidLanguageError is thrown when a string of text in a given
 * language/script is expected, and a text in another language is passed,
 * e.g. when a non-Greek text is passed to a function expecting Greek text.
 * 
 * @since 06/06/20
 */
class InvalidLanguageError extends Error { };

export default InvalidLanguageError;