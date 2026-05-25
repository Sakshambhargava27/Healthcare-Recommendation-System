const form = document.getElementById("healthForm");

const userDetails =
    JSON.parse(localStorage.getItem("userDetails"));

function displayUserDetails(userDetails) {

    const userName =
        document.getElementById("userName");

    const userAge =
        document.getElementById("userAge");

    const userSymptoms =
        document.getElementById("userSymptoms");


    if (userName) {
        userName.textContent = userDetails.name;
    }

    if (userAge) {
        userAge.textContent = userDetails.age;
    }

    if (userSymptoms) {
        userSymptoms.textContent = userDetails.symptoms;
    }
}

const diseaseData = {

    "Common Cold": {
        symptoms: [
            "cough",
            "runny nose",
            "common cold",
            "difficulty breathing",
            "having less sleep",
            "sneezing"
        ],

        treatment:
            "Drink warm fluids, take antibiotics, rest, use steam inhalation.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/z2jbR1TpykA?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/ovC-qXzscUc?feature=shared"
            }
        ]
    },

    "Influenza (Flu)": {
        symptoms: [
            "fever",
            "influenza",
            "flu",
            "chills",
            "muscle aches",
            "cough"
        ],

        treatment:
            "Rest, stay hydrated, take antiviral medications if severe.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/N88Dzu5k8Pc?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/GmIdBrlllYA?feature=shared"
            }
        ]
    },

    "COVID-19": {
        symptoms: [
            "fever",
            "dry cough",
            "loss of taste or smell"
        ],

        treatment:
            "Rest, hydration, monitor oxygen levels, seek medical help if severe.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/0oVToMh110U?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/GTHdp0ZAg3I?feature=shared"
            }
        ]
    },

    "Pneumonia": {
        symptoms: [
            "fever",
            "chest pain",
            "difficulty breathing"
        ],

        treatment:
            "Antibiotics if bacterial, oxygen therapy if needed.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/IAQp2Zuqevc?si=nSIX9juDLL1a0bIe"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/voiHZlMWwAE?feature=shared"
            }
        ]
    },

    "Asthma": {
        symptoms: [
            "shortness of breath",
            "wheezing",
            "chest tightness"
        ],

        treatment:
            "Use inhalers, avoid triggers, take prescribed medications.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/KM72Bo59Isg?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/69Del7XQDd0?feature=shared"
            }
        ]
    },

    "Diabetes": {
        symptoms: [
            "frequent urination",
            "excessive thirst",
            "fatigue"
        ],

        treatment:
            "Lifestyle changes, insulin or oral medications.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/bIhy-Rb2xp4?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/AEpDipO-4bQ?feature=shared"
            }
        ]
    },

    "Anemia": {
        symptoms: [
            "fatigue",
            "pale skin",
            "dizziness"
        ],

        treatment:
            "Iron supplements, diet changes.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/z0Z1QMouVgE?si=gtVyUoa05FZXno3l"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/I8dY_z_A4X4?si=oueq79vBpyrJslpS"
            }
        ]
    },

    "Migraine": {
        symptoms: [
            "severe headache",
            "nausea",
            "sensitivity to light"
        ],

        treatment:
            "Pain relievers, lifestyle changes, stress management.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/UqEQmrBlewM?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/vPLbgqqmrRg?feature=shared"
            }
        ]
    },

    "Arthritis": {
        symptoms: [
            "joint pain",
            "stiffness",
            "swelling"
        ],

        treatment:
            "Pain relievers, physiotherapy, lifestyle modifications.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/EB5zxdAQGzU?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://www.youtube.com/watch?v=HINDI_ARTHRITIS"
            }
        ]
    },

    "Kidney Stones": {
        symptoms: [
            "severe lower back pain",
            "blood in urine"
        ],

        treatment:
            "Drink plenty of water, pain relief, medical procedures if needed.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/kLxBks6s4M8?si=9BL6o5KjHPOZBzc5"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/EhPsvmJLP2c?si=_elB3ifiXXNu3gfP"
            }
        ]
    },

    "Depression": {
        symptoms: [
            "persistent sadness",
            "loss of interest",
            "fatigue"
        ],

        treatment:
            "Therapy, medication, lifestyle changes.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/d7NPnvKFs2Y?si=X-W2gH3nNhiVtt7S"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/Y8qJ_0J2qKo?si=bCwODCW8_IYqhfO3"
            }
        ]
    },

    "Typhoid": {
        symptoms: [
            "prolonged fever",
            "weakness",
            "abdominal pain"
        ],

        treatment:
            "Antibiotics, hydration, rest.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/dae6VhLjT70?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/36N1zur-Ln8?feature=shared"
            }
        ]
    },

    "Dengue Fever": {
        symptoms: [
            "high fever",
            "severe body pain",
            "rash"
        ],

        treatment:
            "Hydration, fever management, hospital care if severe.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/Oy1eQQZQZvs?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/eYP920Uiiqw?feature=shared"
            }
        ]
    },

    "Heart Attack": {
        symptoms: [
            "chest pain",
            "shortness of breath",
            "nausea"
        ],

        treatment:
            "Emergency medical help, aspirin, hospital treatment.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/jP0qT6GpBVY?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/dJ_sYGwLvAs?feature=shared"
            }
        ]
    },

    "Food Poisoning": {
        symptoms: [
            "nausea",
            "vomiting",
            "diarrhea"
        ],

        treatment:
            "Hydration, rest, avoid solid food initially.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/Unjsy3i1LLw?si=7wccRp37siO6K2Nk"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/PKg7wlVWjXk?si=CFxYiegoL7e43x0r"
            }
        ]
    },

    "Gallstones": {
        symptoms: [
            "upper abdominal pain",
            "nausea"
        ],

        treatment:
            "Surgery if severe, dietary changes.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/0oVToMh110U?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/z4xdr_0YoQk?feature=shared"
            }
        ]
    },

    "HIV/AIDS": {
        symptoms: [
            "frequent infections",
            "weight loss",
            "fatigue"
        ],

        treatment:
            "Antiretroviral therapy.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/d7NPnvKFs2Y?si=X-W2gH3nNhiVtt7S"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/Y8qJ_0J2qKo?si=bCwODCW8_IYqhfO3"
            }
        ]
    },

    "Alzheimer Disease": {
        symptoms: [
            "memory loss",
            "confusion",
            "personality changes"
        ],

        treatment:
            "Cognitive therapy, medications to slow progression.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/wfLP8fFrOp0?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/57yGjKRC0WQ?feature=shared"
            }
        ]
    },

    "Thyroid Disorders": {
        symptoms: [
            "weight changes",
            "fatigue",
            "mood swings"
        ],

        treatment:
            "Medication, lifestyle changes.",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/SVSBo065hmw?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/pYbhUaEN8kM?feature=shared"
            }
        ]
    },

    "Liver Disease": {
        symptoms: [
            "fatigue",
            "jaundice"
        ],

        treatment:
            "",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/RudR2_VVoaw?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/Gfo28v2uNKs?feature=shared"
            }
        ]
    },

    "Brain Tumour": {
        symptoms: [],

        treatment:
            "",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/2OfLiWLjaEY?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/aGWA4LwURmk?feature=shared"
            }
        ]
    },

    "Breast Cancer": {
        symptoms: [],

        treatment:
            "",

        videos: [
            {
                language: "English",
                link: "https://youtu.be/KyeiZJrWrys?feature=shared"
            },
            {
                language: "Hindi",
                link: "https://youtu.be/s_g2NWUJY_Y?feature=shared"
            }
        ]
    }
};





