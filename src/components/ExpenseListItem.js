import React from 'react'
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';
import moment from 'moment'
import {Link} from 'react-router-dom'

const ExpenseList = ({id,description,amount,note,createdAt,referenceNumber,expenses,dispatch,history},props) => {
    return (
        <tr>
        <td>{referenceNumber}</td>
        <td><Link to={`/edit/${id}`}>{description}</Link></td>
        <td>${amount/100}</td> 
        <td>{note}</td> 
        <td>{moment(createdAt).format('MMM Do, YYYY')}</td> 
        <td>
        <Link to={`/edit/${id}`}><button>Edit</button></Link>
        <button onClick = {(e)=>{
            dispatch(removeExpense({id}))
        }}>Remove</button></td>
        </tr>
       
    );
    
    
}

const mapStateToProps = (state) => {
    return {
        expenses:state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseList)






