
/**
 * Basic implementation of a binary Tree data structure.
 * The ${@link Tree} class generalizes this to an arbitrary amount of child nodes.
 * 
 * @since 09/09/20
 */
class BinaryTree<T> {
    //------ Fields ------//

    public data: T;
    public left?: BinaryTree<T>;
    public right?: BinaryTree<T>;

    //------ Constructor ------//

    public constructor(data: T) {
        this.data = data;
    }

    //------ Methods ------//

    /**
     * Traverses the tree inorder (left -> middle -> right).
     * 
     * @returns a Generator(!) that traverses the tree.
     */
    *traverseInorder(): Generator<T, void, undefined> {
        if (this.left) {
            yield* this.left.traverseInorder();
        }

        yield this.data;

        if (this.right) {
            yield* this.right.traverseInorder();
        }
    }
}

export default BinaryTree;