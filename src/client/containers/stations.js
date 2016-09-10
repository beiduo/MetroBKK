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
                <ul>
                    {stations.items.map((station) => {
                        return (
                            <li key={station._id}>{station.name}</li>
                        );
                    })}
                </ul>
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