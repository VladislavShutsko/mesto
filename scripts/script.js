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

let formElement = document.querySelector('.popup__form');



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;
    userName.textContent = nameInputValue;
    userProfession.textContent = jobInputValue;
    togglePopoup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);