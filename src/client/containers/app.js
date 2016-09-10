import '../styles/app.css';

import React, { Component, PropTypes } from 'react';

import Nav from '../components/nav';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Nav />
                <div className="mainwrap">
                    {this.props.children && React.cloneElement(this.props.children, {
                    })}
                </div>
            </div>
        )
    }
}

App.PropTypes = {
}

export default App;