
import HasherService from 'service/hash';
import Hasher from 'service/hash/Hasher';

import testData from './Hasher.testdata';

describe("hashers", () => {
    test("HasherService contains only hashers", () => {
        Object.values(HasherService).forEach(service => {
            expect(service).toBe<Hasher<any>>(service);
        });
    });



    for (const [type, data] of Object.entries(testData)) {
        const hasher = (<any>HasherService)[type] as Readonly<Hasher<any>>;
        data.forEach(({ input, hash }, i) => {
            test(`${type}(${i})`, () => {
                //Testing hashing
                expect(hasher.hash(input)).toBe(hash);

                //Testing unhashing
                expect(hasher.unhash(hash)).toEqual(input);
            });
        });

    }
});