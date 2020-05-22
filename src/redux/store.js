import {combineReducers, createStore} from "redux";
import mapReducer from "./reducers/mapReducer";
import drawerReducer from "./reducers/drawerReducer";

let reducers = combineReducers({map: mapReducer, drawer: drawerReducer});

const store = createStore(reducers);

export default store;