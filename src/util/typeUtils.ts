import { Key } from "key";
import { Voice } from "linguistics/property";

/**
 * Returns the given instance's class name, as a string.
 * 
 * @param instance the instance whose class name to retrieve.
 * @returns the class name, as a string
 * 
 * @since 26/04/20
 */
export function getClassName(instance: object): string {
    return instance.constructor.name;
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

/*
 * taken from https://www.typescriptlang.org/docs/handbook/advanced-types.html 
 */
export type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export type Function<A = any[], B = any> = (...args: A extends any[] ? A : [value: A]) => B;

/**
 * Picks the given fields of type T, and makes them all optional.
 * 
 * @since 06/09/20
 */
export type PickPartial<T, K extends keyof T> = Partial<Pick<T, K>>

/**
 * Generalization of Pick to support grabbing some of the fields as optionals.
 * 
 * @since 06/09/20
 */
export type PickWithPartials<T, K extends keyof T, P extends keyof T> = Pick<T, K> & PickPartial<T, P>

export type AssertKeys<T, KeyType extends keyof T = keyof T> = {
    [K in KeyType]: T[K]
}
