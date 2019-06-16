const C = require("../constants/transformationConstants");

const compressTransformations = input => {
  const output = [];
  if (!input) return output;

  C.order.forEach(name => {
    const transformation = input[name];
    if (C.itemBasedTransformations.indexOf(name) !== -1) {
      if (!transformation) {
        output.push([0, [], []]);
      } else {
        output.push([
          transformation.count,
          transformation.got,
          transformation.gone
        ]);
      }
    } else if (name === "adulthood") {
      if (!transformation) {
        output.push([0, 0]);
      } else {
        output.push([transformation.count, transformation.pillId]);
      }
    } else {
      output.push([transformation ? transformation.count : 0]);
    }
  });

  return output;
};

const compress = input => {
  const output = {};
  output.tr = compressTransformations(input.transformations);
  return output;
};

module.exports = {
  compress
};
