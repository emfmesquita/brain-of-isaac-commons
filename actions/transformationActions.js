import C from "../constants/transformationConstants";

const selectTransformation = transformation => {
  return { type: C.TRANS_SELECT, selected: transformation };
};

const updateTransGuppy = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_GUPPY, count, gotItems, goneItems };
};

const updateTransBeelzebub = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_BEELZEBUB, count, gotItems, goneItems };
};

const updateTransFunGuy = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_FUN_GUY, count, gotItems, goneItems };
};

const updateTransSeraphim = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_SERAPHIM, count, gotItems, goneItems };
};

const updateTransBob = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_BOB, count, gotItems, goneItems };
};

const updateTransSpun = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_SPUN, count, gotItems, goneItems };
};

const updateTransMom = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_MOM, count, gotItems, goneItems };
};

const updateTransConjoined = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_CONJOINED, count, gotItems, goneItems };
};

const updateTransLeviathan = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_LEVIATHAN, count, gotItems, goneItems };
};

const updateTransOhCrap = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_OH_CRAP, count, gotItems, goneItems };
};

const updateTransSuperBum = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_SUPER_BUM, count, gotItems, goneItems };
};

const updateTransBookWorm = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_BOOKWORM, count, gotItems, goneItems };
};

const updateTransAdulthood = (count, pillId) => {
  return { type: C.TRANS_UPDATE_ADULTHOOD, count, pillId };
};

const updateTransSpiderBaby = (count, gotItems, goneItems) => {
  return { type: C.TRANS_UPDATE_SPIDER_BABY, count, gotItems, goneItems };
};

const updateTransStompy = count => {
  return { type: C.TRANS_UPDATE_STOMPY, count };
};

export default {
  selectTransformation,
  updateTransformation: {
    guppy: updateTransGuppy,
    beelzebub: updateTransBeelzebub,
    funguy: updateTransFunGuy,
    seraphim: updateTransSeraphim,
    bob: updateTransBob,
    spun: updateTransSpun,
    mom: updateTransMom,
    conjoined: updateTransConjoined,
    leviathan: updateTransLeviathan,
    ohcrap: updateTransOhCrap,
    superbum: updateTransSuperBum,
    bookworm: updateTransBookWorm,
    adulthood: updateTransAdulthood,
    spiderbaby: updateTransSpiderBaby,
    stompy: updateTransStompy
  }
};
