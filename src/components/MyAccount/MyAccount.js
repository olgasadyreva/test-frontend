import React from 'react';

const myAccount = (props) => {
    //const {editData, openModal,handleSubmit} = props;
    let hash = window.location.hash;
    let id = hash.split('/');
    id = id[id.length-1];

    const currentLocalStorage = Object.values(JSON.parse(localStorage.getItem('users')));

    //Ищем пользователя по id
    const user = currentLocalStorage.filter((el) =>  { console.dir(el); return el['id'] === id});

    return (
        <div className="p-2">
            <h3 className="mb-5">Мои учетные данные</h3>

            <div className="wrapper col-md-4 mx-auto mb-3 p-3 border border-secondary">
                <div className="user-item">
                    <span className="user-cell__title text-left">Id:</span> 
                    <span className="">{user[0].id}</span>
                </div>
                <div className="user-item">
                    <span className="user-cell__title text-left">Username:</span> 
                    <span className="">{user[0].username}</span>
                </div>
                <div className="user-item">
                    <span className="user-cell__title text-left">Email:</span> 
                    <span className="">{user[0].email}</span>
                </div>
                <div className="user-item">
                    <span className="user-cell__title text-left">Password:</span> 
                    <span className="">{user[0].password}</span>
                </div>
            </div>

            <button type="button" className="btn btn-blue d-block mb-3 mx-auto" onClick={() => {window.location.hash =`/FormEdit/${user[0].id}`;}}>Редактировать данные</button>
            <a className="btn btn-secondary mx-auto" href="/">Выйти из аккаунта</a>
        </div>
    )
}

export default myAccount;