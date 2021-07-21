import ExpenseItem from './components/ExpenseItem'
const expenses = [
  {
    id: 'e1',
    title: 'Toiler Paper',
    amount: 94.12,
    date: new Date(2021, 2, 1)
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e3',
    title: 'New TV',
    amount: 100.67,
    date: new Date(2021, 4, 28)
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 49.67,
    date: new Date(2021, 5, 26)
  },
]

function App() {
  return (
    <div className="App">
      <h1>react complete guide</h1>
      {
        expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            expenseDate={item.date}
            expenseTitle={item.title}
            expenseAmount={item.amount}/>
        ))
      }
    </div>
  );
}

export default App;
