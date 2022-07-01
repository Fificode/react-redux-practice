import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//This connects our global state or store to the entire app
import { Provider } from 'react-redux';

//Import store from redux
import { legacy_createStore as createStore} from 'redux'
import allReducer from './reducers'
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

//ACTION
///A function that returns an object, the action that needs to be carried out by the reducer
//INCREMENT
// const increment = ( ) => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = ( ) => {
//   return {
//     type: 'DECREMENT'
//   }
// }

//REDUCER
//you can have multiple reducers
//A function that returns an object, and takes in both the state and action as arguments
// const counter = (state = 0, action) => {
// switch(action.type){
//   case 'INCREMENT': return state + 1;
//   case 'DECREMENT': return state - 1;
// }
// }

//STORE- Globalized state
//The store sends out the dispatch to collect the action and then takes it to the reducer
//The store takes in the reducer
// let store = createStore(counter);

//Display in the console
// store.subscribe(() => console.log(store.getState()));

//DISPATCH
//it dispatches an action
// store.dispatch(increment());
// store.dispatch(decrement());

 //The provider only takes in one argument i.e store

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
