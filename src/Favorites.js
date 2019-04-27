import React, { Component } from 'react'

class Favorites extends Component {
    render() {
        const styles = {
            fontSize: "48px",
            color: 'lavender',
            textAlign: 'center',
            fontFamily: "Bradley Hand",
        }

        return (
            <div className='quote' style={styles}>
                <h1>Saved Quotes</h1>
                <div>
                <span dangerouslySetInnerHTML={{ __html : localStorage.getItem("savedQuote")}}></span>
                <button className='save' onClick={() => localStorage.removeItem("savedQuote")}>Remove quote from Favorites</button>
                </div>
            </div>
        )
    }
}

export default Favorites