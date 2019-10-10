import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function Card({ user, getUser }) {
  // useEffect(() => {
  //   getUser('josenriagu');
  // }, []);
  
  return (
    <div className='user-card'>
      <img src={user.userData.avatar_url} alt='user-image'/>
      <h3>{user.userData.name} || {user.userData.login}</h3>
      <h4>{user.userData.bio}</h4>
      <p>{user.userData.location}</p>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Card);