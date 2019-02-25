import React, { Component } from 'react';
import token from './oauthtoken'
import './../styles/style.scss' //Main stylesheet file

//Components
import UserSearch from './UserSearch'
import UserStats from './UserStats'

class App extends Component {
  constructor() {
    super()

    this.state = {
      token: '?access_token=' + token,
      found: '',
      userData: {}
    }
  }

  render() {
    return (
      <div className='github-stats-app'>
        <UserSearch onChange={this.inputHandle} />
        <UserStats found={this.state.found} userData={this.state.userData} repos={this.state.repos}/>
      </div>
    );
  }

  inputHandle = (e) => {
    if (e.target.value.length > 19) {
      fetch('https://api.github.com/users/' + e.target.value.slice(19) + this.state.token)
        .then(results => results.json()).then(data => this.githubDataParser(data))
    }
  }

  githubDataParser = (data) => {
    if (data.message === "Not Found")
      this.setState({
        found: false
      })
    else{
      this.setState({
        found: true,
        userData: data
        })
    }
  }

}

export default App;
