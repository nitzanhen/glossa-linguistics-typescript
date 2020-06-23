
import { euphonizeConsonants, euphonize } from '#/service/inflection/transform/euphony';

import testData from './Euphony.testdata';

describe("euphony transform service", () => {
    test("euphonizeConsonants()", () => {
        testData.consonants.forEach(([consonant, suffix, result]) => {
            expect(euphonizeConsonants(consonant, suffix)).toBe(result);
        });
    });

    test("euphonize()", () => {
        testData.forms.forEach(([base, suffix, euphonized]) => {
            expect(euphonize(base, suffix)).toBe(euphonized);
        });
    });
});