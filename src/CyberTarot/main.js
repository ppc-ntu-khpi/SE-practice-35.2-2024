var isMobile;
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        isMobile = true ;
    }
    else {
        isMobile = false ;
    }

var myShakeEvent = new Shake({
    threshold: 10
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
    modeChange();
    if(isSelectedTypeCardOfDay){
        isSelectedTypeCardOfDay = false;
        selectorSwitcher.style.left = '0';
        selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";
        document.querySelector('.SE-logo-PC').setAttribute('src', 'images/SE-logo-blue.svg');
        document.querySelector('.SE-logo').setAttribute('src', 'images/SE-logo-blue.svg');
        if(isMobile) {
            document.getElementById('pop-up-phone').setAttribute('src', 'images/Pop Up Phone.svg');
        }
        else {
            document.getElementById('pop-up-pc').setAttribute('src', 'images/Pop Up PC.svg');
        }
        changeStyle('blue');
        return;
    }
    isSelectedTypeCardOfDay = true;
    selectorSwitcher.style.left = '50%';
    selectorSwitcher.style.backgroundColor = "rgba(29, 237, 131)";
    document.querySelector('.SE-logo-PC').setAttribute('src', 'images/SE-logo-green.svg');
    document.querySelector('.SE-logo').setAttribute('src', 'images/SE-logo-green.svg');
    if(isMobile) {
        document.getElementById('pop-up-phone').setAttribute('src', 'images/Pop Up Phone 2.svg');
    }
    else {
        document.getElementById('pop-up-pc').setAttribute('src', 'images/Pop Up PC 2.svg');
    }
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

function showPopUp(){
    document.querySelector('.pop-up-background').classList.add('active');
}

function hidePopUp(){
    var popUp = document.querySelector('.pop-up-background');
    if(popUp.classList.contains('active')){
        closingManual();
        popUp.classList.remove('active');
    }
}