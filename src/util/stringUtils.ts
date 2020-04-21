/**
 * Utility functions for strings
 *
 * @since 15/4/20
 */

/**
 * Capitalizes the given string.
 * @returns the capitalized string
 */
export function capitalize(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}
