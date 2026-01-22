/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

// Modal verbs phrases - Kunnen, Mogen, Moeten, Willen, Zullen
// Load after data-core.js

flashcardsData.push(
    // KUNNEN (can, to be able to) - 12 phrases
    { dutch: "Ik kan Nederlands spreken", russian: "Я могу говорить по-нидерландски", english: "I can speak Dutch", category: "modal_verbs", example: "I can speak Dutch" },
    { dutch: "Kun je me helpen?", russian: "Можешь мне помочь?", english: "Can you help me?", category: "modal_verbs", example: "Can you help me?" },
    { dutch: "Ik kan niet komen", russian: "Я не могу прийти", english: "I can't come", category: "modal_verbs", example: "I can't come" },
    { dutch: "Kunnen we later praten?", russian: "Можем мы поговорить позже?", english: "Can we talk later?", category: "modal_verbs", example: "Can we talk later?" },
    { dutch: "Ik kan het niet vinden", russian: "Я не могу это найти", english: "I can't find it", category: "modal_verbs", example: "I can't find it" },
    { dutch: "Kun je zwemmen?", russian: "Ты умеешь плавать?", english: "Can you swim?", category: "modal_verbs", example: "Can you swim?" },
    { dutch: "Ik kan je horen", russian: "Я тебя слышу (могу услышать)", english: "I can hear you", category: "modal_verbs", example: "I can hear you" },
    { dutch: "Kan ik je iets vragen?", russian: "Могу я тебя кое о чём спросить?", english: "Can I ask you something?", category: "modal_verbs", example: "Can I ask you something?" },
    { dutch: "We kunnen samen gaan", russian: "Мы можем пойти вместе", english: "We can go together", category: "modal_verbs", example: "We can go together" },
    { dutch: "Ik kan het niet begrijpen", russian: "Я не могу это понять", english: "I can't understand it", category: "modal_verbs", example: "I can't understand it" },
    { dutch: "Kun je dat herhalen?", russian: "Можешь повторить?", english: "Can you repeat that?", category: "modal_verbs", example: "Can you repeat that?" },
    { dutch: "Ik kan goed koken", russian: "Я хорошо умею готовить", english: "I can cook well", category: "modal_verbs", example: "I can cook well" },

    // MOGEN (may, to be allowed to) - 10 phrases
    { dutch: "Mag ik binnenkomen?", russian: "Могу я войти?", english: "May I come in?", category: "modal_verbs", example: "May I come in?" },
    { dutch: "Je mag hier niet roken", russian: "Здесь нельзя курить", english: "You may not smoke here", category: "modal_verbs", example: "You may not smoke here" },
    { dutch: "Mag ik je telefoonnummer?", russian: "Можно твой номер телефона?", english: "May I have your phone number?", category: "modal_verbs", example: "May I have your phone number?" },
    { dutch: "Mogen we hier parkeren?", russian: "Можно здесь припарковаться?", english: "May we park here?", category: "modal_verbs", example: "May we park here?" },
    { dutch: "Je mag gaan", russian: "Ты можешь идти", english: "You may go", category: "modal_verbs", example: "You may go" },
    { dutch: "Mag ik even zitten?", russian: "Можно мне присесть?", english: "May I sit for a moment?", category: "modal_verbs", example: "May I sit for a moment?" },
    { dutch: "Dit mag niet", russian: "Это запрещено", english: "This is not allowed", category: "modal_verbs", example: "This is not allowed" },
    { dutch: "Mag ik u iets vragen?", russian: "Могу я Вас кое о чём спросить? (вежл.)", english: "May I ask you something? (formal)", category: "modal_verbs", example: "May I ask you something? (formal)" },
    { dutch: "Mogen kinderen hier spelen?", russian: "Можно детям здесь играть?", english: "May children play here?", category: "modal_verbs", example: "May children play here?" },
    { dutch: "Mag ik de rekening?", russian: "Можно счёт?", english: "May I have the bill?", category: "modal_verbs", example: "May I have the bill?" },

    // MOETEN (must, have to) - 10 phrases
    { dutch: "Ik moet gaan", russian: "Я должен идти", english: "I must go", category: "modal_verbs", example: "I must go" },
    { dutch: "Je moet dit lezen", russian: "Ты должен это прочитать", english: "You must read this", category: "modal_verbs", example: "You must read this" },
    { dutch: "We moeten nu vertrekken", russian: "Мы должны сейчас уехать", english: "We must leave now", category: "modal_verbs", example: "We must leave now" },
    { dutch: "Moet ik betalen?", russian: "Я должен платить?", english: "Must I pay?", category: "modal_verbs", example: "Must I pay?" },
    { dutch: "Je moet voorzichtig zijn", russian: "Ты должен быть осторожным", english: "You must be careful", category: "modal_verbs", example: "You must be careful" },
    { dutch: "Ik moet werken", russian: "Я должен работать", english: "I must work", category: "modal_verbs", example: "I must work" },
    { dutch: "Moeten we wachten?", russian: "Мы должны ждать?", english: "Must we wait?", category: "modal_verbs", example: "Must we wait?" },
    { dutch: "Je moet niet huilen", russian: "Не надо плакать", english: "You mustn't cry", category: "modal_verbs", example: "You mustn't cry" },
    { dutch: "Ik moet naar huis", russian: "Мне нужно домой", english: "I must go home", category: "modal_verbs", example: "I must go home" },
    { dutch: "We moeten het proberen", russian: "Мы должны попробовать", english: "We must try", category: "modal_verbs", example: "We must try" },

    // WILLEN (to want) - 10 phrases
    { dutch: "Ik wil water", russian: "Я хочу воды", english: "I want water", category: "modal_verbs", example: "I want water" },
    { dutch: "Wil je koffie?", russian: "Хочешь кофе?", english: "Do you want coffee?", category: "modal_verbs", example: "Do you want coffee?" },
    { dutch: "Ik wil naar huis", russian: "Я хочу домой", english: "I want to go home", category: "modal_verbs", example: "I want to go home" },
    { dutch: "Wat wil je doen?", russian: "Что ты хочешь делать?", english: "What do you want to do?", category: "modal_verbs", example: "What do you want to do?" },
    { dutch: "Ik wil je iets vertellen", russian: "Я хочу тебе кое-что рассказать", english: "I want to tell you something", category: "modal_verbs", example: "I want to tell you something" },
    { dutch: "Willen jullie mee?", russian: "Вы хотите с нами?", english: "Do you want to come along?", category: "modal_verbs", example: "Do you want to come along?" },
    { dutch: "Ik wil niet wachten", russian: "Я не хочу ждать", english: "I don't want to wait", category: "modal_verbs", example: "I don't want to wait" },
    { dutch: "Wil je dansen?", russian: "Хочешь потанцевать?", english: "Do you want to dance?", category: "modal_verbs", example: "Do you want to dance?" },
    { dutch: "We willen graag bestellen", russian: "Мы хотели бы заказать", english: "We would like to order", category: "modal_verbs", example: "We would like to order" },
    { dutch: "Wat wil dat zeggen?", russian: "Что это значит?", english: "What does that mean?", category: "modal_verbs", example: "What does that mean?" },

    // ZULLEN (shall, will) - 8 phrases
    { dutch: "Ik zal het doen", russian: "Я это сделаю", english: "I will do it", category: "modal_verbs", example: "I will do it" },
    { dutch: "Zullen we gaan?", russian: "Пойдём?", english: "Shall we go?", category: "modal_verbs", example: "Shall we go?" },
    { dutch: "Het zal goed komen", russian: "Всё будет хорошо", english: "It will be fine", category: "modal_verbs", example: "It will be fine" },
    { dutch: "Ik zal je bellen", russian: "Я тебе позвоню", english: "I will call you", category: "modal_verbs", example: "I will call you" },
    { dutch: "Zullen we iets eten?", russian: "Может поедим?", english: "Shall we eat something?", category: "modal_verbs", example: "Shall we eat something?" },
    { dutch: "Dat zal niet gebeuren", russian: "Этого не случится", english: "That won't happen", category: "modal_verbs", example: "That won't happen" },
    { dutch: "Ik zal het niet vergeten", russian: "Я это не забуду", english: "I won't forget it", category: "modal_verbs", example: "I won't forget it" },
    { dutch: "Zullen we beginnen?", russian: "Начнём?", english: "Shall we begin?", category: "modal_verbs", example: "Shall we begin?" }
);



