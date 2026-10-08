import { useState } from 'react'
import Header from './components/Header.jsx'
import TaskForm from './components/TaskForm.jsx'
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

  // רשימת המשימות — עכשיו ב-state, כך שאפשר לשנות אותה והמסך יתעדכן
  const [tasks, setTasks] = useState([
    { id: 1, title: 'משימה 1', done: true },
    { id: 2, title: 'משימה 2', done: false },
    { id: 3, title: 'משימה 3', done: true },
    { id: 4, title: 'משימה 4', done: false },
  ])

  // פונקציה שהופכת את הסטטוס של משימה בודדת לפי ה-id שלה
  // היא בונה מערך חדש במקום לשנות את הקיים — כך React מזהה שהמידע השתנה
  function toggleTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    )
  }

  // פונקציה שמוסיפה משימה חדשה לסוף הרשימה
  function addTask(title) {
    // קודם מנקים רווחים מיותרים בקצוות, ואם נשאר ריק — לא מוסיפים כלום
    const cleanTitle = title.trim()
    if (!cleanTitle) return

    setTasks((prevTasks) => [
      ...prevTasks,
      // id חדש: המספר הבא אחרי ה-id הגדול ביותר הקיים
      // (זמני; בהמשך נלמד דרך בטוחה יותר ליצור מזהים)
      {
        id: prevTasks.length
          ? Math.max(...prevTasks.map((task) => task.id)) + 1
          : 1,
        title: cleanTitle,
        done: false,
      },
    ])
  }

  // חישוב הסיכום מתוך רשימת המשימות
  // החישוב רץ מחדש בכל רינדור, ולכן הסיכום תמיד מעודכן
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

      {/* הטופס מקבל את פונקציית ההוספה מהאב */}
      <TaskForm onAddTask={addTask} />

      {/* מעבירים גם את פונקציית השינוי, כדי שהבן יוכל לבקש מהאב לעדכן */}
      <TaskList tasks={tasks} isDoneLabel="הושלם" onToggleTask={toggleTask} />
    </div>
  )
}

export default App
