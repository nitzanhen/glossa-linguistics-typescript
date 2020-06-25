/**
 * Collection of helpful functions for dealing with collections.
 *
 * @since 09/05/20
 */

/**
 * Generates all permutations of the given iterables, as arrays of values.
 * This essentialy generalizes simple for-loop nesting, as it allows, for example,
 * to iterate over all combinations of different indices i,j,k,etc.
 * 
 * @param iterables the array of iterables to generate permutations of.
 * @returns a generator of permutations
 */
export function* permutationsOf<T>(...iterables: Iterable<T>[]): Generator<T[]> {
    if (iterables.length === 0) {
        yield [];
        return;
    }

    const [iter] = iterables;
    const innerIterables = iterables.slice(1);

    for (let value of iter) {
        for (let values of permutationsOf(...innerIterables))
            yield [value, ...values];
    }
}


