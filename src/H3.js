import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'
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
            devKeywords: ['dev', 'development', 'develop', 'website', 'web', 'component', 'create', 'function', 'program'],
            designKeywords: ['design', 'designer', 'designing', 'designs', 'graphic', 'web', 'template', 'create', 'creating', 'website', 'creator', 'layout', 'hierarchy', 'sketch', 'mock', 'art', 'artist', 'artwork'],
            learningKeywords: ['learn', 'learning', 'teach', 'teacher', 'teaching', 'instruct', 'instructing', 'web', 'instruction', 'instructor', 'course', 'coursework', 'courses', 'tutorial', 'tutorials', 'example', 'examples', 'website', 'practice', 'school', 'schooling'],
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
                })
            })
        }).catch(function(error){
            console.log(error)
        });
    }

    // onClick = (e) => {
    //     e.preventDefault()
    //     this.setState((prevState)=>{
    //         return {
    //             allQuotes: [],
    //             devQuotes: [],
    //             designQuotes: [],
    //             learningQuotes: [],
    //         }
    //     })
    // }
    // allQuotes: [prevState.allQuotes, ...prevState.allQuotes],
    
    // function handleClickAll(e) {
    //     e.preventDefault();
    //     this.setState.allQuotes[0];
    // }
    // function handleClickDev(e) {
    //     e.preventDefault();
    //     mappedDevQuotes;
    // }
    // function handleClickDesign(e) {
    //     e.preventDefault();
    //     mappedDesignQuotes;
    // }
    // function handleClickLearning(e) {
    //     e.preventDefault();
    //     mappedLearningQuotes;
    // }
    render() {
        return (
            <div>
                <div className="dropdown">
                    <button className="dropbtn" >Select your type of quote here</button>
                    <div className="dropdown-content">

                        {/* <a href="/">Random Quote</a> */}

                        <a href="" onClick={this.state.allQuotes}>Random Quote</a>
                        <a href="" onClick='{this.state.devQuotes[0]}'>Development Quote</a>
                        <a href="" onClick='{this.state.designQuotes[0]}'>Design Quote</a>
                        <a href="" onClick='{this.state.learningQuotes[0]}'>Learning Quote</a>
                        {/* <a href="" onClick='{handleClickAll}'>Random Quote</a> */}
                        {/* <a href="" onClick='{handleClickDev}'>Development Quote</a> */}
                        {/* <a href="" onClick='{handleClickDesign}'>Design Quote</a>
                        <a href="" onClick='{handleClickLearning}'>Learning Quote</a> */}

                    </div>
                
                </div>
                {this.state.allQuotes}
            </div>
        )
    }     
}

export default Home

        // this.setState.allQuotes = mappedAllQuotes
        // this.setState.devQuotes = mappedDevQuotes
        // this.setState.designQuotes = mappedDesignQuotes
        // this.setState.learningQuotes = mappedLearningQuotes
// const mappedQuotes = this.state.quotes.map(quote => <Quote key={quote.ID} quotation={quote} />)
// genericKeywords: ['a', 'to', 'is', 'if', 'or', 'and', 'of'],

//  if(!values.content || !values.content.length < 20){ }

/* <div className="menu">
<a href="#">Random Quote</a><hr/>
<a href="#">Design Quote</a><hr/>
<a href="#">Development Quote</a><hr/>
<a href="#">Learning Quote</a>
</div> */

/*
<a href="" onClick={this.state.allQuote}>Random Quote</a>
<a href="" onClick={this.state.devQuotes}>Development Quote</a>
<a href="" onClick={this.state.designQuotes}>Design Quote</a>
<a href="" onClick={this.state.learningQuotes}>Learning Quote</a>

<a href="" onClick={handleClickAll}>Random Quote</a>
<a href="" onClick={handleClickDev}>Development Quote</a>
<a href="" onClick={handleClickDesign}>Design Quote</a>
<a href="" onClick={handleClickLearning}>Learning Quote</a>
*/
/* <Link to="/">Random Quote</Link>
<Link to="#">Development Quote</Link>
<Link to="#">Design Quote</Link>
<Link to="#">Learning Quote</Link> */

// Select the type of quote(s) you want from the menu.

// const mappedQuotes = SampleQuotes.map(quote => <Quote key={quote.ID} quotation={quote} />)
// const mappedQuotes = this.state.quotes.map(quote => <Quote key={this.state.quote.ID} quotation={this.state.quote.content} author={this.state.quote.title} />)
// const mappedQuotes = this.state.quotes.map(quote => <Quote key={quote.ID} quotation={quote.content} title={quote.title} />)
/*

// For creating custom filters:
if(!mappedQuotes.content || !mappedQuotes.content.length < 2){ 

    for(let i = 0; i < this.state.quotes.length; i++) {
        const devQuotes = '', learningQuotes = '', designQuotes = '';
        if (this.state.quotes[i].content.includes('code' || 'coding' || 'java' || 'html'=== true)) {
            devQuotes = this.state.quotes[i].content.map(quote => <Quote key={quote.ID} quotation={quote}/>)
        } else if (this.state.quotes[i].content.includes('learn' || 'teach' || 'understand' === true)) {
            learningQuotes = this.state.quotes[i].content.map(quote => <Quote key={quote.ID} quotation={quote}/>)
        } else if (this.state.quotes[i].content.includes('design' || 'create' || 'build' === true)) {
            designQuotes = this.state.quotes[i].content.map(quote => <Quote key={quote.ID} quotation={quote}/>)
        } else {
            // componentDidMount()
        }
    }

    for(let i = 0; i < mappedQuotes.content.length; i++) {
        const devQuotes = '', learningQuotes = '', designQuotes = '';
        if (mappedQuotes[i].content.includes('code' || 'coding' || 'java' || 'html'=== true)) {
            codingQuotes = mappedQuotes[i].content.map(quote => <Quote key={quote.ID} quotation={quote}/>)
        } else if (mappedQuotes[i].content.includes('learn' || 'teach' || 'understand' === true)) {
            learningQuotes = mappedQuotes[i].content.map(quote => <Quote key={quote.ID} quotation={quote}/>)
        } else if (mappedQuotes[i].content.includes('design' || 'create' || 'build' === true)) {
            designQuotes = mappedQuotes[i].content.map(quote => <Quote key={quote.ID} quotation={quote}/>)
        } else {
            // componentDidMount()
        }
    }
}
        if(this.state.quotes){
        if(mappedQuotes){
        let devQuotes = this.state.mappedQuotes.filter((dev, index) => {
            return this.state.devKeywords.some((devMatch) => {
                return dev.includes(devMatch)
            })
        })
        let designQuotes = this.state.mappedQuotes.filter((design, index) => {
            return this.state.designKeywords.some((designMatch) => {
                return design.includes(designMatch)
            })
        })
        let learnQuotes = this.state.mappedQuotes.filter((learn, index) => {
            return this.state.learnKeywords.some((learnMatch) => {
                return learn.includes(learnMatch)
            })
        })
    }
*/
// filteredQuotes (quote => quote.filter.split' '.some'keyword' === true)
/*
        if(mappedQuotes){
    devQuotes = this.state.quotes.filter((dev, index) => {
        const stringArr = dev.content.split(' ')
        return this.state.devKeywords.some((devMatch, index2) => {
            return stringArr.includes(devMatch)
        })
    })
*/