//TABLE OF CONTENT
// 1.ENGLISH VERSION
// 2.BAHASA MELAYU VERSION

// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

// 1.ENGLISH VERSION
var quizJSON_en = {
    lang:"en",
    "info": {
        "name":    "Truth or Myth? - Vaccination Edition",
        "main":    "<p>Let's find out if you can tell fact from myth!</p>",
        "results": "<h5></h5><p></p>",
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
            "correct": "<p><span>That's correct, it is a myth!</span> The immune system can never fully be overpowered as the cells in the human body are always being replenished - babies are exposed to countless bacteria and viruses every day.<br>Even though there are more available now, new vaccines are more efficient and have fewer ingredients than those in previous decades.</p>",
            
            "incorrect": "<p><span>Oops, actually the answer is myth.</span> The immune system can never fully be overpowered as the cells in the human body are always being replenished - babies are exposed to countless bacteria and viruses every day.<br>Even though there are more available now, new vaccines are more efficient and have fewer ingredients than those in previous decades.</p>" // no comma here
        },
        { // Question 2 
            "q": "Vaccines cause autism",
            "a": [
                {"option": "Myth",               "correct": true},
                {"option": "Truth",               "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a myth!</span> The fear that vaccines increase the risk of autism came from a 1997 study which claimed that the measles, mumps and rubella (MMR) vaccines was the reason for increased autism rates in Bristish children. Since then, the paper has been withdrawn due to procedural issues, ethical breaches, and undisclosed financial conflict of interest.<br>The true cause of autism is still mystery, however the theory that there is a link between autism and vaccination has been fully disproven.<br>There have been several studies that have identified symptoms of autism in children before receiving the MMR vaccines, and one study has shown evidence that autism is developed in the womb.</p>",
            
            "incorrect": "<p><span>Oops, actually the answer is myth.</span> The fear that vaccines increase the risk of autism came from a 1997 study which claimed that the measles, mumps and rubella (MMR) vaccines was the reason for increased autism rates in Bristish children. Since then, the paper has been withdrawn due to procedural issues, ethical breaches, and undisclosed financial conflict of interest.<br>The true cause of autism is still mystery, however the theory that there is a link between autism and vaccination has been fully disproven.<br>There have been several studies that have identified symptoms of autism in children before receiving the MMR vaccines, and one study has shown evidence that autism is developed in the womb.</p>" // no comma here
        },
        { // Question 3 
            "q": "Natural immunity (to get sick and recover naturally) is superior than vaccine-acquired immunity",
            "a": [
                {"option": "Myth",           "correct": true},
                {"option": "Truth",          "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a myth!</span> In a few cases, becoming sick and recovering naturally results in stronger immunity to the disease than vaccination.<br>However, this approach is far too risky because the dangers outweigh the benefits - for example, if your child contracted measles, he / she would have a 1 in 500 chance of death from the effects of the disease. If you compare this with the number of people who have had severe allergic reactions from the MMR vaccine (less than 1 in one million) vaccinating your child is the much safer option.</p>",
            
            "incorrect": "<p><span>Oops, actually the answer is myth.</span> In a few cases, becoming sick and recovering naturally results in stronger immunity to the disease than vaccination.<br>However, this approach is far too risky because the dangers outweigh the benefits - for example, if your child contracted measles, he / she would have a 1 in 500 chance of death from the effects of the disease. If you compare this with the number of people who have had severe allergic reactions from the MMR vaccine (less than 1 in one million) vaccinating your child is the much safer option.</p>" // no comma here
        },
        { // Question 4
            "q": "Vaccines contain unsafe toxins",
            "a": [
                {"option": "Myth",      "correct": true},
                {"option": "Truth",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a myth!</span> Many people are concerned that vaccines contain mercury, aluminum, and formaldehyde, and while it is true that these chemicals are toxic at high levels, only tiny amounts of these chemicals are used in approved vaccines.<br>Formaldehyde is actually produced at higher rates by our own metabolic systems, and there is no evidence that shows that low levels of any of these chemicals are harmful. </p>",
            
            "incorrect": "<p><span>Oops, actually the answer is myth.</span> Many people are concerned that vaccines contain mercury, aluminum, and formaldehyde, and while it is true that these chemicals are toxic at high levels, only tiny amounts of these chemicals are used in approved vaccines.<br>Formaldehyde is actually produced at higher rates by our own metabolic systems, and there is no evidence that shows that low levels of any of these chemicals are harmful. </p></p>" // no comma here
        },
        { // Question 5
            "q": "Vaccines have eradicated diseases globally",
            "a": [
                {"option": "Myth",      "correct": false},
                {"option": "Truth",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a truth!</span> Better sanitation, nutrition and antibiotics have helped to improve the level of infectious diseases globally, however vaccines themselves have helped to eradicate certain diseases across entire countries (e.g. polio), and in certain cases - globally (e.g. smallpox).<br>If people stop vaccinating, there is a chance that these diseases could return over time. </p>",
            
            "incorrect": "<p><span>Oops, actually the answer is truth.</span> Better sanitation, nutrition and antibiotics have helped to improve the level of infectious diseases globally, however vaccines themselves have helped to eradicate certain diseases across entire countries (e.g. polio), and in certain cases - globally (e.g. smallpox).<br>If people stop vaccinating, there is a chance that these diseases could return over time.</p>" // no comma here
        },
        { // Question 6
            "q": "Vaccines can infect me with the disease that it is trying to prevent",
            "a": [
                {"option": "Myth",      "correct": true},
                {"option": "Truth",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a myth!</span>Vaccines may cause mild symptoms, which drives the false idea that you have the disease after vaccination.<br> Vaccines cause the immune system to produce an immune response similar to the disease, but they do not cause the disease, nor does it put the person at risk of its potential complications.<br>Vaccines have been safe to use for decades and follow strict and regulatory guidelines.</p>",
            
            "incorrect": "<p><span>Oops, actually the answer is myth.</span> Vaccines may cause mild symptoms, which drives the false idea that you have the disease after vaccination.<br> Vaccines cause the immune system to produce an immune response similar to the disease, but they do not cause the disease, nor does it put the person at risk of its potential complications.<br>Vaccines have been safe to use for decades and follow strict and regulatory guidelines.</p>" // no comma here
        },
        { // Question 7
            "q": "I should vaccinate even if everyone around me is already vaccinated",
            "a": [
                {"option": "Myth",      "correct": false},
                {"option": "Truth",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a truth!</span> When a large amount of community is vaccinated against a disease, it reduces the change of an outbreak ('herd immunity').<br>Infants, pregnant women and people with weaker immune systems can't receive vaccines and depend on this form of protection.<br>If too many people rely on herd immunity to prevent infection from vaccine-preventable disease, herd immunity will disappear.</p>",
            
            "incorrect": "<p><span>Oops, actually the answer is truth.</span> When a large amount of community is vaccinated against a disease, it reduces the change of an outbreak ('herd immunity').<br>Infants, pregnant women and people with weaker immune systems can't receive vaccines and depend on this form of protection.<br>If too many people rely on herd immunity to prevent infection from vaccine-preventable disease, herd immunity will disappear.</p>" // no comma here
        },
        { // Question 8
            "q": "Healthy adults still need vaccines",
            "a": [
                {"option": "Myth",      "correct": false},
                {"option": "Truth",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a truth!</span> Even if you are healthy, your immune system will weaken as you continue to age.<br>At the age of 65 or above, adults are at an 8x higher risk of being hospitalized due to infection when compared to those who are younger than 50.</p>",
            
            "incorrect": "<p><span>Oops, actually the answer is truth.</span> Even if you are healthy, your immune system will weaken as you continue to age.<br>At the age of 65 or above, adults are at an 8x higher risk of being hospitalized due to infection when compared to those who are younger than 50.</p>" // no comma here
        },
        { // Question 9
            "q": "Vaccines are not effective in adults",
            "a": [
                {"option": "Myth",    "correct": true},
                {"option": "Truth",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct, it is a myth!</span> Any delay in vaccinating your child can leave him / her at risk of the vaccine-preventable disease. However, it is never too late as vaccines are still effective for adults. With your increased responsibilities as an adult, you should get vaccinated - protect those around you from getting the disease and stay healthy enough to work and take care of your family.<br>The best way to ensure you and your family's safety is to follow the guidelines and schedule set out by the Ministry of Health, in consultation with your doctor.</p>",
            
            "incorrect": "<p><span>Oops, actually the answer is myth.</span> Any delay in vaccinating your child can leave him / her at risk of the vaccine-preventable disease. However, it is never too late as vaccines are still effective for adults. With your increased responsibilities as an adult, you should get vaccinated - protect those around you from getting the disease and stay healthy enough to work and take care of your family.<br>The best way to ensure you and your family's safety is to follow the guidelines and schedule set out by the Ministry of Health, in consultation with your doctor.</p>" // no comma here
        } // no comma here
    ]
};


// 2.BAHASA MELAYU VERSION
var quizJSON_bm = {
    lang:"bm",
    "info": {
        "name":    "Fakta atau Mitos? - Edisi Penyuntikan Vaksin",
        "main":    "<p>Mari lihat sama ada anda dapat membezakan antara mitos dan fakta!</p>",
        "results": "<h5></h5><p></p>",
        "level1":  "Superior",
        "level2":  "Outstanding",
        "level3":  "Excellent",
        "level4":  "Good",
        "level5":  "Fair" // no comma here
    },
    "questions": [
        { // Question 1 
            "q": "Sistem imun kanak-kanak tidak mampu menerima beberapa vaksin sekaligus",
            "a": [
                {"option": "Mitos",      "correct": true},
                {"option": "Fakta",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah mitos!</span> Sistem imun tidak akan dikuasai sepenuhnya oleh penyakit kerana sel-sel di dalam badan akan sentiasa diperbaharui - bayi terdedah kepada pelbagai jenis bakteria dan virus setiap hari.<br> Vaksin yang baru adalah lebih bagus berbanding dengan vaksin sebelumnya kerana bahan kandungannya lebih sedikit dan lebih selamat untuk digunakan. </p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah mitos.</span> Sistem imun tidak akan dikuasai sepenuhnya oleh penyakit kerana sel-sel di dalam badan akan sentiasa diperbaharui - bayi terdedah kepada pelbagai jenis bakteria dan virus setiap hari.<br> Vaksin yang baru adalah lebih bagus berbanding dengan vaksin sebelumnya kerana bahan kandungannya lebih sedikit dan lebih selamat untuk digunakan.</p>" // no comma here
        },
        { // Question 2 
            "q": "Vaksin boleh menyebabkan autisme",
            "a": [
                {"option": "Mitos",               "correct": true},
                {"option": "Fakta",               "correct": false} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah mitos!</span> Ketakutan terhadap vaksin yang dikatakan menyebabkan autisme dicetuskan oleh kajian yang dibuat pada tahun 1997 di mana ia menyatakan bahawa vaksin beguk, campak dan rubela (MMR) merupakan sebab utama kes autisme meningkat di dalam kanak-kanak Britain.<br> Sejak itu, kajian tersebut ditarik balik disebabkan oleh faktor prosedur, pencabulan etika dan konflik kepentingan kewangan.<br> Punca sebenar autisme masih kekal menjadi misteri, tetapi teori di mana vaksin menyebabkan autisme telah dipatahkan sepenuhnya.<br> Terdapat beberapa kajian yang telah mengenal pasti gejala autisme di dalam kanak-kanak yang belum menerima suntikan MMR dan terdapat satu kajian yang menunjukkan bukti bahawa autisme bermula sejak dalam kandungan.</p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah mitos.</span> Ketakutan terhadap vaksin yang dikatakan menyebabkan autisme dicetuskan oleh kajian yang dibuat pada tahun 1997 di mana ia menyatakan bahawa vaksin beguk, campak dan rubela (MMR) merupakan sebab utama kes autisme meningkat di dalam kanak-kanak Britain.<br> Sejak itu, kajian tersebut ditarik balik disebabkan oleh faktor prosedur, pencabulan etika dan konflik kepentingan kewangan.<br> Punca sebenar autisme masih kekal menjadi misteri, tetapi teori di mana vaksin menyebabkan autisme telah dipatahkan sepenuhnya.<br> Terdapat beberapa kajian yang telah mengenal pasti gejala autisme di dalam kanak-kanak yang belum menerima suntikan MMR dan terdapat satu kajian yang menunjukkan bukti bahawa autisme bermula sejak dalam kandungan.</p>" // no comma here
        },
        { // Question 3 
            "q": "Imuniti semulajadi (jatuh sakit dan pulih sendiri) adalah lebih baik daripada imuniti yang diperoleh daripada vaksin",
            "a": [
                {"option": "Mitos",           "correct": true},
                {"option": "Fakta",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah mitos!</span> Dalam beberapa kes, jatuh sakit dan pulih secara semulajadi menyebabkan badan mempunyai imuniti yang lebih kuat terhadap penyakit berbanding vaksinasi.<br> Walau bagaimanapun, pendekatan ini adalah sangat berisiko kerana mudaratnya melebihi kebaikannya. Sebagai contoh, anak anda mendapat penyakit campak (measles), dia akan mempunyai 1 dalam 500 risiko untuk mati disebabkan oleh penyakit tersebut. Jika dibandingkan dengan dengan kanak-kanak yang mengalami reaksi alahan yang mengancam nyawa (kurang daripada satu dalam sejuta), memberikan vaksinasi kepada anak anda merupakan langkah yang lebih baik. </p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah mitos.</span> Dalam beberapa kes, jatuh sakit dan pulih secara semulajadi menyebabkan badan mempunyai imuniti yang lebih kuat terhadap penyakit berbanding vaksinasi.<br> Walau bagaimanapun, pendekatan ini adalah sangat berisiko kerana mudaratnya melebihi kebaikannya. Sebagai contoh, anak anda mendapat penyakit campak (measles), dia akan mempunyai 1 dalam 500 risiko untuk mati disebabkan oleh penyakit tersebut. Jika dibandingkan dengan dengan kanak-kanak yang mengalami reaksi alahan yang mengancam nyawa (kurang daripada satu dalam sejuta), memberikan vaksinasi kepada anak anda merupakan langkah yang lebih baik. </p>" // no comma here
        },
        { // Question 4
            "q": "Vaksin mengandungi bahan toksik yang tidak selamat",
            "a": [
                {"option": "Mitos",      "correct": true},
                {"option": "Fakta",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah mitos!</span>Ramai yang bimbang kerana vaksin mengandungi merkuri, alumunium dan formaldehyde dan ia memang benar bahawa bahan kimia ini adalah berbahaya pada kuantiti yang banyak. Namun begitu, hanya sedikit sahaja yang digunakan di dalam vaksin yang telah diluluskan.<br> Sebenarnya, tubuh kita menghasilkan lebih banyak formaldehyde berbanding apa yang terdapat di dalam vaksin. Malah, tiada bukti yang menunjukkan kandungan yang sedikit ini memudaratkan. </p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah mitos.</span> Ramai yang bimbang kerana vaksin mengandungi merkuri, alumunium dan formaldehyde dan ia memang benar bahawa bahan kimia ini adalah berbahaya pada kuantiti yang banyak. Namun begitu, hanya sedikit sahaja yang digunakan di dalam vaksin yang telah diluluskan.<br> Sebenarnya, tubuh kita menghasilkan lebih banyak formaldehyde berbanding apa yang terdapat di dalam vaksin. Malah, tiada bukti yang menunjukkan kandungan yang sedikit ini memudaratkan. </p>" // no comma here
        },
        { // Question 5
            "q": "Vaksin telah menghapuskan banyak penyakit di serata dunia",
            "a": [
                {"option": "Mitos",      "correct": false},
                {"option": "Fakta",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah fakta!</span> Sanitasi yang baik, nutrisi dan antibiotik banyak membantu dalam mengurangkan kadar penyakit berjangkit pada peringkat global.<br> Walau bagaimanapun, vaksin sendiri telah banyak menghapuskan sesetengah penyakit di sesebuah negara (contohnya polio) dan beberapa penyakit lain pada peringkat global seperti cacar air (smallpox).<br> Jika orang ramai berhenti mendapatkan vaksin, adalah tidak mustahil untuk penyakit-penyakit yang telah dihapuskan untuk muncul semula. </p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah fakta.</span> Sanitasi yang baik, nutrisi dan antibiotik banyak membantu dalam mengurangkan kadar penyakit berjangkit pada peringkat global.<br> Walau bagaimanapun, vaksin sendiri telah banyak menghapuskan sesetengah penyakit di sesebuah negara (contohnya polio) dan beberapa penyakit lain pada peringkat global seperti cacar air (smallpox).<br> Jika orang ramai berhenti mendapatkan vaksin, adalah tidak mustahil untuk penyakit-penyakit yang telah dihapuskan untuk muncul semula.</p>" // no comma here
        },
        { // Question 6
            "q": "Vaksin menyebabkan jangkitan penyakit yang ia cuba lindungi",
            "a": [
                {"option": "Mitos",      "correct": true},
                {"option": "Fakta",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah mitos!</span>Vaksin boleh menyebabkan gejala ringan dan menyebabkan tanggapan salah bahawa anda dijangkiti penyakit selepas menerima vaksin.<br> Vaksin mencetuskan reaksi imun seperti dijangkiti penyakit tetapi ia tidak menyebabkan seseorang itu mendapat penyakit mahupun meningkatkan risiko komplikasi.<br> Vaksin adalah selamat dan telah digunakan selama berdekad dan ia dikawal selia oleh garis panduan yang ketat.</p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah mitos.</span> Vaksin boleh menyebabkan gejala ringan dan menyebabkan tanggapan salah bahawa anda dijangkiti penyakit selepas menerima vaksin.<br> Vaksin mencetuskan reaksi imun seperti dijangkiti penyakit tetapi ia tidak menyebabkan seseorang itu mendapat penyakit mahupun meningkatkan risiko komplikasi.<br> Vaksin adalah selamat dan telah digunakan selama berdekad dan ia dikawal selia oleh garis panduan yang ketat.</p>" // no comma here
        },
        { // Question 7
            "q": "Saya perlu mendapatkan vaksin walaupun orang sekeliling saya telah mendapatkannya",
            "a": [
                {"option": "Mitos",      "correct": false},
                {"option": "Fakta",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah fakta!</span> Apabila sesebuah komuniti mendapat vaksinasi terhadap sesebuah penyakit, peluang untuk sesuatu wabak terjadi dapat dikurangkan (imuniti kelompok).<br> Bayi, wanita hamil dan individu yang mempunyai sistem imun yang lemah tidak dapat menerima vaksin dan bergantung kepada bentuk perlindungan seperti ini. </p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah fakta.</span> Apabila sesebuah komuniti mendapat vaksinasi terhadap sesebuah penyakit, peluang untuk sesuatu wabak terjadi dapat dikurangkan (imuniti kelompok).<br> Bayi, wanita hamil dan individu yang mempunyai sistem imun yang lemah tidak dapat menerima vaksin dan bergantung kepada bentuk perlindungan seperti ini.</p>" // no comma here
        },
        { // Question 8
            "q": "Orang dewasa yang sihat masih memerlukan vaksin",
            "a": [
                {"option": "Mitos",      "correct": false},
                {"option": "Fakta",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah fakta!</span> Walaupun anda sihat, sistem imun anda akan merosot sejajar dengan peningkatan umur.<br> Apabila umur mencecah 65 tahun ke atas, orang dewasa terdedah kepada risiko untuk dimasukkan ke dalam hospital sebanyak lapan kali ganda disebabkan oleh jangkitan jika dibandingkan dengan golongan berumur 50 tahun ke bawah. </p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah fakta.</span> Walaupun anda sihat, sistem imun anda akan merosot sejajar dengan peningkatan umur.<br> Apabila umur mencecah 65 tahun ke atas, orang dewasa terdedah kepada risiko untuk dimasukkan ke dalam hospital sebanyak lapan kali ganda disebabkan oleh jangkitan jika dibandingkan dengan golongan berumur 50 tahun ke bawah.</p>" // no comma here
        },
        { // Question 9
            "q": "Vaksin tidak berkesan terhadap orang dewasa",
            "a": [
                {"option": "Mitos",    "correct": true},
                {"option": "Fakta",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Betul, ia adalah mitos!</span> Sebarang kelewatan dalam memberikan vaksinasi kepada anak anda mendedahkannya kepada penyakit yang boleh dibendung oleh vaksin. Walau bagaimanapun, anda tidak pernah terlambat kerana vaksin juga berkesan untuk orang dewasa.  Sebagai orang dewasa, jalankan tanggungjawab anda. Dapatkan vaksin untuk melindungi mereka di sekeliling anda, untuk bekerja dengan sihat dan menjaga keluarga anda.<br> Cara terbaik untuk menjaga keselamatan keluarga anda adalah dengan mematuhi garis panduan dan jadual yang telah diberikan oleh Kementerian Kesihatan mengikut nasihat doktor anda. </p>",
            
            "incorrect": "<p><span>Opss, jawapan sebenar adalah mitos.</span> Sebarang kelewatan dalam memberikan vaksinasi kepada anak anda mendedahkannya kepada penyakit yang boleh dibendung oleh vaksin. Walau bagaimanapun, anda tidak pernah terlambat kerana vaksin juga berkesan untuk orang dewasa.  Sebagai orang dewasa, jalankan tanggungjawab anda. Dapatkan vaksin untuk melindungi mereka di sekeliling anda, untuk bekerja dengan sihat dan menjaga keluarga anda.<br> Cara terbaik untuk menjaga keselamatan keluarga anda adalah dengan mematuhi garis panduan dan jadual yang telah diberikan oleh Kementerian Kesihatan mengikut nasihat doktor anda.</p>" // no comma here
        } // no comma here
    ]
};