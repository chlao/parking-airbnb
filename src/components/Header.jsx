import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showHideTimeSearch, showHideLocationSearch} from '../actions/action_creators';

import * as searchOptionUtils from '../utils/search_options_utils';

import logo from '../../public/img/dog_rear_icon.png';

// <input type="text" name="search" placeholder="Search.." onClick={this.expandHeader} disabled />
// TODO: Divide date/time and duration on desktop
export class Header extends Component {
  render() {
    return <div className='App_header'>
      <div className="header_menu_icon">
        <img src={logo} className="App_logo" alt="logo" />
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div className="App_search">
        <div className="App_search-bar search-location" onClick={this.props.onLocationSearchClick} onBlur={this.props.onSearchBarBlur}>
          <button className="App_search-bar_contents">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span className="search-option"> {this.props.location} </span>
          </button>
        </div>
        <div className="App_search-bar search-time" onClick={this.props.onTimeSearchClick} onBlur={this.props.onSearchBarBlur}>
          <button className="App_search-bar_contents">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <span className="search-option"> {searchOptionUtils.getDate(this.props.start_time) + ', ' + searchOptionUtils.getTime(this.props.start_time)} &bull; ({searchOptionUtils.getDuration(this.props.start_time, this.props.end_time)}) </span>
          </button>
        </div>
      </div>
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
    onLocationSearchClick: () => {
      console.log('onSearchLocationClick');
      dispatch(showHideLocationSearch(true));
    },
    onTimeSearchClick: () => {
      console.log('onSearchTimeClick');
      dispatch(showHideTimeSearch(true));
    }
  }
}

// Takes redux store state and returns an object to be passed as state
export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
