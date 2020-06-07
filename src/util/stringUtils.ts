/**
 * Utility functions for strings
 *
 * @since 15/4/20
 */

/**
 * Capitalizes a given string.
 * 
 * @param string the string to be capitalized. 
 * @returns the capitalized string
 */
export function capitalize(string: string): string {
  //When string[0] is ῳ, calling toUpperCase() turns it to ΩΙ.
  //When capitalizing, we want the iota to be lowercase, too;
  //Therefore, we store the uppercase string first, then slice it after 
  //the first character.
  const upperCase = string[0].toUpperCase();
  return upperCase.slice(1).toLowerCase();
}

/**
 * Helper for creating functions that add a given suffix to any string;
 * useful for inflection suffix trees (where inflections follow simple logic).
 * 
 * @see VerbInflectionService
 * 
 * @param suffix the suffix that the returned function should append.
 * @returns a *function* which receives a string and returns it appended by the given suffix.
 */
export function suffixer(suffix: string): (target: string) => string {
  return (target: string) => target + suffix;
}
