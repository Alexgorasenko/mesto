const formValidationCinfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  buttunDisableClass: "form__input-error_active",
  submitButtonSelector: ".popup__save",
};

const showInputError = (formElement,inputElement, errorMessage,config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement,inputElement,config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement,config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement,inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement,inputElement, config);
  }
};

const hasInvalidInput =(inputList)=>{
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement) =>{
  if(hasInvalidInput (inputList)){
    buttonElement.disabled = true;

  }else{
    buttonElement.disabled = false;
  }
}

const setEventListeners = (formElement, config)=>{
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector))
  const buttonElement= formElement.querySelector(config.submitButtonSelector)
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState (inputList, buttonElement,config)
    }, 0);
  });
  inputList.forEach((inputElement)=>{
    inputElement.addEventListener('input',()=>{
      isValid(formElement,inputElement,config)
      toggleButtonState (inputList, buttonElement,config)
    })
    });
}



const enableValidation = (config)=>{
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement)=>{
    setEventListeners (formElement, config)
    formElement.addEventListener('submit',(event)=>{
      event.preventDefault();
    })
  })
}

enableValidation (formValidationCinfig)
