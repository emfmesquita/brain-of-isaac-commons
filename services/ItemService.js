export default class ItemService {
  static imgSrc(id) {
    return `images/items/item_${id.padStart(4, "0")}.png`;
  }
}
