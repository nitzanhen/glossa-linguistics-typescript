import BinaryTree from "./BinaryTree";
import { Function } from 'util/typeUtils';

/**
 * A basic implementation of a SortedSet data structure; that is,
 * a Set whose elements are stored and retrieved in a given order.
 * This implementation uses a binary Tree under the hood, for a 
 * good balance of efficiency in searching, adding, and removing.
 * 
 * @since 09/09/20
 */
class SortedSet<T> {
    //------ Fields ------//

    private tree: BinaryTree<T> | null; l;

    //------ Constructor ------//

    public constructor(
        /** 
         * Function according to which sorting is applied. 
         * Must return a number for every two elements of type T,
         * whose sign is negative iff the first element should come before the second,
         * positive iff the second should come before the first,
         * and zero iff the elements are equivalent.
         */
        public comparator: Function<[T, T], number>
    ) {
        this.tree = null
    }

    //------ Methods  ------//

    add(element: T) {

    }

    remove(element: T): T {

    }

    contains(element: T): boolean {

    }

    *elements(): Generator<T, void, undefined> {
        if (this.tree === null) {
            return;
        }
        yield* this.tree.traverseInorder();
    }

    asList(): T[] {
        return [...this.elements()];
    }
}

export default SortedSet;