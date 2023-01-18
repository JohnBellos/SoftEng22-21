// pushing some data to fill mongodb database with
// use command: mongo < questionnaire.js
//use queDB

db.questionnaire.drop()
db.responses.drop()

db.createCollection("questionnaire")
db.createCollection("responses")

db.questionnaire.insertOne({
    "_id": "QQ000",
    "questionnaireTitle": "My first research questionnaire",
    "keywords": [
        "footbal",
        "islands",
        "timezone"
    ],
    "questions": [
        {
            "qID ": "P00",
            "qtext": "Ποιο είναι το mail σας;",
            "required": "FALSE",
            "type": "profile",
            "options": [
                {
                    "optID": "P00TXT",
                    "opttxt": "<open string>",
                    "nextqID": "P01"
                }
            ]
        },
        {
            "qID ": "P01",
            "qtext": "Ποια είναι η ηλικία σας;",
            "required": "TRUE",
            "type": "profile",
            "options": [
                {
                    "optID": "P01A1",
                    "opttxt": "<30",
                    "nextqID": "Q01"
                },
                {
                    "optID": "P01A2",
                    "opttxt": "30-50",
                    "nextqID": "Q01"
                },
                {
                    "optID": "P01A3",
                    "opttxt": "50-70",
                    "nextqID": "Q01"
                },
                {
                    "optID": "P01A4",
                    "opttxt": ">70",
                    "nextqID": "Q01"
                }
            ]
        },
        {
            "qID ": "Q01",
            "qtext": "Ποιο είναι το αγαπημένο σας χρώμα;",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q01A1",
                    "opttxt": "Πράσινο",

                    "nextqID": "Q02"
                },
                {
                    "optID": "Q01A2",
                    "opttxt": "Κόκκινο",
                    "nextqID": "Q02"
                },
                {
                    "optID": "Q01A3",
                    "opttxt": "Κίτρινο",
                    "nextqID": "Q02"
                }
            ]
        },
        {
            "qID ": "Q02",
            "qtext": "Ασχολείστε με το ποδόσφαιρο;",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q02A1",
                    "opttxt": "Ναι",
                    "nextqID": "Q03"
                },
                {
                    "optID": "Q02A2",
                    "opttxt": "Οχι",
                    "nextqID": "Q04"
                }
            ]
        },
        {
            "qID ": "Q03",
            "qtext": "Τι ομάδα είστε;",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q03A1",
                    "opttxt": "Παναθηναϊκός",
                    "nextqID": "Q04"
                },
                {
                    "optID": "Q03A2",
                    "opttxt": "Ολυμπιακός ",
                    "nextqID": "Q04"
                },
                {
                    "optID": "Q03A3",
                    "opttxt": "ΑΕΚ",
                    "nextqID": "Q04"
                }
            ]
        },
        {
            "qID ": "Q04",
            "qtext": "Έχετε ζήσει σε νησί;",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q04A1",
                    "opttxt": "Ναι",
                    "nextqID": "Q05"
                },

                {
                    "optID": "Q04A2",
                    "opttxt": "Οχι",
                    "nextqID": "Q06"
                }
            ]
        },
        {
            "qID ": "Q05",
            "qtext": "Με δεδομένο ότι απαντήσατε [*Q04A1] στην ερώτηση [*Q04]: Ποια η σχέση σας με το θαλάσσιο σκι;",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q05A1",
                    "opttxt": "Καμία",
                    "nextqID": "Q07"
                },
                {
                    "optID": "Q05A2",
                    "opttxt": "Μικρή",
                    "nextqID": "Q07"
                },
                {
                    "optID": "Q05A3",
                    "opttxt": "Μεγάλη",
                    "nextqID": "Q07"
                }
            ]
        },
        {
            "qID ": "Q06",
            "qtext": "Είστε χειμερινός κολυμβητής",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q06A1",
                    "opttxt": "Ναι",
                    "nextqID": "Q07"
                },
                {
                    "optID": "Q06A2",
                    "opttxt": "Οχι",
                    "nextqID": "Q07"
                }
            ]
        },
        {
            "qID ": "Q07",
            "qtext": "Κάνετε χειμερινό σκι;",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q07A1",
                    "opttxt": "Σπάνια - καθόλου",
                    "nextqID": "Q08"
                },
                {
                    "optID": "Q07A2",
                    "opttxt": "Περιστασιακά",
                    "nextqID": "Q08"
                },
                {

                    "optID": "Q07A3",
                    "opttxt": "Τακτικά",
                    "nextqID": "Q08"
                }
            ]
        },
        {
            "qID ": "Q08",
            "qtext": "Συμφωνείτε να αλλάζει η ώρα κάθε χρόνο;",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q08A1",
                    "opttxt": "Ναι",
                    "nextqID": "Q09"
                },
                {
                    "optID": "Q08A2",
                    "opttxt": "Οχι",
                    "nextqID": "-"
                }
            ]
        },
        {
            "qID ": "Q09",
            "qtext": "Με δεδομένο ότι απαντήσατε [*Q08A2] στην ερώτηση [*Q08]: Προτιμάτε τη θερινή ή την χειμερινή ώρα;",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q09A1",
                    "opttxt": "Θερινή",
                    "nextqID": "-"
                },
                {
                    "optID": "Q09A2",
                    "opttxt": "Χειμερινή",
                    "nextqID": "-"
                }
            ]
        }
    ]
})

