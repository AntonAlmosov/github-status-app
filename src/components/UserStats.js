import React from 'react'

const UserStats = ({ found, userData, repos }) =>
  <div className={(found === '')? 'display-none' : 'user-stats-wrapper'}>
    <div className={found? 'display-none' : 'user-stats-notfound'}>
      <p>Can't find this user. Try another URL.</p>
    </div>

    <div className={found? 'user-stats' : 'display-none'}>
      <div className='user-info'>
        <img src={userData.avatar} alt=''/>
        <h1>{userData.name}</h1>
      </div>
      <div className='user-stats-cards'>
        <div className='user-stats-card'>
          <p>Repos</p>
          <h2>{repos}</h2>
        </div>
      </div>
    </div>
  </div>


export default UserStats
