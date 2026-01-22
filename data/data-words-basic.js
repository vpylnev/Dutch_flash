/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

// Basic vocabulary words - Greetings, Numbers, Colors, Family
// Load after data-core.js

flashcardsData.push(
    // Greetings (20 cards)
    { dutch: "Hallo", russian: "Привет", english: "Hello", example: "Informal greeting", category: "greetings" },
    { dutch: "Goedemorgen", russian: "Доброе утро", english: "Good morning", example: "Until 12:00", category: "greetings" },
    { dutch: "Goedemiddag", russian: "Добрый день", english: "Good afternoon", example: "12:00 - 18:00", category: "greetings" },
    { dutch: "Goedenavond", russian: "Добрый вечер", english: "Good evening", example: "After 18:00", category: "greetings" },
    { dutch: "Goedenacht", russian: "Спокойной ночи", english: "Good night", example: "Before sleep", category: "greetings" },
    { dutch: "Dag", russian: "Пока", english: "Bye", example: "Informal goodbye", category: "greetings" },
    { dutch: "Tot ziens", russian: "До свидания", english: "Goodbye", example: "See you later", category: "greetings" },
    { dutch: "Hoe gaat het?", russian: "Как дела?", english: "How are you?", example: "How are you?", category: "greetings" },
    { dutch: "Goed, dank je", russian: "Хорошо, спасибо", english: "Fine, thank you", example: "I'm fine, thanks", category: "greetings" },
    { dutch: "Welkom", russian: "Добро пожаловать", english: "Welcome", example: "Welcome", category: "greetings" },
    { dutch: "Tot straks", russian: "До скорого", english: "See you soon", example: "See you soon", category: "greetings" },
    { dutch: "Tot morgen", russian: "До завтра", english: "See you tomorrow", example: "See you tomorrow", category: "greetings" },
    { dutch: "Prettige dag", russian: "Хорошего дня", english: "Have a nice day", example: "Have a nice day", category: "greetings" },
    { dutch: "Prettig weekend", russian: "Хороших выходных", english: "Have a nice weekend", example: "Have a nice weekend", category: "greetings" },
    { dutch: "Hoi", russian: "Привет (неформ.)", english: "Hi", example: "Very informal hi", category: "greetings" },
    { dutch: "Doei", russian: "Пока (неформ.)", english: "Bye (informal)", example: "Very informal bye", category: "greetings" },
    { dutch: "Fijne dag nog", russian: "Ещё хорошего дня", english: "Enjoy the rest of your day", example: "Enjoy the rest of your day", category: "greetings" },
    { dutch: "Lang niet gezien", russian: "Давно не виделись", english: "Long time no see", example: "Long time no see", category: "greetings" },
    { dutch: "Hoe is het met je?", russian: "Как у тебя дела?", english: "How are you doing?", example: "How are you doing?", category: "greetings" },
    { dutch: "Prima", russian: "Отлично", english: "Great", example: "Great", category: "greetings" },

    // Numbers (20 cards)
    { dutch: "nul", russian: "ноль", english: "zero", example: "0", category: "numbers" },
    { dutch: "een", russian: "один", english: "one", example: "1", category: "numbers" },
    { dutch: "twee", russian: "два", english: "two", example: "2", category: "numbers" },
    { dutch: "drie", russian: "три", english: "three", example: "3", category: "numbers" },
    { dutch: "vier", russian: "четыре", english: "four", example: "4", category: "numbers" },
    { dutch: "vijf", russian: "пять", english: "five", example: "5", category: "numbers" },
    { dutch: "zes", russian: "шесть", english: "six", example: "6", category: "numbers" },
    { dutch: "zeven", russian: "семь", english: "seven", example: "7", category: "numbers" },
    { dutch: "acht", russian: "восемь", english: "eight", example: "8", category: "numbers" },
    { dutch: "negen", russian: "девять", english: "nine", example: "9", category: "numbers" },
    { dutch: "tien", russian: "десять", english: "ten", example: "10", category: "numbers" },
    { dutch: "elf", russian: "одиннадцать", english: "eleven", example: "11", category: "numbers" },
    { dutch: "twaalf", russian: "двенадцать", english: "twelve", example: "12", category: "numbers" },
    { dutch: "dertien", russian: "тринадцать", english: "thirteen", example: "13", category: "numbers" },
    { dutch: "twintig", russian: "двадцать", english: "twenty", example: "20", category: "numbers" },
    { dutch: "dertig", russian: "тридцать", english: "thirty", example: "30", category: "numbers" },
    { dutch: "vijftig", russian: "пятьдесят", english: "fifty", example: "50", category: "numbers" },
    { dutch: "honderd", russian: "сто", english: "hundred", example: "100", category: "numbers" },
    { dutch: "duizend", russian: "тысяча", english: "thousand", example: "1000", category: "numbers" },
    { dutch: "miljoen", russian: "миллион", english: "million", example: "1000000", category: "numbers" },

    // Colors (15 cards)
    { dutch: "rood", russian: "красный", english: "red", example: "red", category: "colors" },
    { dutch: "blauw", russian: "синий", english: "blue", example: "blue", category: "colors" },
    { dutch: "groen", russian: "зелёный", english: "green", example: "green", category: "colors" },
    { dutch: "geel", russian: "жёлтый", english: "yellow", example: "yellow", category: "colors" },
    { dutch: "wit", russian: "белый", english: "white", example: "white", category: "colors" },
    { dutch: "zwart", russian: "чёрный", english: "black", example: "black", category: "colors" },
    { dutch: "oranje", russian: "оранжевый", english: "orange", example: "orange", category: "colors" },
    { dutch: "paars", russian: "фиолетовый", english: "purple", example: "purple", category: "colors" },
    { dutch: "bruin", russian: "коричневый", english: "brown", example: "brown", category: "colors" },
    { dutch: "roze", russian: "розовый", english: "pink", example: "pink", category: "colors" },
    { dutch: "grijs", russian: "серый", english: "grey", example: "grey", category: "colors" },
    { dutch: "lichtblauw", russian: "голубой", english: "light blue", example: "light blue", category: "colors" },
    { dutch: "donkerblauw", russian: "тёмно-синий", english: "dark blue", example: "dark blue", category: "colors" },
    { dutch: "goud", russian: "золотой", english: "gold", example: "gold", category: "colors" },
    { dutch: "zilver", russian: "серебряный", english: "silver", example: "silver", category: "colors" },

    // Family (20 cards)
    { dutch: "de vader", russian: "отец", english: "father", example: "father", category: "family" },
    { dutch: "de moeder", russian: "мать", english: "mother", example: "mother", category: "family" },
    { dutch: "de zoon", russian: "сын", english: "son", example: "son", category: "family" },
    { dutch: "de dochter", russian: "дочь", english: "daughter", example: "daughter", category: "family" },
    { dutch: "de broer", russian: "брат", english: "brother", example: "brother", category: "family" },
    { dutch: "de zus", russian: "сестра", english: "sister", example: "sister", category: "family" },
    { dutch: "de opa", russian: "дедушка", english: "grandfather", example: "grandfather", category: "family" },
    { dutch: "de oma", russian: "бабушка", english: "grandmother", example: "grandmother", category: "family" },
    { dutch: "het kind", russian: "ребёнок", english: "child", example: "child", category: "family" },
    { dutch: "de ouders", russian: "родители", english: "parents", example: "parents", category: "family" },
    { dutch: "de papa", russian: "папа", english: "dad", example: "dad", category: "family" },
    { dutch: "de mama", russian: "мама", english: "mom", example: "mom", category: "family" },
    { dutch: "de man", russian: "муж", english: "husband", example: "husband", category: "family" },
    { dutch: "de vrouw", russian: "жена", english: "wife", example: "wife", category: "family" },
    { dutch: "de oom", russian: "дядя", english: "uncle", example: "uncle", category: "family" },
    { dutch: "de tante", russian: "тётя", english: "aunt", example: "aunt", category: "family" },
    { dutch: "de neef", russian: "племянник/двоюродный брат", english: "nephew/cousin (male)", example: "nephew/cousin (male)", category: "family" },
    { dutch: "de nicht", russian: "племянница/двоюродная сестра", english: "niece/cousin (female)", example: "niece/cousin (female)", category: "family" },
    { dutch: "de kleinzoon", russian: "внук", english: "grandson", example: "grandson", category: "family" },
    { dutch: "de kleindochter", russian: "внучка", english: "granddaughter", example: "granddaughter", category: "family" }
);

