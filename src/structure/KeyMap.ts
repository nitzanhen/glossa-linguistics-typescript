import Key from 'key/Key';
import { Nullable } from 'util/typeUtils';

/**
 * Imeplementation of a Map data structure that supports basic hashing - converting Key
 * objects into integers in a one-to-one correspondence.
 * 
 * @since 24/04/20
 */
class KeyMap<K extends Key, V> {

    //------ Fields ------//

    private store: Map<string, V>;

    //------ Constructor ------//

    public constructor() {
        this.store = new Map();
    }

    //------ Getters & Setters ------//

    public get size(): number {
        return this.store.size;
    }

    //------ Methods ------//

    /** Clears all key-value pairs in the map. */
    public clear(): void {
        this.store.clear();
    }

    /**
     * Checks wether a given key exists in the map.
     * 
     * @param key the key to test.
     * @returns true if the map has the key, and false otherwise. 
     */
    public has(key: K): boolean {
        return this.store.has(key.hash());
    }

    /**
     * Associates the given value with the given key.
     * If the key already exists in the map, its value is
     * overriden with the new value.
     * 
     * @param key the key to associate the value with.
     * @param value the value to associate with the key.
     */
    public set(key: K, value: V): void {
        this.store.set(key.hash(), value);
    }

    /**
     * Performs a strict retrieval of the given key.
     * If no value exists for the key, throws an error.
     * 
     * @param key the key whose value we want to retrieve.
     * 
     * @returns the value associated with the key.
     * @throws RangeError if no value is associated with the given key.
     */
    public getStrict(key: K): V {
        if (this.has(key)) {
            return this.store.get(key.hash())!!;
        }
        else {
            throw RangeError(`Invalid key - passed non-existing key to getStrict(): ${key}`);
        }
    }

    /**
     * Performs a safe retrieval of the given key: if no
     * value is associated with the key, it returns the second, optional parameter passed.
     * If the otherwise parameter is a function, the method calls it, and returns the value returned from
     * it, instead of returning the function itself.
     * 
     * @param key the key whose value we want to retrieve
     * @param otherwise called / returned in case no value is associated with the key.
     */
    public get(key: K, otherwise?: Nullable<V> | (() => Nullable<V>)): Nullable<V> {
        /** Check wether the target param is of type () => Nullable<V> */
        function isVCallback(target: Nullable<V> | (() => Nullable<V>)): target is () => Nullable<V> {
            return typeof target === "function";
        }

        if (this.has(key)) {
            return this.store.get(key.hash());
        }
        else if (isVCallback(otherwise)) {
            return otherwise();
        }
        else {
            return otherwise;
        }
    }
}

export default KeyMap;