import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchTwit: '',
      getTwit:'',
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onAddtwit(){
    const { searchTwit } = this.state;
    this.setState({getTwit:searchTwit});
  };

  render() {
    const { searchTwit, getTwit } = this.state;
    const data = {
      sourceType: 'profile',
      screenName:  getTwit
    }
    return (
      <div className="App">
				<h1>
          <img alt="twitter" className="twitter-logo" src={ require('./images/Twitter_logo_white.png') } />
          { searchTwit }
        </h1>
       <div className="input-group"> 
        <input className="form-control" type="text" name="searchTwit" value={searchTwit} onChange={this.onChange} placeholder="searchTwit" />
        <button className="btn btn-primary" onClick={this.onAddtwit.bind(this)}>Get Tweets</button>
       </div> 
        <Timeline
          dataSource={
            data
          }
          options={{
            username: { getTwit },//'mernstacktweet'
            height: '400'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </div>
    );
  }
}

export default App;
