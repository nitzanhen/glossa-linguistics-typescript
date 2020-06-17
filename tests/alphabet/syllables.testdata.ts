import { SyllableType } from '#/linguistics/alphabet/syllables';

const testData = {
    'φῦλα': {
        syllables: ['φῦ', 'λα'],
        syllableTypes: ['longByNature', 'short'],
        vowelParts: ['ῦ', 'α']
    },
    'φύλλα': {
        syllables: ['φύλ', 'λα'],
        syllableTypes: ['longByPosition', 'short'],
        vowelParts: ['ύ', 'α']
    },
    'ἅκρον': {
        syllables: ['ἅ', 'κρον'],
        syllableTypes: ['short', 'short'],
        vowelParts: ['ἅ', 'ο']
    },
    'ἄρχων': {
        syllables: ['ἄρ', 'χων'],
        syllableTypes: ['longByPosition', 'longByNature'],
        vowelParts: ['ἄ', 'ω']
    },
    'οἶστρος': {
        syllables: ['οἶ', 'στρος'],
        syllableTypes: ['longByNature', 'short'],
        vowelParts: ['οἶ', 'ο']
    },
    'ἄνθραξ': {
        syllables: ['ἄν', 'θραξ'],
        syllableTypes: ['longByPosition', 'longByPosition'],
        vowelParts: ['ἄ', 'α']
    },
    'τάξις': {
        syllables: ['τά', 'ξις'],
        syllableTypes: ['longByPosition', 'short'],
        vowelParts: ['ά', 'ι']
    },
    'ἀρχή': {
        syllables: ['ἀρ', 'χή'],
        syllableTypes: ['longByPosition', 'longByNature'],
        vowelParts: ['ἀ', 'ή']
    },
    'ἧττον': {
        syllables: ['ἧτ', 'τον'],
        syllableTypes: ['longByNature', 'short'],
        vowelParts: ['ἧ', 'ο']
    },
    'λείψω': {
        syllables: ['λεί', 'ψω'],
        syllableTypes: ['longByNature', 'longByNature'],
        vowelParts: ['εί', 'ω']
    },
    'φύλαξ': {
        syllables: ['φύ', 'λαξ'],
        syllableTypes: ['short', 'longByPosition'],
        vowelParts: ['ύ', 'α']
    },
    'θεός': {
        syllables: ['θε', 'ός'],
        syllableTypes: ['short', 'short'],
        vowelParts: ['ε', 'ό']
    },
    'θύρᾱ': {
        syllables: ['θύ', 'ρᾱ'],
        syllableTypes: ['short', 'longByNature'],
        vowelParts: ['ύ', 'ᾱ']
    },
    'Ποσειδῶν': {
        syllables: ['Πο', 'σει', 'δῶν'],
        syllableTypes: ['short', 'longByNature', 'longByNature'],
        vowelParts: ['ο', 'ει', 'ῶ']
    },
    'Ἀφροδῑ́τη': {
        syllables: ['Ἀ', 'φρο', 'δῑ́', 'τη'],
        syllableTypes: ['short', 'short', 'longByNature', 'longByNature'],
        vowelParts: ['Ἀ', 'ο', 'ῑ́', 'η']
    },
    'Ἥφαιστος': {
        syllables: ['Ἥ', 'φαι', 'στος'],
        syllableTypes: ['longByNature', 'longByNature', 'short'],
        vowelParts: ['Ἥ', 'αι', 'ο']
    },
    'Θουκῡδίδης': {
        syllables: ['Θου', 'κῡ', 'δί', 'δης'],
        syllableTypes: ['longByNature', 'longByNature', 'short', 'longByNature'],
        vowelParts: ['ου', 'ῡ', 'ί', 'η']
    },
    'Ἀχιλλεύς': {
        syllables: ['Ἀ', 'χιλ', 'λεύς'],
        syllableTypes: ['short', 'longByPosition', 'longByNature'],
        vowelParts: ['Ἀ', 'ι', 'εύ']
    },
    'Τροίᾱ': {
        syllables: ['Τροί', 'ᾱ'],
        syllableTypes: ['longByNature', 'longByNature'],
        vowelParts: ['οί', 'ᾱ']
    },
    'Βαῦκις': {
        syllables: ['Βαῦ', 'κις'],
        syllableTypes: ['longByNature', 'short'],
        vowelParts: ['αῦ', 'ι']
    },
    'Ξέρξης': {
        syllables: ['Ξέρ', 'ξης'],
        syllableTypes: ['longByPosition', 'longByNature'],
        vowelParts: ['έ', 'η']
    },
    'Κύκλωψ': {
        syllables: ['Κύ', 'κλωψ'],
        syllableTypes: ['short', 'longByNature'],
        vowelParts: ['ύ', 'ω']
    },
    'Ῥέᾱ': {
        syllables: ['Ῥέ', 'ᾱ'],
        syllableTypes: ['short', 'longByNature'],
        vowelParts: ['έ', 'ᾱ']
    },
    'Δίρκη': {
        syllables: ['Δίρ', 'κη'],
        syllableTypes: ['longByPosition', 'longByNature'],
        vowelParts: ['ί', 'η']
    },
    'Ὅμηρος': {
        syllables: ['Ὅ', 'μη', 'ρος'],
        syllableTypes: ['short', 'longByNature', 'short'],
        vowelParts: ['Ὅ', 'η', 'ο']
    },
    'Σωκράτης': {
        syllables: ['Σω', 'κρά', 'της'],
        syllableTypes: ['longByNature', 'short', 'longByNature'],
        vowelParts: ['ω', 'ά', 'η']
    },
    'Μοῦσα': {
        syllables: ['Μοῦ', 'σα'],
        syllableTypes: ['longByNature', 'short'],
        vowelParts: ['οῦ', 'α']
    },
    'Ζεύς': {
        syllables: ['Ζεύς'],
        syllableTypes: ['longByNature'],
        vowelParts: ['εύ']
    },
    'Ἀγαμέμνων': {
        syllables: ['Ἀ', 'γα', 'μέ', 'μνων'],
        syllableTypes: ['short', 'short', 'short', 'longByNature'],
        vowelParts: ['Ἀ', 'α', 'έ', 'ω']
    },
    'Ὠκεανός': {
        syllables: ['Ὠ', 'κε', 'α', 'νός'],
        syllableTypes: ['longByNature', 'short', 'short', 'short'],
        vowelParts: ['Ὠ', 'ε', 'α', 'ό']
    },
    'Φειδίᾱς': {
        syllables: ['Φει', 'δί', 'ᾱς'],
        syllableTypes: ['longByNature', 'short', 'longByNature'],
        vowelParts: ['ει', 'ί', 'ᾱ']
    },
    'Λεύκιππος': {
        syllables: ['Λεύ', 'κιπ', 'πος'],
        syllableTypes: ['longByNature', 'longByPosition', 'short'],
        vowelParts: ['εύ', 'ι', 'ο']
    },
    'Ᾱ̔́ιδης': {
        syllables: ['Ᾱ̔́ι', 'δης'],
        syllableTypes: ['longByNature', 'longByNature'],
        vowelParts: ['Ᾱ̔́ι', 'η']
    },
    'Οἰδίπους': {
        syllables: ['Οἰ', 'δί', 'πους'],
        syllableTypes: ['longByNature', 'short', 'longByNature'],
        vowelParts: ['Οἰ', 'ί', 'ου']
    },
    'Εἰλείθυια': {
        syllables: ['Εἰ', 'λεί', 'θυι', 'α'],
        syllableTypes: ['longByNature', 'longByNature', 'longByNature', 'short'],
        vowelParts: ['Εἰ', 'εί', 'υι', 'α']
    },
    'Γλαύκων': {
        syllables: ['Γλαύ', 'κων'],
        syllableTypes: ['longByNature', 'longByNature'],
        vowelParts: ['αύ', 'ω']
    },
    'Χάρυβδις': {
        syllables: ['Χά', 'ρυ', 'βδις'],
        syllableTypes: ['short', 'short', 'short'],
        vowelParts: ['ά', 'υ', 'ι']
    },
    'ἤϋ': {
        syllables: ['ἤ', 'ϋ'],
        syllableTypes: ['longByNature', 'short'],
        vowelParts: ['ἤ', 'ϋ']
    },
    'Ἀΐδι': {
        syllables: ['Ἀ', 'ΐ', 'δι'],
        syllableTypes: ['short', 'short', 'short'],
        vowelParts: ['Ἀ', 'ΐ', 'ι']
    }
} as Record<string, { syllables: string[], syllableTypes: SyllableType[], vowelParts: string[]; }>;

export default testData;