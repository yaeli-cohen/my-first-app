// קומפוננטת רשימת משימות — מקבלת מערך משימות מהאב דרך props
// ומציגה עבור כל אחת את השם והסטטוס שלה
// בנוסף מקבלת פונקציה מהאב שתקרא לה כשלוחצים על משימה
function TaskList({ tasks, isDoneLabel, onToggleTask }) {
  return (
    <section className="task-list">
      <h2>רשימת המשימות</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {/* כפתור (ולא li) כדי שיהיה נגיש גם במקלדת ובקורא מסך */}
            <button
              type="button"
              className={task.done ? 'task done' : 'task'}
              onClick={() => onToggleTask(task.id)}
              aria-pressed={task.done}
            >
              <span className="task-title">{task.title}</span>
              <span className="task-status">
                {task.done ? isDoneLabel : 'בטיפול'}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TaskList
