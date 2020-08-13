import { ContractAccentingOptions } from 'service/inflection/transform/contractor';

const testData:
    {
        vowelContractions: [string, string, string][],
        wordContractions: [string, string, string, ContractAccentingOptions?][];
    }
    = {
    vowelContractions: [
        ["ε", "ω", "ω"],
        ["έ", "ω", "ῶ"],
        ["ε", "ώ", "ώ"],
        ["α", "ῃ", "ᾱͅ"],
        ["ά", "ῃ", "ᾷ"],
        ["α", "ῄ", "ᾱ́ͅ"],
    ],
    wordContractions: [
        //Default, recessive
        ["αἱρέ", "ω", "αἱρῶ"],
        ["αἱρέ", "ομεν", "αἱροῦμεν"],
        ["αἵρε", "ε", "αἵρει"],
        ["αἱρε", "έτω", "αἱρείτω"],
        ['τῑμᾰ́', "εις", "τῑμᾷς"],
        ["τῑ́μᾰ", "ε", "τῑ́μᾱ"],
        //Without auto accenting
        ["αἱρε", "ω", "αἱρω", null],
        ['τῑμα', "εις", "τῑμᾱͅς", null],
        ["αἵρε", "ε", "αἵρει", null],
        //Persistent accenting
        ["αἱρε", "ω", "αἱρῶ", 1],
        ["αἱρε", "ω", "αἱρώ", -1],
        ['τιμα', "εις", "τίμᾱͅς", -3],
        ['τῑμᾰ', "εις", "τῑμᾷς", -2],
        ['τιμα', "εις", "τίμᾱͅς", 0],
    ]
};

export default testData;