import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const[isEditing,setIsEditing]=useState(false);
    const startEditingHandler = ()=>{
        setIsEditing(true);
       };
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
       const expenseData={
        id:Math.random().toString(),
        ...enteredExpenseData
        
       };
       console.log(expenseData);
       props.onAddExpense(expenseData);
       setIsEditing(false);

       
       
    };
    const stopEditingHandler=()=>{
        setIsEditing(false);
    };

return(
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
)
};
export default NewExpense;