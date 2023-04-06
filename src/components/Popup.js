export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseBotton = this._popup.querySelector(".popup__close");
  }

  // Публичный метод, отвечающий за открытие попапа
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  // Публичный метод, отвечающий за закрытие попапа
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Приватный метод, который содержит логику закрытия попапа клавишей Esc
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  // Публичный метод, который ...
  setEventListeners() {
    // добавляет слушатель клика иконке закрытия попапа.
    this._popupCloseBotton.addEventListener("click", () => {
      this.close();
    });

    // добавляет слушатель клика по оверлею.
    this._popup.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }
}
