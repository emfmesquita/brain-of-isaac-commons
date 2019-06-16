import Transformation from "../components/Transformation";
import C from "../constants/transformationConstants";

const itemBasedTransformationMapStateToProps = name => state => ({
  count:
    (state.transformations &&
      state.transformations[name] &&
      state.transformations[name].count) ||
    0,
  items:
    (state.transformations &&
      state.transformations[name] &&
      state.transformations[name].items) ||
    {}
});

const adultHoodMapStateToProps = state => ({
  count:
    (state.transformations &&
      state.transformations.adulthood &&
      state.transformations.adulthood.count) ||
    0,
  pillId:
    (state.transformations &&
      state.transformations.adulthood &&
      state.transformations.adulthood.pillId) ||
    "0"
});

const stompyMapStateToProps = state => ({
  count:
    (state.transformations &&
      state.transformations.stompy &&
      state.transformations.stompy.count) ||
    0
});

let connectedTransformationsCache;

export default connect => {
  if (connectedTransformationsCache) return connectedTransformationsCache;

  connectedTransformationsCache = {};
  C.itemBasedTransformations.forEach(name => {
    connectedTransformationsCache[name] = connect(itemBasedTransformationMapStateToProps(name))(Transformation[name]);
  });
  connectedTransformationsCache.adulthood = connect(adultHoodMapStateToProps)(Transformation.adulthood);
  connectedTransformationsCache.stompy = connect(stompyMapStateToProps)(Transformation.stompy);
  
  return connectedTransformationsCache;
};
