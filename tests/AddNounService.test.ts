import { Declension, Gender, Number } from '../src/linguistics/property';
import AddWordServices from '../src/service/add_word';

const AddNounService = AddWordServices.GreekNoun;

describe("AddNounService", () => {
    test('κόρη', () => {
        const root = 'κόρ';
        const declension = Declension.FIRST_DECLENSION;
        const gender = Gender.FEMININE;

        const suggestions = AddNounService.generateDefaultBlockSuggestions(root, declension, gender);
        expect(suggestions).toHaveLength(2);
        expect(suggestions[0]).toHaveLength(4);
        suggestions.forEach(([root, declension, gender, number]) => {
            const overview = AddNounService.generateBlockOverview(root, declension, gender, number);
            expect(overview).toHaveLength(2);
            expect(overview[0]).toContain(root);
            expect(overview[1].toLowerCase()).toContain(number);

            const inflections = AddNounService.generateInflectionBlock(root, declension, gender, number);
            expect(inflections).toHaveLength(5);
            console.log(inflections);
        });
    });
});