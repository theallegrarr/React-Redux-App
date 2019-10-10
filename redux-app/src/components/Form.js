import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function Form({ form, changeInput, getUser }) {
  const onValueChange = event => {
    changeInput(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    getUser(form.value);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <label>User ID:
        <input value={form.value} onChange={onValueChange} name='value' />
      </label><br />
      <input type='submit' />
    </form>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Form);