// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Truth or Myth? - Vaccination Edition",
        "main":    "<p>Let's find out if you can tell fact from myth!</p>",
        "results": "<h5>Learn More</h5><p>Come and check out these articles to find out more about vaccines.</p>",
        "level1":  "Superior",
        "level2":  "Outstanding",
        "level3":  "Excellent",
        "level4":  "Good",
        "level5":  "Fair" // no comma here
    },
    "questions": [
        { // Question 1 
            "q": "Infant immune systems can’t handle multiple vaccines",
            "a": [
                {"option": "Myth",      "correct": true},
                {"option": "Truth",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a MYTH!</span> Infant immune systems are much stronger than they seem. In theory, a baby's body has the ability to respond to about 10,000 vaccines at one time!<br>The immune systems can never fully overpowered as the cells in the human body are always being replenished - babies are exposed to countless bacteria and viruses every day.<br>Even though there are more available now, new vaccines are more efficient and have fewer ingredient than those in previous decades.</p>",
            "incorrect": "<p><span>Oops, actually the answer is MYTH.</span> Infant immune systems are much stronger than they seem. In theory, a baby's body has the ability to respond to about 10,000 vaccines at one time!<br>The immune systems can never fully overpowered as the cells in the human body are always being replenished - babies are exposed to countless bacteria and viruses every day.<br>Even though there are more available now, new vaccines are more efficient and have fewer ingredient than those in previous decades.</p>" // no comma here
        },
        { // Question 2 
            "q": "Vaccines cause autism.",
            "a": [
                {"option": "Myth",               "correct": true},
                {"option": "Truth",               "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a MYTH!</span> The fear that vaccines increase the risk of autism came from a 1997 study which claimed that the measles, mumps and rubella (MMR) vaccines was the reason for increased autism rates in Bristish children. Since then, the paper has been withdrawn due to procedural issues, ethical breaches, and undisclosed financial conflict of interest.<br>The true cause of autism is still mystery, however the theory that there is a link between autism and vaccination has been fully disproven.<br>There have been several studies that have identified symptoms of autism in children before receiving the MMR vaccines, and one study has shown evidence that autism is developed in the womb.</p>",
            "incorrect": "<p><span>Oops, actually the answer is MYTH.</span> The fear that vaccines increase the risk of autism came from a 1997 study which claimed that the measles, mumps and rubella (MMR) vaccines was the reason for increased autism rates in Bristish children. Since then, the paper has been withdrawn due to procedural issues, ethical breaches, and undisclosed financial conflict of interest.<br>The true cause of autism is still mystery, however the theory that there is a link between autism and vaccination has been fully disproven.<br>There have been several studies that have identified symptoms of autism in children before receiving the MMR vaccines, and one study has shown evidence that autism is developed in the womb.</p>" // no comma here
        },
        { // Question 3 
            "q": "Natural immunity (to get sick and recover naturally) is superior than vaccine-acquired immunity",
            "a": [
                {"option": "Myth",           "correct": true},
                {"option": "Truth",          "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a MYTH!</span> In a few cases, becoming sick and recovering naturally results in stronger immunity to the disease than vaccination.<br>However, this approach is far too risky because the dangers outweigh the benefits - for example, if your child contracted measles, he / she would have a 1 in 500 chance of death from the effects of the disease. If you compare this with the number of people who have had severe allergic reactions from the MMR vaccine (less than 1 in one million) vaccinating your child is the much safer option.</p>",
            "incorrect": "<p><span>Oops, actually the answer is MYTH.</span> In a few cases, becoming sick and recovering naturally results in stronger immunity to the disease than vaccination.<br>However, this approach is far too risky because the dangers outweigh the benefits - for example, if your child contracted measles, he / she would have a 1 in 500 chance of death from the effects of the disease. If you compare this with the number of people who have had severe allergic reactions from the MMR vaccine (less than 1 in one million) vaccinating your child is the much safer option.</p>" // no comma here
        },
        { // Question 4
            "q": "Vaccines contain unsafe toxins.",
            "a": [
                {"option": "Myth",      "correct": true},
                {"option": "Truth",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a MYTH!</span> Many people are concerned that vaccines contain mercury, aluminum, and formaldehyde, and while it is true that these chemicals are toxic at high levels, only tiny amounts of these chemicals are used in approved vaccines.<br>Formaldehyde is actually produced at higher rates by our own metabolic systems, and there is no evidence that shows that low levels of any of these chemicals are harmful. </p>",
            "incorrect": "<p><span>Oops, actually the answer is MYTH.</span> Many people are concerned that vaccines contain mercury, aluminum, and formaldehyde, and while it is true that these chemicals are toxic at high levels, only tiny amounts of these chemicals are used in approved vaccines.<br>Formaldehyde is actually produced at higher rates by our own metabolic systems, and there is no evidence that shows that low levels of any of these chemicals are harmful. </p></p>" // no comma here
        },
        { // Question 5
            "q": "Vaccines have eradicated diseases globally.",
            "a": [
                {"option": "Myth",      "correct": false},
                {"option": "Truth",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a TRUTH!</span> Better sanitation, nutrition and antibiotics have helped to improve the level of infectious diseases globally, however vaccines themselves have helped to eradicate certain diseases across entire countries (e.g. polio), and in certain cases - globally (e.g. smallpox).<br>If people stop vaccinating, there is a chance that these diseases could return over time. </p>",
            "incorrect": "<p><span>Oops, actually the answer is TRUTH.</span> Many people are concerned that vaccines contain mercury, aluminum, and formaldehyde, and while it is true that these chemicals are toxic at high levels, only tiny amounts of these chemicals are used in approved vaccines.<br>Formaldehyde is actually produced at higher rates by our own metabolic systems, and there is no evidence that shows that low levels of any of these chemicals are harmful. </p></p>" // no comma here
        },
        { // Question 6
            "q": "Vaccines can infect my child with the disease that it is trying to prevent.",
            "a": [
                {"option": "Myth",      "correct": true},
                {"option": "Truth",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a MYTH!</span>Vaccines may cause mild symptoms, which drives the false idea that the child has the disease after vaccination.<br> A small percentage (less than 1 in one million cases) where symptoms do occur, the child is experiencing the body’s immune response to the vaccine, not the disease.<br>Vaccines cause the immune system to produce an immune response similar to the disease, but they do not cause the disease, nor does it put the person at risk of its potential complications.<br>Vaccines have been safe to use for decades and follow strict clinical and regulatory guidelines.</p>",
            "incorrect": "<p><span>Oops, actually the answer is MYTH.</span> Vaccines may cause mild symptoms, which drives the false idea that the child has the disease after vaccination.<br> A small percentage (less than 1 in one million cases) where symptoms do occur, the child is experiencing the body’s immune response to the vaccine, not the disease.<br>Vaccines cause the immune system to produce an immune response similar to the disease, but they do not cause the disease, nor does it put the person at risk of its potential complications.<br>Vaccines have been safe to use for decades and follow strict clinical and regulatory guidelines. </p></p>" // no comma here
        },
        { // Question 7
            "q": "I need to vaccinate my child even if all the other children around him / her are already immunized",
            "a": [
                {"option": "Myth",      "correct": false},
                {"option": "Truth",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a TRUTH!</span> Herd immunity occurs when a large population of the community is immunized against the disease, which reduces the chance of an outbreak.<br>Infants, pregnant women and people with weaker immune systems can’t receive vaccines and depend on this form of protection.<br>If too many people rely on herd immunity to prevent infection from vaccine-preventable disease, herd immunity will disappear</p>",
            "incorrect": "<p><span>Oops, actually the answer is TRUTH.</span> Herd immunity occurs when a large population of the community is immunized against the disease, which reduces the chance of an outbreak.<br>Infants, pregnant women and people with weaker immune systems can’t receive vaccines and depend on this form of protection.<br>If too many people rely on herd immunity to prevent infection from vaccine-preventable disease, herd immunity will disappear </p></p>" // no comma here
        },
        { // Question 8
            "q": "I can vaccinate my child later in life",
            "a": [
                {"option": "Myth",    "correct": true},
                {"option": "Truth",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a MYTH!</span> Any delay in vaccinating your child can leave him / her at risk of the vaccine-preventable disease.<br>The best way to ensure your child’s safety is to follow the guidelines and schedule set out by the Ministry of Health (please click<b>HERE<b>), in consultation with your doctor.</p>",
            "incorrect": "<p><span>Oops, actually the answer is MYTH.</span> Any delay in vaccinating your child can leave him / her at risk of the vaccine-preventable disease.<br>The best way to ensure your child’s safety is to follow the guidelines and schedule set out by the Ministry of Health (please click<b>HERE<b>), in consultation with your doctor.</p>" // no comma here
        } // no comma here
    ]
};
