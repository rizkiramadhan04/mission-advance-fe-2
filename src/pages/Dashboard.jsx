// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/Logo.png';
import UserLogo from '../assets/images/user.png';
import AngelDown from '../assets/images/angel-down.png';
import ImageNetFilm1 from '../assets/images/next-film/next-film-1.png';
import ImageNetFilm2 from '../assets/images/next-film/next-film-2.png';
import ImageNetFilm3 from '../assets/images/next-film/next-film-3.png';
import ImageNetFilm4 from '../assets/images/next-film/next-film-4.png';
import ImageRatingFilm1 from '../assets/images/rating-film/rating-film-1.png';
import ImageRatingFilm2 from '../assets/images/rating-film/rating-film-2.png';
import ImageRatingFilm3 from '../assets/images/rating-film/rating-film-3.png';
import ImageRatingFilm4 from '../assets/images/rating-film/rating-film-4.png';
import ImageRatingFilm5 from '../assets/images/rating-film/rating-film-5.png';
import ImageTopFilm1 from '../assets/images/top-film/top-film-1.png';
import ImageTopFilm2 from '../assets/images/top-film/top-film-2.png';
import ImageTopFilm3 from '../assets/images/top-film/top-film-3.png';
import ImageTopFilm4 from '../assets/images/top-film/top-film-4.png';
import ImageTopFilm5 from '../assets/images/top-film/top-film-5.png';
import ImageNewFilm1 from '../assets/images/new-film/new-film-1.png';
import ImageNewFilm2 from '../assets/images/new-film/new-film-2.png';
import ImageNewFilm3 from '../assets/images/new-film/new-film-3.png';
import ImageNewFilm4 from '../assets/images/new-film/new-film-4.png';
import ImageNewFilm5 from '../assets/images/new-film/new-film-5.png';
import ImagHero from '../assets/images/hero_image.png';


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
    <>
    <header className="bg-[#22282A] fixed w-full top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
            <div className="hidden lg:flex items-center space-x-8">
                <a href="#" className="left-1/2 transform -translate-x-1/2 flex items-center">
                    <img src={Logo} className="h-8" alt="Logo" />
                </a>
                <a href="#" className="text-sm font-semibold text-white">Series</a>
                <a href="#" className="text-sm font-semibold text-white">Film</a>
                <a href="#" className="text-sm font-semibold text-white">Daftar Saya</a>
            </div>
            <div className="hidden lg:flex items-center space-x-3">
                <img src={UserLogo} className="w-7 rounded-full" />
                <img src={AngelDown} className="w-3" />
            </div>
            <button id="menu-toggle" className="lg:hidden text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </nav>
        <div id="mobile-menu" className="hidden lg:hidden bg-[#22282A] absolute w-full mt-1 p-4">
            <a href="#" className="block py-2 text-sm font-semibold">Series</a>
            <a href="#" className="block py-2 text-sm font-semibold">Film</a>
            <a href="#" className="block py-2 text-sm font-semibold">Daftar Saya</a>
            <hr className="border-gray-600 my-2" />
            <a href="#" className="flex items-center space-x-3 py-2">
                <img src="./assets/images/user.png" className="w-7 rounded-full" />
                <span>Profil</span>
            </a>
        </div>
    </header>

    <section className="relative bg-cover bg-center h-screen flex items-center" 
        style={{ backgroundImage: `url(${ImagHero})` }}>
        <div className="container mx-auto px-6 lg:px-20 text-white">
            <div className="max-w-xl">
                <h1 className="text-4xl font-semibold mb-4">Duty After School</h1>
                <p className="mb-6">
                    Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah.
                </p>
                <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-[#0F1E93] rounded-full">Mulai</button>
                    <button className="px-6 py-2 bg-gray-700/50 rounded-full">Selengkapnya!</button>
                </div>
            </div>
        </div>
    </section>

    <section className="container mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-4">Melanjutkan Nonton Film</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
            <img src={ImageNetFilm1} className="w-74 rounded-lg" />
            <img src={ImageNetFilm2} className="w-74 rounded-lg" />
            <img src={ImageNetFilm3} className="w-74 rounded-lg" />
            <img src={ImageNetFilm4} className="w-74 rounded-lg" />
        </div>
    </section>
    
    <section className="container mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-4">Top Rating Film dan Series Hari ini</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide gap-4">
            <img src={ImageRatingFilm1} className="w-55 rounded-lg" />
            <img src={ImageRatingFilm2} className="w-55 rounded-lg" />
            <img src={ImageRatingFilm3} className="w-55 rounded-lg" />
            <img src={ImageRatingFilm4} className="w-55 rounded-lg" />
            <img src={ImageRatingFilm5} className="w-55 rounded-lg" />
        </div>
    </section>
    
    <section className="container mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-4">Film Tranding</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide gap-4">
            <img src={ImageTopFilm1} className="w-55 rounded-lg" />
            <img src={ImageTopFilm2} className="w-55 rounded-lg" />
            <img src={ImageTopFilm3} className="w-55 rounded-lg" />
            <img src={ImageTopFilm4} className="w-55 rounded-lg" />
            <img src={ImageTopFilm5} className="w-55 rounded-lg" />
        </div>
    </section>

    <section className="container mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-4">Film Tranding</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide gap-4">
            <img src={ImageNewFilm1} className="w-55 rounded-lg" />
            <img src={ImageNewFilm2} className="w-55 rounded-lg" />
            <img src={ImageNewFilm3} className="w-55 rounded-lg" />
            <img src={ImageNewFilm4} className="w-55 rounded-lg" />
            <img src={ImageNewFilm5} className="w-55 rounded-lg" />
        </div>
    </section>

    
    <footer className="bg-[#22282A] mt-16 py-10">
        <div className="container mx-auto">
            <div className="lg:flex lg:gap-6 text-white">
                <div className="w-80">
                    <div className="m-3">
                        <img src={Logo} className="w-40" alt="img-logo" />
                    </div>
                    <div className="m-3 text-gray-400">
                        <h1>@2023 Chill All Rights Reserved.</h1>
                    </div>
                </div>
            
                <div className="max-md:m-3 max-md:flex max-md:justify-between">
                    <h1 className="font-bold text-lg mb-3">Genre</h1>
                    <div className="flex justify-center min-lg:hidden">
                        {/* <span>&rarr;</span> */}
                    </div>
                    <div className="grid grid-cols-4 gap-5 max-md:hidden">
                        <div className="space-y-2">
                            <a href="#" className="block text-gray-400 hover:text-white">Aksi</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Anak-anak</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Anime</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Britania</a>
                        </div>
                        <div className="space-y-2">
                            <a href="#" className="block text-gray-400 hover:text-white">Drama</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Fantasi Ilmiah & Fantasi</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Kejahatan</a>
                            <a href="#" className="block text-gray-400 hover:text-white">KDrama</a>
                        </div>
                        <div className="space-y-2">
                            <a href="#" className="block text-gray-400 hover:text-white">Komedi</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Petualangan</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Perang</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Romantis</a>
                        </div>
                        <div className="space-y-2">
                            <a href="#" className="block text-gray-400 hover:text-white">Sains & Alam</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Thriller</a>
                        </div>
                    </div>
                </div>

                <div className="max-md:m-3 max-md:m-3 max-md:flex max-md:justify-between">
                    <h1 className="font-bold text-lg mb-3">Bantuan</h1>
                    <div className="flex justify-center min-lg:hidden">
                        {/* <span>&rarr;</span> */}
                    </div>
                    <div className="grid max-md:hidden">
                        <div className="space-y-2">
                            <a href="#" className="block text-gray-400 hover:text-white">FAQ</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Kontak Kami</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Privasi</a>
                            <a href="#" className="block text-gray-400 hover:text-white">Syarat & Ketentuan</a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </footer>
    </>
  );
}

export default Dashboard;
