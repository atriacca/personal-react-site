import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        const styles = {
            // display: 'flex',
            // flexDirection: 'column'
        }
        return (
            <div className="menu" style={styles}>
                <div><Link to="/">Random Quote</Link></div><hr/>
                <div>Design Quote</div><hr/>
                <div>Development Quote</div><hr/>
                <div>Learning Quote</div>
            </div>
        )
    }
}

export default Menu

<Button onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description') } title="support@example.com" />