import { Key } from '.';

type PartialKey<K extends Key> = {
    [P in keyof K]?: Array<K[P]>
};

export default PartialKey;