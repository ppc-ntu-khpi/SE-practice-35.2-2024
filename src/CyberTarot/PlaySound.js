const sounds = {
    buttonClick: new Audio('sounds/Social_button_pressing.mp3'),
    button_hovering: new Audio('sounds/Button_hovering.mp3'),
    opening_manual: new Audio('sounds/Opening_manual.mp3'),
    close_manual: new Audio('sounds/Close_manual.mp3'),
    mode_change: new Audio('sounds/Mode_change.mp3')
}

function socialButtons() {
    sounds.buttonClick.volume = 0.5;
    sounds.buttonClick.play();
}

function buttonClick(){
    sounds.button_hovering.volume = 0.5;
    sounds.button_hovering.play();
}

function openingManual(){
    sounds.opening_manual.volume = 0.5;
    sounds.opening_manual.play();
}

function closingManual(){
    sounds.close_manual.volume = 0.5;
    sounds.close_manual.play();
}

document.getElementById('gitHub-button').addEventListener('click', socialButtons);
document.getElementById('contacts-button').addEventListener('click', socialButtons);
document.getElementById('back-to-menu').addEventListener('click', buttonClick);
document.getElementById('manual').addEventListener('click', openingManual);