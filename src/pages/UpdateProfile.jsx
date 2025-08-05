// src/pages/UpdateProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Logo from '../assets/images/Logo.png';
import GoogleLogo from '../assets/images/google.png';
import BgImage from '../assets/images/image-login.jpeg';

const API_URL = import.meta.env.VITE_API_URL + "/users";

function UpdateProfile() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    password_confirm: ""
  });

  const [userId, setUserId] = useState(null);

  // Ambil data user dari localStorage saat pertama render
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("editUser"));

    if (!storedUser || !storedUser.id) {
      alert("Data user tidak ditemukan");
      window.location.href = "/login";
      return;
    }

    setUserId(storedUser.id);

    setForm({
      username: storedUser.username || "",
      password: storedUser.password || "",
      password_confirm: storedUser.password || "",
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (form.password !== form.password_confirm) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    try {
      const updatedUser = {
        username: form.username,
        password: form.password,
      };

      // Kirim update ke server
      await axios.put(`${API_URL}/${userId}`, updatedUser);

      // Simpan ke localStorage sebagai user yang sudah login
      localStorage.setItem("loggedInUser", JSON.stringify({ ...updatedUser, id: userId }));
      localStorage.removeItem("editUser");

      alert("Data berhasil diperbarui!");
      window.location.href = "/";
    } catch (error) {
      console.error("Gagal update user:", error);
      alert("Gagal memperbarui data");
    }
  };

  return (
      <div className="bg-cover" style={{ backgroundImage: `url(${BgImage})` }}>
        <div className="flex items-center justify-center h-screen">
          <section className="bg-black/90 w-1/3 h-auto mx-auto p-6 rounded-xl text-center">
            <div className="grid grid-rows justify-items-center my-2.5">
              <div className="icon">
                <img src={Logo} className="w-32" alt="image-logo" />
              </div>
              <div className="head my-7">
                <h1 className="text-3xl font-medium text-white">Update Profile</h1>
              </div>
              <div className="body-form grid grid-rows gap-y-4">

                <form onSubmit={handleUpdate}>
                  <div className="form-input-items text-white text-start my-2">
                    <label htmlFor="username" className="block text-sm/6 font-medium text-current">Username</label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-full bg-transparent pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white-600">
                        <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="block min-w-80 rounded-2xl min-h-12 grow py-1.5 pr-3 pl-1 text-white text-white-900 placeholder:text-white-400 focus:outline-none sm:text-sm/6" 
                        placeholder="Masukan username"
                        value={form.username}
                        onChange={handleChange}
                        autoComplete="username"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-input-items text-white text-start my-2">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-current">Kata Sandi</label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-full bg-transparent pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white-600">
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="block min-w-80 rounded-2xl min-h-12 grow py-1.5 pr-3 pl-1 text-base text-white-900 placeholder:text-white-400 focus:outline-none sm:text-sm/6" 
                        placeholder="Masukan kata sandi" 
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-input-items text-white text-start my-2">
                    <label htmlFor="password_confirmation" className="block text-sm/6 font-medium text-current">Konfirmasi Kata Sandi</label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-full bg-transparent pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white-600">
                        <input 
                        type="password" 
                        name="password_confirm" 
                        id="password_confirm" 
                        className="block min-w-80 rounded-2xl min-h-12 grow py-1.5 pr-3 pl-1 text-base text-white-900 placeholder:text-white-400 focus:outline-none sm:text-sm/6" 
                        placeholder="Masukan konfirmasi kata sandi"
                        value={form.password_confirm || ""}
                        onChange={handleChange}
                        autoComplete="current-password_confirm"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-white mt-1">
                      <small className="text-start">
                        Sudah punya akun? <a href="/login" className="font-bold">Masuk</a>
                      </small>
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="flex w-full justify-center rounded-full bg-[#3D4142] px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:cursor-pointer hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600">Update</button>
                  </div>
                </form>

                <small className="text-gray-400">Atau</small>
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-full bg-transparent px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs outline-1 outline-[#E7E3FC] hover:cursor-pointer hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600">
                    <img src={GoogleLogo} alt="google-icon" className="w-5 my-auto mr-5" />
                    Daftar dengan google
                  </button>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </div>
    )
}

export default UpdateProfile;
