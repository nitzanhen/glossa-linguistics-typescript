import { capitalize } from '#/util/stringUtils';
import { getClassName } from '#/util/typeUtils';
import { permutationsOf } from '#/util/collectionUtils';
import Tree from '#/structure/Tree';
import { Declension, Gender, Number } from '#/linguistics/property';
import { Mastery } from '#/mastery';

describe("Utils", () => {
    test("typeUtils", () => {
        const examples: [object, string][] = [
            [new Tree(null), "Tree"],
            [Declension.FIRST_DECLENSION, "Declension"],
            [new Mastery(1, 1), "Mastery"]
        ];
        examples.forEach(([value, className]) => {
            expect(getClassName(value)).toBe(className);
        });
    });
    test("Collection utils", () => {
        const examples: Array<{ input: Iterable<any>[], output: Set<any>; }> = [
            {
                input: [[1, 2], [3, 4]],
                output: new Set([[1, 3], [1, 4], [2, 3], [2, 4]])
            },
            {
                input: [[Declension.FIRST_DECLENSION], Gender.values, Number.values],
                output: new Set([
                    [Declension.FIRST_DECLENSION, Gender.MASCULINE, Number.SINGULAR],
                    [Declension.FIRST_DECLENSION, Gender.MASCULINE, Number.PLURAL],
                    [Declension.FIRST_DECLENSION, Gender.FEMININE, Number.SINGULAR],
                    [Declension.FIRST_DECLENSION, Gender.FEMININE, Number.PLURAL],
                    [Declension.FIRST_DECLENSION, Gender.NEUTER, Number.SINGULAR],
                    [Declension.FIRST_DECLENSION, Gender.NEUTER, Number.PLURAL],
                ])
            }
        ];

        examples.forEach(({ input, output }) => {
            const result = new Set(permutationsOf(...input));
            //Expect output and result to be equal (as sets) by mutual inclusion 
            output.forEach(item => {
                expect(result).toContainEqual(item);
            });

            result.forEach(item => {
                expect(output).toContainEqual(item);
            });
        });
    });

    test("String utils", () => {
        const examples: [string, string][] = [
            ["singular", "Singular"],
            ["aa_b", "Aa_b"],
            ["GREEK", "Greek"]
        ];
        examples.forEach(([string, capitalized]) =>
            expect(capitalize(string)).toBe(capitalized));
    });
});