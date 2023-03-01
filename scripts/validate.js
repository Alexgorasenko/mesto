const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
}



const disableSubmit = (event) =>{
  event.preventDefault();
}


const addInputListners = (form, config) =>{
  const inputList = form.querySelector(config.inputSelector);
  inputList.forEach((item) => {
    console.log(item)
  });
}

const enableValidation = (config) =>{
  const form = document.querySelector(config.formSelector)
  addInputListners(form,config)
  form.addEventListener('submit', disableSubmit)
  console.log(form)
}


enableValidation (formValidationConfig)
