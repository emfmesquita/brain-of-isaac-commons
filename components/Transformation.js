import React, { Component } from "react";

import C from "../constants/transformationConstants";
import ItemService from "../services/ItemService";
import PillService from "../services/PillService";
import TboiImage from "./TboiImage";

const renderItem = (id, className, key) => {
  return (
    <TboiImage
      key={key}
      className={`boi-trans-item ${className}`}
      height={32}
      src={ItemService.imgSrc(id)}
    />
  );
};

const renderItems = (ids, className) =>
  ids.map(id => renderItem(id, className, id));
const renderPill = (id, className) => (
  <TboiImage
    className={`boi-trans-pill ${className}`}
    height={32}
    src={PillService.imgSrc(id)}
  />
);

const transImgClass = (count, transGone) => {
  let imgClass = "boi-trans-img ";
  if(transGone){
    imgClass += "boi-trans-gone";
  } else if (count < 3) {
    imgClass += "boi-trans-missing";
  } else {
    imgClass += "boi-trans-got";
  }
  return imgClass;
}
const transImgSrc = name => `images/transformations/${name}.png`;
const transImg = (name, count, label, transGone) => (
  <TboiImage
    className={transImgClass(count, transGone)}
    title={`${label} ${count}/3`}
    height={128}
    src={transImgSrc(name)}
  />
);
const transLabel = (label, count, showCount) => (
  <span className="boi-trans-label">
    {label + (showCount ? ` ${count}/3` : "")}
  </span>
);

const BaseTransformation = props => {
  const label = C.labels[props.name];
  return (
    <div className={props.className}>
      {transLabel(label, props.count, props.showCount)}
      {transImg(props.name, props.count, label, props.transGone)}
      <div className="boi-trans-items">{props.children}</div>
    </div>
  );
};

// All Item based ------------------------------------------------------------
class ItemsTransformation extends Component {
  constructor(props, name) {
    super(props);
    this.name = name;
  }

  render() {
    const items = this.props.items;
    const gotItemsId = Object.keys(items).filter(itemId => items[itemId].got);
    const missingItemsId = Object.keys(items).filter(
      itemId => !items[itemId].got && !items[itemId].gone
    );
    const goneItemsId = Object.keys(items).filter(
      itemId => !items[itemId].got && items[itemId].gone
    );

    const count = this.props.count;
    const transGone = count + missingItemsId.length < 3;

    return (
      <BaseTransformation
        count={count}
        showCount={this.props.showCount}
        name={this.name}
        transGone={transGone}
        className={`boi-trans-${this.name}`}
      >
        {renderItems(gotItemsId, "boi-trans-got-items")}
        {renderItems(missingItemsId, "boi-trans-missing-items")}
        {renderItems(goneItemsId, "boi-trans-gone-items")}
      </BaseTransformation>
    );
  }
}

const buildTransformation = (name) => {
  return props => new ItemsTransformation(props, name);
};

// Adulthood ------------------------------------------------------------
const adulthood = ({ count, showCount, pillId }) => {
  return (
    <BaseTransformation
      count={count}
      showCount={showCount}
      name="adulthood"
      className="boi-trans-adulthood"
    >
      {renderPill(
        pillId,
        count > 0 ? "boi-trans-got-items" : "boi-trans-missing-items"
      )}
      {renderPill(
        pillId,
        count > 1 ? "boi-trans-got-items" : "boi-trans-missing-items"
      )}
      {renderPill(
        pillId,
        count > 2 ? "boi-trans-got-items" : "boi-trans-missing-items"
      )}
    </BaseTransformation>
  );
};

// Stompy ------------------------------------------------------------
const stompy = ({ count, showCount }) => {
  return (
    <BaseTransformation
      count={count}
      showCount={showCount}
      name="stompy"
      className="boi-trans-stompy"
    >
      {renderItem(
        "302",
        count > 0 ? "boi-trans-got-items" : "boi-trans-missing-items"
      )}
      {renderItem(
        "302",
        count > 1 ? "boi-trans-got-items" : "boi-trans-missing-items"
      )}
      {renderItem(
        "302",
        count > 2 ? "boi-trans-got-items" : "boi-trans-missing-items"
      )}
    </BaseTransformation>
  );
};

export default {
  guppy: buildTransformation("guppy"),
  beelzebub: buildTransformation("beelzebub"),
  funguy: buildTransformation("funguy"),
  seraphim: buildTransformation("seraphim"),
  bob: buildTransformation("bob"),
  spun: buildTransformation("spun"),
  mom: buildTransformation("mom"),
  conjoined: buildTransformation("conjoined"),
  leviathan: buildTransformation("leviathan"),
  ohcrap: buildTransformation("ohcrap"),
  superbum: buildTransformation("superbum"),
  bookworm: buildTransformation("bookworm"),
  adulthood,
  spiderbaby: buildTransformation("spiderbaby"),
  stompy
};
