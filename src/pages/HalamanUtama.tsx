import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function HalamanUtama() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = () => {
    const userList = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = userList.find(
      (u: any) => u.email === email && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      navigate("/dashboard");
    } else {
      setErrorMsg("Email atau password salah. Silahkan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-base-content font-sans">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 1.2 }}
      >
        <main className="flex-1 bg-ungu-100 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
          <h1 className="text-4xl text-black md:text-6xl font-extrabold mb-4 leading-tight">
            Selamat Datang di{" "}
            <span className="text-ungu-25">Universitas Independen Nasional</span>
          </h1>
          <p className="text-base text-black sm:text-lg md:text-xl max-w-2xl mb-8">
            Universitas Independen Nasional (UIN) adalah kampus keren modern yang
            tidak nyata, memadukan ilusi, inovasi, dan kemandirian. Kami berkomitmen
            mencetak generasi tidak nyata melalui pendekatan pembelajaran Digital dan Ghoib.
          </p>

          {/* LOGIN + REGISTER CARD */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-left space-y-4">            {errorMsg && (
              <div className="text-red-500 text-sm bg-red-100 rounded p-2">{errorMsg}</div>
            )}

            <div>
              <label className="text-black font-semibold block mb-1">Email :</label>
              <input
                type="email"
                placeholder="Masukkan email kamu"
                className="input text-white input-bordered w-full text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
  <label className="text-black font-semibold block mb-1">Password :</label>
  <input
    type={showPassword ? "text" : "password"} 
    placeholder="Masukkan password kamu"
    className="input input-bordered w-full text-white pr-10"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-[3rem] transform -translate-y-1/2 z-10"
  >
    {showPassword ? (
      <EyeIcon className="h-5 w-5 text-gray-500 transition duration-200" />
    ) : (
      <EyeSlashIcon className="h-5 w-5 text-gray-500 transition duration-200" />
    )}
  </button>
</div>


            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLogin}
              className="btn w-full text-black rounded-full bg-kuning"
            >
              Login
            </motion.button>

            <p className="text-black text-sm text-center">
              Belum punya akun?{" "}
              <span
                className="text-blue-500 underline cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Daftar Sekarang
              </span>
            </p>
          </div>
        </main>
      </motion.main>
    </div>
  );
}
