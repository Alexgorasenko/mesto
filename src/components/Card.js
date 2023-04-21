class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleCardDeleteClick,
    userId,
    putLikeHandler,
    deleteLikeHandler) {
    this._title = data.name;
    this._imageUrl = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._owner = data.owner;
    this._templateSelector = templateSelector;
    this._template = this._getTemplate();
    this.element = this._template.querySelector(".place-card");
    this._cardImage = this.element.querySelector(".place-card__image");
    this._cardText = this.element.querySelector(".place-card__title");
    this._delete = this.element.querySelector(".place-card__delete");
    this._like = this.element.querySelector(".place-card__like");
    this._likeCount = this.element.querySelector(".place-card__like-count");
    this._setEventListeners();
    this._handleCardClick = handleCardClick;
    this._handleCardDeleteClick = handleCardDeleteClick;
    this._userId = userId;
    this._putLike = putLikeHandler;
    this._deleteLike = deleteLikeHandler;
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
      this.toggleLike(this);
    });
    this._cardImage.addEventListener("click", () => {
      this._clickCardOpenPopupImg();
    });
  }

  toggleLike() {
    if (this._like.classList.contains("place-card__like_active")) {
      this._deleteLike(this);
    } else {
      this._putLike(this);
    }
  }

  getId() {
    return this._cardId;
  }

  _clickCardOpenPopupImg() {
    this._handleCardClick(this._title, this._imageUrl);
  }

  _clickCardDelete() {
    this._handleCardDeleteClick(this._cardId, this.element);
  }

  clickCardLike(data) {
    this._like.classList.toggle("place-card__like_active");
    this._likeCount.textContent = data.likes.length;
  }

  renderCard() {
    this._cardImage.src = this._imageUrl;
    this._cardImage.alt = this._title;
    this._cardText.textContent = this._title;
    this._likeCount.textContent = this._likes.length;
    if (this._userId !== this._owner._id) {
      this._delete.style.display = "none";
    }
    this._likes.forEach((element) => {
      if (this._userId === element._id) {
        this._like.classList.add("place-card__like_active");
      }
    });

    return this.element;
  }
}

export default Card;
