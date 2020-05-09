import { Declension, Gender, Number } from '../src/linguistics/property';
import AddWordServices from '../src/service/add_word';
import { FirstDeclensionVariant } from '../src/service/inflection/pos/NounInflectionService';

const AddNounService = AddWordServices.GreekNoun;

const testWord = (root: string, declension: Declension, gender: Gender, variant?: FirstDeclensionVariant) => {
    const suggestions = AddNounService.generateDefaultBlockSuggestions(root, declension, gender, variant);
    expect(suggestions).toHaveLength(2);
    expect(suggestions[0]).toHaveLength(4);
    suggestions.forEach(([root, declension, gender, number]) => {
        const overview = AddNounService.generateBlockOverview(root, declension, gender, number, variant);
        expect(overview).toHaveLength(2);
        expect(overview[0]).toContain(root);
        expect(overview[1].toLowerCase()).toContain(number);

        const inflections = AddNounService.generateInflectionBlock(root, declension, gender, number, variant);
        expect(inflections).toHaveLength(5);
        console.log(inflections);
    });
};

describe("AddNounService", () => {
    test('κόρη', () => testWord('κόρ', Declension.FIRST_DECLENSION, Gender.FEMININE, "eta"));
    test('μῆλον', () => testWord('μῆλ', Declension.SECOND_DECLENSION, Gender.NEUTER));
    test('δεσπότης', () => testWord('δεσπότ', Declension.FIRST_DECLENSION, Gender.MASCULINE));
});