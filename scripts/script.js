const popupOpenButton = document.querySelector('.user__edit');
const popupCloseButton = document.querySelector('.popup__close');

const popup = document.querySelector('.popup');

let userName = document.querySelector('.user__name');
let userProfession = document.querySelector('.user__profession');

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__profession');


function togglePopoup() {
    popup.classList.toggle('popup_opened');
}
popupOpenButton.addEventListener('click', togglePopoup);
popupCloseButton.addEventListener('click', togglePopoup);



function setDefaultPopupValue() {


    nameInput.setAttribute('value', userName.textContent);
    jobInput.setAttribute('value', userProfession.textContent);

}

popupOpenButton.addEventListener('click', setDefaultPopupValue);

let saveButton = document.querySelector(".popup__save");

function saveName() {
    userName.textContent = nameInput.value;
    userProfession.textContent = jobInput.value;
    togglePopoup();
}
saveButton.addEventListener('click', saveName);