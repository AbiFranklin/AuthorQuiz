import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {authors} from './Components/data'
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

let store = Redux.createStore(reducer)

function reducer(state = {authors, total: 0, correct: 0}, action) {
    switch (action.type) {
        case 'WRONG': {
            return Object.assign({}, state, { total: state.total + 1})};
        case 'CORRECT': {
            return Object.assign({}, state, { correct: state.correct + 1, total: state.total + 1})};
        case 'RESET': {
            return Object.assign({}, state, { correct: 0, total: 0})};
        default: return state;
    }
    return state; 
}

ReactDOM.render(
    <ReactRedux.Provider store={store}><AuthorQuiz/></ReactRedux.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
