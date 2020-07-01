
import { stripDiacritics, containsDiacritic, orderDiacritics, isAccented } from '#/linguistics/alphabet/diacritics';

import testData from './diacritics.testdata';

describe("diacritics.ts", () => {
    test("Stripping diacritics", () => {
        testData.stripping.forEach(({ input, output, blacklist, retain }) =>
            expect(stripDiacritics(input, { blacklist, retain })).toBe(output));
    });

    test("containsDiacritic()", () => {
        testData.containing.forEach(({ text, diacritic, result }) => {
            expect(containsDiacritic(text, diacritic)).toBe(result);
        });
    });

    test("Reordering diacritics", () => {
        testData.ordering.forEach(({ input, ordered }) => {
            expect(orderDiacritics(input)).toBe(ordered);
        });
    });

    test("isAccented()", () => {
        testData.isAccented.forEach(({ text, accented }) => {
            expect(isAccented(text)).toBe(accented);
        });
    });
});