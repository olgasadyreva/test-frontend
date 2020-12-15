import React from 'react';
import { Form } from 'reactstrap';
import { validateFields } from '../../Validation';
import store from '../../store';
import User from '../User/User';
import { NavLink } from 'react-router-dom';

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
    const currentStore = Object.values(store.getState());
  
    const user = currentStore.filter(el => el.email === email.value);

    //Проверяем, арегистрирован ли такой email
      if(user.length !== 0) {

    //Сохраняем введенные в форму данные
        let id = user[0]['id'];

        const currentUser = {
        id: id,
        email: email.value,
        password: password.value
        };

        window.location.assign(`/MyAccount/${currentUser.id}`);
      }
      else {
        alert('Вы не зарегистрированы!');
      }

  }
  else {
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
    let users= JSON.parse(localStorage.getItem('users'));
    const { email, password, allFieldsValidated } = this.state;

    return (
      <div className="wrap p-3">
        <h3 className="mb-4">Форма авторизации</h3>

        <Form method='get' 
          name="auth"
          className='container col-lg-6 col-sm-10 border border-dark rounded p-3 js-form'
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
          className='btn btn-primary btn-block m-auto'
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

        <NavLink to="/FormRegistr" className="p-2 btn btn-primary">Регистрация</NavLink>

        <hr/>

        <h3 className="mt-4 mb-4">Зарегистрированные пользователи</h3>

       { users && users.length !== 0 ? 
          <div className="col-lg-8 col-md-12 users-list p-3 m-auto overflow-scroll">
            <div className="d-flex justify-content-center w-60 ">
              <div className="col-3 border border-primary p-2">Login</div>
              <div className="col-5 border border-primary p-2">Email</div>
              <div className="col-4 border border-primary p-2">Password</div>
            </div>
            {
              Object.values(users).map((user) => {

                return (

                  <User
                    className=""
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
        </div>
        :
          <p className="mt-4 mb-4 text-danger">Зарегистрированных пользователей нет!</p>
        }

      </div>
    )

  }//end render

} //end class

export  default FormAuth;