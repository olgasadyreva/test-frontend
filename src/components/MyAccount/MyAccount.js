import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { editUser } from '../../actions';


const myAccount = (props) => {
    /* function componentWillUnmount() {
        alert(1);
            if(!localStorage.getItem("users")){
                localStorage.setItem("users", this.props.users);
            }
        } */

    const {editData, openModal,handleSubmit} = props;
        let hash = window.location.hash;
        let id = hash.split('/');
        id = id[id.length-1];
        
     const currentLocalStorage = Object.values(JSON.parse(localStorage.getItem('users')));
    //Ищем пользователя по id

    const user = currentLocalStorage.filter((el) =>  { console.dir(el); return el['id'] === id});

    return (
        <>
            <h1>Личный кабинет</h1>
            <div>Мои учетные данные</div>
            <div>id: {user[0].id}</div>
            <div>username: {user[0].username}</div>
            <div>email: {user[0].email}</div>
            <div>password: {user[0].password}</div>

            <button type="button" onClick={() => {window.location.hash =`/FormEdit/${user[0].id}`;}}>Редактировать данные</button>
            <a href="/">Выйти из аккаунта</a>
        </>
    )
}

export default myAccount;