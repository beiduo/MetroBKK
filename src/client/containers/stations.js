import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { fetchStationsRequest } from '../actions';

import StationTab from '../components/stationTab';
import StationItem from '../components/stationItem';

class Stations extends Component {
    componentDidMount() {
        this.props.fetchStationsRequest();
    }

    componentWillReceiveProps(nextProps) {
    }

    stationsFilter(items, line) {
        if (typeof line === 'undefined') {
            return items;
        } else {
            return items.filter(station => {
                return station.lineAlias[line];
            })
        }
    }

    render() {
        console.log(this.props.params.line);
        const {
            stations
        } = this.props;

        return (
            <div className="stations">
                <StationTab />
                <div className="list">
                    {this.stationsFilter(stations.items, this.props.params.line)
                        .map((station) => {
                        return (
                            <StationItem key={station._id} station={station} />
                        );
                    })}
                </div>
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