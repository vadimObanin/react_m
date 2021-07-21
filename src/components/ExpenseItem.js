import './ExpenseItem.css'
import ExpanseDate from './ExpanseDate'

function ExpenseItem(props) {



  return (
    <div className='expense-item'>
      <ExpanseDate expenseDate={props.expenseDate}/>
      <div className='expense-item__description'>
        <h2>{props.expenseTitle}</h2>
        <div className='expense-item__price'>${props.expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem