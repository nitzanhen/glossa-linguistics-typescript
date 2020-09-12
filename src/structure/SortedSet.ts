import { Function } from 'util/typeUtils';

/**
 * A basic implementation of a SortedSet data structure; that is,
 * a Set whose elements are stored and retrieved in a given order.
 * This implementation uses a binary Tree under the hood, for a 
 * good balance of efficiency in searching, adding, and removing.
 * 
 * This is by no means the most efficient implementation possible.
 * It is designed to be a simple implementation, at least presently.
 * @todo research implementing this more efficiently, notably using a Binary Tree / a TreeMap.
 * 
 * @since 09/09/20
 */
class SortedSet<T> {
    //------ Fields ------//

    private elements: T[];

    //------ Constructor ------//

    public constructor(
        /** 
         * Function according to which sorting is applied. 
         * Must return a number for every two elements of type T,
         * whose sign is negative iff the first element should come before the second,
         * positive iff the second should come before the first,
         * and zero iff the elements are equivalent.
         */
        public comparator: Function<[T, T], number>,
        ...initialElements: T[]
    ) {
        this.elements = [];
        initialElements.forEach(el => this.add(el));
    }

    //------ Methods ------//

    /** 
     * Finds the index that an element *should* be in, whether or not it's in the array. 
     * @todo replace with binary search.
     */
    private indexOf(element: T): number {
        let i = 0;
        while (i < this.size && this.comparator(this.elements[i], element) < 0) {
            i++;
        }
        //If we're reached here, there exists no element in the elements array that's greater than the given element.
        return i;
    }

    /** Returns the count of elements in this set. */
    get size(): number {
        return this.elements.length;
    }

    /** Add the given element to the set. If it's already in the set, does nothing. */
    add(element: T) {
        const index = this.indexOf(element);

        //element might already be in the set
        if (this.elements[index] !== element) {
            this.elements.splice(index, 0, element);
        }
    }

    /** Removes the given element from the set. If it's not in the set, does nothing */
    remove(element: T): void {
        const index = this.indexOf(element);

        //element is not necessarily in the set.
        if (this.elements[index] === element) {
            this.elements.splice(index, 1);
        }
    }

    /** Returns true if the given element is in the set, and false otherwise. */
    contains(element: T): boolean {
        const index = this.indexOf(element);
        return (index < this.size) && this.comparator(element, this.elements[index]) === 0;
    }

    /** Generator iterating over all elements of this set, in order.*/
    *iterate(): Generator<T, void, void> {
        for (let i = 0; i < this.size; i++) {
            yield this.elements[i];
        }
    }

    /** Returns the elements of this set as a (sorted) list */
    toList(): T[] {
        return [...this.elements];
    }

    // Prevent the user from serializing, to prevent data loss or other problems.
    toJSON(): never {
        throw new Error('SortedSet is not to be serialized. To serialize its elements, please convert it to a list first using toList()');
    }
}

export default SortedSet;