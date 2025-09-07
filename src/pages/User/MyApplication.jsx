import React, { useState } from "react";
import { LayoutGrid, List, FileText, Plus, Edit, Trash2 } from "lucide-react";
import Header from "../../components/User/Header";

function MyApplications() {
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("All");

  const applications = [
    { id: 1, title: "Leave Application", date: "Sep 1, 2025", status: "Draft" },
    { id: 2, title: "Internship Request", date: "Aug 28, 2025", status: "Pending" },
    { id: 3, title: "Bonafide Certificate", date: "Aug 20, 2025", status: "Approved" },
    { id: 4, title: "Hostel Request", date: "Aug 15, 2025", status: "Cancelled" },
    { id: 5, title: "Scholarship Form", date: "Aug 10, 2025", status: "Pending" },
  ];

  // filter applications
  const filteredApps =
    filter === "All" ? applications : applications.filter((app) => app.status === filter);

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
            My Applications
          </h1>

          {/* Actions (Filter + Toggle + New Application) */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">

            {/* Custom Filter Dropdown */}
            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                <option value="All">All</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Draft">Draft</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                {/* Down Arrow */}
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-md transition ${
                  view === "grid"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-500 hover:text-purple-600"
                }`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded-md transition ${
                  view === "list"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-500 hover:text-purple-600"
                }`}
              >
                <List size={20} />
              </button>
            </div>

            {/* New Application Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer whitespace-nowrap">
              <Plus size={18} />
              <span className="hidden sm:inline">New Application</span>
            </button>
          </div>

        </div>

        {/* Applications */}
        {view === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow hover:shadow-lg border border-gray-100 flex flex-col transition"
              >
                {/* Icon + Title */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                    <p className="text-sm text-gray-500">Created: {app.date}</p>
                  </div>
                </div>

                {/* Status */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 self-start
                  ${
                    app.status === "Draft"
                      ? "bg-yellow-100 text-yellow-700"
                      : app.status === "Pending"
                      ? "bg-gray-200 text-gray-700"
                      : app.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {app.status}
                </span>

                {/* Actions */}
                <div className="flex items-center justify-between mt-auto">
                  <button className="flex items-center text-sm text-purple-600 hover:underline cursor-pointer">
                    <Edit className="w-4 h-4 mr-1" /> Edit
                  </button>
                  <button className="flex items-center text-sm text-red-500 hover:underline cursor-pointer">
                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl shadow overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredApps.map((app) => (
                  <tr key={app.id} className="border-b hover:bg-gray-50 transition cursor-pointer">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <FileText size={18} className="text-purple-500" />
                      {app.title}
                    </td>
                    <td className="py-3 px-4">{app.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block text-xs font-medium px-3 py-1 rounded-full
                        ${
                          app.status === "Draft"
                            ? "bg-yellow-100 text-yellow-600"
                            : app.status === "Pending"
                            ? "bg-blue-100 text-blue-600"
                            : app.status === "Approved"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}

export default MyApplications;
