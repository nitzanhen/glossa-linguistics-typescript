import '#/global/String';

describe("global modules", () => {
    test("String toUpperCase(), toLowerCase() override", () => {
        const testData = [
            ["ᾳ", "ᾳ"], ["ᾳε", "ᾳε"],
            ["ᾱι", "ᾳ"], ["ᾱιε", "ᾳε"],
            ["ῃ", "ῃ"], ["ῃε", "ῃε"],
            ["ηι", "ῃ"], ["ηιε", "ῃε"],
            ["ῳ", "ῳ"], ["ῳε", "ῳε"],
            ["ωι", "ῳ"], ["ωιε", "ῳε"],
            ["αϊ", "αϊ"], ["ηί", "ῄ"],
            ["ωῗ", "ωῗ"]
        ];

        testData.forEach(([input, output]) => {
            expect(input.toUpperCase().toLowerCase()).toBe(output);
        });
    });
});