export default class PillService {
  static imgSrc(id) {
    return `images/pills/pill_${id.padStart(2, "0")}.png`;
  }
}
