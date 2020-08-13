
import { getClassName } from 'util/typeUtils';
import { permutationsOf } from 'util/collectionUtils';
import { compose, parameterized } from 'util/functionUtils';

import testData from './utils.testdata';

describe("Utils", () => {
    test("typeUtils", () => {
        testData.classNames.forEach(([value, className]) => {
            expect(getClassName(value)).toBe(className);
        });
    });
    test("Collection utils", () => {

        testData.permutations.forEach(({ input, output }) => {
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

    test("Function utils", () => {
        //compose()
        testData.composing.forEach(([functions, initial, result]) => {
            expect(compose(...functions)(initial)).toBe(result);
        });

        //patameterized
        testData.parameterizing.forEach(([functionsVector, value, resultVector]) => {
            expect(parameterized(...functionsVector)(value)).toEqual(resultVector);
        });
    });
});