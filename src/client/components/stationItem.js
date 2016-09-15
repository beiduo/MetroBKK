import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class StationItem extends Component {
    renderLines(lines) {
        let elems = [];
        for (let key in lines) {
            if (lines.hasOwnProperty(key)) {
                elems.push(
                    (
                        <div key={key} className={key}>{lines[key]}</div>
                    )
                )
            }
        };
        return elems;
    }
    render() {
        const { station } = this.props;

        return (
            <div>
                <Link key="/map" to="/map" className="name">{station.name}</Link>
                <div className="line">
                    {this.renderLines(station.lineAlias)}
                </div>
            </div>
        )
    }
}

export default StationItem;