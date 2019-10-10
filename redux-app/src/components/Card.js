import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function Card({ user }) {
  const onValueChange = event => {
    changeInput(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    getUser(form.value);
  };

  return (
    <div className='user-card'>
      <img src={user.userData.}/>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Card);