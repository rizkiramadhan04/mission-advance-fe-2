import  React, { useState }  from 'react'
import axios from "axios";

import Logo from '../assets/images/Logo.png';
import GoogleLogo from '../assets/images/google.png';
import BgImage from '../assets/images/image-login.jpeg';

const API_URL = import.meta.env.VITE_API_URL + "/users";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Ambil data dari localStorage dan pastikan array
      const usersFromLocal = localStorage.getItem("users");
      const storedUsers = Array.isArray(JSON.parse(usersFromLocal))
        ? JSON.parse(usersFromLocal)
        : [];

      // Cek duplikat username
      const isUsernameExist = storedUsers.some(
        (user) => user.username === form.username
      );
      if (isUsernameExist) {
        setMessage("Username already registered!");
        return;
      }

      // Simpan ke Firebase (gunakan .json di akhir URL jika pakai Realtime DB)
      const response = await axios.post(API_URL, {
        ...form,
        createdAt: new Date().toISOString(),
      });

      const newUser = { ...form, createdAt: new Date().toISOString() };

      // Simpan juga ke localStorage (opsional)
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setMessage("Registration successful!");
      setForm({
        username: "",
        email: "",
        password: "",
        password_confirm: "",
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.error("Registration failed", error);
      setMessage("Registration failed. Please try again.");
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
                <h1 className="text-3xl font-medium text-white">Daftar</h1>
                <p className="text-sm text-white mt-2">Selamat datang!</p>
              </div>
              <div className="body-form grid grid-rows gap-y-4">

                <form onSubmit={handleRegister}>
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
                    <label htmlFor="email" className="block text-sm/6 font-medium text-current">Email</label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-full bg-transparent pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white-600">
                        <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        className="block min-w-80 rounded-2xl min-h-12 grow py-1.5 pr-3 pl-1 text-white text-white-900 placeholder:text-white-400 focus:outline-none sm:text-sm/6" 
                        placeholder="Masukan eEmail"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
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
                    <button type="submit" className="flex w-full justify-center rounded-full bg-[#3D4142] px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:cursor-pointer hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600">Daftar</button>
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

        // <div classNameName="min-h-screen max-w-screen flex items-center justify-center bg-gray-900">
        //   <div classNameName="bg-white rounded-lg shadow-lg px-6 py-12 w-full max-w-sm">
        //     <div classNameName="text-center">
        //       <h2 classNameName="mt-6 text-2xl font-bold text-gray-900">Registration</h2>
        //     </div>

        //     <form classNameName="mt-8 space-y-6" onSubmit={handleRegister} method="POST">
        //       <div>
        //         <label htmlhtmlFor="name" classNameName="block text-sm font-medium text-gray-700">
        //           Full Name
        //         </label>
        //         <input
        //           id="name"
        //           name="name"
        //           type="name"
        //           value={form.name}
        //           onChange={handleChange}
        //           autoComplete="name"
        //           required
        //           classNameName="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
        //         />
        //       </div>

        //       <div>
        //         <label htmlhtmlFor="email" classNameName="block text-sm font-medium text-gray-700">
        //           Email address
        //         </label>
        //         <input
        //           id="email"
        //           name="email"
        //           type="email"
        //           value={form.email}
        //           onChange={handleChange}
        //           autoComplete="email"
        //           required
        //           classNameName="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
        //         />
        //       </div>

        //       <div>
        //         <label htmlhtmlFor="password" classNameName="block text-sm font-medium text-gray-700">
        //           Password
        //         </label>
        //         <input
        //           id="password"
        //           name="password"
        //           type="password"
        //           value={form.password}
        //           onChange={handleChange}
        //           autoComplete="current-password"
        //           required
        //           classNameName="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
        //         />
        //       </div>

        //       <div>
        //         <label htmlhtmlFor="password_confirm" classNameName="block text-sm font-medium text-gray-700">
        //           Password Confirmation
        //         </label>
        //         <input
        //           id="password_confirm"
        //           name="password_confirm"
        //           type="password"
        //           value={form.password_confirm || ""}
        //           onChange={handleChange}
        //           autoComplete="current-password_confirm"
        //           required
        //           classNameName="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
        //         />
        //       </div>

        //       <div>
        //         <button
        //           type="submit"
        //           classNameName="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        //         >
        //           Save
        //         </button>
        //       </div>
        //     </form>
        //   </div>
        // </div> 
    )
}

export default Register;