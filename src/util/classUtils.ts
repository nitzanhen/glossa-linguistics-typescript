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