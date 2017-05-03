import {combineReducers} from 'redux';

const INITIAL_STATE = {
  isHeaderShown: false,
  isSearchFormShown: true,
  isTimeSearchShown: false,
  isLocationSearchShown: false,
  searchOptions: {
    location: 'Nearby',
    start_time: new Date(),
    end_time: new Date()
  }
};

function showHideSearchForm(state, isShow){
  // Must create a new object in order to trigger React update  (v. mutating existing state)
  var newState = Object.assign({}, state);
  newState.isSearchFormShown = isShow;

  return newState;
}

function showHideLocationSearch(state, isShow){
  // Must create a new object in order to trigger React update  (v. mutating existing state)
  var newState = Object.assign({}, state);
  newState.isLocationSearchShown = isShow;

  return newState;
}

function showHideHeader(state, isShow){
  // Must create a new object in order to trigger React update  (v. mutating existing state)
  var newState = Object.assign({}, state);
  newState.isHeaderShown = isShow;

  return newState;
}

// const rootReducer = combineReducers({
//     theDefaultReducer,
//     firstNamedReducer,
//     secondNamedReducer
// });

function reducer(state=INITIAL_STATE, action){
  switch (action.type){
    case 'SET_PARKING_OPTIONS':
      break;
    case 'EDIT_PARKING_OPTIONS':
      break;
    case 'SHOW_HIDE_HEADER':
      return showHideHeader(state, action.isShow); 
    case 'SHOW_HIDE_SEARCH_FORM':
      return showHideSearchForm(state, action.isShow);
    case 'SHOW_HIDE_LOCATION_SEARCH':
      return showHideLocationSearch(state, action.isShow);
    default:
      return state;
  }
}

export default reducer;
