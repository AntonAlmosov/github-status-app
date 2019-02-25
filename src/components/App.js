import React, { Component } from 'react';
import './../styles/style.scss' //Main stylesheet file

//Components
import UserSearch from './UserSearch'

class App extends Component {
  constructor(){
    super()

    this.state={
      user: ''
    }
  }

  render() {
    return (
      <div className='github-stats-app'>
        <UserSearch onChange={this.inputHandle}/>
        <p>{this.state.user}</p>
      </div>
    );
  }

  inputHandle = (e) => {
    if(e.target.value.length > 19)
      this.setState({
        user: e.target.value.slice(19)
      })
  }

}

export default App;
