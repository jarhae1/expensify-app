import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses'
import { Link} from 'react-router-dom';

const AddExpensePage = (props) => (
  <div>
  <h1>Add Expense</h1>
 <ExpenseForm name="Add Expense" onSubmit={(expense)=>{
   props.dispatch(addExpense(expense))
   console.log(expense)
   props.history.push('/')
 }}/>
</div>
  );

  const mapStateToProps = (state) => {
    return{
      expenses:state.expenses
    }
  }


export default connect(mapStateToProps)(AddExpensePage)
  