import React from 'react';
import './Expenseitems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI-UX/Card';


const ExpenseItems = (props) =>{
    
   
    return (
        <li>
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs.{props.amount}</div>
            </div>
            
            
        </Card>
        </li>
    )
}
export default ExpenseItems;