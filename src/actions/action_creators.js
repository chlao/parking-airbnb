import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

import {mapboxApiAccessToken, mapBoxUrl, mapBoxMode} from '../utils/mapbox-utils.js';

export function showHideSearchForm(isShow){
  return {
    type: 'SHOW_HIDE_SEARCH_FORM',
    isShow
  }
}

export function showHideLocationSearch(isShow){
  return {
    type: 'SHOW_HIDE_LOCATION_SEARCH',
    isShow
  }
}

export function showHideTimeSearch(isShow){
  return {
    type: 'SHOW_HIDE_TIME_SEARCH',
    isShow
  }
}

export function showHideHeader(isShow){
  return {
    type: 'SHOW_HIDE_HEADER',
    isShow
  }
}

export function showHideMap(isShow){
  return {
    type: 'SHOW_HIDE_MAP',
    isShow
  }
}

export function requestLocation(query) {
  return {
    type: 'REQUEST_LOCATION',
    query
  }
}

// Handle error cases
export function receiveLocationResults(query, json) {
  return {
    type: 'RECEIVE_LOCATION_RESULTS',
    query,
    results: json.features,
    receivedAt: Date.now()
  }
}

export function setLocation(coordinates){
  return {
    type: 'SET_LOCATION',
    coordinates
  }
}

/* Thunk: can return a function instead of an action object
 * Function is executed by thunk middleware
 * Don't want async request to muddle presentational elements in a Component
 */
export function fetchLocation(query) {

  // Thunk middleware passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself
  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting
    dispatch(requestLocation(query));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return fetch(mapBoxUrl + `/geocoding/v5/${mapBoxMode}/${encodeURIComponent(query)}.json?access_token=${mapboxApiAccessToken}&autocomplete=true`)
      .then(response => response.json())
      .then(json => {

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        console.log(json);
        dispatch(receiveLocationResults(query, json));
        }
      ).catch(function(err) {
      	// Error :(
      });
  }
}
