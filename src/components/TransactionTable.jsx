import { useState } from "react"

const transactions = [
  {
    id: "#TRX001",
    customer: "Rahul Sharma",
    product: "Premium Plan",
    amount: "$250",
    status: "Completed",
  },
  {
    id: "#TRX002",
    customer: "Priya Singh",
    product: "Basic Plan",
    amount: "$120",
    status: "Pending",
  },
  {
    id: "#TRX003",
    customer: "Aman Kumar",
    product: "Premium Plan",
    amount: "$350",
    status: "Completed",
  },
  {
    id: "#TRX004",
    customer: "Sneha Das",
    product: "Standard Plan",
    amount: "$180",
    status: "Cancelled",
  },
  {
    id: "#TRX005",
    customer: "Rohan Patel",
    product: "Premium Plan",
    amount: "$420",
    status: "Completed",
  },
]

function TransactionTable() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const [sortOrder, setSortOrder] = useState("none")

  const filteredTransactions = transactions
  .filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(search.toLowerCase()) ||
      transaction.id.toLowerCase().includes(search.toLowerCase()) ||
      transaction.product.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === "All" ||
      transaction.status === statusFilter

    return matchesSearch && matchesStatus
  })
  .sort((a, b) => {
    if (sortOrder === "low") {
      return parseFloat(a.amount.replace("$", "")) -
        parseFloat(b.amount.replace("$", ""))
    }

    if (sortOrder === "high") {
      return parseFloat(b.amount.replace("$", "")) -
        parseFloat(a.amount.replace("$", ""))
    }

    return 0
  })

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mt-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>

          <p className="text-sm text-gray-500">
            Search and filter transactions
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3">

          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>

<select
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
  className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="none">Sort Amount</option>
  <option value="low">Low to High</option>
  <option value="high">High to Low</option>
</select>

        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead>
        <tr className="border-b border-gray-100 transition-all duration-200 hover:bg-gray-50">

              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Transaction ID
              </th>

              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Customer
              </th>

              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Product
              </th>

              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Amount
              </th>

              <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                Status
              </th>

            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >

                  <td className="py-4 px-4 text-sm text-gray-700">
                    {transaction.id}
                  </td>

                  <td className="py-4 px-4 text-sm font-medium text-gray-800">
                    {transaction.customer}
                  </td>

                  <td className="py-4 px-4 text-sm text-gray-600">
                    {transaction.product}
                  </td>

                  <td className="py-4 px-4 text-sm font-semibold text-gray-800">
                    {transaction.amount}
                  </td>

                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : transaction.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-8 text-gray-500"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default TransactionTable