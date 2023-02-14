const initialCards = [
  {
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

const cardTemplate = document.querySelector(".element__template").content;
const cardsContainer = document.querySelector(".element");
const popupImage = document.querySelector('.popup_for_image');
const elementImage = popupImage.querySelector('.popup__image');
const elementTitle = popupImage.querySelector('.popup__image-description');
let popupOpen = document.querySelector("#popupProfile");
let openPopupButtons = document.querySelector(".profile__edit-button");
let closePopupButtons = document.querySelector('.popup__close');
let editForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let profileEditName = document.querySelector(".popup__input_type_name");
let profileEditInfo = document.querySelector(".popup__input_type_info");
let openAddCard = document.querySelector(".profile__add-button");
let editNameCard = document.querySelector("#cardInputName");
let addNameCard = document.querySelector(".popup__input_type_card");
let addLinkCard = document.querySelector(".popup__input_type_link");
let popupCloseCardButton = document.querySelector("#popupCloseCard");

const cardsDelete = (cardData) => {
  cardData.addEventListener('click', (evt) => {
    evt.target.closest(".element__card").remove();
  });
};

const cardsLike = (buttonLike) => {
  buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_type_active');
  });
};

const closeClick = (evt) => {
  closePopupImageCard(evt.target.closest(".popup"));
};
const exit = Array.from(document.querySelectorAll(".popup__close")).forEach(
  (popupImageClose) => {
    popupImageClose.addEventListener("click", closeClick);
  }
);

const cardsShow = (cardImageElement) => {
  cardImageElement.addEventListener('click', (evt) => {
    openPopupImage(popupImage);

    elementImage.src = cardImageElement.src;
    elementImage.alt = cardImageElement.alt;
    elementTitle.textContent = evt.target.closest('.element__card').textContent;
  });

};

const createCard = (cardData) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementTitle = cardElement.querySelector(".element__title");
  const cardElementImage= cardElement.querySelector(".element__image");
  const cardElementLike = cardElement.querySelector(".element__like");
  const cardElementDel = cardElement.querySelector(".element__delete");

  cardElementTitle.textContent = cardData.name;
  cardElementImage.src = cardData.link;
  cardsShow(cardElementImage);
  cardsLike(cardElementLike);
  cardsDelete(cardElementDel);

  return cardElement;}

initialCards.forEach((cardData) => {
  cardsContainer.append(createCard(cardData));
});

let popupCard = document.querySelector("#popupCard");
popupCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let addNameCard = document.querySelector(".popup__input_type_card");
  let addLinkCard = document.querySelector(".popup__input_type_link");
  newCard({
    name: addNameCard.value,
    link: addLinkCard.value,
  });

  evt.target.reset();
  closePopupCard(popupCard);
});
const newCard = (cardData) => {
  cardsContainer.prepend(createCard(cardData));
};


function closePopup() {
  popupOpen.classList.remove("popup_opened");
}

function openPopup() {
  popupOpen.classList.add("popup_opened");
  profileEditName.value = profileName.textContent;
  profileEditInfo.value = profileDescription.textContent;
}

function retrieveFormValue(event) {
  event.preventDefault();
  profileName.textContent = profileEditName.value;
  profileDescription.textContent = profileEditInfo.value;
  closePopup();
}

function closePopupCard() {
  popupCard.classList.remove("popup_opened");
}

 function openPopupCard() {
  popupCard.classList.add("popup_opened");
  editNameCard.value = addNameCard.textContent;
  profileEditInfo.value = profileDescription.textContent;
}

function retrieveFormCardValue(event) {
  event.preventDefault();
  addNameCard.textContent = editNameCard.value;
  addLinkCard.textContent = editLink.value;
  closePopupCard();
}
function openPopupImage(event) {
  popupImage.classList.add("popup_opened");
}
function closePopupImageCard(event) {
  popupImage.classList.remove("popup_opened");
}

openPopupButtons.addEventListener("click", openPopup);
closePopupButtons.addEventListener("click", closePopup);
editForm.addEventListener("submit", retrieveFormValue);
openAddCard.addEventListener("click", openPopupCard);
popupCloseCardButton.addEventListener("click", closePopupCard);



