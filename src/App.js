import React, { Component } from 'react';
// import TransitionGroup from 'react-transition-group/TransitionGroup';import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {connect} from 'react-redux';
import {HeaderContainer} from './components/Header.jsx';
import {SearchFormContainer} from './components/SearchForm.jsx';
import {LocationSearchPageContainer} from './components/LocationSearchPage.jsx';
import {TimeSearchPageContainer} from './components/TimeSearchPage.jsx';
import {ResultOptionsContainer} from './components/ResultOptions.jsx';
import ResultList from './components/ResultList.jsx'
import {showHideSearchForm, showHideHeader, setLocation} from './actions/action_creators.js';
// import MapGL from 'react-map-gl';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import {mapboxApiAccessToken} from './utils/mapbox-utils.js';

// import throttle from 'lodash.throttle';

import './App.css';
import '../public/css/vendor/font-awesome-4.7.0/css/font-awesome.min.css';

// <CSSTransitionGroup
//   transitionName="searchFormAnimation"
//   transitionEnterTimeout={750}
//   transitionLeaveTimeout={300}>
//     {this.props.isTimeSearchShown ? <TimeSearchPage /> : null}
// </CSSTransitionGroup>

// <GoogleMapsWrapper asyncScriptOnLoad />,


// <MapGL
//   width={400}
//   height={400}
//   latitude={37.7577}
//   longitude={-122.4376}
//   zoom={8}
//   onChangeViewport={viewport => {
//     const {latitude, longitude, zoom} = viewport;
//     // Optionally call `setState` and use the state to update the map.
//   }}
//   MapBoxAccessToken={mapboxApiAccessToken}
// />


// Replace logo with new logo with caret or animated hamurger menu
export class App extends Component {
  render() {
    const headerHeight = 105; // Height of the header is currently set to 105px

    let screnHeight = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;
    let mapHeight = screnHeight - headerHeight + 'px';

    return (
      <div className="App">
        <CSSTransitionGroup component="div"
          transitionName="searchFormAnimation"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
            {this.props.isLocationSearchShown ? <LocationSearchPageContainer /> : null}
        </CSSTransitionGroup>
        <CSSTransitionGroup component="div"
          transitionName="searchFormAnimation"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
            {this.props.isTimeSearchShown ? <TimeSearchPageContainer/> : null}
        </CSSTransitionGroup>
        {this.props.isHeaderShown ? <HeaderContainer /> : null}
        <CSSTransitionGroup
          transitionName="searchFormAnimation"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
            {this.props.isSearchFormShown ? <SearchFormContainer /> : null}
        </CSSTransitionGroup>
        <ResultOptionsContainer />
        {this.props.isMapShown ?
          <ReactMapboxGl
            style="mapbox://styles/mapbox/streets-v8"
            accessToken={mapboxApiAccessToken}
            containerStyle={{
              height: mapHeight,
              width: "100%"
            }}
            center={this.props.currentLocation}>
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-122.431297, 37.77397]}/>
              </Layer>
          </ReactMapboxGl> : <ResultList />}
      </div>
    );
  }

  componentDidMount() {
    var props = this.props;
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(function(position) {
        // Update current position in map
        props.onLoad([position.coords.latitude, position.coords.longitude])
      });
    } else {
      /* geolocation IS NOT available */
    }
    // window.addEventListener('scroll', throttle(this.props.onScroll, 250));
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', throttle(this.props.onScroll, 250));
  }
}

const mapStateToProps = (state) => {
  return {
    isHeaderShown: state.isHeaderShown,
    isSearchFormShown: state.isSearchFormShown,
    isTimeSearchShown: state.isTimeSearchShown,
    isLocationSearchShown: state.isLocationSearchShown,
    isMapShown: state.isMapShown,
    currentLocation: state.currentLocation
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    // onSearchBarBlur: () => {
    //   console.log('onSearchBarBlur');
    //   dispatch(showHideSearchForm(false));
    // },
    // onScroll: (e) => {
    //   console.log('onScroll');
    //   let headerHeight = document.getElementsByClassName("App_header").length ? document.getElementsByClassName("App_header")[0].clientHeight : document.getElementsByClassName("App_search-form")[0].length;
    //   let isHeaderShown = true;
    //   let isSearchFormShown = false;
    //
    //   console.log(e.srcElement.body.scrollTop)
    //
    //   if (e.srcElement.body.scrollTop < headerHeight){
    //     isHeaderShown = false;
    //     isSearchFormShown = true;
    //   }
    //
    //   dispatch(showHideHeader(isHeaderShown));
    //   dispatch(showHideSearchForm(isSearchFormShown));
    // },
    onLoad: (coordinates) => {
      dispatch(setLocation(coordinates));
    }
  }
}

// Takes redux store state and returns an object to be passed as state
export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
