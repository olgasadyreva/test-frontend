import validator from 'validator';

/*
 * This class contains methods for validating fields using 'validator.js' library methods
 * The methods return error message if validation failed and false otherwise
 * You can use all supported validators and sanitizers of 'validator.js' libaray
 * See their docs here https://github.com/validatorjs/validator.js
 */

class ValidateFields {
  /*
   * A method that takes in the email
   * Validates it
   * Returns the response either error or false if there is no error
   */
  validateUsername(username) {
    if (validator.isEmpty(username)) {
      return 'Поле username обязательно для заполнения';
    } else if (!validator.isLength(username, { min: 3 })) {
      return 'Имя должно содержать не менее 3 символов';
    }
    return false;
  }

   validateEmail(email) {
    if (validator.isEmpty(email)) {
      return 'Поле email обязательно для заполнения';
    } else if (!validator.isEmail(email)) {
      return 'Неверный адрес электронной почты';
    }
    return false;
  }

  validatePassword(password) {
    if (validator.isEmpty(password)) {
      return 'Поле password обязательно для заполнения';
    } else if (!validator.isLength(password, { min: 8 })) {
      return 'Пароль должен содержать не менее 8 символов';
    }
    return false;
  }

  validaterepeatPassword(repeatpassword, password) {
    if (validator.isEmpty(repeatpassword)) {
      return 'Поле repeat password обязательно для заполнения';
    } else if (!validator.isLength(repeatpassword, { min: 8 })) {
      return 'Повторный пароль должен содержать не менее 8 символов';
    }else if (password !== repeatpassword) {
      return 'Пароли не совпадают';
    }
    return false;
  }
}

const validateFields = new ValidateFields();

// export the class instance, so we can import and use it anywhere
export { validateFields };