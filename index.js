let stars = document.querySelectorAll('.fa-star');
let starsDiv = [...stars];
const firstStar = starsDiv[0];

const getPreviousSiblings = (elem) => {
    let preSiblings = [];
    while (elem = elem.previousElementSibling) {
        preSiblings.push(elem);
    }
    return preSiblings;
};

const getNextSiblings = (elem) => {
    let nextSiblings = [];
    while (elem = elem.nextElementSibling) {
        nextSiblings.push(elem);
    }
    return nextSiblings;
};

let value = this;
function changeColor() {
    let element = value.event.target;
    const preSiblingsArray = getPreviousSiblings(element);
    const nextSiblingsArray = getNextSiblings(element);

    if (!(element.classList.value).includes('selected')) {
        element.classList.add('selected');
        preSiblingsArray.forEach(sibling => {
            sibling.classList.add('selected');
        })
    } else {
        nextSiblingsArray.forEach(sibling => {
            sibling.classList.remove('selected');
        })
    }
}

starsDiv.forEach((star) => {
    star.addEventListener('mouseover', changeColor, false);
});

firstStar.addEventListener('mouseleave', starNoSelected, false);

function starNoSelected() {
    firstStar.classList.remove('selected');
}

let isClicked = false;

function removeMouseover() {
    isClicked = !isClicked;
    if (isClicked) {
        starsDiv.forEach((star) => {
            star.removeEventListener('mouseover', changeColor, false);
        });
        firstStar.removeEventListener('mouseleave', starNoSelected, false);
    } else {
        starsDiv.forEach((star) => {
            star.addEventListener('mouseover', changeColor, false);
        });
        firstStar.addEventListener('mouseleave', starNoSelected, false);
    };
}