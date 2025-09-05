import React, { useState } from "react";
import { LayoutGrid, List, FileText, Plus, Edit, Trash2 } from "lucide-react";
import Header from "../../components/User/Header";

function MyApplications() {
  const [view, setView] = useState("grid");

  const applications = [
    {
      id: 1,
      title: "Leave Application",
      date: "Sep 1, 2025",
      status: "Draft",
    },
    {
      id: 2,
      title: "Internship Request",
      date: "Aug 28, 2025",
      status: "Submitted",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bonafide Certificate",
      date: "Aug 20, 2025",
      status: "Approved",
    },
  ];

  return (
    <>
    <Header />
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            My Applications
        </h1>

        {/* Actions (Toggle + New Application) */}
        <div className="flex items-center flex-wrap gap-3">
            {/* View Toggle */}
            <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${
                view === "grid" ? "bg-purple-100 text-purple-600" : "text-gray-500"
            }`}
            >
            <LayoutGrid size={20} />
            </button>
            <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${
                view === "list" ? "bg-purple-100 text-purple-600" : "text-gray-500"
            }`}
            >
            <List size={20} />
            </button>

            {/* New Application Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer">
            <Plus size={18} />
            <span>New Application</span>
            </button>
        </div>
        </div>

      {/* Applications */}
      {view === "grid" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
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
                  <h3 className="text-lg font-semibold text-gray-800">
                    {app.title}
                  </h3>
                  <p className="text-sm text-gray-500">Created: {app.date}</p>
                </div>
              </div>

              {/* Status */}
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 self-start
                  ${
                    app.status === "Draft"
                      ? "bg-yellow-100 text-yellow-700"
                      : app.status === "Submitted"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
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
            {applications.map((app) => (
                <tr
                key={app.id}
                className="border-b hover:bg-gray-50 transition cursor-pointer"
                >
                <td className="py-3 px-4 flex items-center gap-2">
                    <FileText size={18} className="text-purple-500" />
                    {app.title}
                </td>
                <td className="py-3 px-4">{app.date}</td>
                <td className="py-3 px-4">
                    <span
                    className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                        app.status === "Draft"
                        ? "bg-yellow-100 text-yellow-600"
                        : app.status === "Submitted"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
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
