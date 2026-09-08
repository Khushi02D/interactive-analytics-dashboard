function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Analytics
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Detailed analytics and performance insights
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Conversion Rate</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            24.8%
          </h2>
          <p className="text-sm text-green-600 mt-2">
            +5.2% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Average Order Value</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            $86.40
          </h2>
          <p className="text-sm text-green-600 mt-2">
            +3.8% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Customer Retention</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            78.5%
          </h2>
          <p className="text-sm text-green-600 mt-2">
            +2.4% from last month
          </p>
        </div>
      </div>
    </div>
  )
}

export default Analytics