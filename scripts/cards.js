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

const elementCards = document.querySelector(".element");
const elementsTemplate = document.querySelector("#elementTemplate").content;
const elementButtonDelete = elementsTemplate.querySelector(".element__delete");



const elementInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
})

function render() {
  elementInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const cardsElement = elementsTemplate
  .querySelector(".element__card")
  .cloneNode(true);
  cardsElement.querySelector(".element__title").textContent = name;
  cardsElement.querySelector(".element__image").src = link;
  cardsElement.querySelector(".element__like").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like_type_active");
  })
  elementCards.prepend(cardsElement);
}

render();

document.querySelector(".element").onclick = function(e) {
  const btn = e.target.closest(".element__delete");
  if (!btn) {
    return;
  }
  btn.parentElement.remove();
}

