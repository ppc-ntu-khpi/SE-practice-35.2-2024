const sounds = {
    buttonClick: new Audio('sounds/social_button_pressing.mp3'),
    cardShow: new Audio('sounds/open_card_sound.mp3'),
    button_hovering: new Audio('sounds/button_hovering.mp3'),
    opening_manual: new Audio('sounds/opening_manual.mp3'),
    close_manual: new Audio('sounds/close_manual.mp3'),
    mode_change: new Audio('sounds/mode_change.mp3')
}

function socialButtons() {
    sounds.buttonClick.play();
}

function cardsShowing() {
    sounds.cardShow.play();
}

function buttonClick(){
    sounds.button_hovering.play();
}

//document.getElementById('gitHub-button').addEventListener('click', socialButtons);
//document.getElementById('contacts-button').addEventListener('click', socialButtons);
//document.getElementById('back-to-menu').addEventListener('click', buttonClick);