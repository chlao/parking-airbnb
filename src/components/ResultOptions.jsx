import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showHideMap} from '../actions/action_creators';

export class ResultOptions extends Component{
  render() {
    return <div className="App_result-options">
      <div className="result-options_container">
        <button className="options-button--list" onClick={() => {return this.props.onListClick(this.props.isMapShown)}}>
          {this.props.isMapShown ?
              <span><i className="fa fa-list" aria-hidden="true"></i>List</span> :
              <span><i className="fa fa-list" aria-hidden="true"></i>Map</span>}
        </button>
        <button className="options-button--filters" onClick={this.props.onFilterClick}>
          <i className="fa fa-sliders" aria-hidden="true"></i>
          Filter
        </button>
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isMapShown: state.isMapShown
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onListClick: (isMapShown) => {
      console.log('onListClick');
      dispatch(showHideMap(!isMapShown));
    },
    onFilterClick: () => {
      console.log('onFilterClick');
    }
  }
}

export const ResultOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultOptions);
