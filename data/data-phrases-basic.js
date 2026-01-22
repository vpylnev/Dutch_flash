/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

// Basic phrases - Common Phrases, Questions
// Load after data-core.js

flashcardsData.push(
    // Common Phrases (30 cards)
    { dutch: "Ja", russian: "Да", english: "Yes", example: "Yes", category: "phrases" },
    { dutch: "Nee", russian: "Нет", english: "No", example: "No", category: "phrases" },
    { dutch: "Alstublieft", russian: "Пожалуйста (вежл.)", english: "Please (formal)", example: "Please (formal)", category: "phrases" },
    { dutch: "Dank je wel", russian: "Спасибо", english: "Thank you", example: "Thank you", category: "phrases" },
    { dutch: "Sorry", russian: "Извините", english: "Sorry", example: "Sorry", category: "phrases" },
    { dutch: "Pardon", russian: "Простите", english: "Excuse me", example: "Excuse me", category: "phrases" },
    { dutch: "Ik begrijp het niet", russian: "Я не понимаю", english: "I don't understand", example: "I don't understand", category: "phrases" },
    { dutch: "Spreek je Engels?", russian: "Ты говоришь по-английски?", english: "Do you speak English?", example: "Do you speak English?", category: "phrases" },
    { dutch: "Hoeveel kost dit?", russian: "Сколько это стоит?", english: "How much is this?", example: "How much is this?", category: "phrases" },
    { dutch: "Waar is het toilet?", russian: "Где туалет?", english: "Where is the toilet?", example: "Where is the toilet?", category: "phrases" },
    { dutch: "Ik heet...", russian: "Меня зовут...", english: "My name is...", example: "My name is...", category: "phrases" },
    { dutch: "Leuk je te ontmoeten", russian: "Приятно познакомиться", english: "Nice to meet you", example: "Nice to meet you", category: "phrases" },
    { dutch: "Ik kom uit Rusland", russian: "Я из России", english: "I'm from Russia", example: "I'm from Russia", category: "phrases" },
    { dutch: "Ik woon in...", russian: "Я живу в...", english: "I live in...", example: "I live in...", category: "phrases" },
    { dutch: "Wat is dit?", russian: "Что это?", english: "What is this?", example: "What is this?", category: "phrases" },
    { dutch: "Hoe laat is het?", russian: "Который час?", english: "What time is it?", example: "What time is it?", category: "phrases" },
    { dutch: "Geen probleem", russian: "Нет проблем", english: "No problem", example: "No problem", category: "phrases" },
    { dutch: "Tot morgen", russian: "До завтра", english: "See you tomorrow", example: "See you tomorrow", category: "phrases" },
    { dutch: "Veel succes", russian: "Удачи", english: "Good luck", example: "Good luck", category: "phrases" },
    { dutch: "Eet smakelijk", russian: "Приятного аппетита", english: "Enjoy your meal", example: "Enjoy your meal", category: "phrases" },
    { dutch: "Graag gedaan", russian: "Пожалуйста (в ответ)", english: "You're welcome", example: "You're welcome", category: "phrases" },
    { dutch: "Help!", russian: "Помогите!", english: "Help!", example: "Help!", category: "phrases" },
    { dutch: "Ik weet het niet", russian: "Я не знаю", english: "I don't know", example: "I don't know", category: "phrases" },
    { dutch: "Natuurlijk", russian: "Конечно", english: "Of course", example: "Of course", category: "phrases" },
    { dutch: "Misschien", russian: "Может быть", english: "Maybe", example: "Maybe", category: "phrases" },
    { dutch: "Alsjeblieft", russian: "Пожалуйста (неформ.)", english: "Please (informal)", example: "Please (informal)", category: "phrases" },
    { dutch: "Heel goed", russian: "Очень хорошо", english: "Very good", example: "Very good", category: "phrases" },
    { dutch: "Niet slecht", russian: "Неплохо", english: "Not bad", example: "Not bad", category: "phrases" },
    { dutch: "Ik hou van je", russian: "Я тебя люблю", english: "I love you", example: "I love you", category: "phrases" },
    { dutch: "Interessant", russian: "Интересно", english: "Interesting", example: "Interesting", category: "phrases" },

    // Questions (20 cards)
    { dutch: "Wat?", russian: "Что?", english: "What?", example: "What?", category: "questions" },
    { dutch: "Wie?", russian: "Кто?", english: "Who?", example: "Who?", category: "questions" },
    { dutch: "Waar?", russian: "Где?", english: "Where?", example: "Where?", category: "questions" },
    { dutch: "Wanneer?", russian: "Когда?", english: "When?", example: "When?", category: "questions" },
    { dutch: "Waarom?", russian: "Почему?", english: "Why?", example: "Why?", category: "questions" },
    { dutch: "Hoe?", russian: "Как?", english: "How?", example: "How?", category: "questions" },
    { dutch: "Hoeveel?", russian: "Сколько?", english: "How many/much?", example: "How many/much?", category: "questions" },
    { dutch: "Welke?", russian: "Какой/Который?", english: "Which?", example: "Which?", category: "questions" },
    { dutch: "Waar is...?", russian: "Где находится...?", english: "Where is...?", example: "Where is...?", category: "questions" },
    { dutch: "Hoe ver is het?", russian: "Как далеко?", english: "How far is it?", example: "How far is it?", category: "questions" },
    { dutch: "Hoe kom ik bij...?", russian: "Как мне добраться до...?", english: "How do I get to...?", example: "How do I get to...?", category: "questions" },
    { dutch: "Wat kost dit?", russian: "Сколько это стоит?", english: "What does this cost?", example: "What does this cost?", category: "questions" },
    { dutch: "Hoe heet je?", russian: "Как тебя зовут?", english: "What's your name?", example: "What's your name?", category: "questions" },
    { dutch: "Hoe oud ben je?", russian: "Сколько тебе лет?", english: "How old are you?", example: "How old are you?", category: "questions" },
    { dutch: "Waar kom je vandaan?", russian: "Откуда ты?", english: "Where are you from?", example: "Where are you from?", category: "questions" },
    { dutch: "Wat doe je?", russian: "Чем ты занимаешься?", english: "What do you do?", example: "What do you do?", category: "questions" },
    { dutch: "Kun je me helpen?", russian: "Можешь мне помочь?", english: "Can you help me?", example: "Can you help me?", category: "questions" },
    { dutch: "Mag ik...?", russian: "Могу я...?", english: "May I...?", example: "May I...?", category: "questions" },
    { dutch: "Wat bedoel je?", russian: "Что ты имеешь в виду?", english: "What do you mean?", example: "What do you mean?", category: "questions" },
    { dutch: "Is dit vrij?", russian: "Это свободно?", english: "Is this free?", example: "Is this free?", category: "questions" }
);









