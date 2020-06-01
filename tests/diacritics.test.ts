import { strip, Diacritic } from '../src/alphabet/diacritics';

describe("diacritics.ts", () => {
    test("Stripping diacritics", () => {
        const testData: readonly { input: string, output: string, blacklist?: Diacritic[]; }[] = [
            { input: `Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς· ἁγιασθήτω τὸ ὄνομά σου·
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
            { input: 'ῧ', output: 'υ' },
            { input: 'ῧ', output: 'ῦ', blacklist: ["diaresis"] },
            { input: 'ῗ', output: 'ϊ', blacklist: ["circumflex"] },
        ];

        testData.forEach(({ input, output, blacklist }) =>
            expect(strip(input, blacklist)).toMatch(output));
    });
});