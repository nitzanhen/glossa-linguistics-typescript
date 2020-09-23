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

export type Function<A = any[], B = any> = (...args: A extends any[] ? A : [A]) => B;

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

/**
 * Essentially turns an interface I into a class.
 * In practice, this creates a new, empty class, with a constructor receiving a 
 * properties object of type I, and assigns all of them to the new instance.
 * 
 * This method should typically be used to turn interfaces into classes for the sake of mixing
 * them into a "subclass", without having to redundantly redeclare each member of the interfaces
 * in the implementing class, as one would have to do when implementing them with the implement keyword. 
 * 
 * Note that while a class can only extend one other class, multiple interfaces can be "crammed" into a single
 * Classify function by intersecting them, e.g. `Classify<I1 & I2>()`.
 */
export function Embed<I>() {
    return class { 
        constructor(properties: I) {
            Object.assign(this, properties)
        }
    } as new (properties: I) => I
}
