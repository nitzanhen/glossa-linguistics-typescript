
import { contractVowels, contract } from '#/service/inflection/transform/contractor';

import testData from './Contractor.testdata';

describe("Contractor service", () => {
    test("Contracting vowels", () => {
        testData.vowelContractions.forEach(([left, right, contraction]) => {
            expect(contractVowels(left, right)).toBe(contraction);
        });
    });

    test("Contracting forms", () => {
        testData.wordContractions.forEach(([base, suffix, contraction]) => {
            expect(contract(base, suffix)).toBe(contraction);
        });
    });
});