/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

// Shopping phrases from textbook - Фразы для покупок
// Load after data-core.js

flashcardsData.push(
    // Продавец (Verkoper) - порядок как в учебнике
    { dutch: "Wie is er aan de beurt?", russian: "Кто следующий?", english: "Who is next?", example: "Who is next?", category: "shopping_phrases_textbook" },
    { dutch: "Wie kan ik helpen?", russian: "Кому я могу помочь?", english: "Who can I help?", example: "Who can I help?", category: "shopping_phrases_textbook" },
    { dutch: "... is in de aanbieding.", russian: "... в специальном предложении.", english: "... is on sale.", example: "... is on sale.", category: "shopping_phrases_textbook" },
    { dutch: "... zijn in de aanbieding.", russian: "... в специальном предложении.", english: "... are on sale.", example: "... are on sale.", category: "shopping_phrases_textbook" },
    { dutch: "Anders nog iets?", russian: "Что-нибудь ещё?", english: "Anything else?", example: "Anything else?", category: "shopping_phrases_textbook" },
    { dutch: "Dat is alles?", russian: "Это всё?", english: "That's all?", example: "That's all?", category: "shopping_phrases_textbook" },
    { dutch: "Dat was alles?", russian: "Это было всё?", english: "That was all?", example: "That was all?", category: "shopping_phrases_textbook" },
    { dutch: "Dat is het?", russian: "Это оно?", english: "That's it?", example: "That's it?", category: "shopping_phrases_textbook" },
    { dutch: "Dat was het?", russian: "Это было оно?", english: "That was it?", example: "That was it?", category: "shopping_phrases_textbook" },
    { dutch: "Dat is dan € ... .", russian: "Это будет € ... .", english: "That will be € ... .", example: "That will be € ... .", category: "shopping_phrases_textbook" },
    { dutch: "Dat is € ... , bij elkaar.", russian: "Это € ... , всего.", english: "That's € ... , altogether.", example: "That's € ... , altogether.", category: "shopping_phrases_textbook" },
    { dutch: "Geen probleem", russian: "Нет проблем", english: "No problem", example: "No problem", category: "shopping_phrases_textbook" },
    { dutch: "Hebt u het niet kleiner?", russian: "У вас нет помельче?", english: "Don't you have it smaller?", example: "Don't you have it smaller?", category: "shopping_phrases_textbook" },
    { dutch: "Ja hoor, gaat uw gang.", russian: "Да, конечно, проходите.", english: "Yes sure, go ahead.", example: "Yes sure, go ahead.", category: "shopping_phrases_textbook" },
    { dutch: "Tot ziens en prettig weekend.", russian: "До свидания и хороших выходных.", english: "Goodbye and have a nice weekend.", example: "Goodbye and have a nice weekend.", category: "shopping_phrases_textbook" },

    // Покупатель (Klant) - порядок как в учебнике
    { dutch: "Ik wil graag ... .", russian: "Я хотел бы ... .", english: "I would like ... .", example: "I would like ... .", category: "shopping_phrases_textbook" },
    { dutch: "Ik wou graag ... .", russian: "Я хотел бы ... .", english: "I would like ... .", example: "I would like ... .", category: "shopping_phrases_textbook" },
    { dutch: "... , graag.", russian: "... , пожалуйста.", english: "... , please.", example: "... , please.", category: "shopping_phrases_textbook" },
    { dutch: "... , alstublieft.", russian: "... , пожалуйста.", english: "... , please.", example: "... , please.", category: "shopping_phrases_textbook" },
    { dutch: "Ja, ook nog ... .", russian: "Да, ещё ... .", english: "Yes, also ... .", example: "Yes, also ... .", category: "shopping_phrases_textbook" },
    { dutch: "Nee, dank u.", russian: "Нет, спасибо.", english: "No, thank you.", example: "No, thank you.", category: "shopping_phrases_textbook" },
    { dutch: "Nee, dat was het.", russian: "Нет, это было всё.", english: "No, that was it.", example: "No, that was it.", category: "shopping_phrases_textbook" },
    { dutch: "Ja, dat is alles.", russian: "Да, это всё.", english: "Yes, that's all.", example: "Yes, that's all.", category: "shopping_phrases_textbook" },
    { dutch: "Ja, dat was alles.", russian: "Да, это было всё.", english: "Yes, that was all.", example: "Yes, that was all.", category: "shopping_phrases_textbook" },
    { dutch: "Ja, dat is het.", russian: "Да, это оно.", english: "Yes, that's it.", example: "Yes, that's it.", category: "shopping_phrases_textbook" },
    { dutch: "Ja, dat was het.", russian: "Да, это было оно.", english: "Yes, that was it.", example: "Yes, that was it.", category: "shopping_phrases_textbook" },
    { dutch: "Alstublieft.", russian: "Пожалуйста.", english: "Please / Here you are.", example: "Please / Here you are.", category: "shopping_phrases_textbook" },
    { dutch: "Alstublieft.", russian: "Пожалуйста.", english: "Please / Here you are.", example: "Please / Here you are.", category: "shopping_phrases_textbook" },
    { dutch: "Ik heb alleen een briefje van € ... .", russian: "У меня есть только купюра в € ... .", english: "I only have a € ... bill.", example: "I only have a € ... bill.", category: "shopping_phrases_textbook" },
    { dutch: "Hebt u terug van € ... ?", russian: "У вас есть сдача с € ... ?", english: "Do you have change from € ... ?", example: "Do you have change from € ... ?", category: "shopping_phrases_textbook" },
    { dutch: "Kan ik pinnen?", russian: "Могу я оплатить картой?", english: "Can I pay by card?", example: "Can I pay by card?", category: "shopping_phrases_textbook" },
    { dutch: "Dank u wel. Tot ziens.", russian: "Спасибо. До свидания.", english: "Thank you. Goodbye.", example: "Thank you. Goodbye.", category: "shopping_phrases_textbook" },
    { dutch: "U ook.", russian: "Вам тоже.", english: "You too.", example: "You too.", category: "shopping_phrases_textbook" },

    // Вес и мера (gewicht) - 5 phrases
    { dutch: "per kilo", russian: "за килограмм", english: "per kilo", example: "per kilo", category: "shopping_phrases_textbook" },
    { dutch: "per stuk", russian: "за штуку", english: "per piece", example: "per piece", category: "shopping_phrases_textbook" },
    { dutch: "1 ons = 100 gram", russian: "1 унция = 100 грамм", english: "1 ounce = 100 grams", example: "1 ounce = 100 grams", category: "shopping_phrases_textbook" },
    { dutch: "1 pond = 500 gram", russian: "1 фунт = 500 грамм", english: "1 pound = 500 grams", example: "1 pound = 500 grams", category: "shopping_phrases_textbook" },
    { dutch: "1 kilo = 1000 gram", russian: "1 кило = 1000 грамм", english: "1 kilo = 1000 grams", example: "1 kilo = 1000 grams", category: "shopping_phrases_textbook" },

 
    // Дополнительно (вне таблицы на фото)
    { dutch: "Mag ik een kilo?", russian: "Можно мне килограмм?", english: "May I have a kilo?", example: "May I have a kilo?", category: "shopping_phrases_textbook" },
    { dutch: "Heeft u...?", russian: "У вас есть...?", english: "Do you have...?", example: "Do you have...?", category: "shopping_phrases_textbook" },
    { dutch: "Is dit vers?", russian: "Это свежее?", english: "Is this fresh?", example: "Is this fresh?", category: "shopping_phrases_textbook" }
);

