export const aboutButton = document.querySelector(".profile__button_type_edit");
export const popupEditProfile = document.querySelector(".popup-editing");
export const popupEditProfileFormName = popupEditProfile.querySelector(".popup__input_type_name");
export const popupEditProfileFormVocation = popupEditProfile.querySelector(".popup__input_type_vocation");
export const popupFormEditElement = document.forms["form-edit-profile"];
export const placesContainer = document.querySelector(".places");
export const popupAdd = document.querySelector(".popup-add");
export const popupAddFormTitle = popupAdd.querySelector(".popup__input_type_title");
export const popupAddFormLink = popupAdd.querySelector(".popup__input_type_link");
export const popupAddFormLinkElement = document.forms["form-add-place"];
export const addPlaceButton = document.querySelector(".profile__add");

export const placeCardItem = [
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

export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  submitButtonSelector: ".popup__save",
};
