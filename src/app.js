import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {sortByAmount,setTextFilter,setSortToggle} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();




store.dispatch(addExpense({description:'Rent bill',amount:1300}))
store.dispatch(addExpense({description:'DJ Equipment',amount:1200,note:'This is cool stuff'}))
store.dispatch(addExpense({description:'Water bill',amount:60}))
store.dispatch(addExpense({description:'Phone bill',amount:20}))
store.dispatch(addExpense({description:'Gas bill',amount:80,createdAt:3000}))
store.dispatch(setSortToggle())


console.log(store.getState())




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
