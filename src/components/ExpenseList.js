import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'
import {addExpense} from '../actions/expenses';
import {setSortToggle,sortByAmount,sortByDate} from '../actions/filters'
import {Link} from 'react-router-dom'

const ExpenseList = (props) => (
    <div>

    <h1>Expense List</h1>
    {props.expenses.length > 0 ?
    <table>
    <tbody>
    <tr>
    <th>Expense Number</th>
      <th>Description</th>
      <th>Amount
        <button onClick = {(e)=>{
            props.dispatch(sortByAmount())
            props.dispatch(setSortToggle())
        }}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sort_both_small.svg/910px-Sort_both_small.svg.png' height="10px" width="10px"/></button>
      </th> 
      <th>Notes</th>
      <th>CreatedAt
      <button onClick = {(e)=>{
        props.dispatch(sortByDate())
        props.dispatch(setSortToggle())
    }}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sort_both_small.svg/910px-Sort_both_small.svg.png' height="10px" width="10px"/></button>
      </th>
      <th>Remove</th>
    </tr>
    {props.expenses.map((expense,index)=>
    (<ExpenseListItem key={expense.id} referenceNumber={index} {...expense}/>))}
    </tbody>
    </table>
    :<p>No Expenses</p>}
    <button><Link to='/create'>Add Expense</Link></button>
 
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}


export default connect(mapStateToProps)(ExpenseList);

