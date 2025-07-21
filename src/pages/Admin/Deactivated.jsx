import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const initialUsers = [
  {
    id: 1,
    name: "Smruti Sahoo",
    email: "smruti@example.com",
    role: "Student",
    status: "Inactive",
  },
  {
    id: 2,
    name: "Jagat Hyoti Dash",
    email: "jagat@example.com",
    role: "Teacher",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Ganesh Prasad Roul",
    email: "ganesh@example.com",
    role: "Teacher",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Jony Samal",
    email: "jony@example.com",
    role: "Student",
    status: "Inactive",
  },
];

export default function DeActivated() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showDeleteAllPopup, setShowDeleteAllPopup] = useState(false);
  const navigate = useNavigate();

  const handleDeleteUser = () => {
    setUsers((prev) => prev.filter((user) => user.id !== selectedUser.id));
    setShowDeletePopup(false);
    setSelectedUser(null);
  };

  const handleDeleteAll = () => {
    setUsers([]);
    setShowDeleteAllPopup(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Deactivated Users</h1>
        <button
          onClick={() => setShowDeleteAllPopup(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          Delete All
        </button>
      </div>

      <div className="overflow-x-auto shadow rounded-lg bg-white">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-600 text-left uppercase text-xs font-semibold text-white">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition-all"
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button
                      className="text-blue-600 cursor-pointer hover:text-blue-800 transition "
                      onClick={() =>
                        navigate("/admin/dashboard/add-user", {
                          state: { id: user.id },
                        })
                      }
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 transition cursor-pointer"
                      onClick={() => {
                        setSelectedUser(user);
                        setShowDeletePopup(true);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete User Confirmation */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Confirm Delete
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Are you sure you want to delete user{" "}
              <strong>{selectedUser?.name}</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                onClick={() => setShowDeletePopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700 cursor-pointer"
                onClick={handleDeleteUser}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete All Confirmation */}
      {showDeleteAllPopup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Confirm Delete All
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Are you sure you want to delete <strong>all users</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                onClick={() => setShowDeleteAllPopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700 cursor-pointer"
                onClick={handleDeleteAll}
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