// ============================
// FORM SUBMISSION
// ============================

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const age =
            document.getElementById("age").value.trim();

        const symptoms =
            document.getElementById("symptoms")
            .value
            .toLowerCase()
            .trim();

        if (!name || !age || !symptoms) {

            alert("Please fill all fields");

            return;
        }

        localStorage.setItem(
            "userDetails",
            JSON.stringify({
                name,
                age,
                symptoms
            })
        );

        window.location.href = "details.html";
    });
}



// ============================
// DETAILS PAGE
// ============================

if (userDetails) {

    displayUserDetails(userDetails);

    const diseaseName =
        findDisease(userDetails.symptoms);

    displayDiseaseData(diseaseName);
}


function displayUserDetails(userDetails) {

    document.getElementById("userName")
        .textContent = userDetails.name;

    document.getElementById("userAge")
        .textContent = userDetails.age;

    document.getElementById("userSymptoms")
        .textContent = userDetails.symptoms;
}





function findDisease(userInput) {

    userInput = userInput.toLowerCase();

    let bestMatch = null;

    let highestScore = 0;

    for (let disease in diseaseData) {

        let score = 0;

        diseaseData[disease]
            .symptoms
            .forEach(symptom => {

                if (
                    userInput.includes(
                        symptom.toLowerCase()
                    )
                ) {
                    score++;
                }

            });

        if (score > highestScore) {

            highestScore = score;

            bestMatch = disease;
        }
    }

    return bestMatch;
}



// ============================
// DISPLAY RESULT
// ============================

function displayDiseaseData(diseaseName) {

    const condition =
        document.getElementById("condition");

    const treatment =
        document.getElementById("treatment");

    const videoTable =
        document.getElementById("videoTable");



    if (!diseaseName) {

        condition.innerHTML =
            "No matching disease found";

        treatment.innerHTML =
            "Please consult a doctor.";

        videoTable.innerHTML = "";

        return;
    }



    const disease =
        diseaseData[diseaseName];



    condition.innerHTML =
        `<strong>Possible Condition:</strong> ${diseaseName}`;



    treatment.innerHTML =
        `<strong>Treatment:</strong><br>${disease.treatment}`;



    videoTable.innerHTML = `
        <tr>
            <th>Language</th>
            <th>Video</th>
        </tr>
    `;



    disease.videos.forEach(video => {

        videoTable.innerHTML += `
            <tr>
                <td>${video.language}</td>

                <td>
                    <a href="${video.link}"
                       target="_blank">

                       Watch Video

                    </a>
                </td>
            </tr>
        `;
    });

}

