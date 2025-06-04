import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const LoginForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        identity: "",
        password: "",
        remember: false,
    });

    const [errors, setErrors] = useState<{ identity?: string; password?: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let newErrors: typeof errors = {};

        if (!formData.identity.trim()) {
            newErrors.identity = "Username atau Email wajib diisi";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password wajib diisi";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(
            (u: any) =>
                (u.username === formData.identity || u.email === formData.identity) &&
                u.password === formData.password
        );

        if (!user) {
            setErrors({ password: "Email/Username atau Password salah" });
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        navigate("/dashboard");
    };

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <div className="flex flex-col items-center bg-ungu-100 justify-center flex-grow py-10 bg-gray-200 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-md shadow-md w-full max-w-md"
                >
                    <div className="mb-4">
                        <label className="text-black block text-sm font-medium">
                            Email atau Username :
                        </label>
                        <input
                            type="text"
                            name="identity"
                            value={formData.identity}
                            onChange={handleChange}
                            className={`w-full placeholder:italic border ${
                                errors.identity ? "border-red-500" : "border-gray-300"
                            } rounded px-3 py-2 mt-1`}
                            placeholder="Masukkan username atau Email"
                        />
                        {errors.identity && (
                            <p className="text-red-500 text-sm mt-1">{errors.identity}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="text-black block text-sm font-medium">Password :</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full placeholder:italic border ${
                                    errors.password ? "border-red-500" : "border-gray-300"
                                } rounded px-3 py-2 mt-1 pr-10`}
                                placeholder="Masukkan Password Anda"
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
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    <div className="flex justify-between items-center mb-4 text-sm">
                        <label className="inline-flex text-black items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Ingat Saya
                        </label>
                        <Link to="/ForgotPassword" className="text-blue-600 hover:underline">
                            Lupa Password?
                        </Link>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full btn bg-kuning text-black hover:font-bold py-2 rounded-full shadow"
                    >
                        Login
                    </motion.button>

                    <p className="mt-4 text-black text-sm text-center">
                        Tidak punya akun?{" "}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Daftar
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
