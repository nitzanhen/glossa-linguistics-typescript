import { Falsey } from './typeUtils';

/**
 * Useful functions for dealing with functions.
 * 
 * @since 24/06/20
 */

/**
 * forms a parameterization of "scalar" functions from a value of generic type T to T.
 * 
 * In simple terms, this function takes a number of functions that receive an argument t of type T,
 * and creates (returns) a function where that t is the parameter, passed to each function, and which returns
 * the collection of the returned values from all functions.
 * 
 * @example parameterized(f1, f2): t |---> [f1(t), f2(t)].
 * @example parameterized(f1, ..., fn): t |---> [f1(t), ..., fn(t)].
 * 
 * Note that due to Typescript limitations, the returned value is a list of values of type T, not a tuple.
 * 
 * @param functions the functions to parameterize.
 * @returns the parameterization of the functions.
 * 
 * @since 29/06/20
 */
export function parameterized<T>(...functions: ((value: T) => T)[]) {
    return (value: T) => functions.map(f => f(value));
}


/**
 * Returns a function composition of the given functions.
 * Supports null or undefined arguments (for conditional composing), which will be ignored.
 * 
 * @param functions the functions to compose. Null and undefined values will be filtered out.
 * @returns the composed function, which, when passed a value, returns funcN(funcN-1(...(func1(value))...))
 */
export function compose<T>(...functions: (((value: T) => T) | Falsey)[]) {
    const truthyFunctions = functions.filter(Boolean) as ((value: T) => T)[];
    return (value: T) => truthyFunctions.reduce((value, func) => func(value), value);
}