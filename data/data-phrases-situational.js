// Situational phrases - Shopping, Restaurant, Travel, Work
// Load after data-core.js

flashcardsData.push(
    // Shopping (15 cards)
    { dutch: "Ik wil graag...", russian: "Я бы хотел...", english: "I would like...", category: "shopping", example: "I would like..." },
    { dutch: "Hoeveel kost dit?", russian: "Сколько это стоит?", english: "How much is this?", category: "shopping", example: "How much is this?" },
    { dutch: "Te duur", russian: "Слишком дорого", english: "Too expensive", category: "shopping", example: "Too expensive" },
    { dutch: "Korting", russian: "Скидка", english: "Discount", category: "shopping", example: "Discount" },
    { dutch: "Kan ik pinnen?", russian: "Могу я расплатиться картой?", english: "Can I pay by card?", category: "shopping", example: "Can I pay by card?" },
    { dutch: "Contant betalen", russian: "Платить наличными", english: "Pay cash", category: "shopping", example: "Pay cash" },
    { dutch: "De winkel", russian: "Магазин", english: "The shop", category: "shopping", example: "The shop" },
    { dutch: "De supermarkt", russian: "Супермаркет", english: "Supermarket", category: "shopping", example: "Supermarket" },
    { dutch: "Het tasje", russian: "Пакет", english: "Bag", category: "shopping", example: "Bag" },
    { dutch: "De bon", russian: "Чек", english: "Receipt", category: "shopping", example: "Receipt" },
    { dutch: "Uitverkoop", russian: "Распродажа", english: "Sale", category: "shopping", example: "Sale" },
    { dutch: "Pas ik dit even?", russian: "Могу я это примерить?", english: "Can I try this on?", category: "shopping", example: "Can I try this on?" },
    { dutch: "Heeft u dit in maat...?", russian: "У вас есть это размера...?", english: "Do you have this in size...?", category: "shopping", example: "Do you have this in size...?" },
    { dutch: "Ik neem het", russian: "Я беру это", english: "I'll take it", category: "shopping", example: "I'll take it" },
    { dutch: "Ik kijk alleen maar", russian: "Я только смотрю", english: "I'm just looking", category: "shopping", example: "I'm just looking" },

    // Restaurant (18 cards)
    { dutch: "Een tafel voor twee", russian: "Столик на двоих", english: "A table for two", category: "restaurant", example: "A table for two" },
    { dutch: "De menukaart", russian: "Меню", english: "The menu", category: "restaurant", example: "The menu" },
    { dutch: "Ik wil bestellen", russian: "Я хочу заказать", english: "I want to order", category: "restaurant", example: "I want to order" },
    { dutch: "De rekening", russian: "Счёт", english: "The bill", category: "restaurant", example: "The bill" },
    { dutch: "Smakelijk eten", russian: "Приятного аппетита", english: "Enjoy your meal", category: "restaurant", example: "Enjoy your meal" },
    { dutch: "Het voorgerecht", russian: "Закуска", english: "Appetizer", category: "restaurant", example: "Appetizer" },
    { dutch: "Het hoofdgerecht", russian: "Основное блюдо", english: "Main course", category: "restaurant", example: "Main course" },
    { dutch: "Het nagerecht", russian: "Десерт", english: "Dessert", category: "restaurant", example: "Dessert" },
    { dutch: "Vegetarisch", russian: "Вегетарианский", english: "Vegetarian", category: "restaurant", example: "Vegetarian" },
    { dutch: "Lekker!", russian: "Вкусно!", english: "Delicious!", category: "restaurant", example: "Delicious!" },
    { dutch: "Een glas water", russian: "Стакан воды", english: "A glass of water", category: "restaurant", example: "A glass of water" },
    { dutch: "Nog een...", russian: "Ещё один...", english: "One more...", category: "restaurant", example: "One more..." },
    { dutch: "Is er WiFi?", russian: "Есть WiFi?", english: "Is there WiFi?", category: "restaurant", example: "Is there WiFi?" },
    { dutch: "Reserveren", russian: "Зарезервировать", english: "To reserve", category: "restaurant", example: "To reserve" },
    { dutch: "Het terras", russian: "Терраса", english: "The terrace", category: "restaurant", example: "The terrace" },
    { dutch: "Binnen of buiten?", russian: "Внутри или снаружи?", english: "Inside or outside?", category: "restaurant", example: "Inside or outside?" },
    { dutch: "Heeft u een kinderkaart?", russian: "У вас есть детское меню?", english: "Do you have a kids menu?", category: "restaurant", example: "Do you have a kids menu?" },
    { dutch: "De fooi", russian: "Чаевые", english: "The tip", category: "restaurant", example: "The tip" },

    // Travel (18 cards)
    { dutch: "Het station", russian: "Вокзал", english: "The station", category: "travel", example: "The station" },
    { dutch: "De trein", russian: "Поезд", english: "Train", category: "travel", example: "Train" },
    { dutch: "De bus", russian: "Автобус", english: "Bus", category: "travel", example: "Bus" },
    { dutch: "De metro", russian: "Метро", english: "Metro", category: "travel", example: "Metro" },
    { dutch: "Het vliegtuig", russian: "Самолёт", english: "Airplane", category: "travel", example: "Airplane" },
    { dutch: "De luchthaven", russian: "Аэропорт", english: "Airport", category: "travel", example: "Airport" },
    { dutch: "Het kaartje", russian: "Билет", english: "Ticket", category: "travel", example: "Ticket" },
    { dutch: "Enkele reis", russian: "В одну сторону", english: "One way", category: "travel", example: "One way" },
    { dutch: "Retour", russian: "Туда-обратно", english: "Return", category: "travel", example: "Return" },
    { dutch: "Het perron", russian: "Платформа", english: "Platform", category: "travel", example: "Platform" },
    { dutch: "Het spoor", russian: "Путь", english: "Track", category: "travel", example: "Track" },
    { dutch: "Vertraging", russian: "Задержка", english: "Delay", category: "travel", example: "Delay" },
    { dutch: "De halte", russian: "Остановка", english: "Stop", category: "travel", example: "Stop" },
    { dutch: "Overstappen", russian: "Пересадка", english: "Transfer", category: "travel", example: "Transfer" },
    { dutch: "Het hotel", russian: "Отель", english: "Hotel", category: "travel", example: "Hotel" },
    { dutch: "De kamer", russian: "Номер/Комната", english: "Room", category: "travel", example: "Room" },
    { dutch: "Het paspoort", russian: "Паспорт", english: "Passport", category: "travel", example: "Passport" },
    { dutch: "De koffer", russian: "Чемодан", english: "Suitcase", category: "travel", example: "Suitcase" },

    // Work & Study (15 cards)
    { dutch: "Het werk", russian: "Работа", english: "Work", category: "work", example: "Work" },
    { dutch: "De school", russian: "Школа", english: "School", category: "work", example: "School" },
    { dutch: "De universiteit", russian: "Университет", english: "University", category: "work", example: "University" },
    { dutch: "De vergadering", russian: "Встреча/Совещание", english: "Meeting", category: "work", example: "Meeting" },
    { dutch: "De collega", russian: "Коллега", english: "Colleague", category: "work", example: "Colleague" },
    { dutch: "De baas", russian: "Босс", english: "Boss", category: "work", example: "Boss" },
    { dutch: "Het kantoor", russian: "Офис", english: "Office", category: "work", example: "Office" },
    { dutch: "De computer", russian: "Компьютер", english: "Computer", category: "work", example: "Computer" },
    { dutch: "Het project", russian: "Проект", english: "Project", category: "work", example: "Project" },
    { dutch: "De deadline", russian: "Срок", english: "Deadline", category: "work", example: "Deadline" },
    { dutch: "De pauze", russian: "Перерыв", english: "Break", category: "work", example: "Break" },
    { dutch: "Het huiswerk", russian: "Домашнее задание", english: "Homework", category: "work", example: "Homework" },
    { dutch: "Het examen", russian: "Экзамен", english: "Exam", category: "work", example: "Exam" },
    { dutch: "De les", russian: "Урок", english: "Lesson", category: "work", example: "Lesson" },
    { dutch: "Studeren", russian: "Учиться", english: "To study", category: "work", example: "To study" }
);








