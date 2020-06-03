import letters, { vowels, consonants, monophtongs, diphthongs, isMonophthong, isDiphthong, isVowel, isGreekLetter } from '../src/alphabet/letters';
import diacritics from '../src/alphabet/diacritics';

describe("lettes.ts", () => {
    test("All letter groups have the correct number of elements", () => {
        //There should be exactly 24 letters
        expect(Object.keys(letters)).toHaveLength(24);

        //Each letter needs to be either a vowel or a consonant
        Object.values(letters).forEach(({ type }) => {
            expect(["vowel", "consonant"]).toContain(type);
        });

        //There should be exactly 7 monophthongs, 11 diphthongs, 18 vowels total and 17 consonants
        expect(monophtongs).toHaveLength(7);
        expect(diphthongs).toHaveLength(11);
        expect(vowels).toHaveLength(18);
        expect(consonants).toHaveLength(17);
    });

    test("isMonophthong(), isDiphthong(), isVowel() work as expected", () => {
        const { iota_subscript } = diacritics;
        //Test data
        const monophthongTests = ['α', 'ε', 'η', 'ι', 'ο', 'υ', 'ω'];
        const diphthongTests = ["αι", "αυ", "ει", "ευ", "ηυ", "οι", "ου", "υι", "ᾳ", "ῃ", "ῳ"];
        const nonGreekTests = ['a', 'o', 'nῳ', 'αa', 'א'];
        const emptyTest = "";
        const nonStrictMonophthongTests = ['ά', 'ῶ', 'ἡ', 'ὄ'];
        const nonStrictDiphthongTests = ['οὐ', 'οῖ', 'ῷ', 'αὶ', 'εἰ', 'οῦ'];
        const malformedTests = ['ῦῦ', 'ιῷ', 'ι' + iota_subscript, 'εια', "ια", 'ωε', 'οο', 'ου' + iota_subscript];

        monophthongTests.forEach(mono => {
            expect(isMonophthong(mono)).toBe(true);
            expect(isDiphthong(mono)).toBe(false);
            expect(isVowel(mono)).toBe(true);
            expect(isGreekLetter(mono)).toBe(true);

            //Strict mode passes too
            expect(isMonophthong(mono, true)).toBe(true);
            expect(isDiphthong(mono, true)).toBe(false);
            expect(isVowel(mono, true)).toBe(true);
            expect(isGreekLetter(mono, true)).toBe(true);
        });

        diphthongTests.forEach(diph => {
            console.log(diph, isGreekLetter(diph))
            expect(isMonophthong(diph)).toBe(false);
            expect(isDiphthong(diph)).toBe(true);
            expect(isVowel(diph)).toBe(true);

            //Strict mode passes too
            expect(isMonophthong(diph, true)).toBe(false);
            expect(isDiphthong(diph, true)).toBe(true);
            expect(isVowel(diph, true)).toBe(true);
            expect(isGreekLetter(diph, true)).toBe(false);
        });

        nonGreekTests.forEach(text => {
            expect(isMonophthong(text)).toBe(false);
            expect(isDiphthong(text)).toBe(false);
            expect(isVowel(text)).toBe(false);
            expect(isGreekLetter(text)).toBe(false);
        });

        expect(isMonophthong(emptyTest)).toBe(false);
        expect(isDiphthong(emptyTest)).toBe(false);
        expect(isVowel(emptyTest)).toBe(false);
        expect(isGreekLetter(emptyTest)).toBe(false);

        nonStrictMonophthongTests.forEach(test => {
            //Non-strict mode works fine
            expect(isMonophthong(test)).toBe(true);
            expect(isDiphthong(test)).toBe(false);
            expect(isVowel(test)).toBe(true);
            expect(isGreekLetter(test)).toBe(true);

            //Strict mode returns false
            expect(isMonophthong(test, true)).toBe(false);
            expect(isDiphthong(test, true)).toBe(false);
            expect(isVowel(test, true)).toBe(false);
            expect(isGreekLetter(test, true)).toBe(false);
        });

        nonStrictDiphthongTests.forEach(test => {
            //Non-strict mode works fine
            expect(isMonophthong(test)).toBe(false);
            expect(isDiphthong(test)).toBe(true);
            expect(isVowel(test)).toBe(true);

            //Strict mode returns false
            expect(isMonophthong(test, true)).toBe(false);
            expect(isDiphthong(test, true)).toBe(false);
            expect(isVowel(test, true)).toBe(false);
            expect(isGreekLetter(test, true)).toBe(false);
        });

        malformedTests.forEach(test => {
            expect(isMonophthong(test)).toBe(false);
            expect(isDiphthong(test)).toBe(false);
            expect(isVowel(test)).toBe(false);

            expect(isMonophthong(test, true)).toBe(false);
            expect(isDiphthong(test, true)).toBe(false);
            expect(isVowel(test, true)).toBe(false);
            expect(isGreekLetter(test, true)).toBe(false);
        });
    });
});