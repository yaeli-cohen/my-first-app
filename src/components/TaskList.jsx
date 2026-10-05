// קומפוננטת רשימת משימות — מקבלת מערך משימות מהאב דרך props
// ומציגה עבור כל אחת את השם והסטטוס שלה
function TaskList({ tasks, isDoneLabel }) {
  return (
    <section className="task-list">
      <h2>רשימת המשימות</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.done ? 'task done' : 'task'}>
            <span className="task-title">{task.title}</span>
            <span className="task-status">
              {task.done ? isDoneLabel : 'בטיפול'}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TaskList
