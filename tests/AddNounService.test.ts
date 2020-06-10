import '#/global/String';
import { Declension, Gender, Case } from '#/linguistics/property';
import { DeclensionVariant } from '#/linguistics/variant';
import AddWordServices from '#/service/add_word';

const AddNounService = AddWordServices.GreekNoun;

const testWord = (root: string, declension: Declension, gender: Gender, variant?: DeclensionVariant) => {
    const suggestions = AddNounService.generateDefaultBlockSuggestions(root, declension, gender, variant);

    //One block for the singular, one for the plural
    expect(suggestions).toHaveLength(2);

    //root, declension, gender, number, variant => 5 params
    expect(suggestions[0]).toHaveLength(5);

    suggestions.forEach(([root, declension, gender, number]) => {
        const overview = AddNounService.generateBlockOverview(root, declension, gender, number, variant);
        expect(overview).toHaveLength(2);
        expect(overview[0]).toContain(root);
        expect(overview[1].toLowerCase()).toContain(number.name);

        const inflections = AddNounService.generateInflectionBlock(root, declension, gender, number, variant);
        expect(inflections).toHaveLength(Case.values.length);
    });
};

describe("AddNounService", () => {
    test('κόρη', () => testWord('κόρ', Declension.FIRST_DECLENSION, Gender.FEMININE, "eta"));
    test('μῆλον', () => testWord('μῆλ', Declension.SECOND_DECLENSION, Gender.NEUTER));
    test('δεσπότης', () => testWord('δεσπότ', Declension.FIRST_DECLENSION, Gender.MASCULINE, "eta"));
});