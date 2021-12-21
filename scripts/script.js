const popupOpenButton = document.querySelector('.user__edit');
const popupCloseButton = document.querySelector('.popup__close');

const popup = document.querySelector('.popup');

let userName = document.querySelector('.user__name');
let userProfession = document.querySelector('.user__profession');

let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');

let formElement = document.querySelector('.popup__form');

function openPopup() {
    setDefaultPopupValue();
    popup.classList.add('popup_opened');
}

function closePopup() {

    popup.classList.remove('popup_opened');
}

function setDefaultPopupValue() {


    nameInput.value = userName.textContent;
    jobInput.value = userProfession.textContent;

}







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
    closePopup();
}


popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);