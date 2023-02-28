const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__error',
    errorClass: 'popup__error'
  };

function disableSubmit(event) {
  event.preventDefault();
}
  function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
      form.addEventListener('submit', disableSubmit);
      form.addEventListener('input', () => {
        toggleButton(form, config);
      });

      addInputListener(form, config);
      toggleButton(form, config);
    });
  }


  function handleFormInput(event, config) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);


    if (input.validity.valid) {
      input.classList.remove(config.errorClass)
      errorElement.textContent = '';
    }
    else {
      input.classList.add(config.errorClass);
      errorElement.textContent = input.validationMessage;
    }
  }
 function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();

  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle('popup__submit_disabled', !isFormValid);

 }

  function addInputListener(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach(function (item) {
      item.addEventListener('input', (event) => {
        handleFormInput(event, config);
      });

    });
  }
  enableValidation(formValidationConfig);
