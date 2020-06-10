import '#/global/String';
import { Diacritic, stripDiacritics, containsDiacritic } from '#/linguistics/alphabet/diacritics';

describe("diacritics.ts", () => {
    test("Stripping diacritics", () => {
        const testData: readonly { input: string, output: string, blacklist?: Diacritic[], retain?: Diacritic[] }[] = [
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
            { input: 'ᾃ', output: 'ᾁ', blacklist: ["rough_breathing", "grave"], retain: ["rough_breathing"] },
            { input: 'ῧ', output: 'υ' },
            { input: 'ῧ', output: 'ῦ', blacklist: ["diaeresis"] },
            { input: 'ῧ', output: 'ῧ', blacklist: ["diaeresis"], retain: ["diaeresis"] },
            { input: 'ῗ', output: 'ϊ', blacklist: ["circumflex"] },
        ];

        testData.forEach(({ input, output, blacklist, retain }) =>
            expect(stripDiacritics(input, { blacklist, retain })).toMatch(output));
    });

    test("containsDiacritic()", () => {
        expect(containsDiacritic('ᾌ', 'acute')).toBe(true);
        expect(containsDiacritic('ᾌ', 'smooth_breathing')).toBe(true);
        expect(containsDiacritic('ᾌ', 'iota_subscript')).toBe(true);
        expect(containsDiacritic('ῧ', 'diaeresis')).toBe(true);
        expect(containsDiacritic('ῧ', 'circumflex')).toBe(true);
        expect(containsDiacritic('ψ', 'circumflex')).toBe(false);
    })
});