import React from 'react';

const user = (props) => {
  const {id, username, email, password } = props;

  return(
    <li className="user-item" key={id} >
      <div className="user-cell">{username}</div>
      <div className="user-cell">{email}</div>
      <div className="user-cell">{password}</div>
    </li>
  )
}

export default user;