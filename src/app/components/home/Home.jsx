import React from 'react';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApiData } from '../../thunks/thunks.js';

function mapStateToProps(state) {
  return {
    triMet: state.getIn(['example', 'triMet']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: bindActionCreators(fetchApiData, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static PropTypes = {
    triMet: PropTypes.string,
    fetchData: PropTypes.func,
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { triMet } = this.props;

    return (
      <div className="container home">
        <h1>Home</h1>
        <h1>{ triMet ? triMet.get('name') : 'nope' }</h1>
        <h1>{ triMet.get('resultSet') ? triMet.get('resultSet') : 'nope' }</h1>
      </div>
    )
  };
}
