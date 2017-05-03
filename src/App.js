import React, { Component } from 'react';
// import TransitionGroup from 'react-transition-group/TransitionGroup';import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {connect} from 'react-redux';
import {HeaderContainer} from './components/Header.jsx';
import {SearchFormContainer} from './components/SearchForm.jsx';
import {LocationSearchPageContainer} from './components/LocationSearchPage.jsx';
import ResultOptions from './components/ResultOptions.jsx';
import {showHideSearchForm, showHideHeader} from './actions/action_creators.js';

import throttle from 'lodash.throttle';

import './App.css';
import '../public/css/vendor/font-awesome-4.7.0/css/font-awesome.min.css';

// <CSSTransitionGroup
//   transitionName="searchFormAnimation"
//   transitionEnterTimeout={750}
//   transitionLeaveTimeout={300}>
//     {this.props.isTimeSearchShown ? <TimeSearchPage /> : null}
// </CSSTransitionGroup>


// Replace logo with new logo with caret or animated hamurger menu
export class App extends Component {
  render() {
    return (
      <div className="App">
        <CSSTransitionGroup component="div"
          transitionName="searchFormAnimation"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
            {this.props.isLocationSearchShown ? <LocationSearchPageContainer /> : null}
        </CSSTransitionGroup>
        {this.props.isHeaderShown ? <HeaderContainer /> : null}
        <CSSTransitionGroup
          transitionName="searchFormAnimation"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
            {this.props.isSearchFormShown ? <SearchFormContainer /> : null}
        </CSSTransitionGroup>
        <ResultOptions />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.props.onScroll, 250));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.props.onScroll, 250));
  }
}

const mapStateToProps = (state) => {
  return {
    isHeaderShown: state.isHeaderShown,
    isSearchFormShown: state.isSearchFormShown,
    isTimeSearchShown: state.isTimeSearchShown,
    isLocationSearchShown: state.isLocationSearchShown
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    // onSearchBarBlur: () => {
    //   console.log('onSearchBarBlur');
    //   dispatch(showHideSearchForm(false));
    // },
    onScroll: (e) => {
      // e.persist();
      console.log('onScroll');
      let headerHeight = document.getElementsByClassName("App_header").length ? document.getElementsByClassName("App_header")[0].clientHeight : document.getElementsByClassName("App_search-form")[0].length;
      let isHeaderShown = true;
      let isSearchFormShown = false;

      console.log(e.srcElement.body.scrollTop)

      if (e.srcElement.body.scrollTop < headerHeight){
        isHeaderShown = false;
        isSearchFormShown = true;
      }

      dispatch(showHideHeader(isHeaderShown));
      dispatch(showHideSearchForm(isSearchFormShown));
    }
  }
}

// Takes redux store state and returns an object to be passed as state
export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
