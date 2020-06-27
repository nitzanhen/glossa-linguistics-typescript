import { Falsey, Class } from './typeUtils';

/**
 * Useful functions for dealing with functions.
 * 
 * @since 24/06/20
 */

/**
 * Utility function for inflections which have multiple options.
 * 
 * @param options the option functions, each of which receives a string and returns an inflection.
 * @returns a function which, when called, returns an array with all of the returned values from
 * the option functions.
 */
export function multipleInflections(...options: ((root: string) => string)[]) {
    return (root: string) => options.map(optionFunction => optionFunction(root));
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