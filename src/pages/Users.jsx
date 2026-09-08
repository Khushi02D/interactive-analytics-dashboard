import { useState } from "react"

const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 3,
    name: "Aman Kumar",
    email: "aman@example.com",
    role: "Manager",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sneha Das",
    email: "sneha@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Rohan Patel",
    email: "rohan@example.com",
    role: "Admin",
    status: "Active",
  },
]

function Users() {
  const [search, setSearch] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Users
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage and view registered users
          </p>
        </div>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Name
                </th>

                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Email
                </th>

                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Role
                </th>

                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {user.name}
                    </td>

                    <td className="py-4 px-6 text-sm text-gray-600">
                      {user.email}
                    </td>

                    <td className="py-4 px-6 text-sm text-gray-600">
                      {user.role}
                    </td>

                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-8 text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users