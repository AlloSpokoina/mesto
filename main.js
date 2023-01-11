let popupOpen = document.querySelector(".popup");
let openPopupButtons = document.querySelector(".profile__edit-button");
let closePopupButtons = document.querySelector('.popup__close');


openPopupButtons.addEventListener("click", openPopup);
closePopupButtons.addEventListener("click", closePopup);

function closePopup() {
  popupOpen.classList.remove("active");
}

function openPopup() {
  popupOpen.classList.add("active");
}

let editForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let profileEditName = document.querySelector(".popup__name");
let profileEditInfo = document.querySelector(".popup__info");

function handleProfileEditButton () {
  openPopup(popupOpen);
  profileEditName.value = profileName.textContent;
  profileEditInfo.value = profileDescription.textContent;
};

function retrieveFormValue(event) {
  event.preventDefault();
  profileName.textContent = profileEditName.value;
  profileDescription.textContent = profileEditInfo.value;
  closePopup(closePopupButtons);
}
openPopupButtons.addEventListener('click', handleProfileEditButton);
editForm.addEventListener("submit", retrieveFormValue);
