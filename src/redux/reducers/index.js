import { combineReducers } from "redux";

import { schedule } from "./schedule";

const rootReducer = combineReducers({
    schedule
});

export {
    rootReducer
};
