class CardRandomizer{

    get imagesAndTexts() {
        return [
            { image: 'images/cards/Ближній_бій.png', cover:"images/covers/Фіолетовий.png", text: 'Ця карта означає негайну необхідність діяти. Можливо Вам доведеться зіткнутися віч на віч з проблемою, яку ще ніхто не бачив.', index: 0},
            { image: 'images/cards/Піджак.png', cover:"images/covers/Синій.png", text: 'Ви здатні керувати ситуацією і мати вплив на інших. Необхідні обдумані дії та стратегічний підхід до рішень.', index: 1 },
            { image: 'images/cards/Дрономатка.png', cover:"images/covers/Зелений.png", text: 'Ця карта означає здатність піднятися вище, щоб побачити ширший контекст ситуації. Можливе використання технологій або механізмів для досягнення мети.', index: 2 },
            { image: 'images/cards/Голограма.png', cover:"images/covers/Жовтий.png", text: 'Чи бачите Ви справжню картину? Чи лише ілюзію... Істина може бути складнішою ніж здалось на перший погляд.', index: 3 },
            { image: 'images/cards/Кібервійна.png', cover:"images/covers/Червоний.png", text: 'Загроза або напруження, пов\'язані з кібернетичним середовищем або інформаційною безпекою.', index: 4 },
            { image: 'images/cards/Байт.png', cover:"images/covers/Бірюзовий.png", text: 'Ця карта може символізувати увагу до дрібних деталей, необхідність розглядати ситуацію на рівні байтів. Необхідно глибоко аналізувати інформацію для прийняття рішень.', index: 5 },
            { image: 'images/cards/VR.png', cover:"images/covers/Сірий.png", text: 'Відчуження від реальності, можливість експериментувати та відкривати нові можливості. Може вказувати на важливість уяви та спроможності побачити більше, ніж інші люди.', index: 6 },
            { image: 'images/cards/Вектор.png', cover:"images/covers/Помаранчевий.png", text: 'Ця карта символізує чітке направлення у діях або розвитку ситуації.', index: 7 },
            { image: 'images/cards/Кібермозок.png', cover:"images/covers/Рожевий.png", text: 'Ця карта вказує на здатність знаходити незвичайні шляхи розв\'язання проблем. Символізує інтелектуальну та технічну хитрість.', index: 8 },
        ];
    }

    getRandomElement(removeIndexes) {
        if(removeIndexes == null){
            removeIndexes = [];
        }
        let remainingCards = this.imagesAndTexts.filter(card => !removeIndexes.includes(card.index));
        const randomIndex = Math.floor(Math.random() * remainingCards.length);
        return remainingCards[randomIndex];
    }
}