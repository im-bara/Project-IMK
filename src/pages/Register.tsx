import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Register() {
    const navigate = useNavigate();
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const errs: { [key: string]: string } = {};
        if (!username) errs.username = "Username tidak boleh kosong";
        else {
            if (username.toLowerCase() === "admin") errs.username = "Username tidak valid";
            else if (!/\d/.test(username)) errs.username = "Username harus mengandung 1 angka";
            else if (username.length < 4) errs.username = "Username minimal 4 huruf & angka";
        }

        if (!email.includes("@")) errs.email = "Email tidak valid";

        if (password.length < 8) errs.password = "Password terlalu pendek";
        else if (!/\d/.test(password)) errs.password = "Password harus mengandung minimal 1 angka";
        else if (!/[!@#$%^&*(),.|<>]/.test(password)) errs.password = "Password harus mengandung minimal 1 karakter special";

        if (password !== confirmPassword) errs.confirmPassword = "Password tidak sama";

        if (!termsAccepted) errs.terms = "Anda harus menyetujui Syarat dan Ketentuan";

        return errs;
    };

    const handleRegister = () => {
        const errs = validateForm();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        const userList = JSON.parse(localStorage.getItem("users") || "[]");
        const exists = userList.find((u: any) => u.username === username || u.email === email);

        if (exists) {
            setErrors({ general: "Akun sudah ada. Coba username/email lain." });
        } else {
            const newUser = { username, email, password };
            localStorage.setItem("users", JSON.stringify([...userList, newUser]));
            setShowSuccessPopup(true);
            setTimeout(() => {
            navigate("/login");
                }, 3000);

            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setTermsAccepted(false);
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-base-100 justify-between">
            <main className="flex-grow bg-ungu-100 flex-col flex justify-center items-center px-4">
                <div className="w-full max-w-md p-10 shadow-xl bg-white rounded-lg">
                    {errors.general && (
                        <div className="mb-4 text-sm text-red-500 flex items-center gap-2">
                            <span>⚠️</span> {errors.general}
                        </div>
                    )}

                    {/* USERNAME */}
                    <div className="text-black mb-2">
                        Username :
                        <input
                            type="text"
                            placeholder="Minimal 4 huruf & angka"
                            className={`input placeholder:italic input-bordered w-full text-white ${errors.username ? 'border-red-500' : ''}`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username}</p>}
                    </div>

                    {/* EMAIL */}
                    <div className="text-black mb-2">
                        Email :
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className={`input placeholder:italic input-bordered w-full text-white ${errors.email ? 'border-red-500' : ''}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* PASSWORD */}
                    <div className="text-black mb-2">
                        Password :
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="8-32 Huruf, Angka, Special Character"
                                className={`placeholder:italic text-white input input-bordered w-full pr-10 ${errors.password ? 'border-red-500' : ''}`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                            >
                                {showPassword ? (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                        </div>
                        {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div className="text-black mb-2">
                        Konfirmasi Password :
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Password harus sama"
                                className={`placeholder:italic text-white input input-bordered w-full pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                            >
                                {showConfirmPassword ? (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
                    </div>

                    {/* TERMS */}
                    <label className="label cursor-pointer mb-2 items-start">
                        <input
                            type="checkbox"
                            className="checkbox text-black mr-2 mt-1"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        <span className="block w-full text-sm sm:text-base leading-tight label-text text-black break-words">
                            Saya setuju dengan{" "}
                            <span
                                className="text-primary underline cursor-pointer text-cyan-500"
                                onClick={() => setShowTerms(true)}
                            >
                                syarat dan ketentuan
                            </span>
                        </span>
                    </label>
                    {errors.terms && <p className="text-sm text-red-500 mt-1">{errors.terms}</p>}

                    {/* SUBMIT */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="rounded-full btn w-full bg-kuning hover:outline text-black hover:font-bold"
                        onClick={handleRegister}
                    >
                        Daftar
                    </motion.button>

                    <p className="text-black text-center text-sm mt-4">
                        Sudah Punya Akun?{" "}
                        <Link to="/login" className="text-primary text-cyan-500 hover:underline">
                            Masuk
                        </Link>
                    </p>

                    {/* TERMS MODAL */}
                    {showSuccessPopup && (
                      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white text-black p-6 rounded-lg shadow-xl w-11/12 sm:w-96 text-center"
                            >
                            <h2 className="text-2xl font-bold mb-2">Registrasi Berhasil 🎉</h2>
                            <p className="text-sm">Akun kamu berhasil dibuat. Kamu akan diarahkan ke halaman login dalam beberapa detik...</p>
                        </motion.div>
                        </div>
                    )}

                    {showTerms && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                            <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg p-6 shadow-xl relative">
                                <h2 className="text-xl text-black font-bold mb-4">Syarat dan Ketentuan</h2>
                                <p className="text-sm text-black mb-6">
                                    Dengan menggunakan layanan ini, Anda setuju bahwa data anda akan dibobol oleh kami di localStorage hanya untuk keperluan demo dan presentasi.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.025 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="btn w-full bg-kuning text-black rounded-full"
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
