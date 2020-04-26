import Number from './property/Number'
import Case from './property/Case';
import Gender from './property/Gender';

namespace Article {

    /**
     * Record map of all definite articles.
     */
    export const articles = [[
        //Masculine
        ["ὁ", "οἱ"],      //Nominative
        ["τοῦ", "τῶν"],   //Genitive
        ["τῷ", "τοῖς"],  //Dative
        ["τόν", "τούς"]  //Accusative
    ],
    [   //Feminine
        ["ἡ", "αἱ"],      //Nominative
        ["τῆς", "τῶν"],   //Genitive
        ["τῇ", "ταῖς"],   //Dative
        ["τήν", "τάς"]    //Accusative
    ],
    [   //Neuter
        ["τό", "τά"],    //Nominative
        ["τοῦ", "τῶν"],   //Genitive
        ["τῷ", "τοῖς"],  //Dative
        ["τό", "τά"]     //Accusative
    ]]

    export function getArticle(gender: Gender, case_: Case, number: Number) {
        const article = articles[gender.index][case_.index][number.index];
        if (article) {
            return article;
        }
        else {
            throw new RangeError('Invalid property combination passed to getArticle; no such article!'
                + `${gender}, ${case_}, ${number}`)
        }
    }
}

export default Article;