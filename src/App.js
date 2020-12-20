import React from 'react';
//import ReactDom from 'react-dom';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';


//import store from 'store';

import { connect } from 'react-redux';

import './App.css';


import Header from './components/Header/Header';
import Home from './components/Home/Home';

import FormAuth from './components/FormAuth/FormAuth';
import FormRegistr from './components/FormRegistr/FormRegistr';
import FormEdit from './components/FormEdit/FormEdit';
import User from './components/User/User';
import MyAccount from './components/MyAccount/MyAccount';


import { auth, registr, editUser } from './actions';
import store from './store';

class App extends React.Component {
  state =  {
    formName: "auth",
    isAuth: false,
    users: []
  }

  componentDidMount() {
    const local = localStorage.getItem('users');
    if(local && JSON.parse(local).length !== 0) {
      this.state.users =  Object.assign(JSON.parse(localStorage.getItem('users')));
    }
  }

  editData() {
    alert('edit');
    //store.dispatch(editUser(currentUser));
  }

  onBtnEditUserClick() {
    console.log('editUserClick');
  }

  render () {
   
    return (
      <div className="App pt-3">
        <Header/>
        <NavLink to="/FormRegistr">Регистрация</NavLink>
        <a href="/FormRegistr">Регистрация</a>
        <Switch>
          <Route key="Home" exact path='/' component={ Home }>
          {/* { store.getState().isAuth ? <Redirect from="/" to="/MyAccount:id" component={ MyAccount } /> : null} */}
            <Home/>

            <NavLink to="/FormRegistr">Регистрация</NavLink>
          </Route>

          <Route key="FormRegistr" exact path='/FormRegistr' component={ FormRegistr }>
            {this.state.users.length !== 0 ?
            null
            :
            <ul className="comments-list">{'list' + this.state.users.length}
              {
                this.state.users.map((user) => { 
                  return (
                     <User
                       key = {user.id}
                       id = {user.id}
                       username = {user.name}
                       email= {user.email}
                       password = {user.password}
                       // onBtnDeleteCommentClick = { () => this.props.removeComment(comment)}
                     />
                   )
                 })
               }
           </ul>
           
           }

          <FormRegistr handleSubmit={this.handleSubmit}/>

            <NavLink to="/" onClick={()=>{this.setState({formName : 'auth'})}}>Авторизация</NavLink>
          </Route>

          <Route key="FormEdit" exact path='/FormEdit/:id' component={ FormEdit }>
            <FormEdit/>
          </Route>

          <Route key="MyAccount" exact path='/MyAccount/:id' component={ MyAccount }>
            <MyAccount/>
          </Route>
        </Switch>
      </div>
    );
  };

}
const mapStateToProps = (state) => {
  return {
    users: state,
    //isAuth: false,
    //isRegistr: state.isRegistr */
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registr: (newUser) => dispatch(registr(newUser)),
    auth: (oldUser) => dispatch(registr(oldUser)),
   // registr,
    editUser: (id, state) => dispatch(editUser(id, state))
}
}


export default connect(mapStateToProps,mapDispatchToProps) (App);
