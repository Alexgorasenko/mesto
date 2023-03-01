const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
}



const enableValidation = (config) =>{
  const form = document.querySelector(config.formSelector)

  form.addEventListener('submit', (event)=>{
    event.preventDefault();
  })

}

enableValidation (formValidationConfig)





