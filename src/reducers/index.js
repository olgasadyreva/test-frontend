const users = (state = [], action) => {
  switch (action.type) {
    case ('REGISTR'):
      return [
        ...state,
        {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password
        }
      ];

    case 'EDIT USER':
      return action.payload;

    default:
      return state
    }
}

export default users;