import { SyllableType } from '#/linguistics/alphabet/syllables';

const testData = {
    'φῦλα': {
        syllables: ['φῦ', 'λα'],
        syllableTypes: ['longByNature', 'short']
    },
    'φύλλα': {
        syllables: ['φύλ', 'λα'],
        syllableTypes: ['longByPosition', 'short']
    },
    'ἅκρον': {
        syllables: ['ἅ', 'κρον'],
        syllableTypes: ['short', 'short']
    },
    'ἄρχων': {
        syllables: ['ἄρ', 'χων'],
        syllableTypes: ['longByPosition', 'longByNature']
    },
    'οἶστρος': {
        syllables: ['οἶ', 'στρος'],
        syllableTypes: ['longByNature', 'short']
    },
    'ἄνθραξ': {
        syllables: ['ἄν', 'θραξ'],
        syllableTypes: ['longByPosition', 'longByPosition']
    },
    'τάξις': {
        syllables: ['τά', 'ξις'],
        syllableTypes: ['longByPosition', 'short']
    },
    'ἀρχή': {
        syllables: ['ἀρ', 'χή'],
        syllableTypes: ['longByPosition', 'longByNature']
    },
    'ἧττον': {
        syllables: ['ἧτ', 'τον'],
        syllableTypes: ['longByNature', 'short']
    },
    'λείψω': {
        syllables: ['λεί', 'ψω'],
        syllableTypes: ['longByNature', 'longByNature']
    },
    'φύλαξ': {
        syllables: ['φύ', 'λαξ'],
        syllableTypes: ['short', 'longByPosition']
    },
    'θεός': {
        syllables: ['θε', 'ός'],
        syllableTypes: ['short', 'short']
    },
    'θύρᾱ': {
        syllables: ['θύ', 'ρᾱ'],
        syllableTypes: ['short', 'longByNature']
    },
    'Ποσειδῶν': {
        syllables: ['Πο', 'σει', 'δῶν'],
        syllableTypes: ['short', 'longByNature', 'longByNature']
    },
    'Ἀφροδῑ́τη': {
        syllables: ['Ἀ', 'φρο', 'δῑ́', 'τη'],
        syllableTypes: ['short', 'short', 'longByNature', 'longByNature']
    },
    'Ἥφαιστος': {
        syllables: ['Ἥ', 'φαι', 'στος'],
        syllableTypes: ['longByNature', 'longByNature', 'short']
    },
    'Θουκῡδίδης': {
        syllables: ['Θου', 'κῡ', 'δί', 'δης'],
        syllableTypes: ['longByNature', 'longByNature', 'short', 'longByNature']
    },
    'Ἀχιλλεύς': {
        syllables: ['Ἀ', 'χιλ', 'λεύς'],
        syllableTypes: ['short', 'longByPosition', 'longByNature']
    },
    'Τροίᾱ': {
        syllables: ['Τροί', 'ᾱ'],
        syllableTypes: ['longByNature', 'longByNature']
    },
    'Βαῦκις': {
        syllables: ['Βαῦ', 'κις'],
        syllableTypes: ['longByNature', 'short']
    },
    'Ξέρξης': {
        syllables: ['Ξέρ', 'ξης'],
        syllableTypes: ['longByPosition', 'longByNature']
    },
    'Κύκλωψ': {
        syllables: ['Κύ', 'κλωψ'],
        syllableTypes: ['short', 'longByNature']
    },
    'Ῥέᾱ': {
        syllables: ['Ῥέ', 'ᾱ'],
        syllableTypes: ['short', 'longByNature']
    },
    'Δίρκη': {
        syllables: ['Δίρ', 'κη'],
        syllableTypes: ['longByPosition', 'longByNature']
    },
    'Ὅμηρος': {
        syllables: ['Ὅ', 'μη', 'ρος'],
        syllableTypes: ['short', 'longByNature', 'short']
    },
    'Σωκράτης': {
        syllables: ['Σω', 'κρά', 'της'],
        syllableTypes: ['longByNature', 'short', 'longByNature']
    },
    'Μοῦσα': {
        syllables: ['Μοῦ', 'σα'],
        syllableTypes: ['longByNature', 'short']
    },
    'Ζεύς': {
        syllables: ['Ζεύς'],
        syllableTypes: ['longByNature']
    },
    'Ἀγαμέμνων': {
        syllables: ['Ἀ', 'γα', 'μέ', 'μνων'],
        syllableTypes: ['short', 'short', 'short', 'longByNature']
    },
    'Ὠκεανός': {
        syllables: ['Ὠ', 'κε', 'α', 'νός'],
        syllableTypes: ['longByNature', 'short', 'short', 'short']
    },
    'Φειδίᾱς': {
        syllables: ['Φει', 'δί', 'ᾱς'],
        syllableTypes: ['longByNature', 'short', 'longByNature']
    },
    'Λεύκιππος': {
        syllables: ['Λεύ', 'κιπ', 'πος'],
        syllableTypes: ['longByNature', 'longByPosition', 'short']
    },
    'Ᾱ̔́ιδης': {
        syllables: ['Ᾱ̔́ι', 'δης'],
        syllableTypes: ['longByNature', 'longByNature']
    },
    'Οἰδίπους': {
        syllables: ['Οἰ', 'δί', 'πους'],
        syllableTypes: ['longByNature', 'short', 'longByNature']
    },
    'Εἰλείθυια': {
        syllables: ['Εἰ', 'λεί', 'θυι', 'α'],
        syllableTypes: ['longByNature', 'longByNature', 'longByNature', 'short']
    },
    'Γλαύκων': {
        syllables: ['Γλαύ', 'κων'],
        syllableTypes: ['longByNature', 'longByNature']
    },
    'Χάρυβδις': {
        syllables: ['Χά', 'ρυ', 'βδις'],
        syllableTypes: ['short', 'short', 'short']
    },
    'ἤϋ': {
        syllables: ['ἤ', 'ϋ'],
        syllableTypes: ['longByNature', 'short']
    },
    'Ἀΐδι': {
        syllables: ['Ἀ', 'ΐ', 'δι'],
        syllableTypes: ['short', 'short', 'short']
    }
} as Record<string, { syllables: string[], syllableTypes: SyllableType[]; }>;

export default testData;