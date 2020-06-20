
const testData:
    {
        vowelContractions: [string, string, string][],
        wordContractions: [string, string, string][];
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
        ["αἱρέ", "ω", "αἱρῶ"],
        ["αἱρέ", "ομεν", "αἱροῦμεν"],
        ["αἵρε", "ε", "αἵρει"],
        ["αἱρε", "έτω", "αἱρείτω"],
        ['τῑμᾰ́', "εις", "τῑμᾷς"],
        ["τῑ́μᾰ", "ε", "τῑ́μᾱ"]
    ]
};

export default testData;