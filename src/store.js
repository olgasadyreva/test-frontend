import { createStore } from 'redux';
import reducer from './reducers';

const initialState = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
const store = createStore(reducer, initialState);

store.subscribe(() => {
    localStorage.setItem('users', JSON.stringify(store.getState()));

  });

export default store;