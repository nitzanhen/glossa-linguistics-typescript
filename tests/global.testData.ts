import { isConsonant, isVowel } from '#/linguistics/alphabet/letters';

const testData = {
    cases: [
        ["ᾳ", "ᾳ"], ["ᾳε", "ᾳε"],
        ["ᾱι", "ᾳ"], ["ᾱιε", "ᾳε"],
        ["ῃ", "ῃ"], ["ῃε", "ῃε"],
        ["ηι", "ῃ"], ["ηιε", "ῃε"],
        ["ῳ", "ῳ"], ["ῳε", "ῳε"],
        ["ωι", "ῳ"], ["ωιε", "ῳε"],
        ["αϊ", "αϊ"], ["ηί", "ῄ"],
        ["ωῗ", "ωῗ"]
    ],
    trimming: [
        { input: 'aaabbbaaa', trimFunction: letter => letter === 'a', trimmed: 'bbb' },
        { input: '   bbb   ', trimmed: 'bbb' },
        { input: '   bbb   ', trimFunction: undefined, trimmed: 'bbb' },
        { input: 'bbb', trimmed: 'bbb' },
        { input: 'ββααββ', trimFunction: letter => isConsonant(letter), trimmed: 'αα' },
        { input: 'ββααββ', trimFunction: letter => isVowel(letter), trimmed: 'ββααββ' },
    ],
    capitalization: [
        ["singular", "Singular"],
        ["aa_b", "Aa_b"],
        ["GREEK", "Greek"],
        ["ῳ", "Ωι"]
    ]
} as {
    cases: [string, string][],
    trimming: { input: string, trimmed: string, trimFunction?: (letter: string) => boolean; }[],
    capitalization: [string, string][];
};

export default testData;