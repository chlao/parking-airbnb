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

export function showHideHeader(isShow){
  return {
    type: 'SHOW_HIDE_HEADER',
    isShow
  }
}
