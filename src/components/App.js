import React, { Component } from 'react';
import './../styles/style.scss' //Main stylesheet file

//Components
import UserSearch from './UserSearch'
import UserStats from './UserStats'

class App extends Component {
  constructor() {
    super()

    this.state = {
      found: '',
      userData: {

      }
    }
  }

  render() {
    return (
      <div className='github-stats-app'>
        <UserSearch onChange={this.inputHandle} />
        <UserStats found={this.state.found} userData={this.state.userData} />
      </div>
    );
  }

  inputHandle = (e) => {
    if (e.target.value.length > 19) {
      fetch('https://api.github.com/users/' + e.target.value.slice(19))
        .then(results => results.json()).then(data => this.githubDataParser(data))
    }
  }

  githubDataParser = (data) => {
    if (data.message === "Not Found")
      this.setState({
        found: false
      })
    else
      this.setState({
        found: true,
        userData: {
          name: data.name,
          avatar: data.avatar_url
        }
      })
  }

}

export default App;
