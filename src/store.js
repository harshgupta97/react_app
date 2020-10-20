// Setting up redux store
import { createStore, applyMiddleware } from 'redux';

// Allow us to use redux devtool under chrome inspect
import { composeWithDevTools } from 'redux-devtools-extension';

// Middleware allow you to write actions creators that  returns a function instead of actions
import thunk from 'redux-thunk';

// Our reducers
import rootReducer from './reducers';

// Passing an empty object as initialState
const initialState = {};

const middleware = [thunk];

// Creating store
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;