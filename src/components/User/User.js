import React from 'react';
//import '../css/comment.css';

const user = (props) => {
  const {id, username, email, password } = props;

  return(
    <div className="user-item d-flex justify-content-center overflow-scroll w-100" key={id} >
      <div className="name col-3 border border-primary p-2 text-break">{username}</div>
      <div className="text col-5 border border-primary p-2 text-break">{email}</div>
      <div className="datetime col-4 border border-primary p-2 text-break">{password}</div>
    </div>
)

}

export default user;