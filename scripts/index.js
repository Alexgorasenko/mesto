const aboutButton = document.querySelector(".profile__button_type_edit");
const profileName = document.querySelector(".profile__name");
const profileVocation = document.querySelector(".profile__vocation");
const popupEditProfile = document.querySelector(".popup-editing");
const closePopupEditProfileBotton = popupEditProfile.querySelector(".popup-editing__close");
const popupEditProfileFormName = popupEditProfile.querySelector(".popup__input_type_name");
const popupEditProfileFormVocation = popupEditProfile.querySelector(".popup__input_type_vocation");
const popupFormEditElement = document.forms["form-edit-profile"];
const places = document.querySelector(".places");
const templatePlaceCard = document.querySelector("#item");
const popupAdd = document.querySelector(".popup-add");
const closePopupAddBotton = popupAdd.querySelector(".popup-add__close");
const popupAddFormTitle = popupAdd.querySelector(".popup__input_type_title");
const popupAddFormLink = popupAdd.querySelector(".popup__input_type_link");
const popupAddFormLinkElement = document.forms["form-add-place"];
const addPlaceButton = document.querySelector(".profile__add");
const popupPlaceImg = document.querySelector(".popup-img");
const closePupupImgBotton = popupPlaceImg.querySelector(".popup-img__close");
const popupPlaceImgTitle = popupPlaceImg.querySelector(".popup-img__header");
const popupPlaceImgImage = popupPlaceImg.querySelector(".popup-img__image");

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const placeCardItem = [
  {
    name: "Луна",
    link: "https://m3.netinfo.bg/media/images/46548/46548158/1024-768-luna.jpg",
  },
  {
    name: "Балтийское море",
    link: "https://gamerwall.pro/uploads/posts/2022-06/thumbs/1655671870_7-gamerwall-pro-p-volni-na-reke-priroda-krasivo-foto-10.jpg",
  },
  {
    name: "Пустыня Сахара",
    link: "https://www.biletik.aero/upload/medialibrary/be5/be5ec1c4b6131ec3784cd00f50b148d3.jpg",
  },
  {
    name: "Япония",
    link: "https://i.pinimg.com/736x/76/8b/93/768b93d33b176d6d17b51c9b427ece07.jpg",
  },
  {
    name: "Гималаи",
    link: "https://vsegda-pomnim.com/uploads/posts/2022-04/1650925320_25-vsegda-pomnim-com-p-gori-gimalai-foto-25.jpg",
  },
  {
    name: "Карибское море",
    link: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649332183_63-vsegda-pomnim-com-p-karibskoe-more-plyazh-foto-75.jpg",
  },
];

const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  submitButtonSelector: ".popup__save",
};

const formValidationProfileEdit = new FormValidator(
  formValidationConfig,
  popupFormEditElement
);
const formValidationAddPlace = new FormValidator(
  formValidationConfig,
  popupAddFormLinkElement
);

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  popup.addEventListener("mousedown", clickOverlay);
  document.addEventListener("keydown", closeByEscape);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
  popup.removeEventListener("mousedown", clickOverlay);
};

function closeByEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

const openEditPopup = () => {
  openPopup(popupEditProfile);
  popupEditProfileFormName.value = profileName.textContent;
  popupEditProfileFormVocation.value = profileVocation.textContent;
  formValidationProfileEdit.resetValidation();
};

const addInfo = (event) => {
  event.preventDefault();
  profileName.textContent = popupEditProfileFormName.value;
  profileVocation.textContent = popupEditProfileFormVocation.value;
  closePopup(popupEditProfile);
};

const openPopupImage = (title, imageUrl) => {
  openPopup(popupPlaceImg);
  popupPlaceImgImage.setAttribute("src", imageUrl);
  popupPlaceImgImage.setAttribute("alt", title);
  popupPlaceImgTitle.textContent = title;
};

const render = (link, title) => {
  const cardData = {
    title: title,
    link: link,
  };
  const card = new Card(cardData, "#item", openPopupImage);
  places.prepend(card.renderCard());
};

placeCardItem.forEach((item) => {
  render(item.link, item.name);
});

formValidationProfileEdit.enableValidation();
formValidationAddPlace.enableValidation();

popupAddFormLinkElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  render(popupAddFormLink.value, popupAddFormTitle.value);
  popupAddFormLinkElement.reset();
  closePopup(popupAdd);
  formValidationAddPlace.resetValidation();
});

aboutButton.addEventListener("click", openEditPopup);
closePopupEditProfileBotton.addEventListener("click", () => {
  closePopup(popupEditProfile);
});
popupFormEditElement.addEventListener("submit", addInfo);
addPlaceButton.addEventListener("click", () => {
  openPopup(popupAdd);
});
closePopupAddBotton.addEventListener("click", () => {
  closePopup(popupAdd);
});
closePupupImgBotton.addEventListener("click", () => {
  closePopup(popupPlaceImg);
});

