import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        identity: "",
        password: "",
        remember: false,
    });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(
            (u: any) =>
            (u.username === formData.identity || u.email === formData.identity) &&
            u.password == formData.password
        );

        if (!user) {
            setError("Email/Username atau Password salah");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        navigate("/dashboard");
    };

    return ( 
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar  />
            <div className="flex flex-col items-center justify-center flex-grow py-10 px-4">
                <h2 className="text-3xl font-semibold mb-1 text-center">Login</h2>
                <p className="mb-6 text-sm text-center">Masuk ke akun mahasiswa</p>

                < form
                    onSubmit={handleSubmit}
                    className="bg-gray-700 p-6 rounded-md shadow-md w-full max-w-md">
                        <div className="mb-4">
                            <label className="text-black block text-sm font-medium">Email or Username :</label>
                            <input 
                                type="text"
                                name="identity"
                                value={formData.identity}
                                onChange={handleChange}
                                className="w-full placeholder:italic border border-gray-300 rounded px-3 py-2 mt-1"
                                placeholder="Masukkan username atau Email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-black block text-sm font-medium">Password :</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full placeholder:italic border border-gray-300 rounded px-3 py-2 mt-1"
                                placeholder="Masukkan Password Anda"
                                required
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                        <div className="flex justify-between items-center mb-4 text-sm">
                            <label className="inline-flex items-center">
                                <input 
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Remember me
                            </label>
                            <a href="/ForgotPassword" className="text-cyan-400 hover:underline hover:">
                                Forgot Password?
                            </a>

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-400 hover:bg-blue-600 text-black hover:font-bold py-2 rounded shadow"
                        >
                            Login
                        </button>
                        
                        <p className="mt-4 text-black text-sm text-center">
                            don't have an account ? {" "}
                            <a href="/register" className="text-cyan-400 hover:underline">
                                Register
                            </a>
                        </p>
                </form>
            </div>
            <Footer />
        </div>
    );
};


export default LoginForm;