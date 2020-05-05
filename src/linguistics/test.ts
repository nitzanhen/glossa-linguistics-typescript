import { Key } from '../key';

class A {
    public a: string;

    constructor(
        a: string,
        public b: any
    ) {
        this.a = a;
    }

    doSomething() {
        console.log("123!");
    }
}


type FilterKey<K extends Key> = {
    [P in keyof K]?: Array<K[P]>
};

const a: Partial<object> = {};