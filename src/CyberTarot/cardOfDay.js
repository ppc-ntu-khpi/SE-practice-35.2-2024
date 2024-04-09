var isNew = true;

const card = document.getElementById("cardOfDay");
const text = document.getElementById("cardOfDay-text");

        card.addEventListener("click", function() {
            if(isNew === true){
                card.src = randomImage;
                text.textContent = randomText;
                animation();
                isNew = false;
            }
        });

function animation(){

    var card = document.getElementById("cardOfDay");

    card.classList.add("shake");

    //setTimeout(function(){ generate(); }, 15);
    //card.src = 'images/cards/test-card-1.PNG';

    setTimeout(function(){ card.classList.remove("shake");}, 1500);

}

const imagesAndTexts = [
    { image: 'images/cards/test-card-1.PNG', text: 'Вам доведеться зіткнутися віч на віч з проблемою, яку ще ніхто не бачив.' },
    { image: 'images/cards/test-card-2.PNG', text: 'Ваш програмний продукт буде дуже потрібний корпоративному сегменту індустрії.' },
    { image: 'images/cards/test-card-3.PNG', text: 'Ваше майбутнє полягає у розробці роботизованих механізмів' },
];

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Отримуємо випадкове зображення та відповідний текст
const randomPair = getRandomElement(imagesAndTexts);
const randomImage = randomPair.image;
const randomText = randomPair.text;

