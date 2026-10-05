// קומפוננטת כותרת — מקבלת את פרטי המשתמש מהאב דרך props ומציגה אותם
function Header({ appTitle, userName, userRole, todayDate }) {
  return (
    <header className="app-header">
      <h1>{appTitle}</h1>
      <p className="header-user">
        {userName} — {userRole}
      </p>
      <p className="header-date">תאריך: {todayDate}</p>
    </header>
  )
}

export default Header
