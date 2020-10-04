
/**
 * Simple implementation of a string comparison function.
 * Compares the lexographically.
 * 
 * @since 11/09/20
 */
export const compareStrings = (s1: string, s2: string): number => {
    return s1.localeCompare(s2);
}