class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._title = data.name;
    this._imageUrl = data.link;
    this._templateSelector = templateSelector;
    this._template = this._getTemplate();
    this._element = this._template.querySelector(".place-card");
    this._cardImage = this._element.querySelector(".place-card__image");
    this._cardText = this._element.querySelector(".place-card__title");
    this._delete = this._element.querySelector(".place-card__delete");
    this._like = this._element.querySelector(".place-card__like");
    this._setEventListeners();
    this._handleCardClick = handleCardClick;
  }



  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._delete.addEventListener("click", () => {
      this._clickCardDelete();
    });
    this._like.addEventListener("click", () => {
      this._clickCardLike();
    });
    this._cardImage.addEventListener("click", () => {
      this._clickCardOpenPopupImg();
    });
  }

  _clickCardOpenPopupImg() {
    this._handleCardClick(this._title, this._imageUrl);
  }

  _clickCardDelete() {
    this._element.remove();
    this._element = null;
  }

  _clickCardLike() {
    this._like.classList.toggle("place-card__like_active");
  }

  renderCard() {
    this._cardImage.src = this._imageUrl;
    this._cardImage.alt = this._title;
    this._cardText.textContent = this._title;
    return this._element;
  }
}

export default Card;
