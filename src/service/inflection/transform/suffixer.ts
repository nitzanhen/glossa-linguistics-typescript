
/**
 * Convenience method to replace explicit lambda function
 */
export function suffix(base: string, suffix: string) {
    return base + suffix;
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
function suffixer(suffix: string): (target: string) => string {
    return (target: string) => target + suffix;
}

export default suffixer;