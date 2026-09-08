import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const [adminName, setAdminName] = useState("Admin")
  const [adminEmail, setAdminEmail] = useState("admin@example.com")

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New user registered",
      time: "5 minutes ago",
      unread: true,
    },
    {
      id: 2,
      message: "New order received",
      time: "20 minutes ago",
      unread: true,
    },
    {
      id: 3,
      message: "Monthly report is ready",
      time: "1 hour ago",
      unread: true,
    },
  ])

  useEffect(() => {
    const savedSettings = localStorage.getItem("dashboardSettings")

    if (savedSettings) {
      const settings = JSON.parse(savedSettings)

      setAdminName(settings.name || "Admin")
      setAdminEmail(settings.email || "admin@example.com")
    }
  }, [])

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    )
  }

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">

      {/* Dashboard Title */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500 max-w-xl">
  Welcome back, {adminName}! Here's what's happening with your business today.
</p>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-4">

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications)
              setShowProfile(false)
            }}
            className="relative text-xl w-10 h-10 rounded-lg hover:bg-gray-100 transition"
          >
            🔔

            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50">

              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">
                  Notifications
                </h3>

                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div className="max-h-72 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                      notification.unread ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>

                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {notification.message}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* Admin Profile */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfile(!showProfile)
              setShowNotifications(false)
            }}
            className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-2 py-1 transition"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {adminName.charAt(0).toUpperCase()}
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-gray-800">
                {adminName}
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50">

              <div className="p-4 border-b border-gray-100">
                <p className="font-semibold text-gray-800">
                  {adminName}
                </p>

                <p className="text-xs text-green-600 mt-2">
  ● Account Active
</p>
              </div>

              <div className="p-2">
                <Link
  to="/settings"
  className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
  onClick={() => setShowProfile(false)}
>
  ✏️ Edit Profile
</Link>

<Link
  to="/settings"
  className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
  onClick={() => setShowProfile(false)}
>
  ⚙️ Settings
</Link>

                <button
                  onClick={() => alert("Logout functionality will be added later.")}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                >
                  🚪 Logout
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </header>
  )
}

export default Header