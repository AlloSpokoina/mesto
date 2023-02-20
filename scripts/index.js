const cardTemplate = document.querySelector(".element__template").content;
const cardsContainer = document.querySelector(".element");
const popupImage = document.querySelector("#imagesPopup");
const elementImage = popupImage.querySelector(".popup__image");
const elementTitle = popupImage.querySelector(".popup__image-description");
const popupProfile = document.querySelector("#popupProfile");
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
const popupCard = document.querySelector("#popupCard");

const handleDeleteClick = (cardData) => {
  cardData.addEventListener("click", (evt) => {
    evt.target.closest(".element__card").remove();
  });
};

const handleLikeClick = (buttonLike) => {
  buttonLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_type_active");
  });
};

const handleImageClick = (cardImageElement) => {
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
  cardElementImage.alt = cardData.name;
  cardElementImage.src = cardData.link;
  handleImageClick(cardElementImage);
  handleLikeClick(cardElementLike);
  handleDeleteClick(cardElementDel);

  return cardElement;}

initialCards.forEach((cardElement) => {
  cardsContainer.append(createCard(cardElement));
});

function handleSubmitFormAddNewCard(evt){
  evt.preventDefault();
  newCard({
    name: addNameCard.value,
    link: addLinkCard.value,
  });

  evt.target.reset();
  closePopupCard(popupCard);
}
popupCard.addEventListener("submit", handleSubmitFormAddNewCard);
const newCard = (cardElement) => {
  cardsContainer.prepend(createCard(cardElement));
};

function openPopup (popup) {
  popup.classList.add("popup_opened");
}
function closePopup (popup) {
  popup.classList.remove("popup_opened");
}

function closeProfilePopup() {
  closePopup(popupProfile);
}

function openPopupProfile() {
  openPopup(popupProfile)
  profileEditName.value = profileName.textContent;
  profileEditInfo.value = profileDescription.textContent;
}

function handleSubmitFormProfile(event) {
  event.preventDefault();
  profileName.textContent = profileEditName.value;
  profileDescription.textContent = profileEditInfo.value;
  closePopup(popupProfile);
}

function closePopupCard() {
  closePopup(popupCard);
}

 function openPopupCard() {
  openPopup(popupCard);
}

function retrieveFormCardValue(event) {
  event.preventDefault();
  addNameCard.textContent = editNameCard.value;
  addLinkCard.textContent = editLink.value;
  closePopup(popupCard);
}
function openPopupImage(event) {
  openPopup(popupImage);
}
function closePopupImageCard(event) {
  closePopup(popupImage);
}

openPopupButtons.addEventListener("click", openPopupProfile);
closePopupButtons.addEventListener("click", closeProfilePopup);
editForm.addEventListener("submit", handleSubmitFormProfile);
openAddCard.addEventListener("click", openPopupCard);
popupCloseCardButton.addEventListener("click", closePopupCard);
popupImage.addEventListener("click", closePopupImageCard)

