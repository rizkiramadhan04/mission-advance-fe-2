import { React } from 'react'

import Logo from '../assets/images/Logo.png';
import GoogleLogo from '../assets/images/google.png';
import BgImage from '../assets/images/image-login.jpeg';

function Login() {
    return (
      <div className="bg-cover" style={{ backgroundImage: `url(${BgImage})` }}>
        <div className="flex items-center justify-center h-screen">
          <section className="bg-black/90 w-1/3 h-auto mx-auto p-6 rounded-xl text-center">
            <div className="grid grid-rows justify-items-center my-2.5">
              <div className="icon">
                <img src={Logo} className="w-35" alt="image-logo" />
              </div>
              <div className="head my-7">
                <h1 className="text-3xl font-medium text-white">Masuk</h1>
                <p className="text-sm text-white mt-2">Selamat datang kembali!</p>
              </div>
              <div className="body-form grid grid-rows gap-y-4">

                <div className="form-input-items text-white text-start">
                  <label for="username" className="block text-sm/6 font-medium text-current">Username</label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-full bg-transparent pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white-600">
                      <input type="text" name="username" id="username" className="block min-w-85 min-h-12 grow py-1.5 pr-3 pl-1 text-base text-white-900 placeholder:text-white-400 focus:outline-none sm:text-sm/6" placeholder="Masukan username" />
                    </div>
                  </div>
                </div>

                <div className="form-input-items text-white text-start">
                  <label for="password" className="block text-sm/6 font-medium text-current">Kata Sandi</label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-full bg-transparent pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-white-600">
                      <input type="password" name="password" id="password" className="block min-w-85 min-h-12 grow py-1.5 pr-3 pl-1 text-base text-white-900 placeholder:text-white-400 focus:outline-none sm:text-sm/6" placeholder="Masukan kata sandi" />
                    </div>
                  </div>
                  <div className="flex justify-between text-white mt-1">
                    <small className="text-start">
                      Belum punya akun? <a href="#" className="font-bold">Daftar</a>
                    </small>
                    <small className="text-end">
                      <a href="#" className="font-bold">Lupa kata sandi?</a>
                    </small>
                  </div>
                </div>

                <div>
                  <button type="submit" className="flex w-full justify-center rounded-full bg-[#3D4142] px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:cursor-pointer hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600">Masuk</button>
                </div>
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