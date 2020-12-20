import React from 'react';
import { Form } from 'reactstrap';
import { validateFields } from '../../Validation';
import { connect } from 'react-redux';
import store from '../../store';
import { auth, registr, editUser } from '../../actions';
import User from '../User/User';

const initialState = {
  username: {
    value: '',
    validateOnChange: false,
    error: ''
  },

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
  repeatpassword: {
    value: '',
    validateOnChange: false,
    error: ''
  },

  submitCalled: false,
  allFieldsValidated: false,
};

class FormRegistr extends React.Component {
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

const { username, email, password, repeatpassword } = this.state;
const usernameError = validateFields.validateUsername(username.value);
const emailError = validateFields.validateEmail(email.value);
const passwordError = validateFields.validatePassword(password.value);
const repeatpasswordError = validateFields.validaterepeatPassword(repeatpassword.value, password.value);


if ([usernameError, emailError, passwordError, repeatpasswordError].every(e => e === false)) {
  // no errors submit the form

  //Сохраняем введенные в форму данные
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
    const currentUser = {
      id: id,
      username: username.value,
      email: email.value,
      password: password.value
    };

    store.dispatch(registr(currentUser));

    /* const currentLocalStorage= JSON.parse(localStorage.getItem('users'));
    currentLocalStorage.push(currentUser);
    localStorage.setItem('users', JSON.stringify(currentLocalStorage)); */
    
    
   // clear state and show all fields are validated
   this.setState({ ...initialState, allFieldsValidated: true });
   this.showAllFieldsValidated();
}
else {
 // update the state with errors
    this.setState(state => ({
      formname: 'registr',
      titleLink: 'Авторизация',

      username: {
        ...state.username,
        validateOnChange: true,
        error: usernameError
      },

      email: {
        ...state.email,
        validateOnChange: true,
        error: emailError
      },
      password: {
        ...state.password,
        validateOnChange: true,
        error: passwordError
      },
      repeatpassword: {
        ...state.repeatpassword,
        validateOnChange: true,
        error: repeatpasswordError
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
  //console.dir(local);
  //if(local && JSON.parse(local.length !== 0)) {
   // let users= JSON.parse(localStorage.getItem('users'));
   //console.dir(Object.entries(users));

    const { username, email, password, repeatpassword, allFieldsValidated } = this.state;
    const {onBtnEditUserClick} = this.props;

    return (
      
      <div className="wrap">
        <header className="App-header ">Регистрация</header>

        <h2>store {store.getState().length}</h2>
        {store.getState().length == 0 ?
        <div>
            <p className="message">Зарегистрированных пользователей нет </p>
        </div>
        : null }
        

        <Form method='post' name="registr"
          className='container col-lg-6 mt-5 border border-dark rounded p-3 js-form' 
          onSubmit={e => this.handleSubmit(e)}>

          <div className="form-group">
          <label htmlFor="inputUserName">Username</label>
          <input 
            type='text'
            name='username'
            className='form-control'
            placeholder='Введите ваше имя'
            id='inputUserName'
            value={username.value}
            //onChange={this.handleUserInput}
            onChange={evt =>
              this.handleChange(validateFields.validateUsername, evt)
            }
            onBlur={evt =>
              this.handleBlur(validateFields.validateUsername, evt)
            }

            onFocus={this.handleFocusInput}/>

            <div className='text-danger'>{username.error}</div>
          </div>

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

            onFocus={this.handleFocusInput}
            message={this.state.message}/>

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

          <div className="form-group">
        <label htmlFor="inputRepeatPassword">Repeat Password</label>
        <input 
          type='password'
          name='repeatpassword'
          className='form-control'
          placeholder='Повторите пароль'
          id='inputRepeatPassword'
          value={repeatpassword.value}
          //onChange={this.handleUserInput}
          onChange={evt =>
            this.handleChange(validateFields.validaterepeatPassword, evt)
          }
          onBlur={evt =>
            this.handleBlur(validateFields.validaterepeatPassword, evt)
          }
          onFocus={this.handleFocusInput}/>

          <div className='text-danger'>{repeatpassword.error}</div>
          </div>

          <button
            type='submit'
            name='registr'
            className='btn btn-secondary btn-block'
            onClick={this.submitForm}
            onMouseDown={() => this.setState({ submitCalled: true })}>
              Зарегистрироваться
          </button>
        </Form>

        <div className="card-body">
        {allFieldsValidated && (
          <p className="text-success text-center">
            Вы зарегистрированы!
          </p>
        )}
        </div>
      </div>
)

}
}


const mapStateToProps = (state) => {
  return {
    users: state,
    //isAuth: state.isAuth,
    //isRegistr: state.isRegistr
  }
}

const mapDispatchToProps = (dispatch) => {
  //registr;
  return {
    //auth: (oldUser) => dispatch(auth(oldUser)),
    registr: (currentUser) => {dispatch(registr(currentUser))},
  }
}

export  default connect(mapStateToProps,mapDispatchToProps)(FormRegistr);

//export  default FormRegistr;