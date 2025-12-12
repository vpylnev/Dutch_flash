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
    // Phrases
    phrases: "Базовые фразы",
    questions: "Вопросы",
    shopping: "В магазине",
    restaurant: "В ресторане",
    travel: "Путешествия",
    work: "Работа и учёба"
};

// Category types for grouping
const categoryTypes = {
    words: ['greetings', 'numbers', 'colors', 'family', 'food', 'days', 'months', 'body', 'weather', 'weather_school', 'animals', 'home', 'emotions'],
    phrases: ['phrases', 'questions', 'shopping', 'restaurant', 'travel', 'work']
};

