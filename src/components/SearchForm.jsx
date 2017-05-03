import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showHideSearchForm, showHideLocationSearch} from '../actions/action_creators.js';
import * as searchOptionUtils from '../utils/search_options_utils';

// Maybe include something to show end time calculated from duration
// Or use start and end time and calculate duration based on that (better for long term parking)
// Or we can ue a range and have them slide the start and end points (for duration of a day)
// And a calenar input for long term parking or another screen for long term-parking
export class SearchForm extends Component {
  render() {
    return <div className="App_search-form">
        <i className="fa fa-caret-up slide-up" aria-hidden="true"></i>
        <label>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <input type="text" className="search-form_location" defaultValue={this.props.location} onClick={this.props.onLocationSearch}/>
        </label>
        <div>
          <i className="fa fa-calendar-o" aria-hidden="true"></i>
          <div className="search-form_start_container">
            <input type="text" className="start-container_date" defaultValue={searchOptionUtils.getDate(this.props.start_time)}/>
            <span> at </span>
            <input type="search" className="start-container_time" defaultValue={searchOptionUtils.getTime(this.props.start_time)}/>
          </div>
          <div className="search-form_end_container">
            <input type="text" className="end-container_date" defaultValue={searchOptionUtils.getDate(this.props.end_time)}/>
            <span> at </span>
            <input type="search" className="end-container_time" defaultValue={searchOptionUtils.getTime(this.props.end_time)}/>
          </div>
        </div>
        <label>
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <input type="text" className="search-form_duration" defaultValue={searchOptionUtils.getDuration(this.props.start_time, this.props.end_time)} onFocus={this.clearText()}/>
        </label>
      </div>;
  }

  clearText() {
    console.log('clearText');
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.searchOptions
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFormBlur: () => {
      console.log('onSearchBarBlur');
      dispatch(showHideSearchForm(false));
    },
    onLocationSearch: () => {
      console.log('onLocationSearch');
      dispatch(showHideLocationSearch(true));
    }
  }
}

// Takes redux store state and returns an object to be passed as state
export const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
