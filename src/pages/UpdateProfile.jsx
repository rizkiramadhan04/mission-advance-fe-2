// src/pages/UpdateProfile.js
import React, { useState, useEffect } from 'react';

function UpdateProfile() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('editUser'));
    const index = localStorage.getItem('editIndex');
    if (storedUser && index !== null) {
      setForm(storedUser);
      setEditIndex(parseInt(index));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (editIndex !== null) {
      users[editIndex] = form;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.removeItem('editUser');
      localStorage.removeItem('editIndex');
      alert("Data berhasil diperbarui!");
      window.location.href = "/";
    }
  };

  return (
        <div className="min-h-screen max-w-screen flex items-center justify-center bg-gray-900">
        <div className="bg-white rounded-lg shadow-lg px-6 py-12 w-full max-w-sm">
          <div className="text-center">
            {/* <img className="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" /> */}
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Registration</h2>
          </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 my-4 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 my-4 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 my-4 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handleUpdate}
                className="w-full flex justify-center my-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
        </div>
      </div>
    )
}

export default UpdateProfile;
