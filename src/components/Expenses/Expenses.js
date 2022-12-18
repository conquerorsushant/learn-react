import React,{useState} from "react";

import './Expenses.css'; 
import Card from "../UI-UX/Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props){
  const[filteredYear,setFilteredYear]=useState('2020')
   const filterChangeHandler=selectedYear=>{
setFilteredYear(selectedYear);
   };
const filteredExpenses= props.items.filter(expenses=> {
return expenses.date.getFullYear().toString()===filteredYear
});
   
      return(
        <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
          <ExpensesChart expenses={filteredExpenses}/>
       <ExpenseList items={filteredExpenses}/>
      </Card>
      </div>
      )

}
export default Expenses;