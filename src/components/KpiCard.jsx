function KpiCard({ title, value, change, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-2">
            {value}
          </h3>

          <p className="text-sm text-green-600 mt-2">
            {change}
          </p>
        </div>

        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default KpiCard