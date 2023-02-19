

const cardTemplate = document.querySelector(".element__template").content;
const cardsContainer = document.querySelector(".element");
const popupImage = document.querySelector("#imagesPopup");
const elementImage = popupImage.querySelector(".popup__image");
const elementTitle = popupImage.querySelector(".popup__image-description");
const popupOpen = document.querySelector("#popupProfile");
const openPopupButtons = document.querySelector(".profile__edit-button");
const closePopupButtons = document.querySelector(".popup__close");
const editForm = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileEditName = document.querySelector(".popup__input_type_name");
const profileEditInfo = document.querySelector(".popup__input_type_info");
const openAddCard = document.querySelector(".profile__add-button");
const editNameCard = document.querySelector("#cardInputName");
const addNameCard = document.querySelector(".popup__input_type_card");
const addLinkCard = document.querySelector(".popup__input_type_link");
const popupCloseCardButton = document.querySelector("#popupCloseCard");

const cardsDelete = (cardData) => {
  cardData.addEventListener("click", (evt) => {
    evt.target.closest(".element__card").remove();
  });
};

const cardsLike = (buttonLike) => {
  buttonLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_type_active");
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
  cardImageElement.addEventListener("click", (evt) => {
    openPopupImage(popupImage);

    elementImage.src = cardImageElement.src;
    elementImage.alt = cardImageElement.alt;
    elementTitle.textContent = evt.target.closest(".element__card").textContent;
  });

};

const createCard = (cardData) => {
  const cardElement = cardTemplate.querySelector(".element__card").cloneNode(true);
  const cardsContainer = document.querySelector(".element");
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

initialCards.forEach((cardElement) => {
  cardsContainer.append(createCard(cardElement));
});

const popupCard = document.querySelector("#popupCard");
popupCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const addNameCard = document.querySelector(".popup__input_type_card");
  const addLinkCard = document.querySelector(".popup__input_type_link");
  newCard({
    name: addNameCard.value,
    link: addLinkCard.value,
  });

  evt.target.reset();
  closePopupCard(popupCard);
});
const newCard = (cardElement) => {
  cardsContainer.prepend(createCard(cardElement));
};

function openPopup (popup) {
  popup.classList.add("popup_opened");
}
function closePopup (popup) {
  popup.classList.remove("pop_opened");
}

function closePopup() {
  popupOpen.classList.remove("popup_opened");
}

function openPopupProfile() {
  openPopup(popupProfile)
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
}

function retrieveFormCardValue(event) {
  event.preventDefault();
  addNameCard.textContent = editNameCard.value;
  addLinkCard.textContent = editLink.value;
  closePopupCard(popupCard);
}
function openPopupImage(event) {
  popupImage.classList.add("popup_opened");
}
function closePopupImageCard(event) {
  popupImage.classList.remove("popup_opened");
}

openPopupButtons.addEventListener("click", openPopupProfile);
closePopupButtons.addEventListener("click", closePopup);
editForm.addEventListener("submit", retrieveFormValue);
openAddCard.addEventListener("click", openPopupCard);
popupCloseCardButton.addEventListener("click", closePopupCard);

