import { Tree } from '#/structure';
import { Declension, Gender, Number } from '#/linguistics/property';
import { Mastery } from '#/mastery';


const testData: {
    classNames: [object, string][],
    permutations: { input: Iterable<any>[], output: Set<any>; }[],
    composing: [((value: string) => string)[], string, string][],
    parameterizing: [((value: number) => number)[], number, number[]][];
} = {
    classNames: [
        [new Tree(null), "Tree"],
        [Declension.FIRST_DECLENSION, "Declension"],
        [new Mastery(1, 1), "Mastery"]
    ],
    permutations: [
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
    ],
    composing: [
        [[...new Array(10).keys()].map(i => (str: string) => str + i), "-1", "-10123456789"],
        [["a", "b", "c", "d", "e", "f", "g", "h", "i"].map(char => (str: string) => str + char), "0", "0abcdefghi"]
    ],
    parameterizing: [
        [[x => x ** 2, x => x ** 3, x => 1 / x], 3, [9, 27, 1 / 3]],
        [[x => -x, x => Math.floor(x), x => Math.max(x, 3)], 2.5, [-2.5, 2, 3]]
    ]
};

export default testData;