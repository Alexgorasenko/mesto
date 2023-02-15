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
    link: 'https://m3.netinfo.bg/media/images/46548/46548158/1024-768-luna.jpg'
  },
  {
    name: 'Балтийское море',
    link: 'https://gamerwall.pro/uploads/posts/2022-06/thumbs/1655671870_7-gamerwall-pro-p-volni-na-reke-priroda-krasivo-foto-10.jpg'
  },
  {
    name: 'Пустыня Сахара',
    link: 'https://www.biletik.aero/upload/medialibrary/be5/be5ec1c4b6131ec3784cd00f50b148d3.jpg'
  },
  {
    name: 'Япония',
    link: 'https://i.pinimg.com/736x/76/8b/93/768b93d33b176d6d17b51c9b427ece07.jpg'
  },
  {
    name: 'Гималаи',
    link: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1650925320_25-vsegda-pomnim-com-p-gori-gimalai-foto-25.jpg'
  },
  {
    name: 'Карибское море',
    link: 'https://priroda.club/uploads/posts/2021-12/thumbs/1639796585_73-priroda-club-p-karibskie-ostrova-priroda-krasivo-foto-78.jpg'
  },
]

const places = document.querySelector('.places')
const templatePlaceCard = document.querySelector('#item')
const popupAdd = document.querySelector(".popup-add")
const closeAddBotton= popupAdd.querySelector(".popup-add__close")
const saveAddButton = popupAdd.querySelector('.popup-add__save');
const titleForm = popupAdd.querySelector('.popup__form_type_title');
const linkForm = popupAdd.querySelector('.popup__form_type_link');
const formAddElement= popupAdd.querySelector('.popup-add__eddit-form');
const addPlaceButton= document.querySelector('.profile__add')
const popupImg = document.querySelector(".popup-img")
const closePupupImgBotton= popupImg.querySelector(".popup-img__close")
const popupImgTitle= popupImg.querySelector('.popup-img__header')
const popupImgImage= popupImg.querySelector('.popup-img__image')

const toggleOpenAddPopup = () =>{
  popupAdd.classList.toggle('popup_opened');
}

addPlaceButton.addEventListener('click', toggleOpenAddPopup);
closeAddBotton.addEventListener('click', toggleOpenAddPopup);


const toggleOpenImagePopup =() => {
  popupImg.classList.toggle('popup_opened');
};

console.log(toggleOpenImagePopup)
closePupupImgBotton.addEventListener('click',toggleOpenImagePopup)

const getItemElement = (link, name) => {
  const newItemElement= templatePlaceCard.content.cloneNode(true);
  const newItemTitle= newItemElement.querySelector('.place-card__title')
  newItemTitle.textContent= `${name}`;
  const newItemImage= newItemElement.querySelector('.place-card__image')
  newItemImage.src = `${link}`;
  newItemImage.alt = `${name}`;
  const likeActive = newItemElement.querySelector('.place-card__like')
  likeActive.addEventListener('click', function (event){
  event.target.classList.toggle('place-card__like_active');});
  const deletButton = newItemElement.querySelector('.place-card__delete');
  deletButton.addEventListener('click', (evt)=>{ evt.target.closest('.place-card').remove();});
  newItemImage.addEventListener('click',()=>{
    toggleOpenImagePopup();
    popupImgTitle.textContent=newItemTitle.textContent;
    popupImgImage.src=newItemImage.src;
    popupImgImage.alt=newItemImage.alt;
  })
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
