import Card from "./Card.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

import {
  aboutButton,
  popupEditProfileFormName,
  popupEditProfileFormVocation,
  popupFormEditElement,
  placesContainer,
  popupAddFormTitle,
  popupAddFormLink,
  popupAddFormLinkElement,
  addPlaceButton,
  placeCardItem,
  formValidationConfig
} from "./constants.js"

const handleFormSubmitEdit = ()=> {
  userInfo.setUserInfo({
    userName: popupEditProfileFormName.value,
    userAbout: popupEditProfileFormVocation.value,
  });
}

const createCard = (data) => {
  const card = new Card(data, "#item", () => {
    imgPopup.open(item);
  });
  return card.renderCard();
};

const renderPlaces = (data) => {
  placesContainer.prepend(createCard(data));
};

const addPlaceCard = () => {
  const cardItem = {
    name: popupAddFormTitle.value,
    link: popupAddFormLink.value,
  };
  renderPlaces(cardItem);
}

const openEditPopup = () => {
  const currentUserInfo = userInfo.getUserInfo();
  popupEditProfileFormName.value = currentUserInfo.userName;
  popupEditProfileFormVocation.value = currentUserInfo.userAbout;
  formValidationProfileEdit.resetValidation();
  editPopup.open();
};

const formValidationProfileEdit = new FormValidator(
  formValidationConfig,
  popupFormEditElement
);
const formValidationAddPlace = new FormValidator(
  formValidationConfig,
  popupAddFormLinkElement
);

const addPopup = new PopupWithForm(".popup-add", addPlaceCard);
const editPopup = new PopupWithForm(".popup-editing", handleFormSubmitEdit);
const imgPopup = new PopupWithImage(".popup-img");
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__vocation",
});
const places = new Section(
  {
    items: placeCardItem,
    renderer: (data) => {
      places.addItem(createCard(data));
    },
  },
  placesContainer
);


places.renderItems();
formValidationProfileEdit.enableValidation();
formValidationAddPlace.enableValidation();
addPopup.setEventListeners();
editPopup.setEventListeners();
imgPopup.setEventListeners();

aboutButton.addEventListener("click", openEditPopup);
addPlaceButton.addEventListener("click", () => {
  addPopup.open();
});
