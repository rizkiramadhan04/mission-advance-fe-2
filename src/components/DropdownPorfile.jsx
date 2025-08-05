import { useState, useRef, useEffect } from "react";
import axios from 'axios';

import UserLogo from '../assets/images/user.png';
import AngelDown from '../assets/images/angel-down.png';

export default function DropdownProfile() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("editUser");
    window.location.href = "/";
  };

  const handleEditData = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.id) {
      localStorage.setItem("editUser", JSON.stringify(loggedInUser));
      window.location.href = "/update-profile";
    } else {
      alert("Data user tidak ditemukan");
    }
  };

  const handleDelete = async () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser || !loggedInUser.id) {
      alert("Data user tidak ditemukan");
      return;
    }

    const confirmDelete = window.confirm("Hapus user ini?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/users/${loggedInUser.id}`);

      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("editUser");

      alert("Akun berhasil dihapus");
      window.location.href = "/login";
    } catch (error) {
      console.error("Gagal hapus user:", error);
      alert("Terjadi kesalahan saat menghapus akun");
    }
  };

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Tombol (link) trigger dropdown */}
      <a
        href="#"
        className="flex items-center space-x-3 py-2"
        onClick={toggleMenu}
      >
        <img
          src={UserLogo}
          className="w-7 rounded-full"
          alt="User"
        />
        <span className="text-white">Profil</span>
      </a>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={handleEditData}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Edit Profile
            </button>
            <button
              onClick={handleDelete}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white"
            >
              Delete Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
