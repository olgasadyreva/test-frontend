import React from 'react';
import { Form } from 'reactstrap';
import { validateFields } from '../../Validation';
import { connect } from 'react-redux';
import store from '../../store';
import { editUser } from '../../actions';

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

  submitCalled: false,
  allFieldsValidated: false,
  id: ''
};

class FormEdit extends React.Component {
  constructor(props) {
      super(props);
      this.state = initialState;
  }

  componentDidMount() {
    let url = window.location.pathname;
    let id = url.split("/");
    id = id[id.length-1];

    const currentStore = Object.values(store.getState());

    const user = currentStore.filter(el => el.id === id);

    const formElement = document.forms.edit;
    formElement.elements.username.value = user[0].username;
    formElement.elements.email.value = user[0].email;
    formElement.elements.password.value = user[0].password;

    this.setState(() => ({
      username: {
        value :  user[0].username,
      },
      email: {
        value :  user[0].email,
      },
      password: {
        value :  user[0].password,
      },
      id: id
    }));
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

  const { username, email, password } = this.state;
  const usernameError = validateFields.validateUsername(username.value);
  const emailError = validateFields.validateEmail(email.value);
  const passwordError = validateFields.validatePassword(password.value);

  if ([usernameError, emailError, passwordError].every(e => e === false)) {
    // no errors submit the form

    //Сохраняем введенные в форму данные
      const id = this.state.id;
        const currentUser = {
          id: id,
          username: username.value,
          email: email.value,
          password: password.value
        };

      const currentState = store.getState();

      const newState = Object.values(currentState).map(el => {
        if (el.id === currentUser.id) {
          return currentUser;
        }
        return el;
      });

      store.dispatch(editUser(newState));

      window.location.assign(`/MyAccount/${this.state.id}`);

    // clear state and show all fields are validated
    this.setState({ ...initialState, allFieldsValidated: true });
    this.showAllFieldsValidated();
  }
  else {
  // update the state with errors
      this.setState(state => ({
        titleLink: 'Редактирование профиля',

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
        }
      }));
    }

  }//end handlSubmit

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  cancelEdit() {
    window.history.back();
  }

  render () {
    const { username, email, password, allFieldsValidated } = this.state;

    return (
      <div className="wrap p-3">
        <h3 className="mb-4">Редактирование профиля</h3>

        <Form method="post" name="edit"
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
            name='save'
            className='btn btn-primary btn-block m-auto'
            onClick={this.submitForm}
            onMouseDown={() => this.setState({ submitCalled: true })}>
              Сохранить
          </button>
          <button
            type='button'
            name='cancel'
            className='btn btn-secondary btn-block'
            onClick={this.cancelEdit}>
              Отменить
          </button>
        </Form>

        <div className="card-body">
          {allFieldsValidated && (
            <p className="text-success text-center">
              Ваши данные обновлены!
            </p>
          )}
        </div>

        <hr/>

      </div>
    )
  }//end render

} //end class

const mapStateToProps = (state) => {
  return {
    users: state,
  }
}

const mapDispatchToProps = () => {
  return {
    editUser
  }
}

export  default connect(mapStateToProps,mapDispatchToProps)(FormEdit);
