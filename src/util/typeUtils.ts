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
 * Marks a given type T as nullable, meaning it may be T, undefined or null.
 * 
 * @since 26/04/20
 */
export type Nullable<T> = T | undefined | null;

/*
 * taken from https://www.typescriptlang.org/docs/handbook/advanced-types.html 
 */
export type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;