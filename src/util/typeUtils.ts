/**
 * Returns the given instance's class name, as a string.
 * 
 * @param instance the instance whose class name to retrieve.
 * @returns the class name, as a string
 * 
 * @since 26/04/20
 */
export function getClassName(instance: object): string {
    return Object.getPrototypeOf(instance).constructor.name;
}

/**
 * Class type; declared as a type alias for brevity.
 * 
 * @since 26/06/20
 */
export type Class<T> = new () => T;

/**
 * Marks a given type T as nullable, meaning it may be T, undefined or null.
 * 
 * @since 26/04/20
 */
export type Nullable<T> = T | undefined | null;

/**
 * Union of the different possible falsey types. 
 * Note that this does not include NaN, which is also a falsey type (but has no explicit type).
 * 
 * @since 25/06/20
 */
export type Falsey = false | 0 | -0 | 0n | "" | null | undefined;


const x: Falsey = false;

/*
 * taken from https://www.typescriptlang.org/docs/handbook/advanced-types.html 
 */
export type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;