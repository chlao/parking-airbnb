import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showHideSearchForm} from '../actions/action_creators';

import * as searchOptionUtils from '../utils/search_options_utils';

import logo from '../../public/img/dog_rear_icon.png';

// <input type="text" name="search" placeholder="Search.." onClick={this.expandHeader} disabled />
export class Header extends Component {
  render() {
    return <div className='App_header'>
      <div className="header_menu">
        <img src={logo} className="App_logo" alt="logo" />
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div className="App_search-bar" onClick={this.props.onSearchBarClick} onBlur={this.props.onSearchBarBlur}>
        <button className="App_search-bar_contents">
          <i className="fa fa-search" aria-hidden="true"></i>
          <span className="search-option"> {this.props.location} </span>
          <span className="dot-separator"> &bull;</span>
          <span className="search-option"> {searchOptionUtils.getDate(this.props.start_time) + ' at ' + searchOptionUtils.getTime(this.props.start_time)} - {searchOptionUtils.getDate(this.props.end_time) + ' at ' + searchOptionUtils.getTime(this.props.end_time)} </span>
          <span className="dot-separator"> &bull;</span>
          <span className="search-option"> ({searchOptionUtils.getDuration(this.props.start_time, this.props.end_time)}) </span>
        </button>
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
    onSearchBarClick: () => {
      console.log('onSearchBarClick');
      dispatch(showHideSearchForm(true));
    }
  }
}

// Takes redux store state and returns an object to be passed as state
export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
