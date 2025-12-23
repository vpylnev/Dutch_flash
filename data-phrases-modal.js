// Modal verbs phrases - Kunnen, Mogen, Moeten, Willen, Zullen
// Load after data-core.js

flashcardsData.push(
    // KUNNEN (can, to be able to) - 12 phrases
    { dutch: "Ik kan Nederlands spreken", russian: "Я могу говорить по-нидерландски", category: "modal_verbs", example: "I can speak Dutch" },
    { dutch: "Kun je me helpen?", russian: "Можешь мне помочь?", category: "modal_verbs", example: "Can you help me?" },
    { dutch: "Ik kan niet komen", russian: "Я не могу прийти", category: "modal_verbs", example: "I can't come" },
    { dutch: "Kunnen we later praten?", russian: "Можем мы поговорить позже?", category: "modal_verbs", example: "Can we talk later?" },
    { dutch: "Ik kan het niet vinden", russian: "Я не могу это найти", category: "modal_verbs", example: "I can't find it" },
    { dutch: "Kun je zwemmen?", russian: "Ты умеешь плавать?", category: "modal_verbs", example: "Can you swim?" },
    { dutch: "Ik kan je horen", russian: "Я тебя слышу (могу услышать)", category: "modal_verbs", example: "I can hear you" },
    { dutch: "Kan ik je iets vragen?", russian: "Могу я тебя кое о чём спросить?", category: "modal_verbs", example: "Can I ask you something?" },
    { dutch: "We kunnen samen gaan", russian: "Мы можем пойти вместе", category: "modal_verbs", example: "We can go together" },
    { dutch: "Ik kan het niet begrijpen", russian: "Я не могу это понять", category: "modal_verbs", example: "I can't understand it" },
    { dutch: "Kun je dat herhalen?", russian: "Можешь повторить?", category: "modal_verbs", example: "Can you repeat that?" },
    { dutch: "Ik kan goed koken", russian: "Я хорошо умею готовить", category: "modal_verbs", example: "I can cook well" },

    // MOGEN (may, to be allowed to) - 10 phrases
    { dutch: "Mag ik binnenkomen?", russian: "Могу я войти?", category: "modal_verbs", example: "May I come in?" },
    { dutch: "Je mag hier niet roken", russian: "Здесь нельзя курить", category: "modal_verbs", example: "You may not smoke here" },
    { dutch: "Mag ik je telefoonnummer?", russian: "Можно твой номер телефона?", category: "modal_verbs", example: "May I have your phone number?" },
    { dutch: "Mogen we hier parkeren?", russian: "Можно здесь припарковаться?", category: "modal_verbs", example: "May we park here?" },
    { dutch: "Je mag gaan", russian: "Ты можешь идти", category: "modal_verbs", example: "You may go" },
    { dutch: "Mag ik even zitten?", russian: "Можно мне присесть?", category: "modal_verbs", example: "May I sit for a moment?" },
    { dutch: "Dit mag niet", russian: "Это запрещено", category: "modal_verbs", example: "This is not allowed" },
    { dutch: "Mag ik u iets vragen?", russian: "Могу я Вас кое о чём спросить? (вежл.)", category: "modal_verbs", example: "May I ask you something? (formal)" },
    { dutch: "Mogen kinderen hier spelen?", russian: "Можно детям здесь играть?", category: "modal_verbs", example: "May children play here?" },
    { dutch: "Mag ik de rekening?", russian: "Можно счёт?", category: "modal_verbs", example: "May I have the bill?" },

    // MOETEN (must, have to) - 10 phrases
    { dutch: "Ik moet gaan", russian: "Я должен идти", category: "modal_verbs", example: "I must go" },
    { dutch: "Je moet dit lezen", russian: "Ты должен это прочитать", category: "modal_verbs", example: "You must read this" },
    { dutch: "We moeten nu vertrekken", russian: "Мы должны сейчас уехать", category: "modal_verbs", example: "We must leave now" },
    { dutch: "Moet ik betalen?", russian: "Я должен платить?", category: "modal_verbs", example: "Must I pay?" },
    { dutch: "Je moet voorzichtig zijn", russian: "Ты должен быть осторожным", category: "modal_verbs", example: "You must be careful" },
    { dutch: "Ik moet werken", russian: "Я должен работать", category: "modal_verbs", example: "I must work" },
    { dutch: "Moeten we wachten?", russian: "Мы должны ждать?", category: "modal_verbs", example: "Must we wait?" },
    { dutch: "Je moet niet huilen", russian: "Не надо плакать", category: "modal_verbs", example: "You mustn't cry" },
    { dutch: "Ik moet naar huis", russian: "Мне нужно домой", category: "modal_verbs", example: "I must go home" },
    { dutch: "We moeten het proberen", russian: "Мы должны попробовать", category: "modal_verbs", example: "We must try" },

    // WILLEN (to want) - 10 phrases
    { dutch: "Ik wil water", russian: "Я хочу воды", category: "modal_verbs", example: "I want water" },
    { dutch: "Wil je koffie?", russian: "Хочешь кофе?", category: "modal_verbs", example: "Do you want coffee?" },
    { dutch: "Ik wil naar huis", russian: "Я хочу домой", category: "modal_verbs", example: "I want to go home" },
    { dutch: "Wat wil je doen?", russian: "Что ты хочешь делать?", category: "modal_verbs", example: "What do you want to do?" },
    { dutch: "Ik wil je iets vertellen", russian: "Я хочу тебе кое-что рассказать", category: "modal_verbs", example: "I want to tell you something" },
    { dutch: "Willen jullie mee?", russian: "Вы хотите с нами?", category: "modal_verbs", example: "Do you want to come along?" },
    { dutch: "Ik wil niet wachten", russian: "Я не хочу ждать", category: "modal_verbs", example: "I don't want to wait" },
    { dutch: "Wil je dansen?", russian: "Хочешь потанцевать?", category: "modal_verbs", example: "Do you want to dance?" },
    { dutch: "We willen graag bestellen", russian: "Мы хотели бы заказать", category: "modal_verbs", example: "We would like to order" },
    { dutch: "Wat wil dat zeggen?", russian: "Что это значит?", category: "modal_verbs", example: "What does that mean?" },

    // ZULLEN (shall, will) - 8 phrases
    { dutch: "Ik zal het doen", russian: "Я это сделаю", category: "modal_verbs", example: "I will do it" },
    { dutch: "Zullen we gaan?", russian: "Пойдём?", category: "modal_verbs", example: "Shall we go?" },
    { dutch: "Het zal goed komen", russian: "Всё будет хорошо", category: "modal_verbs", example: "It will be fine" },
    { dutch: "Ik zal je bellen", russian: "Я тебе позвоню", category: "modal_verbs", example: "I will call you" },
    { dutch: "Zullen we iets eten?", russian: "Может поедим?", category: "modal_verbs", example: "Shall we eat something?" },
    { dutch: "Dat zal niet gebeuren", russian: "Этого не случится", category: "modal_verbs", example: "That won't happen" },
    { dutch: "Ik zal het niet vergeten", russian: "Я это не забуду", category: "modal_verbs", example: "I won't forget it" },
    { dutch: "Zullen we beginnen?", russian: "Начнём?", category: "modal_verbs", example: "Shall we begin?" }
);


