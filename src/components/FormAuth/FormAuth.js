import React from 'react';
import { Form } from 'reactstrap';
import { validateFields } from '../../Validation';
import store from '../../store';
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

handleSubmit(e) {
  e.preventDefault();

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

  if(user.length !== 0) {
    //Отправляем пользователя на страницу аккаунта
    const id = user[0]['id'];
    window.location.hash = `/MyAccount/${id}`;
  }
  else {
    alert("Вы не зарегистрированы!");
    this.setState({ ...initialState, allFieldsValidated: false });
  }
}
else {
 // update the state with errors
    this.setState(state => ({
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

   let users= JSON.parse(localStorage.getItem('users'));
    const { email, password, allFieldsValidated } = this.state;

    return (
      <div className="wrap p-3">
        <h3>Форма авторизации</h3>

        <Form method="post" name="auth" 
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
          className='btn btn-blue btn-block'
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
        <h3>Зарегистрированные пользователи</h3>

        <ul className="users-list mt-5">

          { users && users.length !== 0 ?
            <li className="user-item">
              <div className="user-cell user-cell__title">Username</div>
              <div className="user-cell user-cell__title">Email</div>
              <div className="user-cell user-cell__title">Password</div>
            </li>
          : null}

         { users && users.length !== 0 ?

            Object.values(users).map((user) => {

              return (

                <User
                  key = {user.id}
                  id = {user.id}
                  username = {user.username}
                  email = {user.email}
                  password= {user.password}
                  className="user-item"
                  onBtnEditUsersClick = { () => this.props.editUser(user)}
                />
              )
            })
            :
            <p className="text-danger text-center">Зарегистрированных пользователей нет!</p>
          }
          
        </ul>
      </div>
    )
}//end render

} //end class

export  default FormAuth;