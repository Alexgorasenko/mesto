export default class Section {
  constructor({ items, renderer }, container) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = container;
  }


  // Публичный метод, который отвечает за отрисовку всех элементов.
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  // Публичный метод, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(element) {
    this._container.append(element);
  }

}
