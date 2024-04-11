const times = [
    "past",
    "present",
    "future",
];
var indexesToRemove = [];
window.addEventListener("load", (event) => {
    const cards = document.querySelectorAll('.card');
    for(var index in times){
        var cardImageAndText = (new CardRandomizer()).getRandomElement(indexesToRemove);
        const cardBack = document.getElementById(`card-${times[index]}`);
        const text = document.getElementById(`card-${times[index]}-text`);
        cardBack.src = cardImageAndText.image;
        cards[index].classList.add('flipped');
        text.textContent = cardImageAndText.text;
        indexesToRemove.push(cardImageAndText.index);
    }
});

