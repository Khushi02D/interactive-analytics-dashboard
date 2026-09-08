const reports = [
  {
    name: "Monthly Sales Report",
    period: "August 2026",
    type: "Sales",
    status: "Ready",
  },
  {
    name: "Revenue Performance",
    period: "August 2026",
    type: "Revenue",
    status: "Ready",
  },
  {
    name: "User Activity Report",
    period: "August 2026",
    type: "Users",
    status: "Ready",
  },
  {
    name: "Quarterly Business Report",
    period: "Q3 2026",
    type: "Business",
    status: "Ready",
  },
]

function Reports() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Reports
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            View and manage your business reports
          </p>
        </div>

        <button
          onClick={() => alert("Report generation started!")}
          className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition"
        >
          + Generate Report
        </button>
      </div>

      {/* Report Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Total Reports
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            24
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Reports This Month
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            8
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Available Reports
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            12
          </h2>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Reports
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Recently generated business reports
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Report Name
                </th>

                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Period
                </th>

                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Type
                </th>

                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.name}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-6 font-medium text-gray-800">
                    {report.name}
                  </td>

                  <td className="py-4 px-6 text-sm text-gray-600">
                    {report.period}
                  </td>

                  <td className="py-4 px-6 text-sm text-gray-600">
                    {report.type}
                  </td>

                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {report.status}
                    </span>
                  </td>

                  <td className="py-4 px-6">
                    <button
                      onClick={() =>
                        alert(`${report.name} selected`)
                      }
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Reports