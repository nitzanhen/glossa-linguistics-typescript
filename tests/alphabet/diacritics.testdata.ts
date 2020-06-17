import { Diacritic } from "#/linguistics/alphabet/diacritics";

const testData = {
    stripping: [
        {
            input: `Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς· ἁγιασθήτω τὸ ὄνομά σου·
        ἐλθέτω ἡ βασιλεία σου·
        γενηθήτω τὸ θέλημά σου, ὡς ἐν οὐρανῷ, καὶ ἐπὶ τῆς γῆς·
        τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον·
        καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν,
        ὡς καὶ ἡμεῖς ἀφίεμεν τοῖς ὀφειλέταις ἡμῶν·
        καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν, ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ.
        Ἀμήν.`,
            output: `Πατερ ημων ο εν τοις ουρανοις· αγιασθητω το ονομα σου·
        ελθετω η βασιλεια σου·
        γενηθητω το θελημα σου, ως εν ουρανω, και επι της γης·
        τον αρτον ημων τον επιουσιον δος ημιν σημερον·
        και αφες ημιν τα οφειληματα ημων,
        ως και ημεις αφιεμεν τοις οφειλεταις ημων·
        και μη εισενεγκης ημας εις πειρασμον, αλλα ρυσαι ημας απο του πονηρου.
        Αμην.` },
        { input: 'ᾃ', output: 'α' },
        { input: 'ᾃ', output: 'ᾳ', blacklist: ["rough_breathing", "grave"] },
        { input: 'ᾃ', output: 'ᾁ', blacklist: ["rough_breathing", "grave"], retain: ["rough_breathing"] },
        { input: 'ῧ', output: 'υ' },
        { input: 'ῧ', output: 'ῦ', blacklist: ["diaeresis"] },
        { input: 'ῧ', output: 'ῧ', blacklist: ["diaeresis"], retain: ["diaeresis"] },
        { input: 'ῗ', output: 'ϊ', blacklist: ["circumflex"] },
    ],
    containing: [
        { text: 'ᾌ', diacritic: 'acute', result: true },
        { text: 'ᾌ', diacritic: 'smooth_breathing', result: true },
        { text: 'ᾌ', diacritic: 'iota_subscript', result: true },
        { text: 'ῧ', diacritic: 'diaeresis', result: true },
        { text: 'ῧ', diacritic: 'circumflex', result: true },
        { text: 'ψ', diacritic: 'circumflex', result: false },
    ],
    ordering: [
        { input: '\u0313\u0301', ordered: '\u0313\u0301' },
        { input: '\u0301\u0313\u0308', ordered: '\u0308\u0313\u0301' },
        { input: 'ᾌ', ordered: 'ᾌ' },
        { input: 'ᾌ', ordered: 'ᾌ' },
        { input: 'ῧ', ordered: 'ῧ' },
        { input: 'ᾃ', ordered: 'ᾃ' },
        { input: 'ἴβά\u0345', ordered: 'ἴβᾴ' },
    ],
    isAccented: [
        { text: 'ᾌ', accented: true },
        { text: 'ᾌ', accented: true },
        { text: 'ᾌ', accented: true },
        { text: 'ῧ', accented: true },
        { text: 'ῧ', accented: true },
        { text: 'ψ', accented: false },
        { text: 'ῥ', accented: false }
    ]
} as {
    stripping: { input: string, output: string, blacklist?: Diacritic[], retain?: Diacritic[]; }[],
    containing: { text: string, diacritic: Diacritic, result: boolean; }[],
    ordering: { input: string, ordered: string; }[],
    isAccented: { text: string, accented: boolean; }[];
};

export default testData;