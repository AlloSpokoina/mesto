let popupOpen = document.querySelector(".popup");
let openPopupButtons = document.querySelector(".profile__edit-button");
let closePopupButtons = document.querySelector('.popup__close');
let form = document.querySelector(".popup__container");

openPopupButtons.addEventListener("click", openPopup);
closePopupButtons.addEventListener("click", closePopup);

function closePopup() {
  popupOpen.classList.remove("active");
}

function openPopup() {
  popupOpen.classList.add("active");
}
