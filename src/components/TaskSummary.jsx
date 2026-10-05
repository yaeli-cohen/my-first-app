// קומפוננטת סיכום — מקבלת מספרים מהאב דרך props ומציגה סיכום כללי
function TaskSummary({ totalTasks, doneTasks }) {
  const remainingTasks = totalTasks - doneTasks

  return (
    <section className="task-summary">
      <h2>סיכום</h2>
      <p>
        יש {totalTasks} משימות, מתוכן {doneTasks} הושלמו.
      </p>
      <p>נותרו {remainingTasks} משימות לביצוע.</p>
    </section>
  )
}

export default TaskSummary
