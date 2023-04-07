import Popup from "./Popup.js"; // Импортируем класс Popup

// Создаём класс PopupWithForm с наследованием класса Popup
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._formInputList = this._popupForm.querySelectorAll(".popup__input");
  }

  // Приватный метод, который собирает данные всех полей формы.
  _getInputValues() {
    this._formValues = {};
    this._formInputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  //Перезаписывает родительский метод setEventListeners и добавляет обработчик сабмита формы.
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }

  // Теперь метод close при закрытии попапа сбрасывает форму
  close() {
    super.close();
    this._popupForm.reset();
  }
}
