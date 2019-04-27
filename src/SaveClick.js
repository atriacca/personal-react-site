// https://stackoverflow.com/questions/38423108/using-localstorage-with-react

// I didn't use this on my API project...

import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props);
    var storedClicks = 0;

    if (localStorage.getItem('clicks')) {
      storedClicks = parseInt(localStorage.getItem('clicks'));
    }

    this.state = {
      clicks: storedClicks,
    };
    this.click = this.click.bind(this);
  }

  click() {
    var newclick = this.state.clicks + 1;
    this.setState({clicks: newclick});
    // Set it
    localStorage.setItem('clicks', newclick);
  }

  render() {
    return (
      <div>
        <h2>Click to save as a favorite</h2>
        <button onClick={this.click}>Click me</button> Counter {this.state.clicks}
      </div>
    );
  }
}
export default App;