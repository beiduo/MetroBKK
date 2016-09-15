import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import LINES from '../constants/lines';

class StationTab extends Component {
    render() {

        return (
            <div className="tab">
                <Link key="all" to="/stations" className="">All</Link>
                {LINES.map(line => {
                    let path = '/stations/' + line.alias;
                    return (
                        <Link key={line.alias} to={path} className="">{line.name}</Link>
                    )
                })}
                
            </div>
        )
    }
}

export default StationTab;