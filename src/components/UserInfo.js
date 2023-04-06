export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileAbout = document.querySelector(aboutSelector);
  }

  // Публичный метод, который возвращает объект с данными пользователя
  getUserInfo() {
    return {
      userName: this._profileName.textContent,
      userAbout: this._profileAbout.textContent,

    };

  }

  // Публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ userName, userAbout }) {
    this._profileName.textContent = userName;
    this._profileAbout.textContent = userAbout;
  }
}
