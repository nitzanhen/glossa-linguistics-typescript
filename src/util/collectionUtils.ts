/**
 * Collection of helpful functions for dealing with collections.
 *
 * @since 09/05/20
 */

/**
 *
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