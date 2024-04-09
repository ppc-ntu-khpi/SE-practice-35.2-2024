
var selectorSwitcher = document.getElementById('selector-switcher');
selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";
changeStyle("blue");

function changeGameType() {
    if(selectorSwitcher.style.left === '50%'){
        selectorSwitcher.style.left = '0';
        selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";
        changeStyle('blue');
        return;
    }
    selectorSwitcher.style.left = '50%';
    selectorSwitcher.style.backgroundColor = "rgba(29, 237, 131)";
    changeStyle('green');
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