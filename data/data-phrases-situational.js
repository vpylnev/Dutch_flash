/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

// Situational phrases - Shopping, Restaurant, Travel, Work
// Load after data-core.js

flashcardsData.push(
    // Shopping (15 cards)
    { dutch: "Ik wil graag...", russian: "Я бы хотел...", english: "I would like...", example: "I would like...", category: "shopping" },
    { dutch: "Hoeveel kost dit?", russian: "Сколько это стоит?", english: "How much is this?", example: "How much is this?", category: "shopping" },
    { dutch: "Te duur", russian: "Слишком дорого", english: "Too expensive", example: "Too expensive", category: "shopping" },
    { dutch: "Korting", russian: "Скидка", english: "Discount", example: "Discount", category: "shopping" },
    { dutch: "Kan ik pinnen?", russian: "Могу я расплатиться картой?", english: "Can I pay by card?", example: "Can I pay by card?", category: "shopping" },
    { dutch: "Contant betalen", russian: "Платить наличными", english: "Pay cash", example: "Pay cash", category: "shopping" },
    { dutch: "De winkel", russian: "Магазин", english: "The shop", example: "The shop", category: "shopping" },
    { dutch: "De supermarkt", russian: "Супермаркет", english: "Supermarket", example: "Supermarket", category: "shopping" },
    { dutch: "Het tasje", russian: "Пакет", english: "Bag", example: "Bag", category: "shopping" },
    { dutch: "De bon", russian: "Чек", english: "Receipt", example: "Receipt", category: "shopping" },
    { dutch: "Uitverkoop", russian: "Распродажа", english: "Sale", example: "Sale", category: "shopping" },
    { dutch: "Pas ik dit even?", russian: "Могу я это примерить?", english: "Can I try this on?", example: "Can I try this on?", category: "shopping" },
    { dutch: "Heeft u dit in maat...?", russian: "У вас есть это размера...?", english: "Do you have this in size...?", example: "Do you have this in size...?", category: "shopping" },
    { dutch: "Ik neem het", russian: "Я беру это", english: "I'll take it", example: "I'll take it", category: "shopping" },
    { dutch: "Ik kijk alleen maar", russian: "Я только смотрю", english: "I'm just looking", example: "I'm just looking", category: "shopping" },

    // Restaurant (18 cards)
    { dutch: "Een tafel voor twee", russian: "Столик на двоих", english: "A table for two", example: "A table for two", category: "restaurant" },
    { dutch: "De menukaart", russian: "Меню", english: "The menu", example: "The menu", category: "restaurant" },
    { dutch: "Ik wil bestellen", russian: "Я хочу заказать", english: "I want to order", example: "I want to order", category: "restaurant" },
    { dutch: "De rekening", russian: "Счёт", english: "The bill", example: "The bill", category: "restaurant" },
    { dutch: "Smakelijk eten", russian: "Приятного аппетита", english: "Enjoy your meal", example: "Enjoy your meal", category: "restaurant" },
    { dutch: "Het voorgerecht", russian: "Закуска", english: "Appetizer", example: "Appetizer", category: "restaurant" },
    { dutch: "Het hoofdgerecht", russian: "Основное блюдо", english: "Main course", example: "Main course", category: "restaurant" },
    { dutch: "Het nagerecht", russian: "Десерт", english: "Dessert", example: "Dessert", category: "restaurant" },
    { dutch: "Vegetarisch", russian: "Вегетарианский", english: "Vegetarian", example: "Vegetarian", category: "restaurant" },
    { dutch: "Lekker!", russian: "Вкусно!", english: "Delicious!", example: "Delicious!", category: "restaurant" },
    { dutch: "Een glas water", russian: "Стакан воды", english: "A glass of water", example: "A glass of water", category: "restaurant" },
    { dutch: "Nog een...", russian: "Ещё один...", english: "One more...", example: "One more...", category: "restaurant" },
    { dutch: "Is er WiFi?", russian: "Есть WiFi?", english: "Is there WiFi?", example: "Is there WiFi?", category: "restaurant" },
    { dutch: "Reserveren", russian: "Зарезервировать", english: "To reserve", example: "To reserve", category: "restaurant" },
    { dutch: "Het terras", russian: "Терраса", english: "The terrace", example: "The terrace", category: "restaurant" },
    { dutch: "Binnen of buiten?", russian: "Внутри или снаружи?", english: "Inside or outside?", example: "Inside or outside?", category: "restaurant" },
    { dutch: "Heeft u een kinderkaart?", russian: "У вас есть детское меню?", english: "Do you have a kids menu?", example: "Do you have a kids menu?", category: "restaurant" },
    { dutch: "De fooi", russian: "Чаевые", english: "The tip", example: "The tip", category: "restaurant" },

    // Travel (18 cards)
    { dutch: "Het station", russian: "Вокзал", english: "The station", example: "The station", category: "travel" },
    { dutch: "De trein", russian: "Поезд", english: "Train", example: "Train", category: "travel" },
    { dutch: "De bus", russian: "Автобус", english: "Bus", example: "Bus", category: "travel" },
    { dutch: "De metro", russian: "Метро", english: "Metro", example: "Metro", category: "travel" },
    { dutch: "Het vliegtuig", russian: "Самолёт", english: "Airplane", example: "Airplane", category: "travel" },
    { dutch: "De luchthaven", russian: "Аэропорт", english: "Airport", example: "Airport", category: "travel" },
    { dutch: "Het kaartje", russian: "Билет", english: "Ticket", example: "Ticket", category: "travel" },
    { dutch: "Enkele reis", russian: "В одну сторону", english: "One way", example: "One way", category: "travel" },
    { dutch: "Retour", russian: "Туда-обратно", english: "Return", example: "Return", category: "travel" },
    { dutch: "Het perron", russian: "Платформа", english: "Platform", example: "Platform", category: "travel" },
    { dutch: "Het spoor", russian: "Путь", english: "Track", example: "Track", category: "travel" },
    { dutch: "Vertraging", russian: "Задержка", english: "Delay", example: "Delay", category: "travel" },
    { dutch: "De halte", russian: "Остановка", english: "Stop", example: "Stop", category: "travel" },
    { dutch: "Overstappen", russian: "Пересадка", english: "Transfer", example: "Transfer", category: "travel" },
    { dutch: "Het hotel", russian: "Отель", english: "Hotel", example: "Hotel", category: "travel" },
    { dutch: "De kamer", russian: "Номер/Комната", english: "Room", example: "Room", category: "travel" },
    { dutch: "Het paspoort", russian: "Паспорт", english: "Passport", example: "Passport", category: "travel" },
    { dutch: "De koffer", russian: "Чемодан", english: "Suitcase", example: "Suitcase", category: "travel" },

    // Work & Study (15 cards)
    { dutch: "Het werk", russian: "Работа", english: "Work", example: "Work", category: "work" },
    { dutch: "De school", russian: "Школа", english: "School", example: "School", category: "work" },
    { dutch: "De universiteit", russian: "Университет", english: "University", example: "University", category: "work" },
    { dutch: "De vergadering", russian: "Встреча/Совещание", english: "Meeting", example: "Meeting", category: "work" },
    { dutch: "De collega", russian: "Коллега", english: "Colleague", example: "Colleague", category: "work" },
    { dutch: "De baas", russian: "Босс", english: "Boss", example: "Boss", category: "work" },
    { dutch: "Het kantoor", russian: "Офис", english: "Office", example: "Office", category: "work" },
    { dutch: "De computer", russian: "Компьютер", english: "Computer", example: "Computer", category: "work" },
    { dutch: "Het project", russian: "Проект", english: "Project", example: "Project", category: "work" },
    { dutch: "De deadline", russian: "Срок", english: "Deadline", example: "Deadline", category: "work" },
    { dutch: "De pauze", russian: "Перерыв", english: "Break", example: "Break", category: "work" },
    { dutch: "Het huiswerk", russian: "Домашнее задание", english: "Homework", example: "Homework", category: "work" },
    { dutch: "Het examen", russian: "Экзамен", english: "Exam", example: "Exam", category: "work" },
    { dutch: "De les", russian: "Урок", english: "Lesson", example: "Lesson", category: "work" },
    { dutch: "Studeren", russian: "Учиться", english: "To study", example: "To study", category: "work" }
);









