let aboutButton= document.querySelector(".profile__button_type_edit")
let popup = document.querySelector(".popup")
let closeBotton= popup.querySelector(".popup__close")
let savebutton = document.querySelector('.popup__save');
let nameForm = document.querySelector('.popup__form_type_name');
let vocationForm = document.querySelector('.popup__form_type_vocation');
let profileName = document.querySelector('.profile__name');
let profileVocation = document.querySelector('.profile__vocation');
let formElement= document.querySelector('.popup__eddit-form');

function handleAboutButtonClick (){
  popup.classList.add('popup_opened');
  nameForm.value = profileName.textContent;
  vocationForm.value = profileVocation.textContent;
}

function handleCloseButtonClick (){
  popup.classList.remove('popup_opened');
}

aboutButton.addEventListener('click', handleAboutButtonClick);
closeBotton.addEventListener('click', handleCloseButtonClick)

function addInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileVocation.textContent = vocationForm.value ;
}

savebutton.addEventListener('click', addInfo);
savebutton.addEventListener('click', handleCloseButtonClick);
formElement.addEventListener('submit', addInfo);

