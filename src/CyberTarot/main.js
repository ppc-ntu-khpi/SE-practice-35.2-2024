var selectorSwitcher = document.getElementById('selector-switcher');
selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";

function changeGameType() {
    if(selectorSwitcher.style.left === '50%'){
        selectorSwitcher.style.left = '0';
        selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";
        changeStyle('primaryBackgroundColor-green', 'primaryBackgroundColor-blue');
        changeStyle('secondaryBackgroundColor-green', 'secondaryBackgroundColor-blue');
        changeStyle('primaryTextColor-green', 'primaryTextColor-blue');
        changeStyle('main-gradient-green', 'main-gradient-blue');
        return;
    }
    selectorSwitcher.style.left = '50%';
    selectorSwitcher.style.backgroundColor = "rgba(29, 237, 131)";
    changeStyle('primaryBackgroundColor-blue', 'primaryBackgroundColor-green');
    changeStyle('secondaryBackgroundColor-blue', 'secondaryBackgroundColor-green');
    changeStyle('primaryTextColor-blue', 'primaryTextColor-green');
    changeStyle('main-gradient-blue', 'main-gradient-green');
}

function changeStyle(from, to){
    var elements = document.getElementsByClassName(from);
    for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].className = elements[i].className.replace(from, to);
        }
    }
}