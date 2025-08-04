import { useState, useRef, useEffect } from "react";

import UserLogo from '../assets/images/user.png';
import AngelDown from '../assets/images/angel-down.png';

export default function DropdownProfile() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.preventDefault(); // mencegah reload halaman
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("editUser");
    window.location.href = "/";
  };

  const handleEditData = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (loggedInUser) {
      // cari index user di localStorage
      const index = users.findIndex(
        (u) =>
          u.username === loggedInUser.username &&
          u.password === loggedInUser.password
      );

      if (index !== -1) {
        localStorage.setItem("editUser", JSON.stringify(loggedInUser));
        localStorage.setItem("editIndex", index);
        window.location.href = "/update-profile";
      } else {
        alert("Data user tidak ditemukan");
      }
    } else {
      alert("Data user tidak ditemukan");
    }
  };

  const handleDelete = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!loggedInUser) {
      alert("Data user tidak ditemukan");
      return;
    }

    if (window.confirm("Hapus user ini?")) {
      const updatedUsers = users.filter(
        (u) =>
          u.username !== loggedInUser.username ||
          u.password !== loggedInUser.password
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // hapus juga loggedInUser
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("editUser");
      alert("Akun berhasil dihapus");
      window.location.href = "/login";
    }
  };

  // Tutup menu jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
