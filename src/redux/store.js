import {combineReducers, createStore} from "redux";
import mapReducer from "./reducers/mapReducer";
import drawerReducer from "./reducers/drawerReducer";
import { reducer as reduxFormReducer } from 'redux-form';

let reducers = combineReducers({
    map: mapReducer,
    drawer: drawerReducer,
    form: reduxFormReducer
});

const store = createStore(reducers);

window.__store__ = store;

export default store;