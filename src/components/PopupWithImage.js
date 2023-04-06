import Popup from "./Popup.js";   // Импортируем класс Popup


// Создаём класс PopupWithImage с наследованием класса Popup
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = document
    .querySelector(popupSelector).querySelector(".place-card__image");
    this._text = document
    .querySelector(popupSelector).querySelector(".place-card__title");
  }

  // Метод перезаписывает родительский метод open  в попап картинку с src изображения и подписью к картинке из объекта data.
  open(data) {
    super.open();
    this._image.src = data.link;
    this._image.alt = data.link;
    this._textt.textContent = data.name;
  }
}
