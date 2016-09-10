import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <nav className="sitenav">
                <div className="menu">
                    <a className="trigger" href="javascript:;">菜单</a>
                    <div className="list">
                        <Link key="/map" to="/map">Route Map</Link>
                        <Link key="/stations" to="/stations">Station List</Link>
                        <Link key="/latest" to="/latest">Latest</Link>
                    </div>
                </div>
                <div className="my">
                    <a className="trigger" href="javascript:;">我的帐号</a>
                    <div className="list">
                        <Link key="/bookmark" to="/bookmark">Bookmark</Link>
                        <Link key="/logout" to="/logout">Logout</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

Nav.PropTypes = {
}

export default Nav;