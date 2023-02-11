let popupOpen = document.querySelector("#popupProfile");
let openPopupButtons = document.querySelector(".profile__edit-button");
let closePopupButtons = document.querySelector('.popup__close');
let editForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let profileEditName = document.querySelector(".popup__input_type_name");
let profileEditInfo = document.querySelector(".popup__input_type_info");
let openAddCard = document.querySelector(".profile__add-button");
let popupCard = document.querySelector("#popupCard");
let addNameCard = document.querySelector(".popup__input_type_card");
let addLinkCard = document.querySelector(".popup__input_type_link");
let editNameCard = document.querySelector("#cardInputName");
let editLink = document.querySelector("#cardInputLink");
let editFormCard = document.querySelector("#editCard");
let popupCloseCardButton = document.querySelector("#popupCloseCard");

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

openAddCard.onload = function() {
  let popupCard = document.querySelector("#popupCard");
  let addElem = (text, src) => {
      let addNameCard = document.createElement("popup__input_type_card");
      let addLinkCard = document.createElement("popup__input_type_link");
      addLinkCard.src = src;
      div.append(img);
      addNameCard.textContent = text;
      div.append(h2);
      return div;
  }
  form.onsubmit = () => {
      let addNameCard = document.querySelector("#name");
              let addLinkCard = document.querySelector("#image");
              document.body.append(addElem(addNameCard.value, addLinkCard.value));
              return false;
  }
}
openPopupButtons.addEventListener("click", openPopup);
closePopupButtons.addEventListener("click", closePopup);
editForm.addEventListener("submit", retrieveFormValue);
openAddCard.addEventListener("click", openPopupCard);
popupCloseCardButton.addEventListener("click", closePopupCard);
editFormCard.addEventListener("submit",retrieveFormCardValue);


