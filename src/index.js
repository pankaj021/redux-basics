import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import store from './store.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

// import {createStore,combineReducers} from 'redux';

// const userReducer = function (state = {},action){
//     switch(action.type){
//         case "CHANGE_NAME" : 
//             state = {...state, name : action.payload};
//             break;
//         case "CHANGE_AGE" :
//             state = {...state, age : action.payload};
//             break;
//         default : 
//             state = {}
//     }
//     return state
// }

// const tweetReducer = function (state = [],action){
//     return state
// }

// const reducers = combineReducers({
//     user : userReducer,
//     tweets : tweetReducer
// })

// const store = createStore(reducers)

// store.subscribe(()=>{
//     console.log("store changed",store.getState())
// })

// store.dispatch({type : "CHANGE_NAME", payload : "PANKAJ"});
// store.dispatch({type : "CHANGE_AGE", payload : 22});
