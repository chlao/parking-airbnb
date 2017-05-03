import React, { Component } from 'react';

class ResultOptions extends Component{
  render() {
    return <div className="App_result-options">
      <div className="result-options_container">
        <button className="options-button--list">
          <i className="fa fa-list" aria-hidden="true"></i>
          List
        </button>
        <button className="options-button--filters">
          <i className="fa fa-sliders" aria-hidden="true"></i>
          Filter
        </button>
      </div>
    </div>;
  }
}

export default ResultOptions;
