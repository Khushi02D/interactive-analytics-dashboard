import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import KpiCard from "./components/KpiCard"
import RevenueChart from "./components/RevenueChart"
import SalesChart from "./components/SalesChart"
import CategoryChart from "./components/CategoryChart"
import TransactionTable from "./components/TransactionTable"
import DateFilter from "./components/DateFilter"

import { dashboardData } from "./data/dashboardData"

import Sales from "./pages/Sales"
import Reports from "./pages/Reports"
import Settings from "./pages/Settings"

import Analytics from "./pages/Analytics"
import Users from "./pages/Users"

function Dashboard() {
  const [selectedRange, setSelectedRange] = useState("30")

  const currentData = dashboardData[selectedRange]

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Overview
          </h1>

          <p className="text-sm text-gray-500">
            Track your business performance
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <DateFilter
            selectedRange={selectedRange}
            setSelectedRange={setSelectedRange}
          />

          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition"
          >
            🔄 Refresh Data
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        <KpiCard
          title="Total Users"
          value="24,580"
          change="+12.5% this month"
          icon="👥"
        />

        <KpiCard
          title="Revenue"
          value="$48,620"
          change="+8.2% this month"
          icon="💰"
        />

        <KpiCard
          title="Total Orders"
          value="8,942"
          change="+15.3% this month"
          icon="🛒"
        />

        <KpiCard
          title="Growth"
          value="18.7%"
          change="+4.6% this month"
          icon="📈"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 mt-6">
        <RevenueChart data={currentData.revenue} />
        <SalesChart data={currentData.sales} />
      </div>

      {/* Category Chart */}
      <div className="mt-6">
        <CategoryChart />
      </div>

      {/* Transactions */}
      <TransactionTable />
    </>
  )
}

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex-1 min-w-0">
        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden fixed top-4 left-4 z-30 bg-slate-900 text-white w-10 h-10 rounded-lg"
        >
          ☰
        </button>

        <Header />

        <main className="p-4 sm:p-6 lg:p-8">
          <Routes>
<Route
  path="/settings"
  element={<Settings />}
/>

       <Route
       path="/reports"
       element={<Reports />}
/>

           <Route
  path="/sales"
  element={<Sales />}
/>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/users"
              element={<Users />}
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App