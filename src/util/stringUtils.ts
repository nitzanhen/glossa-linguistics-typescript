/**
 * Utility functions for strings
 *
 * @since 15/4/20
 */

/**
 * Capitalizes the given string.
 * @returns the capitalized string
 */
export function capitalize(string: string): string {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
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
