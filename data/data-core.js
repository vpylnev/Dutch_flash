/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

// Core data structure - always load this first
// This file contains category names and types definitions

// Initialize global flashcards array
const flashcardsData = [];

// Category names for display
const categoryNames = {
    // Words
    greetings: "Приветствия",
    politeness: "Вежливость",
    numbers: "Числа",
    colors: "Цвета",
    family: "Семья",
    food: "Еда и напитки",
    days: "Дни недели",
    months: "Месяцы",
    body: "Части тела",
    weather: "Погода",
    weather_school: "Школа (погода)",
    animals: "Животные",
    home: "Дом",
    emotions: "Эмоции",
    clothes: "Одежда",
    school_night: "Школа (ночь)",
    // Demo group: add new words in a data file like data-words-demo.js
    // Note: the category list is defined in categoryTypes below in this file.
    // Format: { dutch: "word", russian: "слово", english: "word", example: "...", category: "demo_words" }
    demo_words: "Демо (слова)",
    demo_words_2: "Демо (слова)",
    shopping_textbook_1: "(учебник) покупки 1",
    shopping_textbook_2: "(учебник) покупки 2",
    shopping_textbook_3: "(учебник) покупки 3",
    // Phrases
    phrases: "Базовые фразы",
    questions: "Вопросы",
    questions_wh: "Вопросы с вопросительными словами",
    modal_verbs: "Модальные глаголы",
    phrases_negation: "Отрицания (geen/niet)",
    // Demo group: add new phrases in a data file like data-phrases-demo.js
    // Format: { dutch: "phrase", russian: "фраза", english: "phrase", example: "...", category: "demo_phrases" }
    demo_phrases: "Демо (фразы)",
    holidays: "Рождество и Новый год",
    shopping: "В магазине",
    shopping_phrases_textbook: "(учебник) покупки",
    shopping_phrases_textbook_2: "(учебник) покупки 2",
    textbook_verbs_pairs: "(учебник) глаголы (liggen/leggen)",
    food_price_textbook: "(учебник) прилагательные еда и цена",
    restaurant: "В ресторане",
    travel: "Путешествия",
    work: "Работа и учёба"
};

// Category types for grouping
const categoryTypes = {
    // To add a new group:
    // 1) Add name above in categoryNames.
    // 2) Add the new category id to categoryTypes.words or categoryTypes.phrases below.
    // 3) Create a data file with flashcardsData.push(...)
    // 4) Register the file in data_wrapper.js.
    words: ['greetings', 'politeness', 'numbers', 'colors', 'family', 'food', 'days', 'months', 'body', 
            'weather', 'weather_school', 'school_night', 'animals', 'home', 'emotions', 'clothes', 
            'shopping_textbook_1', 'shopping_textbook_2', 'shopping_textbook_3', 'demo_words'],
    phrases: ['phrases', 'questions', 'questions_wh', 'modal_verbs', 'phrases_negation', 
              'holidays', 'shopping', 'shopping_phrases_textbook', 'shopping_phrases_textbook_2', 
              'textbook_verbs_pairs', 'food_price_textbook', 'restaurant', 'travel', 
              'work', 'demo_phrases']
};








