const aboutButton= document.querySelector(".profile__button_type_edit")
const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');
const popupEditProfile = document.querySelector(".popup-editing")
const closePopupEditProfileBotton= popupEditProfile.querySelector(".popup-editing__close")
const savePopupEditProfileButton = popupEditProfile.querySelector('.popup-editing__save');
const popupEditProfileFormName = popupEditProfile.querySelector('.popup__form_type_name');
const popupEditProfileFormVocation= popupEditProfile.querySelector('.popup__form_type_vocation');
const popupFormEditElement= popupEditProfile.querySelector('.popup-editing__eddit-form');
const places = document.querySelector('.places')
const templatePlaceCard = document.querySelector('#item')
const popupAdd = document.querySelector(".popup-add")
const closePopupAddBotton= popupAdd.querySelector(".popup-add__close")
const savePopupAddButton = popupAdd.querySelector('.popup-add__save');
const popupAddFormTitle = popupAdd.querySelector('.popup__form_type_title');
const popupAddFormLink= popupAdd.querySelector('.popup__form_type_link');
const popupAddFormLinkElement= popupAdd.querySelector('.popup-add__eddit-form');
const addPlaceButton= document.querySelector('.profile__add')
const popupPlaceImg = document.querySelector(".popup-img")
const closePupupImgBotton= popupPlaceImg.querySelector(".popup-img__close")
const popupPlaceImgTitle= popupPlaceImg.querySelector('.popup-img__header')
const popupPlaceImgImage= popupPlaceImg.querySelector('.popup-img__image')

const placeCardItem = [
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


const toggleOpenPopup = (event,item)=>{
  if (event.target === event.currentTarget){
    item.classList.toggle('popup_opened');
  }
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    item.classList.remove('popup_opened');
}
}

const openEditPopup = () =>{
  toggleOpenPopup(event, popupEditProfile);
  popupEditProfileFormName.value = profileName.textContent;
  popupEditProfileFormVocation.value = profileVocation.textContent;
}

const addInfo =(event) => {
  event.preventDefault();
  profileName.textContent = popupEditProfileFormName.value;
  profileVocation.textContent = popupEditProfileFormVocation.value ;
}

const getNewPlaceCard = (link, name) => {
  const newPlaceCard= templatePlaceCard.content.cloneNode(true);
  const newPlaceCardTitle= newPlaceCard.querySelector('.place-card__title')
  newPlaceCardTitle.textContent= `${name}`;
  const newPlaceCardImage= newPlaceCard.querySelector('.place-card__image')
  newPlaceCardImage.src = `${link}`;
  newPlaceCardImage.alt = `${name}`;
  const placeCardLikeActive = newPlaceCard.querySelector('.place-card__like')
  placeCardLikeActive.addEventListener('click', (event)=>{
  event.target.classList.toggle('place-card__like_active');});
  const deletePlaceCardButton = newPlaceCard.querySelector('.place-card__delete');
  deletePlaceCardButton.addEventListener('click', (evt)=>{ evt.target.closest('.place-card').remove();});
  newPlaceCardImage.addEventListener('click',()=>{
    toggleOpenPopup(event, popupPlaceImg);
    popupPlaceImgTitle.textContent=newPlaceCardTitle.textContent;
    popupPlaceImgImage.src=newPlaceCardImage.src;
    popupPlaceImgImage.alt=newPlaceCardImage.alt;
  })
  return newPlaceCard
}

const renderItem = (link, name) => {
  places.prepend(getNewPlaceCard(link, name))
}

placeCardItem.forEach((item) => {
  renderItem(item.link, item.name)
})

popupAddFormLinkElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderItem(popupAddFormLink.value, popupAddFormTitle.value);
  popupAddFormLinkElement.reset();

})

aboutButton.addEventListener('click', openEditPopup);
closePopupEditProfileBotton.addEventListener('click', openEditPopup)
savePopupEditProfileButton.addEventListener('click', addInfo);
savePopupEditProfileButton.addEventListener('click', openEditPopup);
popupFormEditElement.addEventListener('submit', addInfo);
addPlaceButton.addEventListener('click', ()=>{toggleOpenPopup(event, popupAdd)});
closePopupAddBotton.addEventListener('click', ()=>{toggleOpenPopup(event, popupAdd)});
savePopupAddButton.addEventListener('click', ()=>{toggleOpenPopup(event, popupAdd)});
closePupupImgBotton.addEventListener('click',()=>{toggleOpenPopup(event, popupPlaceImg)})
popupPlaceImg.addEventListener('click',()=> {toggleOpenPopup(event, popupPlaceImg)})
popupEditProfile.addEventListener('click',openEditPopup)
popupAdd.addEventListener('click',()=> {toggleOpenPopup(event, popupAdd)})
document.addEventListener('keydown',()=>{toggleOpenPopup(event,popupAdd)} )
document.addEventListener('keydown',()=>{toggleOpenPopup(event,popupPlaceImg)} )
document.addEventListener('keydown',openEditPopup )
