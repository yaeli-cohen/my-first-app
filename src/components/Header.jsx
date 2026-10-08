import { useState } from 'react'

// קומפוננטת כותרת — מקבלת את פרטי המשתמש מהאב דרך props ומציגה אותם
// בנוסף, מחזיקה state מקומי של השם שהמשתמש מקליד במסך
function Header({ appTitle, userName, userRole, todayDate }) {
  // היוזר מתחיל מהשם שהגיע מהאב, ומשתנה לפי מה שמקלידים בשדה
  const [name, setName] = useState(userName)

  return (
    <header className="app-header">
      <h1>{appTitle}</h1>

      {/* שדה קלט — כל הקלדה מעדכנת את ה-state ומציגה מיד את הכותרת למעלה */}
      <div className="header-input">
        <label htmlFor="user-name">מה שמך?</label>
        <input
          id="user-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="הקלידו שם..."
        />
      </div>

      <p className="header-user">
        {name} — {userRole}
      </p>
      <p className="header-date">תאריך: {todayDate}</p>
    </header>
  )
}

export default Header
