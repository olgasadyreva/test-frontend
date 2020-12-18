import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

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
    users: []
  }

  componentDidMount() {
    const local = localStorage.getItem('users');
    if(local && JSON.parse(local).length !== 0) {

      this.setState({'users' : Object.assign(JSON.parse(localStorage.getItem('users')))});
    }
  }

  render () {

    return (
      <div className="App pt-5">
        <Header/>

        <Switch>
          <Route key="Home" exact path='/' component={ Home }>
            <Home>HOME</Home>

            <NavLink to="/FormRegistr" className="p-2 btn btn-primary">Регистрация</NavLink>
          </Route>

          <Route key="FormRegistr" exact path='/FormRegistr' component={ FormRegistr }>
            {this.state.users.length !== 0 ?
              null
              :
              <ul className="comments-list">
                {
                  this.state.users.map((user) => {
                    return (
                      <User
                        key = {user.id}
                        id = {user.id}
                        username = {user.name}
                        email= {user.email}
                        password = {user.password}/>
                    )
                  })
                }
              </ul>
            }

            <FormRegistr handleSubmit={this.handleSubmit}/>

            <NavLink to="/" className="p-2 btn btn-primary">Авторизация!!!!</NavLink>
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

const mapDispatchToProps = (dispatch) => {
  return {
    registr: (newUser) => dispatch(registr(newUser)),
    auth: (oldUser) => dispatch(registr(oldUser)),
    editUser: (id, state) => dispatch(editUser(id, state))
}
}


export default connect(mapStateToProps,mapDispatchToProps) (App);
