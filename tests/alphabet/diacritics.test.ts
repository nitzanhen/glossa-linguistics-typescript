import '#/global/String';
import { Diacritic, stripDiacritics, containsDiacritic, orderDiacritics } from '#/linguistics/alphabet/diacritics';

import testData from './diacritics.testdata';

describe("diacritics.ts", () => {
    test("Stripping diacritics", () => {
        testData.stripping.forEach(({ input, output, blacklist, retain }) =>
            expect(stripDiacritics(input, { blacklist, retain })).toMatch(output));
    });

    test("containsDiacritic()", () => {
        testData.containing.forEach(({ text, diacritic, result }) => {
            expect(containsDiacritic(text, diacritic)).toBe(result);
        })
    })

    test("Reordering diacritics", () => {
        testData.ordering.forEach(({ input, ordered }) => {
            expect(orderDiacritics(input)).toBe(ordered);
        })
    })
});