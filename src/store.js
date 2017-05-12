import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import thunkMiddleware from 'redux-thunk';

function makeStore(){
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(
     thunkMiddleware // lets us dispatch() functions
    )  );
}

export default makeStore;
