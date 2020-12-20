import React from 'react';
import { Form } from 'reactstrap';
import { validateFields } from '../../Validation';
import store from '../../store';
//import { auth, registr, editUser } from '../../actions';
import User from '../User/User';

const initialState = {
  email: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  password: {
    value: '',
    validateOnChange: false,
    error: ''
  },
 
  submitCalled: false,
  allFieldsValidated: false,
};

class FormAuth extends React.Component {
  constructor(props) {
      super(props);
      this.state = initialState;
  }

/*
 * validates the field onBlur if sumbit button is not clicked
 * set the validateOnChange to true for that field
 * check for error
 */

handleBlur(validationFunc, evt) {
  const field = evt.target.name;
  // validate onBlur only when validateOnChange for that field is false
  // because if validateOnChange is already true there is no need to validate onBlur
  if (
    this.state[field]['validateOnChange'] === false &&
    this.state.submitCalled === false
  ) {
    this.setState(state => ({
      [field]: {
        ...state[field],
        validateOnChange: true,
        error: validationFunc(state[field].value)
      }
    }));
  }
  return;
}

/*
 * update the value in state for that field
 * check for error if validateOnChange is true
 */
handleChange(validationFunc, evt) {
  const field = evt.target.name;
  const fieldVal = evt.target.value;
  this.setState(state => ({
    [field]: {
      ...state[field],
      value: fieldVal,
      error: state[field]['validateOnChange'] ? validationFunc(fieldVal) : ''
    }
  }));
}

handleSubmit(evt) {
  evt.preventDefault();
  
/*
* validate all fields
* check if all fields are valid if yes then submit the Form
* otherwise set errors for the feilds in the state
*/

const { email, password } = this.state;
const emailError = validateFields.validateEmail(email.value);
const passwordError = validateFields.validatePassword(password.value);

if ([emailError, passwordError].every(e => e === false)) {
  // no errors submit the form

  //получает текущее сотсояние хранилища
  const currentStore = Object.values(store.getState());
 //Проверяем, зарегистрирован ли такой email
  const user = currentStore.filter(el => el.email === email.value);
  //alert(user[0]['id']);
  //const currentLocalStorage = Object.values(JSON.parse(localStorage.getItem('users')));
  
  //console.dir(currentLocalStorage.length);
  
 
   // const user = currentLocalStorage.filter((el) =>  { console.dir(el); return el['email'] === email.value});
    
    //const user = currentLocalStorage.filter(el =>el[2]['email'] === email.value); 

    //console.dir(user);
    //console.dir(typeof(user));
    //console.log(user.length);
    
    if(user.length !== 0) {
      
      alert('user exist');
       //Сохраняем введенные в форму данные
     //window.location.assign(`/MyAccount/${id}`);
      const id = user[0]['id'];
      //window.location = "http://www.w3schools.com";
      //window.location.assign(`/MyAccount/${id}`);
      window.location.hash = `/MyAccount/${id}`;
      //console.dir(id);
      
     /*  const currentUser = {
      id: id,
      email: email.value,
      password: password.value
      };
      console.dir(currentUser);
      store.dispatch(auth(currentUser));
      
      window.location.assign(`/MyAccount/${currentUser.id}`); */
    }
    else {
      alert('Вы не зарегистрированы!');
      this.setState({ ...initialState, allFieldsValidated: false });
      //this.showAllFieldsValidated();
    }
    
    //alert(user);
   // const user = currentStore.filter(el => el.email === email.value);
   // alert(user[0]['id']);

 

  
  
     /*  const user = currentLocalStorage.every(el =>  { return el['email'] === id});
    const user = currentStore.filter(el => el.email === email.value);
    alert(user[0]['id']); */

    //store.dispatch(auth(currentUser));
    //localStorage.setItem('users', JSON.stringify(currentUser));

   // clear state and show all fields are validated
   //this.setState({ ...initialState, allFieldsValidated: true });
   //this.showAllFieldsValidated();

 // window.location.href = `/MyAccount/${id}`;
} else {
 // update the state with errors
    this.setState(state => ({
      formname: 'edit',
      titleLink: 'Авторизация',

      email: {
        ...state.email,
        validateOnChange: true,
        error: emailError
      },
      password: {
        ...state.password,
        validateOnChange: true,
        error: passwordError
      }
    }));
  }

}//end handlSubmit

showAllFieldsValidated() {
  setTimeout(() => {
    this.setState({ allFieldsValidated: false });
  }, 1500);
}

render () {

  //const local = localStorage.getItem('users');
  //if(local && JSON.parse(local.length !== 0)) {

   let users= JSON.parse(localStorage.getItem('users'));
    const { email, password, allFieldsValidated } = this.state;

    

    return (
      <div className="wrap">
        <h3>Форма авторизации</h3>

        <h2>{store.getState().length}</h2>

        <Form method='post' name="auth"
          className='container col-lg-6 mt-5 border border-dark rounded p-3 js-form' 
          onSubmit={e => this.handleSubmit(e)}>

        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='Введите ваш Email'
            id='inputEmail'
            value={email.value}
            //onChange={this.handleUserInput}
            onChange={evt =>
              this.handleChange(validateFields.validateEmail, evt)
            }
            onBlur={evt =>
              this.handleBlur(validateFields.validateEmail, evt)
            }

            onFocus={this.handleFocusInput}/>

            <div className='text-danger'>{email.error}</div>
        </div>

        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='Введите ваш пароль'
            id='inputPassword'
            value={password.value}
            onChange={evt =>
              this.handleChange(validateFields.validatePassword, evt)
            }
            onBlur={evt =>
              this.handleBlur(validateFields.validatePassword, evt)
            }/>

          <div className='text-danger'>{password.error}</div>
        </div>

        <button
          type='submit'
          name='auth'
          className='btn btn-secondary btn-block'
          onClick={this.submitForm}
          onMouseDown={() => this.setState({ submitCalled: true })}>
            Войти
        </button>
      </Form>

        <div className="card-body">
          {allFieldsValidated && (
            <p className="text-success text-center">
              Вы успешно авторизовались!
            </p>
          )}
        </div>

        <hr/>

       { users && users.length !== 0 ? 
          <ul className="users-list">
            {
              Object.values(users).map((user) => {

                return (

                  <User
                    key = {user.id}
                    id = {user.id}
                    username = {user.username}
                    email = {user.email}
                    password= {user.password}
                    onBtnEditUsersClick = { () => this.props.editUser(user)}
                  />
                )
              })
            }
        </ul>
        :
          <h3>Зарегистрированных пользователей нет!</h3>
        }

      </div>
    )
  //enf if
}//end render

} //end class

/* const mapStateToProps = (state) => {
  return {
    users: state,
    //isAuth: state.isAuth,
    //isRegistr: state.isRegistr
  }
} */

/* const mapDispatchToProps = (dispatch) => {
  //registr;
  return {
    auth: (oldUser) => dispatch(auth(oldUser)),
    //registr: (currentUser) => {dispatch(registr(currentUser)); console.log(store.dispath.type)},
  }
} */

//export  default connect(mapStateToProps,mapDispatchToProps)(FormAuth);

export  default FormAuth;