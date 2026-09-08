function DateFilter({ selectedRange, setSelectedRange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <label className="text-sm font-medium text-gray-600">
        Date Range:
      </label>

      <select
        value={selectedRange}
        onChange={(e) => setSelectedRange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="90">Last 90 Days</option>
        <option value="365">This Year</option>
      </select>
    </div>
  )
}

export default DateFilter