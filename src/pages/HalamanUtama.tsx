import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function HalamanUtama() {
    return (
        <div className="min-h-screen flex flex-col bg-base-100 text-base-conent font-sans">
            <Navbar />

            <main className=" flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                    Selamat Datang di <span className="text-primary">Universitas Independen Nasional</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-8">
                    Universitas Independen Nasional (UIN) adalah kampus keren modern yang tidak nyata, memadukan ilusi,
                    inovasi dan kemandirian. Kami berkomitmen mencetak generasi tidak nyata memalui pendekatan pembelajaran
                    Digital dan Ghoib.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/register" className="btn btn-primary w-full sm:w-auto">
                    Daftar Sekarang
                    </Link>
                    <Link to="/login" className="btn btn-outline btn-primary w-full sm:w-auto">
                    Login
                    </Link>
                </div>
            </main>

            {/*Section lainnya jir*/}
            <section className="px-4 py-12 bg-base-200">
                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
                    {/*Login ini ya cok*/}
                    <div className="card bg-base-100 shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-2">Login</h2>
                        <p className="mb-4 text-sm md:text-base">
                            Sudah punya akun? Silahkan login untuk mengakses layanan atau dashbord kampus.
                        </p>
                        <Link to="/login" className="btn btn-primary w-full">Login Sekarang</Link>

                    </div>
                    {/*preview register */}
                    <div className="card bg-base-100 shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-2">Registrasi</h2>
                        <p className="mb-4 text-sm md:text-base">
                            Daftar sebagai mahasiswa baru di Universitas Independen Nasional
                        </p>
                        <Link to="/register" className="btn btn-accent w-full">Daftar Sekarang</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}