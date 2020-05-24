import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import mapReducer from "./reducers/mapReducer";
import drawerReducer from "./reducers/drawerReducer";
import { reducer as reduxFormReducer } from 'redux-form';

let reducers = combineReducers({
    map: mapReducer,
    drawer: drawerReducer,
    form: reduxFormReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware()
));

export default store;