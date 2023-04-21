import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._deleteButton = this._popup.querySelector(
      ".popup-delete__delete-button"
    );
    this._deleteButtonText = this._deleteButton.textContent;
  }

  open(cardId, card) {
    super.open();
    this.cardId = cardId;
    this.card = card;
    this._deleteButton.addEventListener("click", this._submitCallback);
  }

  renderLoading(isLoading, text) {
    if (isLoading) {
      this._deleteButton.textContent = text;
    } else {
      this._deleteButton.textContent = this._deleteButtonText;
    }
  }

  close() {
    super.close();
    this._deleteButton.removeEventListener("click", this._submitCallback);
  }

  setEventListeners() {
    // добавляет слушатель клика иконке закрытия попапа.
    this._popupCloseBotton.addEventListener("click", () => {
      this.close();
    });
  }
}
