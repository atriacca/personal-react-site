import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        const styles = {
            display: 'flex',
            flex: "1 1 0",
            flexDirection: 'row',
            justifyContent: 'space-around',
            color: 'lightsalmon',
            backgroundColor: 'violet',
            fontFamily: 'Verdana'
        }
        return (
            <div className="navBar" style={styles}>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/favorites">Favorites</Link></div>
            </div>
        )
    }
}

export default Navbar 