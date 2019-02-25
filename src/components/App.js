import React, { Component } from 'react';
import './../styles/style.scss' //Main stylesheet file

//Components
import UserSearch from './UserSearch'

class App extends Component {
  constructor() {
    super()

    this.state = {
      userStats: {},
    }
  }

  componentDidUpdate() {
    console.log(this.state.userStats)
  }

  render() {
    return (
      <div className='github-stats-app'>
        <UserSearch onChange={this.inputHandle} />
        <p></p>
      </div>
    );
  }

  inputHandle = (e) => {
    if (e.target.value.length > 19) {
      fetch('https://api.github.com/users/' + e.target.value.slice(19))
        .then(results => results.json()).then(data =>
          this.setState({
                userStats: data
              }))
    }
  }

}

export default App;
