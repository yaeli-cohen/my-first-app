import { useState } from 'react'

// טופס הוספת משימה — מחזיק את הטקסט שהוקלד, ובשליחה מודיע לאב
function TaskForm({ onAddTask }) {
  // ה-state של מה שהמשתמש מקליד בשדה
  const [title, setTitle] = useState('')

  // נקרא כששולחים את הטופס (לחיצה על כפתור או Enter)
  function handleSubmit(event) {
    event.preventDefault() // מונע מהדפדפן לרענן את הדף

    onAddTask(title) // מבקשים מהאב להוסיף את המשימה
    setTitle('') // מנקים את השדה, שיהיה מוכן למשימה הבאה
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task">משימה חדשה</label>
      <input
        id="new-task"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="מה צריך לעשות?"
      />
      <button type="submit">הוסף</button>
    </form>
  )
}

export default TaskForm
