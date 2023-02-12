const aboutButton= document.querySelector(".profile__button_type_edit")
const popup = document.querySelector(".popup")
const closeBotton= popup.querySelector(".popup__close")
const savebutton = document.querySelector('.popup__save');
const nameForm = document.querySelector('.popup__form_type_name');
const vocationForm = document.querySelector('.popup__form_type_vocation');
const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');
const formElement= document.querySelector('.popup__eddit-form');
const templatePopapOpened = document.querySelector('#popup-add')





const toggleOpenPopup = () =>{
  popup.classList.toggle('popup_opened');
  nameForm.value = profileName.textContent;
  vocationForm.value = profileVocation.textContent;
}


aboutButton.addEventListener('click', toggleOpenPopup);
closeBotton.addEventListener('click', toggleOpenPopup)

function addInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameForm.value;
  profileVocation.textContent = vocationForm.value ;
}

savebutton.addEventListener('click', addInfo);
savebutton.addEventListener('click', toggleOpenPopup);
formElement.addEventListener('submit', addInfo);


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

/*const getPlacePopup = (name) => {
  const newPlacePopup= templatePlacePopup.content.cloneNode(true);
  const newnewPlacePopupTitle= newPlacePopup.querySelector('.place-card__title').textContent=Object.values(name)[0];
  const newnewPlacePopupImage= newPlacePopup.querySelector('.place-card__image').src = Object.values(name)[1];
  const openPlacePopup = document.querySelector('.place-card__image')
  const placePopup = newPlacePopup.querySelector('.place-popap')
  console.log(newnewPlacePopupTitle)
  openPlacePopup.addEventListener('click', function (event){
  event.target.popap.classList.toggle('place-card__like_active');});
  return newItemElement
}*/




const getItemElement = (name) => {
  const newItemElement= templatePlaceCard.content.cloneNode(true);
  const newItemTitle= newItemElement.querySelector('.place-card__title').textContent=Object.values(name)[0];
  const newItemImage= newItemElement.querySelector('.place-card__image').src = Object.values(name)[1];
  const likeActive = newItemElement.querySelector('.place-card__like').addEventListener('click', function (event){
  event.target.classList.toggle('place-card__like_active');});
  return newItemElement
}

const renderItem = (wrap, name) => {
  wrap.append(getItemElement(name))
}

initialCards.forEach((name) => {
  renderItem(places, name)
})






