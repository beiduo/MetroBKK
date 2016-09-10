import React, { Component, PropTypes } from 'react';
import { fetchStationsRequest } from '../actions';

import { connect } from 'react-redux';

class Stations extends Component {
    componentDidMount() {
        this.props.fetchStationsRequest();
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        const {
            stations
        } = this.props;
        return (
            <div>
                Station
            </div>
        )
    }
}

Stations.PropTypes = {
}

export default connect(
  ({ stations }, ownProps) => ({
    stations
  }),
  { fetchStationsRequest }
)(Stations);