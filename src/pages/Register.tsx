import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';


export default function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const validateForm = () => {
        const errs = [];
        if (username.toLowerCase() === "admin") errs.push("Username tidak valid");
        if (!/\d/.test(username)) errs.push("Username Harus mengandung 1 Angka");
        if (username.length < 4) errs.push("Username Minimal 4 Huruf & Angka");
        if (!username) errs.push("Username tidak boleh kosong");
        if (!email.includes("@")) errs.push("Email tidak valid");
        if (password.length < 8) errs.push("Password terlalu pendek");
        if (!/\d/.test(password)) errs.push("Password harus mengandung minimal 1 angka");
        if (!/[!@#$%^&*(),.|<>]/.test(password)) errs.push("Password harus mengandung minimal 1 karakter special");
        if (password !== confirmPassword) errs.push("Password tidak sama");
        if (!termsAccepted) errs.push("Anda harus menyetujui Syarat dan Ketentuan");
        return errs;
    };

    const handleRegister = () => {
        const errs = validateForm();
        if (errs.length > 0) {
            setErrors(errs);
            return;
        }

        const userList = JSON.parse(localStorage.getItem("users") || "[]");
        const exists = userList.find((u: any) => u.username === username || u.email === email);

        if (exists) {
            setErrors(["Akun sudah ada. Coba username/email lain."]);
        } else {
            const newUser = { username, email, password };
            localStorage.setItem("users", JSON.stringify([...userList, newUser]));
            alert("Registrasi berhasil!");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setTermsAccepted(false);
            setErrors([]);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-base-100 justify-between">
            <main className="flex-grow bg-gray-200 flex-col flex justify-center items-center px-4">
            <div className="w-full max-w-md p-10 shadow-xl bg-gray-400 rounded-lg">
                <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale:0.99}}
                    onClick={() => navigate(-1)}
                    className="bg-blue-400 hover:outline flex flex-col shadow-none text-black hover:bg-blue-600 left-4 btn btn-sm btn-outlint"
                >
                    ⬅
                </motion.button>
                <h1 className="text-2xl font-bold mb-6 text-center text-black">Register</h1>
                    <h2 className="text-1xl font-underline mb-3 text-center text-black">Buat Akun Mahasiswa</h2>

                {errors.length > 0 && (
                    <div className="mb-4">
                        {errors.map((err, idx) => (
                            <div key={idx} className="text-sm text-red-500 flex items-center gap-2">
                                <span>⚠️</span> {err}
                            </div>
                        ))}
                    </div>
                )}
                <div className="text-black"> Username :
                <input
                    type="text"
                    placeholder="Minimal 4 huruf & angka"
                    className="input placeholder:italic input-bordered w-full mb-4 text-white"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div className="text-black"> Email :
                <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="input text-white input-bordered w-full mb-4 placeholder:italic"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className="text-black mb-4"> Password :
                 <div className="relative">
                    <input
                     type={showPassword ? "text" : "password"}
                      placeholder="8-32 Huruf, Angka, Special Character"
                       className="placeholder:italic text-white input input-bordered w-full pr-10 focus:outline-none"
                     value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                                >
                                {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                        <EyeIcon className="h-5 w-5 text-gray-500" />
                     )}
                    </button>
                 </div>
            </div>


                <div className="text-black mb-4"> Confirm Password :
                    <div className="relative">
                         <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Password Harus Sama"
                            className="placeholder:italic text-white input input-bordered w-full pr-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                         <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                        >
                            {showConfirmPassword ? (
                          <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                         ) : (
                      <EyeIcon className="h-5 w-5 text-gray-500" />
                     )}
           </button>
                  </div>
                </div>


                <label className="label cursor-pointer mb-4 items-start">
                    <input
                        type="checkbox"
                        className="checkbox mr-2 mt-1"
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)}
                    />
                    <span className="block w-full text-sm sm:text-base leading-tight label-text text-black break-words">
                        Saya setuju dengan{" "}
                        <span
                            className="text-primary text-sm sm:text-base leading-tight underline cursor-pointer text-cyan-500"
                            onClick={() => setShowTerms(true)}
                        >
                            syarat dan ketentuan
                        </span>
                    </span>
                </label>
                
                <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale:0.99}}
                    type="submit"                
                    className="rounded-full btn w-full bg-blue-400 hover:bg-blue-600 hover:outline text-black hover:font-bold" onClick={handleRegister}>
                    Register
                </motion.button>

                <p className="text-black text-center text-sm mt-4">
                    Already have an Account ? {" "}
                    <Link to="/login" className="text-primary text-cyan-500 hover:underline">
                        Login
                    </Link>
                </p>

                {showTerms && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                        <div className="bg-gray-500 w-11/12 md:w-1/2 lg:w-1/3 rounded-lg p-6 shadow-xl relative">
                            <h2 className="text-xl text-black font-bold mb-4">Syarat dan Ketentuan</h2>
                            <p className="text-sm text-black mb-6">
                                Dengan menggunakan layanan ini, Anda setuju bahwa data anda akan dibobol oleh kami di localStorage hanya untuk keperluan demo dan presentasi.
                            </p>
                            <motion.button
                                whileHover={{scale: 1.025}}
                                whileTap={{scale: 0.99}}
                                className="btn btn-primary w-full text-white rounded-full hover:outline"
                                onClick={() => setShowTerms(false)}
                            >
                                Sudah Dibaca / Selesai
                            </motion.button>
                        </div>
                    </div>
                )}
            </div>
            </main>
        </div>
    );
}
