export default class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  }

  // Публичный метод, который отвечает за отрисовку всех элементов.
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  // Публичный метод, который вставляет карточки в DOM.
  prependItem(element) {
    this._container.prepend(element);
  }

  // Публичный метод, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(element) {
    this._container.prepend(element);
  }
}
