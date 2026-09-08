import { NavLink } from "react-router-dom"
function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 w-64 min-h-screen
        bg-slate-900 text-white p-5 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">
            Analytics
          </h1>

          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2">
         
<NavLink
  to="/"
  className={({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-700 text-white font-medium"
        : "hover:bg-slate-700"
    }`
  }
>
  📊 Dashboard
</NavLink>

      <NavLink
  to="/analytics"
  className={({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-700 text-white font-medium"
        : "hover:bg-slate-700"
    }`
  }
>
  📈 Analytics
</NavLink>

          <NavLink
  to="/users"
  className={({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-700 text-white font-medium"
        : "hover:bg-slate-700"
    }`
  }
>
  👥 Users
</NavLink>

          <NavLink
  to="/sales"
  className={({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-700 text-white font-medium"
        : "hover:bg-slate-700"
    }`
  }
>
  💰 Sales
</NavLink>

          <NavLink
  to="/reports"
  className={({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-700 text-white font-medium"
        : "hover:bg-slate-700"
    }`
  }
>
  📋 Reports
</NavLink>

          <NavLink
  to="/settings"
  className={({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-700 text-white font-medium"
        : "hover:bg-slate-700"
    }`
  }
>
  ⚙️ Settings
</NavLink>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar