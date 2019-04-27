import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        const styles = {
            display: 'flex',
            flex: "1 1 0",
            flexDirection: 'row',
            justifyContent: 'space-around',
            color: 'purple',
            backgroundColor: 'lightsalmon',
            fontFamily: 'Verdana'
        }
        return (
            <div className="footer" style={styles}>
                <div><Link to="/acknowledgements">Acknowledgements</Link></div>
                <div><Link to="/contact">Contact</Link></div>
                <div>App created by Alan Triacca</div>
            </div>
        )
    }
}

export default Footer 