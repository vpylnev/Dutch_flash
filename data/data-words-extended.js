/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

// Extended vocabulary - Body, Animals, Home, Emotions
// Load after data-core.js

flashcardsData.push(
    // Body parts (15 cards)
    { dutch: "het hoofd", russian: "голова", english: "head", example: "head", category: "body" },
    { dutch: "het oog", russian: "глаз", english: "eye", example: "eye", category: "body" },
    { dutch: "het oor", russian: "ухо", english: "ear", example: "ear", category: "body" },
    { dutch: "de neus", russian: "нос", english: "nose", example: "nose", category: "body" },
    { dutch: "de mond", russian: "рот", english: "mouth", example: "mouth", category: "body" },
    { dutch: "de hand", russian: "рука (кисть)", english: "hand", example: "hand", category: "body" },
    { dutch: "de voet", russian: "нога (ступня)", english: "foot", example: "foot", category: "body" },
    { dutch: "de arm", russian: "рука", english: "arm", example: "arm", category: "body" },
    { dutch: "het been", russian: "нога", english: "leg", example: "leg", category: "body" },
    { dutch: "het hart", russian: "сердце", english: "heart", example: "heart", category: "body" },
    { dutch: "het haar", russian: "волосы", english: "hair", example: "hair", category: "body" },
    { dutch: "de tand", russian: "зуб", english: "tooth", example: "tooth", category: "body" },
    { dutch: "de nek", russian: "шея", english: "neck", example: "neck", category: "body" },
    { dutch: "de buik", russian: "живот", english: "belly", example: "belly", category: "body" },
    { dutch: "de rug", russian: "спина", english: "back", example: "back", category: "body" },

    // Animals (15 cards)
    { dutch: "de hond", russian: "собака", english: "dog", example: "dog", category: "animals" },
    { dutch: "de kat", russian: "кошка", english: "cat", example: "cat", category: "animals" },
    { dutch: "de vogel", russian: "птица", english: "bird", example: "bird", category: "animals" },
    { dutch: "het paard", russian: "лошадь", english: "horse", example: "horse", category: "animals" },
    { dutch: "de koe", russian: "корова", english: "cow", example: "cow", category: "animals" },
    { dutch: "het varken", russian: "свинья", english: "pig", example: "pig", category: "animals" },
    { dutch: "het schaap", russian: "овца", english: "sheep", example: "sheep", category: "animals" },
    { dutch: "het konijn", russian: "кролик", english: "rabbit", example: "rabbit", category: "animals" },
    { dutch: "de muis", russian: "мышь", english: "mouse", example: "mouse", category: "animals" },
    { dutch: "de olifant", russian: "слон", english: "elephant", example: "elephant", category: "animals" },
    { dutch: "de leeuw", russian: "лев", english: "lion", example: "lion", category: "animals" },
    { dutch: "de beer", russian: "медведь", english: "bear", example: "bear", category: "animals" },
    { dutch: "de aap", russian: "обезьяна", english: "monkey", example: "monkey", category: "animals" },
    { dutch: "de vis", russian: "рыба", english: "fish", example: "fish", category: "animals" },
    { dutch: "het insect", russian: "насекомое", english: "insect", example: "insect", category: "animals" },

    // At Home (15 cards)
    { dutch: "het huis", russian: "дом", english: "house", example: "house", category: "home" },
    { dutch: "de woning", russian: "жилище", english: "dwelling", example: "dwelling", category: "home" },
    { dutch: "de kamer", russian: "комната", english: "room", example: "room", category: "home" },
    { dutch: "de keuken", russian: "кухня", english: "kitchen", example: "kitchen", category: "home" },
    { dutch: "de badkamer", russian: "ванная", english: "bathroom", example: "bathroom", category: "home" },
    { dutch: "de slaapkamer", russian: "спальня", english: "bedroom", example: "bedroom", category: "home" },
    { dutch: "de woonkamer", russian: "гостиная", english: "living room", example: "living room", category: "home" },
    { dutch: "de tuin", russian: "сад", english: "garden", example: "garden", category: "home" },
    { dutch: "het bed", russian: "кровать", english: "bed", example: "bed", category: "home" },
    { dutch: "de tafel", russian: "стол", english: "table", example: "table", category: "home" },
    { dutch: "de stoel", russian: "стул", english: "chair", example: "chair", category: "home" },
    { dutch: "de deur", russian: "дверь", english: "door", example: "door", category: "home" },
    { dutch: "het raam", russian: "окно", english: "window", example: "window", category: "home" },
    { dutch: "de sleutel", russian: "ключ", english: "key", example: "key", category: "home" },
    { dutch: "de huur", russian: "аренда", english: "rent", example: "rent", category: "home" },

    // Emotions & Feelings (15 cards)
    { dutch: "Blij", russian: "Радостный", english: "Happy", example: "Happy", category: "emotions" },
    { dutch: "Verdrietig", russian: "Грустный", english: "Sad", example: "Sad", category: "emotions" },
    { dutch: "Boos", russian: "Злой", english: "Angry", example: "Angry", category: "emotions" },
    { dutch: "Bang", russian: "Испуганный", english: "Scared", example: "Scared", category: "emotions" },
    { dutch: "Moe", russian: "Усталый", english: "Tired", example: "Tired", category: "emotions" },
    { dutch: "Gelukkig", russian: "Счастливый", english: "Lucky/Happy", example: "Lucky/Happy", category: "emotions" },
    { dutch: "Zenuwachtig", russian: "Нервный", english: "Nervous", example: "Nervous", category: "emotions" },
    { dutch: "Opgewonden", russian: "Взволнованный", english: "Excited", example: "Excited", category: "emotions" },
    { dutch: "Verrast", russian: "Удивлённый", english: "Surprised", example: "Surprised", category: "emotions" },
    { dutch: "Teleurgesteld", russian: "Разочарованный", english: "Disappointed", example: "Disappointed", category: "emotions" },
    { dutch: "Trots", russian: "Гордый", english: "Proud", example: "Proud", category: "emotions" },
    { dutch: "Verliefd", russian: "Влюблённый", english: "In love", example: "In love", category: "emotions" },
    { dutch: "Eenzaam", russian: "Одинокий", english: "Lonely", example: "Lonely", category: "emotions" },
    { dutch: "Rustig", russian: "Спокойный", english: "Calm", example: "Calm", category: "emotions" },
    { dutch: "Gestrest", russian: "Напряжённый", english: "Stressed", example: "Stressed", category: "emotions" }
);

