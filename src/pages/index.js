import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDelete from "../components/PopupDelete.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import { api } from "../components/Api.js";

import {
  aboutButton,
  popupEditProfileFormName,
  popupEditProfileFormVocation,
  popupFormEditElement,
  placesContainer,
  editAvatarButton,
  popupAddFormLinkElement,
  popupFormEditAvatar,
  addPlaceButton,
  formValidationConfig,
} from "../utils/constants.js";

const userInfo = new UserInfo({
  name: ".profile__name",
  about: ".profile__vocation",
  avatar: ".profile__avatar",
});

Promise.all([api.getUserInfo(), api.getPlaceCards()])
.then(([userData, placeCards]) => {
    userInfo.setUserInfo(userData);
    places.renderItems(placeCards);
  })
  .catch(console.log);


const places = new Section((data) => {
  places.addItem(createCard(data));
}, placesContainer);

const putLike = (card) => {
  api.putLike(card.getId())
  .then((res) => {
    card.clickCardLike(res);
  })
  .catch(console.log);
};

const deleteLike = (card) => {
  api.deleteLike(card.getId()).then((res) => {
    card.clickCardLike(res);
  })
  .catch(console.log);
};

const createCard = (data) => {
  const card = new Card(
    data,
    "#item",
    () => {
      imgPopup.open(data);
    },
    () => {
      popupDelete.open(data, card.element);
    },
    userInfo.userId,
    putLike,
    deleteLike
  );

  return card.renderCard();
};

const handlePlaceSubmitDelete = () => {
  popupDelete.renderLoading(true, "Удаление...");
  api.deleteCard(popupDelete.cardId)
    .then(() => {
      popupDelete.close();
      popupDelete.card.remove();
    })
    .finally(() => {
      popupDelete.renderLoading(false);
    })
    .catch(console.log);
};

const handleAvatarEditSubmit = (input) => {
  editAvatar.renderLoading(true, "Coхранение...");
  api.patchAvatar(input.avatar)
    .then((data) => {
      userInfo.setUserInfo(data);
      editAvatar.close()
    })
    .finally(() => {
      editAvatar.renderLoading(false);
    })
    .catch(console.log);
};

const handleFormSubmitEdit = (input) => {
  editPopup.renderLoading(true, "Coхранение...");
  api
    .patchUserInfo(input)
    .then((data) => {
      userInfo.setUserInfo(data);
      editPopup.close()
    })
    .finally(() => {
      editPopup.renderLoading(false);
    })
    .catch(console.log);
};

const addPlaceCard = (input) => {
  addPopup.renderLoading(true, "Создание...");
  api
    .postNewCard(input)
    .then((data) => {
      places.addItem(createCard(data));
      addPopup.close()
    })
    .finally(() => {
      addPopup.renderLoading(false);
    })
    .catch(console.log);
};

const openEditPopup = () => {
  const currentUserInfo = userInfo.getUserInfo();
  popupEditProfileFormName.value = currentUserInfo.name;
  popupEditProfileFormVocation.value = currentUserInfo.about;
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

const formValidationAvatarEdit = new FormValidator(
  formValidationConfig,
  popupFormEditAvatar
);

const addPopup = new PopupWithForm(".popup-add", addPlaceCard);
const editPopup = new PopupWithForm(".popup-editing", handleFormSubmitEdit);
const editAvatar = new PopupWithForm(".popup-avatar-edit",handleAvatarEditSubmit);
const popupDelete = new PopupDelete(".popup-delete", handlePlaceSubmitDelete);
const imgPopup = new PopupWithImage(".popup-img");

editPopup.setEventListeners();
editAvatar.setEventListeners();
formValidationProfileEdit.enableValidation();
formValidationAddPlace.enableValidation();
formValidationAvatarEdit.enableValidation();
addPopup.setEventListeners();
imgPopup.setEventListeners();
popupDelete.setEventListeners();
editAvatarButton.addEventListener("click", () => {
  editAvatar.open();
  formValidationAvatarEdit.resetValidation();
});
aboutButton.addEventListener("click", openEditPopup);
addPlaceButton.addEventListener("click", () => {
  addPopup.open();
  formValidationAddPlace.resetValidation();
});
