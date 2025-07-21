import React, { useState } from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const dummyUsers = [
  {
    id: 1,
    name: "Amitav Pusty",
    email: "amitav@example.com",
    role: "Student",
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: "Teacher",
    status: "Active",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Teacher",
    status: "Active",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Student",
    status: "Active",
  },
];

export default function AllUsersPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(dummyUsers);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setShowModal(false);
    setUserToDelete(null);
    // 🔗 Replace with your actual API call
    console.log("Deleted user ID:", id);
  };

  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setUserToDelete(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Users</h1>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
          onClick={() => navigate("/admin/dashboard/add-user")}
        >
          <FaUserPlus />
          Add New
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
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Inactive"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button
                      className="text-blue-600 hover:text-blue-800 transition"
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
                      onClick={() => openDeleteModal(user)}
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

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-red-600">
                {userToDelete?.name}
              </span>
              ?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(userToDelete.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
