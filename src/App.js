import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './style.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Favorites from './Favorites';
import Acknowledgements from './Acknowledgements';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {

    render() {
        const styles = {
            flex: "1 1 0",
            height: 'auto',
        }

        return (
        <div style={styles} className='post'>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/about" component={About} />
                <Route path="/acknowledgements" component={Acknowledgements} />
                <Route path="/contact" component={Contact} />
            </Switch> 
            <Footer />
        </div>
        );
    }
}

export default App;