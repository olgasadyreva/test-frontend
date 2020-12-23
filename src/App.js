import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import FormRegistr from './components/FormRegistr/FormRegistr';
import FormEdit from './components/FormEdit/FormEdit';
import User from './components/User/User';
import MyAccount from './components/MyAccount/MyAccount';

import { registr, editUser } from './actions';

class App extends React.Component {
  state =  {
    formName: "auth",
    isAuth: false,
    users: []
  }

  componentDidMount() {
    const local = localStorage.getItem('users');
    if(local && JSON.parse(local).length !== 0) {
      this.setState({users: Object.assign(JSON.parse(localStorage.getItem('users')))});
    }
  }

  render () {
    return (
      <div className="App pt-3">
        <Header/>

        <Switch>
          <Route key="Home" exact path='/' component={ Home }>
            <Home/>

            <NavLink to="/FormRegistr" className="btn btn-blue">Зарегистрироваться</NavLink>
          </Route>

          <Route key="FormRegistr" exact path='/FormRegistr' component={ FormRegistr }>
            { this.state.users.length !== 0 ?
            null
            :
            <ul className="users-list">
              {
                this.state.users.map((user) => { 
                  return (
                    <User
                      key = {user.id}
                      id = {user.id}
                      username = {user.name}
                      email= {user.email}
                      password = {user.password}
                    />
                   )
                 })
               }
            </ul>
            }

            <FormRegistr/>

            <NavLink to="/" className="btn btn-blue">Авторизоваться</NavLink>
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
  }
}

const mapDispatchToProps = () => {
  return {
    registr,
    editUser
}
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
