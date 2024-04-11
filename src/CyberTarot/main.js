var myShakeEvent = new Shake({
    threshold: 20
});
myShakeEvent.start();
window.addEventListener('shake', shakeEventDidOccur, false);
function shakeEventDidOccur () {
    navigator.vibrate(200);
    moveToGameField();
}
var isSelectedTypeCardOfDay = false;
var selectorSwitcher = document.getElementById('selector-switcher');
selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";
changeStyle("blue");

function changeGameType() {
    if(isSelectedTypeCardOfDay){
        isSelectedTypeCardOfDay = false;
        selectorSwitcher.style.left = '0';
        selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";
        changeStyle('blue');
        return;
    }
    isSelectedTypeCardOfDay = true;
    selectorSwitcher.style.left = '50%';
    selectorSwitcher.style.backgroundColor = "rgba(29, 237, 131)";
    changeStyle('green');
}

function moveToGameField(){
    if(isSelectedTypeCardOfDay){
        window.location.href = 'cardOfDayPage.html';
        return;
    }
    window.location.href = 'ThreeFateCardsPage.html';
}

function changeStyle(to){
    document.getElementById("gitHubIcon").setAttribute("src", `images/icon_github_${to}.svg`);
    document.getElementById("contactsIcon").setAttribute("src", `images/icon_contacts_${to}.svg`);

    var painter = new Painter();

    var elements = document.getElementsByClassName("primaryBackground");
    var color = painter.getPrimaryBackgroundColor(to);
    for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].style.backgroundColor = color;
        }
    }

    elements = document.getElementsByClassName("secondaryBackground");
    color = painter.getSecondaryBackgroundColor(to);
    for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].style.backgroundColor = color;
        }
    }

    elements = document.getElementsByClassName("primaryText");
    color = painter.getPrimaryTextColor(to);
    for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].style.color = color;
        }
    }

    elements = document.getElementsByClassName("mainGradient");
    color = painter.getMainGradientColor(to);
    for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].style.background = color;
        }
    }
}