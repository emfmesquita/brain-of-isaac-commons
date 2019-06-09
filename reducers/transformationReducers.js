import types from "../constants/transformationConstants";
import { combineReducers } from "redux";

const setInitialItemState = (trans, itemIds) => {
    itemIds.forEach(itemId => trans.items[itemId] = {got: false, gone: false});
}

const initialState = {
    selected: "guppy",
    guppy: { count: 0, items: {} },
    beelzebub: { count: 0, items: {} },
    funguy: { count: 0, items: {} },
    seraphim: { count: 0, items: {} },
    bob: { count: 0, items: {} },
    spun: { count: 0, items: {} },
    mom: { count: 0, items: {} },
    conjoined: { count: 0, items: {} },
    leviathan: { count: 0, items: {} },
    ohcrap: { count: 0, items: {} },
    superbum: { count: 0, items: {} },
    bookworm: { count: 0, items: {} },
    adulthood: { count: 0, pillId: "0" },
    spiderbaby: { count: 0, items: {} },
    stompy: { count: 0 }
}

setInitialItemState(initialState.guppy, ["81", "133", "134", "145", "187", "212"]);
setInitialItemState(initialState.beelzebub, ["9", "10", "57", "128", "148", "151", "248", "264", "272", "274", "279", "320", "364", "365", "426", "430", "434", "511"]);
setInitialItemState(initialState.funguy, ["11", "12", "71", "120", "121", "342", "398"]);
setInitialItemState(initialState.seraphim, ["33", "72", "101", "112", "173", "184", "185", "313", "363"]);
setInitialItemState(initialState.bob, ["42", "140", "149", "273"]);
setInitialItemState(initialState.spun, ["13", "14", "70", "143", "240", "345", "493", "496"]);
setInitialItemState(initialState.mom, ["29", "30", "31", "39", "41", "55", "102", "110", "114", "139", "195", "199", "200", "217", "228", "355", , "508"]);
setInitialItemState(initialState.conjoined, ["8", "67", "100", "167", "268", "269", "322"]);
setInitialItemState(initialState.leviathan, ["51", "79", "80", "83", "118", "159", "230", "399"]);
setInitialItemState(initialState.ohcrap, ["36", "236", "291"]);
setInitialItemState(initialState.superbum, ["144", "278", "388"]);
setInitialItemState(initialState.bookworm, ["33", "34", "35", "58", "65", "78", "97", "123", "192", "282", "287", "292", "545"]);
setInitialItemState(initialState.spiderbaby, ["89", "153", "171", "211", "288", "403"]);

const genericItemTrans = (expectedAction, state, action) => {
    if(expectedAction !== action.type) return state;
    const newState = {
        count: action.count || 0,
        items: {}
    };
    Object.keys(state).forEach(itemId => {
        newState.items[itemId] = {
            got: action.gotItems && action.gotItems.indexOf(itemId) !== -1,
            gone: action.goneItems && action.goneItems.indexOf(itemId) !== -1
        }
    });
    return newState;
}

const adulthood = (state = initialState.adulthood, action) => {
    if(types.TRANS_UPDATE_STOMPY !== action.type) return state;
    return {
        count: action.count || 0,
        pillId: action.pillId || 0
    };
};

const stompy = (state = initialState.stompy, action) => {
    if(types.TRANS_UPDATE_STOMPY !== action.type) return state;
    return {
        count: action.count || 0
    };
}

const selected = (state = initialState.selected, action) => {
    return types.TRANS_SELECT === action.type ? action.selected : state;
}

export default combineReducers({
    selected,
    guppy: (state = initialState.guppy, action) => genericItemTrans(types.TRANS_UPDATE_GUPPY, state, action),
    beelzebub: (state = initialState.beelzebub, action) => genericItemTrans(types.TRANS_UPDATE_BEELZEBUB, state, action),
    funguy: (state = initialState.funguy, action) => genericItemTrans(types.TRANS_UPDATE_FUN_GUY, state, action),
    seraphim: (state = initialState.seraphim, action) => genericItemTrans(types.TRANS_UPDATE_SERAPHIM, state, action),
    bob: (state = initialState.bob, action) => genericItemTrans(types.TRANS_UPDATE_BOB, state, action),
    spun: (state = initialState.spun, action) => genericItemTrans(types.TRANS_UPDATE_SPUN, state, action),
    mom: (state = initialState.mom, action) => genericItemTrans(types.TRANS_UPDATE_MOM, state, action),
    conjoined: (state = initialState.conjoined, action) => genericItemTrans(types.TRANS_UPDATE_CONJOINED, state, action),
    leviathan: (state = initialState.leviathan, action) => genericItemTrans(types.TRANS_UPDATE_LEVIATHAN, state, action),
    ohcrap: (state = initialState.ohcrap, action) => genericItemTrans(types.TRANS_UPDATE_OH_CRAP, state, action),
    superbum: (state = initialState.superbum, action) => genericItemTrans(types.TRANS_UPDATE_SUPER_BUM, state, action),
    bookworm: (state = initialState.bookworm, action) => genericItemTrans(types.TRANS_UPDATE_BOOKWORM, state, action),
    adulthood,
    spiderbaby: (state = initialState.spiderbaby, action) => genericItemTrans(types.TRANS_UPDATE_SPIDER_BABY, state, action),
    stompy
})
