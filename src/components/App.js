import React, { Component } from 'react';
import './../styles/style.scss' //Main stylesheet file

//Components
import UserSearch from './UserSearch'

class App extends Component {
  render() {
    return (
      <div className='github-stats-app'>
        <UserSearch />
      </div>
    );
  }
}

export default App;
