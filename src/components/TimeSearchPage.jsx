import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showHideTimeSearch} from '../actions/action_creators.js';
import * as searchOptionUtils from '../utils/search_options_utils';

export class TimeSearchPage extends Component{
  render(){
    return <div className="search-page_time">
        <i className="fa fa-times" aria-hidden="true" onClick={this.props.onClose}></i>
        <div>
          <label className="input-label">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            <div className="search-form_start_container">
              <input type="text" className="search-field_start-date" defaultValue={searchOptionUtils.getDate(this.props.start_time)}/>
              <input type="text" className="search-field_start-time" defaultValue={searchOptionUtils.getTime(this.props.start_time)}/>
            </div>
          </label>
          <label className="input-label">
            <div className="search-form_end_container">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              <input type="text" className="search-field_end-date" defaultValue={searchOptionUtils.getDate(this.props.end_time)}/>
              <input type="text" className="search-field_end-time" defaultValue={searchOptionUtils.getTime(this.props.end_time)}/>
            </div>
          </label>
        </div>
        <label className="input-label">
          Duration
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <input type="text" className="search-form_duration" defaultValue={searchOptionUtils.getDuration(this.props.start_time, this.props.end_time)}/>
        </label>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.searchOptions
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      console.log('onClose');
      dispatch(showHideTimeSearch(false));
    },
    onTimeSearch: () => {
      console.log('onTimeSearch');
    }
  }
}

export const TimeSearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSearchPage);
