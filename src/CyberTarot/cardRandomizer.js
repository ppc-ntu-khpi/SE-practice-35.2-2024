class CardRandomizer{

    get imagesAndTexts() {
        return [
            { image: 'images/cards/test-card-1.PNG', text: 'Вам доведеться зіткнутися віч на віч з проблемою, яку ще ніхто не бачив.', index: 0},
            { image: 'images/cards/test-card-2.PNG', text: 'Ваш програмний продукт буде дуже потрібний корпоративному сегменту індустрії.', index: 1 },
            { image: 'images/cards/test-card-3.PNG', text: 'Ваше майбутнє полягає у розробці роботизованих механізмів', index: 2 },
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