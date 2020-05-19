import HasherService from '../src/service/hash';
import Hasher from '../src/service/hash/Hasher';

describe("hashers", () => {
    test("HasherService contains only hashers", () => {
        Object.values(HasherService).forEach(service => {
            expect(service).toBe<Hasher<any>>(service);
        });
    });

    const TestData: Record<keyof typeof HasherService, Readonly<{ input: any[], hash: string; }>> = {

    };

});