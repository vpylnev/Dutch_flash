/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

// Holiday phrases - Christmas and New Year
// Load after data-core.js

flashcardsData.push(
    // Christmas greetings (10 phrases)
    { dutch: "Prettige kerstdagen", russian: "С Рождеством", english: "Merry Christmas", example: "Merry Christmas", category: "holidays" },
    { dutch: "Fijne kerst", russian: "Счастливого Рождества", english: "Happy Christmas", example: "Happy Christmas", category: "holidays" },
    { dutch: "Zalig kerstfeest", russian: "Благословенного Рождества", english: "Blessed Christmas", example: "Blessed Christmas", category: "holidays" },
    { dutch: "Vrolijk kerstfeest", russian: "Весёлого Рождества", english: "Merry Christmas celebration", example: "Merry Christmas celebration", category: "holidays" },
    { dutch: "Kerstmis vieren", russian: "Праздновать Рождество", english: "To celebrate Christmas", example: "To celebrate Christmas", category: "holidays" },
    { dutch: "Met kerst", russian: "На Рождество", english: "At Christmas", example: "At Christmas", category: "holidays" },
    { dutch: "Eerste kerstdag", russian: "Первый день Рождества", english: "Christmas Day", example: "Christmas Day", category: "holidays" },
    { dutch: "Tweede kerstdag", russian: "Второй день Рождества", english: "Boxing Day", example: "Boxing Day", category: "holidays" },
    { dutch: "Kerstavond", russian: "Сочельник", english: "Christmas Eve", example: "Christmas Eve", category: "holidays" },
    { dutch: "De kerstdagen", russian: "Рождественские праздники", english: "The Christmas days", example: "The Christmas days", category: "holidays" },

    // New Year greetings (10 phrases)
    { dutch: "Gelukkig Nieuwjaar", russian: "С Новым годом", english: "Happy New Year", example: "Happy New Year", category: "holidays" },
    { dutch: "Goed nieuwjaar", russian: "Хорошего Нового года", english: "Good New Year", example: "Good New Year", category: "holidays" },
    { dutch: "Een gelukkig nieuwjaar gewenst", russian: "Желаю счастливого Нового года", english: "Wishing you a Happy New Year", example: "Wishing you a Happy New Year", category: "holidays" },
    { dutch: "Fijne jaarwisseling", russian: "Хорошей встречи Нового года", english: "Happy New Year's transition", example: "Happy New Year's transition", category: "holidays" },
    { dutch: "Oud en Nieuw", russian: "Старый и Новый год (встреча)", english: "New Year's Eve", example: "New Year's Eve", category: "holidays" },
    { dutch: "Oudejaarsavond", russian: "Канун Нового года", english: "New Year's Eve", example: "New Year's Eve", category: "holidays" },
    { dutch: "Nieuwjaarsdag", russian: "Новогодний день", english: "New Year's Day", example: "New Year's Day", category: "holidays" },
    { dutch: "Het nieuwe jaar", russian: "Новый год", english: "The new year", example: "The new year", category: "holidays" },
    { dutch: "Volgend jaar", russian: "В следующем году", english: "Next year", example: "Next year", category: "holidays" },
    { dutch: "Vuurwerk afsteken", russian: "Запускать фейерверки", english: "To set off fireworks", example: "To set off fireworks", category: "holidays" },

    // Holiday wishes and traditions (15 phrases)
    { dutch: "Veel geluk in het nieuwe jaar", russian: "Много счастья в новом году", english: "Much happiness in the new year", example: "Much happiness in the new year", category: "holidays" },
    { dutch: "Gezondheid en geluk", russian: "Здоровья и счастья", english: "Health and happiness", example: "Health and happiness", category: "holidays" },
    { dutch: "Alle goeds", russian: "Всего хорошего", english: "All the best", example: "All the best", category: "holidays" },
    { dutch: "De beste wensen", russian: "Наилучшие пожелания", english: "Best wishes", example: "Best wishes", category: "holidays" },
    { dutch: "Een mooi nieuw jaar", russian: "Прекрасного нового года", english: "A beautiful new year", example: "A beautiful new year", category: "holidays" },
    { dutch: "De kerstboom", russian: "Рождественская ёлка", english: "Christmas tree", example: "Christmas tree", category: "holidays" },
    { dutch: "Kerstcadeaus", russian: "Рождественские подарки", english: "Christmas gifts", example: "Christmas gifts", category: "holidays" },
    { dutch: "De kerstman", russian: "Дед Мороз / Санта", english: "Santa Claus", example: "Santa Claus", category: "holidays" },
    { dutch: "Sinterklaas", russian: "Синтерклаас (5 декабря)", english: "Saint Nicholas", example: "Saint Nicholas", category: "holidays" },
    { dutch: "Cadeautjes uitpakken", russian: "Распаковывать подарки", english: "Unwrapping presents", example: "Unwrapping presents", category: "holidays" },
    { dutch: "Kerstliedjes zingen", russian: "Петь рождественские песни", english: "Singing Christmas carols", example: "Singing Christmas carols", category: "holidays" },
    { dutch: "Gezellig samen", russian: "Уютно вместе", english: "Cozy together", example: "Cozy together", category: "holidays" },
    { dutch: "Familiediner", russian: "Семейный ужин", english: "Family dinner", example: "Family dinner", category: "holidays" },
    { dutch: "Goede voornemens", russian: "Хорошие намерения (на новый год)", english: "New Year's resolutions", example: "New Year's resolutions", category: "holidays" },
    { dutch: "Proost!", russian: "За здоровье! / Ура!", english: "Cheers!", example: "Cheers!", category: "holidays" },

    // Additional festive phrases (10 phrases)
    { dutch: "De feestdagen", russian: "Праздники", english: "The holidays", example: "The holidays", category: "holidays" },
    { dutch: "Kerstsfeer", russian: "Рождественская атмосфера", english: "Christmas atmosphere", example: "Christmas atmosphere", category: "holidays" },
    { dutch: "Kerstversiering", russian: "Рождественские украшения", english: "Christmas decorations", example: "Christmas decorations", category: "holidays" },
    { dutch: "Kerstdiner", russian: "Рождественский ужин", english: "Christmas dinner", example: "Christmas dinner", category: "holidays" },
    { dutch: "Kersttijd", russian: "Рождественское время", english: "Christmas time", example: "Christmas time", category: "holidays" },
    { dutch: "Winterse gezelligheid", russian: "Зимний уют", english: "Winter coziness", example: "Winter coziness", category: "holidays" },
    { dutch: "Een fijne vakantie", russian: "Хороших каникул", english: "A nice holiday/vacation", example: "A nice holiday/vacation", category: "holidays" },
    { dutch: "Tijd met familie", russian: "Время с семьёй", english: "Time with family", example: "Time with family", category: "holidays" },
    { dutch: "Het is bijna kerst", russian: "Скоро Рождество", english: "It's almost Christmas", example: "It's almost Christmas", category: "holidays" },
    { dutch: "Het nieuwe jaar komt eraan", russian: "Новый год приближается", english: "The new year is coming", example: "The new year is coming", category: "holidays" }
);



