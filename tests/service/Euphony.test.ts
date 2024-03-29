
import { euphonizeConsonants, euphonize } from 'service/inflection/transform/euphony';

import testData from './Euphony.testdata';

describe("euphony transform service", () => {
    test("euphonizeConsonants()", () => {
        testData.consonants.forEach(([consonant, suffix, result]) => {
            expect(euphonizeConsonants(consonant, suffix)).toBe(result);
        });

        testData.consonantErrors.forEach(([consonant, suffix]) => {
            expect(() => euphonizeConsonants(consonant, suffix)).toThrow(RangeError)
        })
    });

    test("euphonize()", () => {
        testData.forms.forEach(([base, suffix, euphonized]) => {
            expect(euphonize(base, suffix)).toBe(euphonized);
        });
    });
});