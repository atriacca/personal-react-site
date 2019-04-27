import React, { Component } from 'react'

class Contact extends Component {
    render() {
        const styles = {
            fontSize: "24px",
            color: 'lavender',
            textAlign: 'center',
            fontFamily: "Verdana",
        }
        return (
            <div className='quote' style={styles}>
                <h2>Contact Info:</h2>
                <p>You may contact the creator of this app, Alan Triacca, at <a className='bodyTag' href="mailto:atriacca@yahoo.com">atriacca@yahoo.com</a></p>
                <p>You may access the Quotes on Design API via <a className='bodyTag' href='https://quotesondesign.com/api-v4-0/' target='_blank' rel="noopener noreferrer">quotesondesign.com/api-v4-0</a></p>
            </div>
        )
    }
}

export default Contact