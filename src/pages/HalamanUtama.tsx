import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function HalamanUtama() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200 text-base-content font-sans">
            <motion.main initial={{ opacity: 0}} animate={{ opacity:1}} transition={{type:"tween", duration: 1.2}}>
            <main className=" flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
                <h1 className="text-4xl text-black md:text-6xl font-extrabold mb-4 leading-tight">
                    Selamat Datang di <span className="text-primary">Universitas Independen Nasional</span>
                </h1>
                <p className="text-base text-black sm:text-lg md:text-xl max-w-2xl mb-8">
                    Universitas Independen Nasional (UIN) adalah kampus keren modern yang tidak nyata, memadukan ilusi,
                    inovasi dan kemandirian. Kami berkomitmen mencetak generasi tidak nyata memalui pendekatan pembelajaran
                    Digital dan Ghoib.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{scale:1.125}} whileTap={{scale:0.95}} transition={{ type:"spring", stiffness: 200, damping: 15}}>
                    <Link to="/register" className="btn btn-primary w-full bg-gray-500 text-black sm:w-auto">
                    Daftar Sekarang
                    </Link>
                    </motion.div>
                    <motion.div whileHover={{scale:1.125}} whileTap={{scale:0.95}} transition={{ type:"spring", stiffness: 300}}> 
                    <Link to="/login" className="btn btn-outline bg-blue-400 text-black btn-primary w-full sm:w-auto hover:bg-blue-700 hover:text-black hover:outline">
                    Login
                    </Link>
                    </motion.div>
                </div>
            </main>

            {/*Section lainnya jir*/}
            <section className="px-4 py-12 bg-gray-300">
                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
                    {/*Login ini ya cok*/}
                    <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 2.3, ease: "easeOut" }}>
                    <div className="card bg-base-100 shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-2">Login</h2>
                        <p className="mb-4 text-sm md:text-base">
                            Sudah punya akun? login untuk mengakses layanan atau dashbord kampus.
                        </p>
                        <motion.button whileTap={{scale: 0.99}}>
                        <Link to="/login" className="btn bg-blue-400 btn-primary w-full">Login Sekarang</Link>
                        </motion.button>
                    </div>
                    </motion.div>
                    {/*preview register */}

                    <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 2.3, ease: "easeOut" }}>
                    <div className="card bg-base-100 shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-2">Registrasi</h2>
                        <p className="mb-4 text-sm md:text-base">
                            Daftar sebagai mahasiswa gak nyata baru di Universitas Independen Nasional
                        </p>
                        <motion.button whileTap={{scale: 0.99}}>
                        <Link to="/register" className="btn btn-accent w-full">Daftar Sekarang</Link>
                        </motion.button>
                    </div>
                    </motion.div>
                </div>
            </section>
            </motion.main>
        </div>
    )
}