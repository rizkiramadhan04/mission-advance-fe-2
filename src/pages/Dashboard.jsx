// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(data);
  }, []);

  const handleEdit = (index) => {
    const selectedUser = users[index];
    localStorage.setItem('editUser', JSON.stringify(selectedUser));
    localStorage.setItem('editIndex', index);
    window.location.href = "/update-profile";
  };

  const handleDelete = (index) => {
    if (window.confirm("Hapus user ini?")) {
      const filtered = users.filter((_, i) => i !== index);
      setUsers(filtered);
      localStorage.setItem('users', JSON.stringify(filtered));
    }
  };

  return (
    <div className="min-h-screen max-w-screen items-center justify-center bg-[#161622] text-white p-4">
      <h3 className="text-xl font-bold mb-4">Daftar User</h3>
      <a href="/register" className='text-2xl text-white font-bold'>Add New Profile</a>
      <table className='table-auto w-full text-center text-sm border border-white'>
        <thead>
          <tr className='border-b border-white'>
            <th className='border-white border-r'>No</th>
            <th className='border-white border-r'>Nama</th>
            <th className='border-white border-r'>Email</th>
            <th className='border-white border-r'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className='border-b border-white'>
              <td className='border-r border-white'>{index + 1}</td>
              <td className='border-r border-white'>{user.name}</td>
              <td className='border-r border-white'>{user.email}</td>
              <td className='space-x-2'>
                <button onClick={() => handleEdit(index)} className="bg-blue-500 px-2 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(index)} className="bg-red-500 px-2 py-1 rounded">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