db.questionnaire.insertOne({
    "_id": "QQ001",
    "questionnaireTitle": "Consumer Satisfaction Survey",
    "keywords": [
        "customer satisfaction",
        "product feedback",
        "consumer experience"
    ],
    "questions": [
        {
            "qID": "Q1",
            "qtext": "How satisfied are you with the product you purchased?",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q1A1",
                    "opttxt": "Very satisfied",
                    "nextqID": "Q2"
                },
                {
                    "optID": "Q1A2",
                    "opttxt": "Satisfied",
                    "nextqID": "Q2"
                },
                {
                    "optID": "Q1A3",
                    "opttxt": "Neutral",
                    "nextqID": "Q2"
                },
                {
                    "optID": "Q1A4",
                    "opttxt": "Dissatisfied",
                    "nextqID": "Q2"
                },
                {
                    "optID": "Q1A5",
                    "opttxt": "Very dissatisfied",
                    "nextqID": "Q2"
                }
            ]
        },
        {
            "qID": "Q2",
            "qtext": "What is the main reason for your satisfaction/dissatisfaction?",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q2A1",
                    "opttxt": "Product quality",
                    "nextqID": "Q3"
                },
                {
                    "optID": "Q2A2",
                    "opttxt": "Price",
                    "nextqID": "Q3"
                },
                {
                    "optID": "Q2A3",
                    "opttxt": "Customer service",
                    "nextqID": "Q3"
                },
                {
                    "optID": "Q2A4",
                    "opttxt": "Delivery/shipping",
                    "nextqID": "Q3"
                },
                {
                    "optID": "Q2A5",
                    "opttxt": "Other (please specify)",
                    "nextqID": "Q3"
                }
            ]
        },
        {
            "qID": "Q3",
            "qtext": "Would you recommend this product to a friend?",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q3A1",
                    "opttxt": "Yes",
                    "nextqID": "Q4"
                },
                {
                    "optID": "Q3A2",
                    "opttxt": "No",
                    "nextqID": "Q4"
                },
                {
                    "optID": "Q3A3",
                    "opttxt": "Maybe",
                    "nextqID": "Q4"
                }
            ]
        },
        {
            "qID": "Q4",
            "qtext": "Would you purchase this product again?",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q4A1",
                    "opttxt": "Yes",
                    "nextqID": "Q5"
                },
                {
                    "optID": "Q4A2",
                    "opttxt": "No",
                    "nextqID": "Q5"
                },
                {
                    "optID": "Q4A3",
                    "opttxt": "Maybe",
                    "nextqID": "Q5"
                }
            ]
        },
        {
            "qID": "Q5",
            "qtext": "What would you rate the overall experience of purchasing this product on a scale of 1-5?",
            "required": "TRUE",
            "type": "question",
            "options": [
                {
                    "optID": "Q5A1",
                    "opttxt": "1",
                    "nextqID": "Q6"
                },
                {
                    "optID": "Q5A2",
                    "opttxt": "2",
                    "nextqID": "Q6"
                },
                {
                    "optID": "Q5A3",
                    "opttxt": "3",
                    "nextqID": "Q6"
                },
                {
                    "optID": "Q5A4",
                    "opttxt": "4",
                    "nextqID": "Q6"
                },
                {
                    "optID": "Q5A5",
                    "opttxt": "5",
                    "nextqID": "Q6"
                }
            ]
        },
        {
            "qID": "Q6",
            "qtext": "Is there any other feedback or comments you would like to provide?",
            "required": "FALSE",
            "type": "question",
            "options": [
                {
                    "optID": "Q6TXT",
                    "opttxt": "<open text>",
                }
            ]
        }
    ]
})