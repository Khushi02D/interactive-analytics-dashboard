function Sales() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Sales
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Monitor sales performance and revenue
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Total Sales
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            $48,620
          </h2>

          <p className="text-sm text-green-600 mt-2">
            +12.4% this month
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Total Orders
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            8,942
          </h2>

          <p className="text-sm text-green-600 mt-2">
            +8.7% this month
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Average Order
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            $86.40
          </h2>

          <p className="text-sm text-green-600 mt-2">
            +4.3% this month
          </p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-6 p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Sales Overview
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Detailed sales information will appear here.
        </p>
      </div>
    </div>
  )
}

export default Sales