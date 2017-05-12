import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showHideLocationSearch, fetchLocation} from '../actions/action_creators.js';

export class LocationSearchPage extends Component{
  render(){
    return <div className="search-page_location">
        <i className="fa fa-times" aria-hidden="true" onClick={this.props.onClose}></i>
        <label className="input-label">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <input type="text" className="search-field_location" defaultValue={this.props.location} onChange={(e) => {return this.props.onLocationSearch(e.target.value)}}/>
        </label>
        <ul className="location_search-results">
          {this.props.results.map(function(result){
            return <li className="search-result" key={result.id}>{result.text}</li>;
          })}
        </ul>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.locationResults
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      console.log('onClose');
      dispatch(showHideLocationSearch(false));
    },
    onLocationSearch: (query) => {
      dispatch(fetchLocation(query)).then(() =>
        console.log('fetched posts')
      );
      console.log('onLocationSearch');
    }
  }
}

export const LocationSearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSearchPage);
