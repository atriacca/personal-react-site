import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            // firstName: "",
            // lastName: "",
            email: "",
            savedQuote: [],
        }
            // this.handleChange = this.handleChange.bind(this)
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState)=>{
            return {
                fname: "",
                lname: "",
                email: "",
                // titles: [prevState.title, ...prevState.titles],
            }
        })
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.email]: e.target.value })
    }

    render() {
        const styles = {
            padding: "20px",
            width: "200px"
        }

        return (
            <div>
                <form onSubmit={this.onSubmit} style={styles}>
                    <h3>Form to send email with your Inspirational Design Quote:</h3>
                    <input name="fullName" value={this.state.fullName} type="text" placeholder="Your name" onChange={this.handleChange} />
                    <input name="email" value={this.state.email} type="text" placeholder="Valid email address" onChange={this.handleChange} />
                    <button>Click to submit</button>
                </form>
            </div>
        )
    }
}
export default Form 