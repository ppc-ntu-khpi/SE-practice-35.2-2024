var selectorSwitcher = document.getElementById('selector-switcher');
selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";

function leftClick() {
    selectorSwitcher.style.left = '0';
    selectorSwitcher.style.backgroundColor = "rgb(37, 112, 212)";
    changeStyle('primaryBackgroundColor-green', 'primaryBackgroundColor-blue');
    changeStyle('secondaryBackgroundColor-green', 'secondaryBackgroundColor-blue');
}

function rightClick() {
    selectorSwitcher.style.left = '50%';
    selectorSwitcher.style.backgroundColor = "rgba(29, 237, 131)";
    changeStyle('primaryBackgroundColor-blue', 'primaryBackgroundColor-green');
    changeStyle('secondaryBackgroundColor-blue', 'secondaryBackgroundColor-green');
}

function changeStyle(from, to){
    var elements = document.getElementsByClassName(from);
    for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].className = elements[i].className.replace(from, to);
        }
    }
}