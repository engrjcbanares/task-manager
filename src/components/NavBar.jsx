import { Link, NavLink } from 'react-router'

function navLinkClass({ isActive }) {
  const base = 'rounded-md px-3 py-2 text-sm font-medium'
  return isActive
    ? `${base} bg-slate-900 text-white`
    : `${base} text-slate-300 hover:bg-slate-700 hover:text-white`
}

function NavBar() {
  return (
    <header className="bg-slate-800">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link to="/" className="text-lg font-bold text-white">
          Task Manager
        </Link>
        <div className="flex gap-1">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tasks" className={navLinkClass}>
            Tasks
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
