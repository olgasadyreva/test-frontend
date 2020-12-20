/* const initialState = {
    users: [],
    //isAuth: false,
    //isRegistr: false
} */

const users = (state = [], action) => {
  switch (action.type) {
//const reducer = (state = initialState, action) => {
    //switch (action.type) {

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
          //console.log(action.payload);
          //debugger;
          return action.payload;
            
         // console.log(action.payload);
         // const editUser = action.payload.id;
          //console.dir(Object.values(state));
          //const editUser = Object.values(state).filter(user => user.id === action.payload['id']);
         // const currentStore = action.payload.state;
          
            //return Object.values(state).filter(user => user.id === action.payload['id']);

            // заменяемый объект
/* const newObject = {
  id: 7;
  key: 'value';
}; */
// исходный массив
//const objectList = getList();

// результирующй массив
/* const newList = objectList.map(o => {
  if (o.id === newObject.id) {
    return newObject;
  }
  return o;
}); */
            
            //...state,
            /* {
              id: action.payload.id,
              username: action.payload.username,
              email: action.payload.email,
              password: action.payload.password
            } */
          
             // return state.filter(user => user.id === action.payload.id);

        // case ('REGISTR'):
         //console.dir(action.payload);
         // const previousState = state;
         // console.log(previousState);

         // const newUser = action.username ? {user: action.username} : {}
           // const newEmail = action.email ? {email: action.email} : {}
            //const newPassword = action.password ? {password: action.password} : {}
            /* return Object.assign({}, state, {
              users: action.payload
            }); */

          /*return {
                ...state, */
                
               /*  {
                  id: action.payload.id,
                  action.payload.username['value'],
                  action.payload.email['value'],
                  action.payload.password['value']
                } */
                  //...previousState,
                  /* id: action.payload.id,
                  action.payload.username['value'],
                  action.payload.email['value'],
                  action.payload.password['value']
                } */
              //}
          //  }
        
        
// }

        /* case ('EDIT'):
          return {
              ...state,
              users: action.payload,
          } */
          
        /* case ('EDIT USER'):
          return state.filter(comment => comment.id !== action.payload.id); 
           

            return {
                ...state,
               users: state.map(user => {
                  if(user.id === action.payload) {
                    return {
                      user
                      //likes: action.payload.likes,
                    }
                  }
                  return user;
                })
              }; */

        default:
            return state
    }
}

export default users;