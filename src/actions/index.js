export const auth = (isAuth) => {
  return {
      type: 'AUTH',
      payload: isAuth
  }
}

export const registr = (user) => {
  return {
      type: 'REGISTR',
      //payload: isRegistr,
      payload: user,
  }
}

export const editUser = (newState) => {
  return {
      type: 'EDIT USER',
      payload: newState
      //payload: id
  }
}



