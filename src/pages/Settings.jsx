import { useEffect, useState } from "react"

function Settings() {
    const [name, setName] = useState("Admin User")
const [email, setEmail] = useState("admin@example.com")
const [emailNotifications, setEmailNotifications] = useState(true)
const [userNotifications, setUserNotifications] = useState(true)
const [weeklyReports, setWeeklyReports] = useState(false)
const [theme, setTheme] = useState("Light")

useEffect(() => {
  const savedSettings = localStorage.getItem("dashboardSettings")

  if (savedSettings) {
    const settings = JSON.parse(savedSettings)

    setName(settings.name || "Admin User")
    setEmail(settings.email || "admin@example.com")
    setEmailNotifications(settings.emailNotifications ?? true)
    setUserNotifications(settings.userNotifications ?? true)
    setWeeklyReports(settings.weeklyReports ?? false)
    setTheme(settings.theme || "Light")
  }
}, [])

const handleSave = () => {
  localStorage.setItem(
    "dashboardSettings",
    JSON.stringify({
      name,
      email,
      emailNotifications,
      userNotifications,
      weeklyReports,
      theme,
    })
  )

  alert("Settings saved successfully!")
}

  return (
    <div
  className={
    theme === "Dark"
      ? "min-h-screen bg-slate-900 text-white p-1"
      : "min-h-screen bg-gray-100 text-gray-800 p-1"
  }
>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your dashboard preferences
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Profile Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>

            <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
/>
            
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>

<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
/>

          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Notifications
        </h2>

        <div className="space-y-4 mt-5">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4"
            />

            <span className="text-sm text-gray-700">
              Email notifications
            </span>
          </label>

          <label className="flex items-center gap-3">
            <input
  type="checkbox"
  checked={emailNotifications}
  onChange={(e) => setEmailNotifications(e.target.checked)}
  className="w-4 h-4"
/>

            <span className="text-sm text-gray-700">
              New user notifications
            </span>
          </label>

          <label className="flex items-center gap-3">
            <input
  type="checkbox"
  checked={userNotifications}
  onChange={(e) => setUserNotifications(e.target.checked)}
  className="w-4 h-4"
/>

            <span className="text-sm text-gray-700">
              Weekly reports
            </span>
          </label>

          <input
  type="checkbox"
  checked={weeklyReports}
  onChange={(e) => setWeeklyReports(e.target.checked)}
  className="w-4 h-4"
/>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Appearance
        </h2>

        <div className="mt-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Theme
          </label>

          <select
  value={theme}
  onChange={(e) => setTheme(e.target.value)}
  className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
>
  <option>Light</option>
  <option>Dark</option>
  <option>System Default</option>
</select>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="px-5 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
      >
        Save Changes
      </button>
    </div>
  )
}

export default Settings