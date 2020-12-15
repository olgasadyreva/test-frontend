export const registr = (user) => {
  return {
    type: 'REGISTR',
    payload: user,
  }
}

export const editUser = (newState) => {
  return {
    type: 'EDIT USER',
    payload: newState
  }
}



