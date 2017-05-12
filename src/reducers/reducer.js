import {combineReducers} from 'redux';

const INITIAL_STATE = {
  isHeaderShown: true,
  isSearchFormShown: false,
  isTimeSearchShown: false,
  isLocationSearchShown: false,
  isMapShown: true,
  searchOptions: {
    location: 'Nearby',
    start_time: new Date(),
    end_time: new Date()
  },
  locationResults: [],
  currentLocation: [-122.431297, 37.773972]
};

function showHideSearchForm(state, isShow){
  // Must create a new object in order to trigger React update (v. mutating existing state)
  var newState = Object.assign({}, state);
  newState.isSearchFormShown = isShow;

  return newState;
}

function showHideLocationSearch(state, isShow){
  var newState = Object.assign({}, state);
  newState.isLocationSearchShown = isShow;

  return newState;
}

function showHideTimeSearch(state, isShow){
  var newState = Object.assign({}, state);
  newState.isTimeSearchShown = isShow;

  return newState;
}

function showHideHeader(state, isShow){
  var newState = Object.assign({}, state);
  newState.isHeaderShown = isShow;

  return newState;
}

function showHideMap(state, isShow){
  var newState = Object.assign({}, state);
  newState.isMapShown = isShow;

  return newState;
}

function requestLocation(state, query){
  return Object.assign({}, state, {
    isFetching: true
  });
}

function receiveLocationResults(state, results, receivedAt){
  return Object.assign({}, state, {
    isFetching: false,
    locationResults: results,
    lastUpdated: receivedAt
  });
}

function setLocation(state, coordinates){
  return Object.assign({}, state, {
    location: coordinates
  });
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
    case 'SHOW_HIDE_TIME_SEARCH':
      return showHideTimeSearch(state, action.isShow);
    case 'SHOW_HIDE_MAP':
      return showHideMap(state, action.isShow);
    case 'REQUEST_LOCATION':
      return requestLocation(state, action.query);
    case 'RECEIVE_LOCATION_RESULTS':
      return receiveLocationResults(state, action.results, action.receivedAt);
    case 'SET_LOCATION':
      return setLocation(state, action.coordinates);
    default:
      return state;
  }
}

export default reducer;
