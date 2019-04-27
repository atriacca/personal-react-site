import React, { Component } from 'react'

class About extends Component {
    render() {
        const styles = {
            fontSize: "24px",
            color: 'lavender',
            textAlign: 'center',
            fontFamily: "Verdana",
        }
        return (
            <div className='quote' style={styles}>
            <h2>About this app...</h2>
            <p>This app was created for the Personal React Site API project at V School's Full Stack JavaScript Development Bootcamp. It allows the user to display various quotations from Quotes on Design. The quotes revolve around web development, coding, design, etc. The user may then save any for future access.</p>
            </div>
        )
    }
}

export default About