const editPopupOpenButton = document.querySelector('.user__edit');
const editPopupCloseButton = document.querySelector('.popup__close_type_edit');

const editPopup = document.querySelector('.popup_type_edit');

let userName = document.querySelector('.user__name');
let userProfession = document.querySelector('.user__profession');

let editNameInput = document.querySelector('.popup__input_field_name');
let editJobInput = document.querySelector('.popup__input_field_job');

let editFormElement = document.querySelector('.popup__form_type_edit');



const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


//Edit popup open and closing
function openEditPopup() {
    setEditDefaultPopupValue();
    editPopup.classList.add('popup_opened');

}

function closeEditPopup() {

    editPopup.classList.remove('popup_opened');
}

function setEditDefaultPopupValue() {


    editNameInput.value = userName.textContent;
    editJobInput.value = userProfession.textContent;

}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function editPopupSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = editNameInput.value;
    let jobInputValue = editJobInput.value;
    userName.textContent = nameInputValue;
    userProfession.textContent = jobInputValue;
    closeEditPopup();


}

editPopupOpenButton.addEventListener('click', openEditPopup);
editPopupCloseButton.addEventListener('click', closeEditPopup);
editFormElement.addEventListener('submit', editPopupSubmit);






// Add popup functionality
const addPopupOpenButton = document.querySelector('.profile__add');
const addPopupCloseButton = document.querySelector('.popup__close_type_add');

const addPopup = document.querySelector('.popup__type_add');



let addNameInput = document.querySelector('.popup__input_image-name');
let addLinkInput = document.querySelector('.popup__input_image-link');

let addFormElement = document.querySelector('.popup__form_type_add');

const cardTemplate = document.querySelector(".card__template").content;
const cardsList = document.querySelector(".cards");
const addSubmit = document.querySelector(".popup__form_type_add");


function openAddPopup() {

    addPopup.classList.add('popup_opened');

}

function closeAddPopup() {

    addPopup.classList.remove('popup_opened');

}




addPopupOpenButton.addEventListener('click', openAddPopup);
addPopupCloseButton.addEventListener('click', closeAddPopup);


function renderItem(item) {
    const itemElement = cardTemplate.cloneNode(true);

    itemElement.querySelector(".card__image").src = item.link;
    itemElement.querySelector(".card__text").textContent = item.name;
    likeButtonHandle(itemElement);
    deleteButtonHandle(itemElement);
    pictureOpenHandle(itemElement);

    cardsList.prepend(itemElement);
    closeAddPopup();
}

function renderItems() {

    initialCards.forEach(renderItem);


}
renderItems(initialCards);

function addPopupSubmit(evt) {
    evt.preventDefault();

    let item = [{ name: "", link: "" }];
    item.name = addNameInput.value;
    item.link = addLinkInput.value;

    renderItem(item);


}

addSubmit.addEventListener('submit', addPopupSubmit);





function likeButtonHandle(itemElement) {
    itemElement.querySelector(".card__like").addEventListener("click", handleLike);
}

function handleLike(evt) {
    evt.target.classList.toggle("card__like_dark");

}


function deleteButtonHandle(itemElement) {
    itemElement.querySelector(".card__delete").addEventListener("click", handleDelete);
}

function handleDelete(evt) {

    const itemElement = evt.target.closest(".card");
    itemElement.remove();
}

const picturePopup = document.querySelector(".popup__type_picture");

const pictureOpenButton = document.querySelector(".card__image");
const pictureCloseButton = document.querySelector(".popup__close_type_picture");


function openPicturePopup() {

    picturePopup.classList.add('popup_opened');

}

function closePicturePopup() {

    picturePopup.classList.remove('popup_opened');

}

function pictureOpenHandle(itemElement) {
    itemElement.querySelector(".card__image").addEventListener("click", pictureOpen);
}

function pictureOpen(evt) {
    evt.preventDefault();
    const itemElement = evt.target.closest(".card");
    const cardImage = itemElement.querySelector(".card__image");
    const cardText = itemElement.querySelector(".card__text");
    const popupImage = document.querySelector(".popup__image");
    const popupText = document.querySelector(".popup__phrase");
    popupImage.src = cardImage.src;
    popupText.textContent = cardText.textContent;
    openPicturePopup();
}



pictureCloseButton.addEventListener("click", closePicturePopup);