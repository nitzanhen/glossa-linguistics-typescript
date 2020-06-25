
/**
 * Useful functions for dealing with functions.
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
 * @param functions the functions to compose.
 * @returns the composed function, which, when passed a value, returns funcN(funcN-1(...(func1(value))...))
 */
export function compose<T>(...functions: ((value: T) => T)[]) {
    return (value: T) => functions.reduce((value, func) => func(value), value)
}