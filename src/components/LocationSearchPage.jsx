import React, { Component } from 'react';
import {connect} from 'react-redux';

export class LocationSearchPage extends Component{
  render(){
    return <div className="search-page_location">
        <label>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <input type="text" className="search-form_location" defaultValue={this.props.location} onClick={this.props.onLocationSearch}/>
        </label>
        <ul className="location_search-results">

        </ul>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationSearchBlur: () => {
      console.log('onSearchBarBlur');
    },
    onLocationSearch: () => {
      console.log('onLocationSearch');
    }
  }
}

export const LocationSearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSearchPage);
