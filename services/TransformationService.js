export default class TransformationService {
    static isTransformationGone(items, currentCount){
        if(!item) return false;
        const missingItemsId = Object.keys(items).filter(
          itemId => !items[itemId].got && !items[itemId].gone
        );
        return currentCount + missingItemsId.length < 3;
    }
}