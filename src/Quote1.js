import React from 'react'
import './style.css';

function Quote (props) {
    const styles = {
        fontSize: "50px",
        color: 'lavender',
        display: 'flex',
        // margin: '0px 20px 0px 20px',
    }
    const savedQuote = localStorage.getItem("saveQuote", props.quotation.content);

    return (
        <div>
            <div>
            <div className='leftQ'>&ldquo;</div>
            <h2 style={styles} className='quote'>
            <span dangerouslySetInnerHTML={{ __html : props.quotation.content}} /></h2>
            <div className='rightQ'>&rdquo;</div>
            <h3 className='quote'>by <span dangerouslySetInnerHTML={{ __html : props.quotation.title}} /></h3>
            </div>
            {/* <button className='save'onClick={() => localStorage.setItem("saveQuote", savedQuote)>Save to Favorites</button> */}
            <button className='save'onClick={() => localStorage.setItem("savedQuote", props.quotation.content)}>Save to Favorites</button>
        </div>
    )
}

export default Quote

// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("savedQuote", "test");
//     // Retrieve
//     document.getElementById("result").innerHTML = localStorage.getItem("savedQuote");
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, but your browser does not support Web Storage...";
//   }

// localStorage.setItem("savedQuote", props.quotation.content);