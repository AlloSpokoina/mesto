const openPopUp = document.querySelector('profile__edit-button');
const closePopup = document.querySelector('.popup__close');
const profileName = document.querySelector('.popup__name');
const profileInfo = document.querySelector('.popup__input');
const profileSave = document.querySelector('.popup__submit');

function openPopup(popup) {
  popup.classList.add('popup_opened')
}
function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

openPopUp.addEventListener('click',() => {
  openPopUp(popup)
})
closePopup.closePopup('click', () => {
  closePopup(closePopup)
});
