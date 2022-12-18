import React from "react";
import ExpenseItems from './ExpenseItems';
import './ExpensesList.css';


const ExpenseList=(props)=>{
if(props.items.length===0){
    return<h2 className='expenses-list__fallback'>Found no expenses.</h2>
}
return(
    <ul className='expenses-list'>
        
   
    {props.items.map((expenses)=>
    (<ExpenseItems
     key={expenses.id} 
    title={expenses.title} 
    amount={expenses.amount} 
    date={expenses.date}/>
    ))
   };
    </ul>
)
}
export default ExpenseList;