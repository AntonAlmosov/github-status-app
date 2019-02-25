import React from 'react'

const UserSearch = ({onChange}) =>
  <div className='user-search'>
    <input
      placeholder='GitHub user URL'
      onChange={onChange.bind()}/>
  </div>

export default UserSearch
