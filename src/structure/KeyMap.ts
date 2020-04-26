import Key from '../key/Key';

/**
 * Imeplementation of a Map data structure that supports basic hashing - converting Key
 * objects into integers in a one-to-one correspondence.
 * 
 * @since 24/04/20
 */
class KeyMap<K extends Key, V> {

    //------ Fields ------//

    private map: Map<number, V>;

    //------ Constructor ------//

    public constructor() {
        this.map = new Map();
    }

    //------ Getters & Setters ------//

    public get size(): number {
        return this.map.size;
    }

    //------ Methods ------//

    public clear(): void {
        this.map.clear();
    }
}

export default KeyMap;