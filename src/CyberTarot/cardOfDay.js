
window.addEventListener("load", (event) => {
    var cardImageAndText = (new CardRandomizer()).getRandomElement();
    const card = document.querySelector('.card');
    const cardBack = document.getElementById("cardOfDay-back");
    const text = document.getElementById("cardOfDay-text");
    const cover = document.getElementById("cardOfDay-cover");
    cover.src = cardImageAndText.cover;
    cardBack.src = cardImageAndText.image;
    card.classList.add('flipped');
    text.textContent = cardImageAndText.text;
});
