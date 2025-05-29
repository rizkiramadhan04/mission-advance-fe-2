import { React } from 'react'
import ImageIphone from '../assets/iphone_12_pro.png'

function Dashboard() {
    return (
        <div className="min-h-screen max-w-screen flex items-center justify-center bg-[#161622]">
            <div className="container">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-transparent my-auto p-6">
                        <p className="text-white font-bold">MOVIE STREAMING PLATFORM</p>
                        <h2 className="text-2xl font-bold text-white my-5">CHILL</h2>
                        <p className="text-white mb-4">
                            Chill adalah aplikasi berbasis web yang dirancang untuk memberi pengguna akses ke library film dan acara TV yang luas dari perangkat mereka. Chill menawarkan antarmuka yang ramah pengguna yang memungkinkan pengguna mencari film dan acara TV, dan mulai menonton secara instan. Chill menawarkan rekomendasi hasil personalisasi berdasarkan kebiasaan menonton pengguna, membantu pengguna menemukan film dan acara TV baru yang mungkin tidak mereka temukan sebelumnya. Selain itu, Chill juga menawarkan konten orisinal, termasuk film dan acara TV, yang hanya dapat ditemukan di aplikasi Chill, menjadikannya sumber yang unik dan berharga bagi pengguna.
                        </p>
                    </div>
                    <div className="p-6 overflow-hidden h-full">
                        <img src={ImageIphone} alt="img_iphone" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;