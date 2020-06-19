import { Tree } from '#/structure';
import { Declension, Gender, Number } from '#/linguistics/property';
import { Mastery } from '#/mastery';

const testData: {
    classNames: [object, string][],
    permutations: { input: Iterable<any>[], output: Set<any>; }[];
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
    ]
};

export default testData;