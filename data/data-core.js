// Core data structure - always load this first
// This file contains category names and types definitions

// Initialize global flashcards array
const flashcardsData = [];

// Category names for display
const categoryNames = {
    // Words
    greetings: "Приветствия",
    numbers: "Числа",
    colors: "Цвета",
    family: "Семья",
    food: "Еда и напитки",
    days: "Дни недели",
    months: "Месяцы",
    body: "Части тела",
    weather: "Погода",
    weather_school: "Погода (школа)",
    animals: "Животные",
    home: "Дом",
    emotions: "Эмоции",
    shopping_textbook_1: "(учебник) покупки 1",
    shopping_textbook_2: "(учебник) покупки 2",
    shopping_textbook_3: "(учебник) покупки 3",
    // Phrases
    phrases: "Базовые фразы",
    questions: "Вопросы",
    questions_wh: "Вопросы с вопросительными словами",
    modal_verbs: "Модальные глаголы",
    phrases_negation: "Отрицания (geen/niet)",
    holidays: "Рождество и Новый год",
    shopping: "В магазине",
    shopping_phrases_textbook: "(учебник) покупки",
    shopping_phrases_textbook_2: "(учебник) покупки 2",
    food_price_textbook: "(учебник) прилагательные еда и цена",
    restaurant: "В ресторане",
    travel: "Путешествия",
    work: "Работа и учёба"
};

// Category types for grouping
const categoryTypes = {
    words: ['greetings', 'numbers', 'colors', 'family', 'food', 'days', 'months', 'body', 'weather', 'weather_school', 'animals', 'home', 'emotions', 'shopping_textbook_1', 'shopping_textbook_2', 'shopping_textbook_3'],
    phrases: ['phrases', 'questions', 'questions_wh', 'modal_verbs', 'phrases_negation', 'holidays', 'shopping', 'shopping_phrases_textbook', 'shopping_phrases_textbook_2', 'food_price_textbook', 'restaurant', 'travel', 'work']
};







