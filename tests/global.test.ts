import '#/global/String';

import testData from './global.testData';

describe("global modules", () => {
    test("String toUpperCase(), toLowerCase() override", () => {
        testData.cases.forEach(([input, output]) => {
            expect(input.toUpperCase().toLowerCase()).toBe(output);
        });
    });

    test("trim()", () => {
        testData.trimming.forEach(({ input, trimFunction, trimmed }) => {
            if (trimFunction) {
                expect(input.trim(trimFunction)).toBe(trimmed);
            }
            else {
                expect(input.trim()).toBe(trimmed);
            }
        });
    });

    test("capitalized()", () => {
        testData.capitalization.forEach(([string, capitalized]) => {
            expect(string.capitalize()).toBe(capitalized);
            expect(capitalized.isCapitalized()).toBe(true);
        });
    });
});