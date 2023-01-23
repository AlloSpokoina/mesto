let popupOpen = document.querySelector(".popup");
let openPopupButtons = document.querySelector(".profile__edit-button");
let closePopupButtons = document.querySelector('.popup__close');
let editForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let profileEditName = document.querySelector(".popup__input_name");
let profileEditInfo = document.querySelector(".popup__input_info");

function closePopup(/*popup*/) {
  popupOpen.classList.remove("popup_opened");
}

function openPopup(/*popup*/) {
  popupOpen.classList.add("popup_opened");
  profileEditName.value = profileName.textContent;
  profileEditInfo.value = profileDescription.textContent;
}

function retrieveFormValue(event) {
  event.preventDefault();
  profileName.textContent = profileEditName.value;
  profileDescription.textContent = profileEditInfo.value;
  closePopup(/*closePopupButtons*/);
}

openPopupButtons.addEventListener("click", openPopup);
closePopupButtons.addEventListener("click", closePopup);
editForm.addEventListener("submit", retrieveFormValue);



