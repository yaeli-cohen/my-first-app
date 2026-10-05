import Header from './components/Header.jsx'
import TaskList from './components/TaskList.jsx'
import TaskSummary from './components/TaskSummary.jsx'
import './App.css'

function App() {
  // פרטי המשתמש — יועברו לקומפוננטת הכותרת
  const user = {
    name: 'שם מלא 1',
    role: 'תפקיד 1',
    date: '01/01/2000',
  }

  // רשימת המשימות — סטטית בלבד, אינה משתנה
  const tasks = [
    { id: 1, title: 'משימה 1', done: true },
    { id: 2, title: 'משימה 2', done: false },
    { id: 3, title: 'משימה 3', done: true },
    { id: 4, title: 'משימה 4', done: false },
  ]

  // חישוב הסיכום מתוך רשימת המשימות
  const totalTasks = tasks.length
  const doneTasks = tasks.filter((task) => task.done).length

  return (
    <div className="app">
      {/* העברת מידע מהאב לבנים דרך props */}
      <Header
        appTitle="ניהול משימות"
        userName={user.name}
        userRole={user.role}
        todayDate={user.date}
      />

      <TaskSummary totalTasks={totalTasks} doneTasks={doneTasks} />

      <TaskList tasks={tasks} isDoneLabel="הושלם" />
    </div>
  )
}

export default App
