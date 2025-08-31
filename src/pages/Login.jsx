import { React, useState, useContext } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { UserContext } from '../context/UserContext';

import Logo from '../assets/images/Logo.png';
import GoogleLogo from '../assets/images/google.png';
import BgImage from '../assets/images/image-login.jpeg';

const API_URL = import.meta.env.VITE_API_URL + "/users";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { setUser: setUserContext } = useContext(UserContext); // GANTI NAMA DI SINI
  const user = useSelector(state => state.user.user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(API_URL);
      const usersObject = response.data;

      if (!usersObject) {
        setMessage("Data user kosong.");
        return;
      }

      const usersArray = Object.values(usersObject);
      const foundUser = usersArray.find(
        (u) =>
          u.username === form.username &&
          u.password === form.password
      );

      if (!foundUser) {
        setMessage("Username atau password salah!");
        return;
      }

      // Simpan ke Redux
      dispatch(setUser(foundUser)); // Redux
      // Simpan ke Context
      setUserContext(foundUser);    // Context

      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      setMessage("Login berhasil! Mengalihkan...");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.error("Gagal login:", error);
      setMessage("Terjadi kesalahan saat login.");
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
              <h1 className="text-3xl font-medium text-white">Masuk</h1>
              <p className="text-sm text-white mt-2">Selamat datang kembali!</p>
            </div>
            <div className="body-form grid grid-rows gap-y-4">
              <form onSubmit={handleLogin}>
                <div className="form-input-items text-white text-start">
                  <label htmlFor="username" className="block text-sm/6 font-medium text-current">Username</label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-full bg-transparent pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white-600">
                      <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="block rounded-2xl bg-white/15 min-w-80 min-h-12 grow py-1.5 pr-3 pl-1 text-base text-white-900 placeholder:text-white-400 focus:outline-none sm:text-sm/6" 
                        placeholder="Masukan username"
                        onChange={handleChange}
                        value={form.username}
                        autoComplete="username"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-input-items text-white text-start">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-current">Kata Sandi</label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-full bg-transparent pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white-600">
                      <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="block rounded-2xl bg-white/15 min-w-80 min-h-12 grow py-1.5 pr-3 pl-1 text-base text-white-900 placeholder:text-white-400 focus:outline-none sm:text-sm/6" 
                        placeholder="Masukan kata sandi" 
                        onChange={handleChange}
                        value={form.password}
                        autoComplete="password"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-white mt-1">
                    <small className="text-start">
                      Belum punya akun? <a href="/register" className="font-bold">Daftar</a>
                    </small>
                    <small className="text-end">
                      <a href="/register" className="font-bold">Lupa kata sandi?</a>
                    </small>
                  </div>
                </div>

                <div>
                  <button type="submit" className="flex w-full justify-center rounded-full bg-[#3D4142] px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:cursor-pointer hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600">Masuk</button>
                </div>
                {message && <div className="mt-2 text-white">{message}</div>}
              </form>

              <small className="text-gray-400">Atau</small>
              <div>
                <button type="submit" className="flex w-full justify-center rounded-full bg-transparent px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs outline-1 outline-[#E7E3FC] hover:cursor-pointer hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600">
                  <img src={GoogleLogo} alt="google-icon" className="w-5 my-auto mr-5" />
                  Masuk dengan google
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;