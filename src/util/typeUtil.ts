/**
 * Marks a given type T as nullable, meaning it may be T, undefined or null.
 * 
 * @since 26/04/20
 */
export type Nullable<T> = T | undefined | null;