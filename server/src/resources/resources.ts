export const TEXT_ANALYTSIS_MOCK = {
    status: true, // false in case of checking error
    response: {
        grammar: {
            errors: [  // array of errors info
                {
                    id: "e492411846",  // unique error id
                    offset: 2,  // error text offset
                    length: 2,  // error text length
                    description: "Error description",
                    bad: "is",  // error text
                    better: [  // array of suggestions
                        "am"
                    ],
                    type: "grammar"
                },
                {
                    id: "e627659964",  // unique error id
                    offset: 8,  // error text offset
                    length: 8,  // error text length
                    bad: "engeneer",  // error text
                    description: "Error description",
                    better: [  // array of suggestions
                        "engineer",
                        "engender"
                    ],
                    type: "spelling"
                }
            ],
        },
        stats: {
            fleschKincaid: { // Flesch–Kincaid index (https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests)
                readingEase: 63.3, // Index value
                grade: "8th or 9th grade", // Flesch–Kincaid grade
                interpretation: "Plain English. Easily understood by 13- to 15-year-old students", // index value interpretation
            },
            gunningFog: 9.4, // https://en.wikipedia.org/wiki/Gunning_fog_index
            colemanLiau: 12, // https://en.wikipedia.org/wiki/Coleman–Liau_index
            SMOG: 6.5, // https://en.wikipedia.org/wiki/SMOG
            vocabularySize: {
                active: 5000, // How many words author uses every day
                passive: 60000, // How many words author knows
            },
            emotion: { // text emotion classifier
                positive: 0.79, // probability
                negative: 0.21,
            }
        }
    }
}

export const TEXT_SUMMARY_MOCK = {
    status: true,  // false in case of checking error
    response: {
        keywords: [
            "text",
            "readability",
            "english",
            "printing",
            "fewer",
            "words",
            "terms",
            "higher",
            "features",
            "indexes"
        ],
        highlight: [ // Most important paragraph, starting with main sentence
            "The two main factors of readability are the printing and linguistic features of the text.",
            "In other words, pages containing simple and clear text get higher positions in the search results."
        ],
        summary: [ // Text summary sentences
            "The two main factors of readability are the printing and linguistic features of the text.",
             "The Flesch Kinkaid Score is the most popular way to measure the readability of English text.",
            "It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities."
        ]
    }
}