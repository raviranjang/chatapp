import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';


//for redux devtools
//remove this in production
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}