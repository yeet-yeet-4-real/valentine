"use strict";




const questionText = document.querySelector(".title");
const buttonSection = document.querySelector(".button-section");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const image = document.querySelector(".img");

const maxImages = 5;

let isPlay = true;
let noCount = 0;

yesButton.addEventListener("click", function() {
    questionText.textContent = "Yayy!!! :3";
    buttonSection.classList.add("hidden");
    changeImage("yes");
});

noButton.addEventListener("click", function () {
    if (isPlay) {
        noCount++;
        const imgIndex = Math.min(noCount, maxImages);
        changeImage(imgIndex);
        resizeYesBtn();
        updateNoButton();
        if (noCount == maxImages + 1) {
            isPlay = false;
            location.replace("../code/page.html");
        }
    }
});

function resizeYesBtn() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messageArray = [
        "No",
        "Are you sure?",
        "Pookie please",
        "Don't do this to me :(",
        "You're breaking my heart",
        "I'm gonna cry...",
    ];

    const index = Math.min(noCount, messageArray.length - 1);
    return messageArray[index];
}

function changeImage(imageParam) {
    image.src = `../img/cat-${imageParam}.jpg`;
}

function updateNoButton() {
    noButton.textContent = generateMessage(noCount);
}