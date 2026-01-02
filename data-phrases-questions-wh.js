// Question phrases starting with question words (Wh-questions)
// Load after data-core.js

flashcardsData.push(
    // WAT (What) - 10 phrases
    { dutch: "Wat is dat?", russian: "Что это?", category: "questions_wh", example: "What is that?" },
    { dutch: "Wat doe je?", russian: "Что ты делаешь?", category: "questions_wh", example: "What are you doing?" },
    { dutch: "Wat wil je?", russian: "Что ты хочешь?", category: "questions_wh", example: "What do you want?" },
    { dutch: "Wat eet je graag?", russian: "Что ты любишь есть?", category: "questions_wh", example: "What do you like to eat?" },
    { dutch: "Wat is er aan de hand?", russian: "Что происходит?", category: "questions_wh", example: "What's going on?" },
    { dutch: "Wat denk je?", russian: "Что ты думаешь?", category: "questions_wh", example: "What do you think?" },
    { dutch: "Wat is je naam?", russian: "Как тебя зовут?", category: "questions_wh", example: "What is your name?" },
    { dutch: "Wat voor werk doe je?", russian: "Какую работу ты делаешь?", category: "questions_wh", example: "What kind of work do you do?" },
    { dutch: "Wat betekent dit?", russian: "Что это значит?", category: "questions_wh", example: "What does this mean?" },
    { dutch: "Wat is het probleem?", russian: "В чём проблема?", category: "questions_wh", example: "What is the problem?" },

    // WIE (Who) - 8 phrases
    { dutch: "Wie ben jij?", russian: "Кто ты?", category: "questions_wh", example: "Who are you?" },
    { dutch: "Wie is dat?", russian: "Кто это?", category: "questions_wh", example: "Who is that?" },
    { dutch: "Wie komt er?", russian: "Кто приходит?", category: "questions_wh", example: "Who is coming?" },
    { dutch: "Wie belt er?", russian: "Кто звонит?", category: "questions_wh", example: "Who is calling?" },
    { dutch: "Wie wil er mee?", russian: "Кто хочет с нами?", category: "questions_wh", example: "Who wants to join?" },
    { dutch: "Wie heeft dit gedaan?", russian: "Кто это сделал?", category: "questions_wh", example: "Who did this?" },
    { dutch: "Wie is je leraar?", russian: "Кто твой учитель?", category: "questions_wh", example: "Who is your teacher?" },
    { dutch: "Wie woont hier?", russian: "Кто здесь живёт?", category: "questions_wh", example: "Who lives here?" },

    // WAAR (Where) - 10 phrases
    { dutch: "Waar ben je?", russian: "Где ты?", category: "questions_wh", example: "Where are you?" },
    { dutch: "Waar ga je naartoe?", russian: "Куда ты идёшь?", category: "questions_wh", example: "Where are you going?" },
    { dutch: "Waar kom je vandaan?", russian: "Откуда ты?", category: "questions_wh", example: "Where are you from?" },
    { dutch: "Waar woon je?", russian: "Где ты живёшь?", category: "questions_wh", example: "Where do you live?" },
    { dutch: "Waar werk je?", russian: "Где ты работаешь?", category: "questions_wh", example: "Where do you work?" },
    { dutch: "Waar is het toilet?", russian: "Где туалет?", category: "questions_wh", example: "Where is the toilet?" },
    { dutch: "Waar is het station?", russian: "Где вокзал?", category: "questions_wh", example: "Where is the station?" },
    { dutch: "Waar kan ik dit kopen?", russian: "Где я могу это купить?", category: "questions_wh", example: "Where can I buy this?" },
    { dutch: "Waar heb je het over?", russian: "О чём ты говоришь?", category: "questions_wh", example: "What are you talking about?" },
    { dutch: "Waar ligt mijn telefoon?", russian: "Где лежит мой телефон?", category: "questions_wh", example: "Where is my phone?" },

    // WANNEER (When) - 8 phrases
    { dutch: "Wanneer kom je?", russian: "Когда ты придёшь?", category: "questions_wh", example: "When are you coming?" },
    { dutch: "Wanneer ga je weg?", russian: "Когда ты уходишь?", category: "questions_wh", example: "When are you leaving?" },
    { dutch: "Wanneer ben je jarig?", russian: "Когда у тебя день рождения?", category: "questions_wh", example: "When is your birthday?" },
    { dutch: "Wanneer begint de les?", russian: "Когда начинается урок?", category: "questions_wh", example: "When does the lesson start?" },
    { dutch: "Wanneer is het klaar?", russian: "Когда это будет готово?", category: "questions_wh", example: "When will it be ready?" },
    { dutch: "Wanneer heb je tijd?", russian: "Когда у тебя есть время?", category: "questions_wh", example: "When do you have time?" },
    { dutch: "Wanneer kan ik je bellen?", russian: "Когда я могу тебе позвонить?", category: "questions_wh", example: "When can I call you?" },
    { dutch: "Wanneer ben je vrij?", russian: "Когда ты свободен?", category: "questions_wh", example: "When are you free?" },

    // HOE (How) - 10 phrases
    { dutch: "Hoe gaat het?", russian: "Как дела?", category: "questions_wh", example: "How are you?" },
    { dutch: "Hoe heet je?", russian: "Как тебя зовут?", category: "questions_wh", example: "What's your name?" },
    { dutch: "Hoe oud ben je?", russian: "Сколько тебе лет?", category: "questions_wh", example: "How old are you?" },
    { dutch: "Hoe laat is het?", russian: "Который час?", category: "questions_wh", example: "What time is it?" },
    { dutch: "Hoe kom ik daar?", russian: "Как мне туда добраться?", category: "questions_wh", example: "How do I get there?" },
    { dutch: "Hoe werkt dit?", russian: "Как это работает?", category: "questions_wh", example: "How does this work?" },
    { dutch: "Hoe lang duurt het?", russian: "Сколько это длится?", category: "questions_wh", example: "How long does it take?" },
    { dutch: "Hoe ver is het?", russian: "Как далеко?", category: "questions_wh", example: "How far is it?" },
    { dutch: "Hoe weet je dat?", russian: "Откуда ты знаешь?", category: "questions_wh", example: "How do you know?" },
    { dutch: "Hoe gaat het met je?", russian: "Как у тебя дела?", category: "questions_wh", example: "How are you doing?" },

    // WAAROM (Why) - 8 phrases
    { dutch: "Waarom niet?", russian: "Почему нет?", category: "questions_wh", example: "Why not?" },
    { dutch: "Waarom doe je dat?", russian: "Почему ты это делаешь?", category: "questions_wh", example: "Why are you doing that?" },
    { dutch: "Waarom ben je boos?", russian: "Почему ты злишься?", category: "questions_wh", example: "Why are you angry?" },
    { dutch: "Waarom vraag je dat?", russian: "Почему ты спрашиваешь?", category: "questions_wh", example: "Why do you ask?" },
    { dutch: "Waarom ga je weg?", russian: "Почему ты уходишь?", category: "questions_wh", example: "Why are you leaving?" },
    { dutch: "Waarom kom je te laat?", russian: "Почему ты опаздываешь?", category: "questions_wh", example: "Why are you late?" },
    { dutch: "Waarom wil je dat weten?", russian: "Почему ты хочешь это знать?", category: "questions_wh", example: "Why do you want to know?" },
    { dutch: "Waarom help je niet?", russian: "Почему ты не помогаешь?", category: "questions_wh", example: "Why don't you help?" },

    // HOEVEEL (How much/many) - 6 phrases
    { dutch: "Hoeveel kost dit?", russian: "Сколько это стоит?", category: "questions_wh", example: "How much does this cost?" },
    { dutch: "Hoeveel tijd heb je?", russian: "Сколько у тебя времени?", category: "questions_wh", example: "How much time do you have?" },
    { dutch: "Hoeveel mensen komen er?", russian: "Сколько людей придёт?", category: "questions_wh", example: "How many people are coming?" },
    { dutch: "Hoeveel wil je?", russian: "Сколько ты хочешь?", category: "questions_wh", example: "How much do you want?" },
    { dutch: "Hoeveel dagen blijf je?", russian: "Сколько дней ты останешься?", category: "questions_wh", example: "How many days are you staying?" },
    { dutch: "Hoeveel is dat in totaal?", russian: "Сколько это всего?", category: "questions_wh", example: "How much is that in total?" },

    // WELKE (Which) - 5 phrases
    { dutch: "Welke wil je?", russian: "Какой ты хочешь?", category: "questions_wh", example: "Which one do you want?" },
    { dutch: "Welke taal spreek je?", russian: "На каком языке ты говоришь?", category: "questions_wh", example: "Which language do you speak?" },
    { dutch: "Welke kleur vind je mooi?", russian: "Какой цвет тебе нравится?", category: "questions_wh", example: "Which color do you like?" },
    { dutch: "Welke film gaan we zien?", russian: "Какой фильм мы посмотрим?", category: "questions_wh", example: "Which movie are we going to see?" },
    { dutch: "Welke dag past jou?", russian: "Какой день тебе подходит?", category: "questions_wh", example: "Which day suits you?" }
);


