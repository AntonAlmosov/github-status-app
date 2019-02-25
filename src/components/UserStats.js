import React from 'react'

const UserStats = ({ found, userData }) =>
  <div className={(found === '')? 'display-none' : 'user-stats-wrapper'}>
    <div className={found? 'display-none' : 'user-stats-notfound'}>
      Not Found
    </div>

    <div className={found? 'user-stats-notfound' : 'display-none'}>
      <div className='user-info'>
        <img src={userData.avatar} alt=''/>
        <span>{userData.name}</span>
      </div>
    </div>
  </div>


export default UserStats
