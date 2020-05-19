/**
 * Verb inflection suffix collection.
 * Contains only the suffixes; prefixes (such as augments)
 * are not kept here.
 * 
 * Order is tense -> mood -> voice -> number -> person.
 * 
 * @since 19/05/20
 */
const VerbInflectionSuffixes = {
    present: {
        indicative: {
            active: {
                singular: {
                    first: 'ω',
                    second: 'εις',
                    third: 'ει',
                },
                plural: {
                    first: 'ομεν',
                    second: 'ετε',
                    third: "ουσι(ν)",    
                }
            },
            mediopassive: {
                singular: {
                    first: 'ομαι',
                    second: ['ῃ', 'ει'],
                    third: 'ομαι',
                },
                plural: {
                    first: 'ομεν',
                    second: 'ετε',
                    third: 'ον',    
                }
            }
        },
        subjunctive: {
            active: {
                singular: {
                    first: 'ω',
                    second: 'ῃς',
                    third: 'ῃ',
                },
                plural: {
                    first: 'ωμεν',
                    second: 'ητε',
                    third: 'ωσι(ν)',
                }
            },
            mediopassive: {
                singular: {
                    first: 'ωμαι',
                    second: 'ῃ',
                    third: 'ηται',
                },
                plural: {
                    first: 'ωμεθα',
                    second: 'ησθε',
                    third: 'ωνται',
                }
            }
        },
        optative: {
            active: {
                singular: {
                    first: 'οιμι',
                    second: 'οις',
                    third: 'οι',
                },
                plural: {
                    first: 'οιμεν',
                    second: 'οιτε',
                    third: 'οιεν',
                }
            },
            mediopassive: {
                singular: {
                    first: 'οιμην',
                    second: 'οιο',
                    third: 'οιτο',
                },
                plural: {
                    first: 'οιμεθα',
                    second: 'οισθε',
                    third: 'οιντο',
                }
            }
        },
        imperative: {
            active: {
                singular: {
                    second: 'ε',
                    third: 'ετω',
                },
                plural: {
                    second: 'ετε',
                    third: 'οντων',
                }
            },
            mediopassive: {
                singular: {
                    second: 'ου',
                    third: 'εσθω',
                },
                plural: {
                    second: 'εσθε',
                    third: 'εσθων',
                }
            },
        }
    },
    imperfect: {
        active: {
            singular: {
                first: 'ον',
                second: 'ες',
                third: 'ε(ν)',
            },
            plural: {
                first: 'ομεν',
                second: 'ετε',
                third: 'ον',    
            }
        },
        mediopassive: {
            singular: {
                first: 'ομην',
                second: 'ου',
                third: 'ετο',
            },
            plural: {
                first: 'ομεθα',
                second: 'εσθε',
                third: 'οντο',    
            }
        }
    },
    future: {
       active: {
            singular: {
                first: 'ω',
                second: 'εις',
                third: 'ει',
            },
            plural: {
                first: 'ομεν',
                second: 'ετε',
                third: "ουσι(ν)",    
            }
        },
       middle: {
        singular: {
            first: 'ομαι',
            second: ['ῃ', 'ει'],
            third: 'εται',
        },
        plural: {
            first: 'ομεθα',
            second: 'εσθε',
            third: 'ονται',    
        }
       },
       passive: {
        singular: {
            first: 'ομαι',
            second: ['ῃ', 'ει'],
            third: 'εται',
        },
        plural: {
            first: 'ομεθα',
            second: 'εσθε',
            third: 'ονται',    
        }
       }
    },
    aorist: {

    },
    perfect: {

    },
    pluperfect: {

    },
    future_perfect: {

    }
}

export default VerbInflectionSuffixes;