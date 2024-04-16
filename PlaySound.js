const sounds = {
    BackToMainMenu: new Audio('sounds/Back_to_the_main_menu.mp3'),
    button_hovering: new Audio('sounds/button_hovering.mp3'),
    close_manual: new Audio('sounds/close_manual.mp3'),
    mode_change: new Audio('sounds/mode_change.mp3'),
    opening_manual: new Audio('sounds/opening_manual.mp3'),
    playButton: new Audio('sounds/play_button.mp3'),
    socialButtonClick: new Audio('sounds/social_button_pressing.mp3'),
}

function socialButtons() {
    sounds.socialButtonClick.volume = 0.5;
    sounds.socialButtonClick.play();
}

function logoClick(){
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

function modeChange(){
    sounds.mode_change.volume = 0.5;
    sounds.mode_change.play();
}

function play(){
    sounds.playButton.volume = 0.5;
    sounds.playButton.play();
}

function backToMain(){
    sounds.BackToMainMenu.volume = 0.5;
    sounds.BackToMainMenu.play();
}

try{
    document.getElementById('gitHub-button').addEventListener('click', socialButtons);
    document.getElementById('contacts-button').addEventListener('click', socialButtons);
}
catch (e) {}
try{
    document.getElementById('manual').addEventListener('click', openingManual);
}
catch (e) {}
try{
    document.getElementById('back-to-menu').addEventListener('click', backToMain);
}
catch (e) {}
try{
    document.querySelector('.clickOnMe-button').addEventListener('click', play);
}
catch (e) {}
document.querySelectorAll('.SE-logo').forEach((value, key, parent) => value.addEventListener('click', logoClick));