import React, { Component } from 'react'
import Quote from './Quote'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            content: "",
            title: "",
            quotes: [],
            allQuotes: [],
            devQuotes: [],
            designQuotes: [],
            learningQuotes: [],
            currentQuote: '',
            devKeywords: ['dev', 'development', 'develop', 'website', 'web', 'component', 'create', 'function', 'program'],
            designKeywords: ['design', 'designer', 'designing', 'designs', 'graphic', 'template', 'web', 'website', 'create', 'creating', 'creator', 'layout', 'hierarchy', 'sketch', 'mock', 'art', 'artist', 'artwork'],
            learningKeywords: ['learn', 'learning', 'teach', 'teacher', 'teaching', 'instruct', 'instructing', 'web', 'instruction', 'instructor', 'course', 'coursework', 'courses', 'tutorial', 'tutorials', 'example', 'examples', 'website', 'practice', 'school', 'schooling', 'theory'],
        }
    }
    componentDidMount() {
        const axios = require("axios");
        axios.get("https://vschool-cors.herokuapp.com?url=http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=2").then((response) =>{
            this.setState({quotes: response.data}, () => {
                let mappedDevQuotes = '', 
                    mappedDesignQuotes = '', 
                    mappedLearningQuotes = '',
                    mappedAllQuotes = '';
                if(this.state.quotes){
                    let devQuotes = this.state.quotes.filter((dev, index) => {
                        return this.state.devKeywords.some((devMatch) => {
                            return dev.content.includes(devMatch)
                        })
                    })
                    mappedDevQuotes = devQuotes.map(quote => <Quote key={quote.ID} quotation={quote} />)

                    let designQuotes = this.state.quotes.filter((design, index) => {
                        return this.state.designKeywords.some((designMatch) => {
                            return design.content.includes(designMatch)
                        })
                    })
                    mappedDesignQuotes = designQuotes.map(quote => <Quote key={quote.ID} quotation={quote} />)

                    let learningQuotes = this.state.quotes.filter((learning, index) => {
                        return this.state.learningKeywords.some((learningMatch) => {
                            return learning.content.includes(learningMatch)
                        })
                    })
                    mappedLearningQuotes = learningQuotes.map(quote => <Quote key={quote.ID} quotation={quote} />)

                    let allQuotes = this.state.quotes
                    mappedAllQuotes = allQuotes.map(quote => <Quote key={quote.ID} quotation={quote} />)
                }
                this.setState({
                    allQuotes: mappedAllQuotes,
                    devQuotes: mappedDevQuotes,
                    designQuotes: mappedDesignQuotes,
                    learningQuotes: mappedLearningQuotes,
                    currentQuote: mappedAllQuotes[0]
                })
            })
        }).catch(function(error){
            console.log(error)
        });
    }

    updateQuote = (quote) => {
        this.setState(ps => ({
            currentQuote: quote
        }))
    }

    render() {
        return (
            <div className="dropdown">
                <button className="dropbtn" >Select a new quote here...</button>
                <div className="dropdown-content">
                    <a href="/" onClick={() => this.updateQuote(this.state.allQuote)}>Random Quote</a>
                    <a href="/" onClick={() => this.updateQuote(this.state.devQuotes)}>Development Quote</a>
                    <a href="/" onClick={() => this.updateQuote(this.state.designQuotes)}>Design Quote</a>
                    <a href="/" onClick={() => this.updateQuote(this.state.learningQuotes)}>Learning Quote</a>
                </div>
                {this.state.currentQuote}
            </div>
        )
    }     
}

export default Home