import { combineReducers } from "redux";

// should be removed its just here for the app to start
const testReducer = () => {
    return {};
};

export const MainReducer = combineReducers({
    /**
     * all app reducers should be registered here
     */
    test: testReducer,
});