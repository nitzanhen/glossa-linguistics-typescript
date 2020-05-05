/**
 * 
 */
class Tree<T> {
    //------ Fields ------//

    public data: T;

    public children: Tree<T>[];

    //------ Constructor ------//

    constructor(data: T, children?: Tree<T>[]) {
        this.data = data;
        this.children = children || [];
    }

    //------ Methods ------//


}

export default Tree;