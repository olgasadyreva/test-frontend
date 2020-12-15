import React from 'react';
import { Link } from 'react-router-dom';

let url = window.location.pathname;
let id = url.split("/");
id = id[id.length-1];

const myAccount = () => {
    const currentLocalStorage = Object.values(JSON.parse(localStorage.getItem('users')));

  //Ищем пользователя по id
    const user = currentLocalStorage.filter((el) =>  { return el['id'] === id});

    return (
        <div className="wrap col-md-4 col-xs-12 m-auto">
            <h3 className="mb-4">Личный кабинет</h3>

            <h4 className="mb-4">Мои учетные данные:</h4>

            <div className="container p-3 border border-dark rounded mw-30 mb-4 ">
                <div className="d-flex flex-row justify-content-between">
                    <div>id:</div>
                    <div>{user[0].id}</div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>username:</div>
                    <div>{user[0].username}</div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>email:</div>
                    <div>{user[0].email}</div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>password:</div>
                    <div>{user[0].password}</div>
                </div>
            </div>

            <button className="col-lg-8 col-md-10 col-sm-12 p-2 btn btn-block btn-primary mb-3 mx-auto" type="button" onClick={() => {window.location.assign(`/FormEdit/${user[0].id}`);}}>Редактировать данные</button>
            <Link to="/" className="col-lg-8 col-md-10 col-sm-12 d-block mx-auto p-2 btn btn-block btn-secondary" role="button">Выйти из аккаунта</Link>
         </div>
    )
}

export default myAccount;