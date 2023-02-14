const aboutButton= document.querySelector(".profile__button_type_edit")
const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');
const popupEditing = document.querySelector(".popup-editing")
const closeEditingBotton= popupEditing.querySelector(".popup-editing__close")
const saveEditingButton = document.querySelector('.popup-editing__save');
const nameForm = document.querySelector('.popup__form_type_name');
const vocationForm = document.querySelector('.popup__form_type_vocation');
const formEditingElement= document.querySelector('.popup-editing__eddit-form');

const toggleOpenEditingPopup = () =>{
  popupEditing.classList.toggle('popup_opened');
  nameForm.value = profileName.textContent;
  vocationForm.value = profileVocation.textContent;
}

aboutButton.addEventListener('click', toggleOpenEditingPopup);
closeEditingBotton.addEventListener('click', toggleOpenEditingPopup)

function addInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileVocation.textContent = vocationForm.value ;
}

saveEditingButton.addEventListener('click', addInfo);
saveEditingButton.addEventListener('click', toggleOpenEditingPopup);
formEditingElement.addEventListener('submit', addInfo);

const initialCards = [
  {
    name: 'Луна',
    link: '../images/place-Moon.png'
  },
  {
    name: 'Балтийское море',
    link: '../images/place-baltic-sea.png'
  },
  {
    name: 'Пустыня Сахара',
    link: '../images/place-desert.png'
  },
  {
    name: 'Япония',
    link: '../images/place-Japan.png'
  },
  {
    name: 'Гималаи',
    link: '../images/place-mountains.png'
  },
  {
    name: 'Карибское море',
    link: '../images/place-sea-karib.png'
  },
]

const places = document.querySelector('.places')
const templatePlaceCard = document.querySelector('#item')
const templatePlacePopup = document.querySelector('#places-popap')
const popupAdd = document.querySelector(".popup-add")
const closeAddBotton= popupAdd.querySelector(".popup-add__close")
const saveAddButton = popupAdd.querySelector('.popup-add__save');
const titleForm = popupAdd.querySelector('.popup__form_type_title');
const linkForm = popupAdd.querySelector('.popup__form_type_link');
const formAddElement= popupAdd.querySelector('.popup-add__eddit-form');
const addPlaceButton= document.querySelector('.profile__add')


const toggleOpenAddPopup = () =>{
  popupAdd.classList.toggle('popup_opened');
}

addPlaceButton.addEventListener('click', toggleOpenAddPopup);
closeAddBotton.addEventListener('click', toggleOpenAddPopup);




const getPopupImg = (link, name) => {
  const toggleOpenImagePopup = (evt) =>{
    evt.target.classList.toggle('popup_opened');
  }
  const newPopupImg= templatePlacePopup.content.cloneNode(true);
  const newPopupImgTitle= newPopupImg.querySelector('.popup-img__header')
  newPopupImgTitle.textContent= `${name}`;
  const newPopupImgImage= newPopupImg.querySelector('.popup-img__image')
  newPopupImgImage.src = `${link}`;
  const closePupupImgBotton= newPopupImg.querySelector('.popup-img__close')
  closePupupImgBotton.addEventListener('click',toggleOpenImagePopup)

  return newPopupImg
}


const getItemElement = (link, name) => {
  const newItemElement= templatePlaceCard.content.cloneNode(true);
  const newItemTitle= newItemElement.querySelector('.place-card__title')
  newItemTitle.textContent= `${name}`;
  const newItemImage= newItemElement.querySelector('.place-card__image')
  newItemImage.src = `${link}`;
  const likeActive = newItemElement.querySelector('.place-card__like').addEventListener('click', function (event){
  event.target.classList.toggle('place-card__like_active');});
  const deletButton = newItemElement.querySelector('.place-card__delete');
  deletButton.addEventListener('click', (evt)=>{ evt.target.closest('.place-card').remove();});
  newItemImage.addEventListener('click',getPopupImg)
  return newItemElement
}


const renderItem = (link, name) => {
  places.prepend(getItemElement(link, name))
}

initialCards.forEach((item) => {
  renderItem(item.link, item.name)
})

const clearInput = (name, link) =>{
  name.value = '';
  link.value ='';
}

formAddElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderItem(linkForm.value, titleForm.value);
  clearInput (linkForm, titleForm);
})

saveAddButton.addEventListener('click', toggleOpenAddPopup);











/*const popupImg = document.querySelector(".popup-img")
const closePupupImgBotton= popupImg.querySelector(".popup-img__close")
const openPupupImageButton= document.querySelector('.header__logo')


const toggleOpenImagePopup =
  console.log('123')
}

console.log(toggleOpenImagePopup)
closePupupImgBotton.addEventListener('click',toggleOpenImagePopup)*/
