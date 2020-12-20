import React from 'react';
//import '../css/comment.css';

const user = (props) => {
  const {id, username, email, password } = props;

  return(
    <li className="user-item" key={id} >
      <span className="name">{username}</span>
      <span className="text">{email}</span>
      <span className="datetime">{password}</span>
    </li>
)

}

export default user;