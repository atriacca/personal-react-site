import React from 'react'
import './style.css';

function Quote (props) {
    const styles = {
        fontSize: "50px",
        color: 'lavender',
        display: 'flex',
        // margin: '0px 20px 0px 20px',
    }

    return (
        <div>
            <div>
                <div className='leftQ'>&ldquo;</div>
                <h1>devQuotes.js</h1>
                <h3 className='quote'>Quotes for developers and designers</h3>
                <h2 style={styles} className='quote'>
                <span dangerouslySetInnerHTML={{ __html : props.quotation.content}} /></h2>
                <div className='rightQ'>&rdquo;</div>
                <h3 className='quote'>by <span dangerouslySetInnerHTML={{ __html : props.quotation.title}} /></h3>
            </div>
            <button className='save' onClick={() => localStorage.setItem("savedQuote", props.quotation.content)}>Save to Favorites</button>
        </div>
    )
}

export default Quote