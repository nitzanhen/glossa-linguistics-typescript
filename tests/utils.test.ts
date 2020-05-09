import { capitalize } from '../src/util/stringUtils';
import { getClassName } from '../src/util/classUtils';
import Tree from '../src/structure/Tree';
import { Declension } from '../src/linguistics/property';
import Mastery from '../src/mastery/Mastery';

describe("Utils", () => {
    test("classUtils", () => {
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

    });

    test("String utils", () => {
        const examples: [string, string][] = [
            ["(singular)", "(Singular)"],
            ["aa_b", "Aa_b"],
            ["GREEK", "Greek"]
        ];
        examples.forEach(([string, capitalized]) =>
            expect(capitalize(string)).toBe(capitalized));
    });
});