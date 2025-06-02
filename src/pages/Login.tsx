import { motion } from "framer-motion";
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';


const LoginForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
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
            <div className="flex flex-col items-center justify-center flex-grow py-10 bg-gray-200 px-4">
                < form
                    onSubmit={handleSubmit}
                    className="bg-gray-400 p-6 rounded-md shadow-md w-full max-w-md">
                         <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale:0.99}}
                            onClick={() => navigate(-1)}
                            className="bg-blue-400 hover:outline flex flex-col shadow-none text-black hover:bg-blue-600 left-4 btn btn-sm btn-outlint"
                            >
                            ⬅
                         </motion.button>
                         <h2 className="text-3xl text-black font-semibold mb-1 text-center">Login</h2>
                         <p className="mb-6 text-sm text-black  text-center">Masuk ke akun mahasiswa</p>

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
                             <div className="relative">
                              <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full placeholder:italic border border-gray-300 rounded px-3 py-2 mt-1 pr-10"
                                    placeholder="Masukkan Password Anda"
                                required
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


                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                        <div className="flex justify-between items-center mb-4 text-sm">
                            <label className="inline-flex text-black items-center">
                                <input 
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Remember me
                            </label>
                            <Link to="/ForgotPassword" className="text-blue-600 hover:underline">
                                Forgot Password?
                            </Link>

                        </div>

                        <motion.button
                            whileHover={{scale: 1.050}}
                            whileTap={{scale: 0.90}}
                            type="submit"
                            className="w-full bg-blue-400 hover:outline hover:bg-blue-600 text-black hover:font-bold py-2 rounded-full shadow"
                        >
                            Login
                        </motion.button>
                        
                        <p className="mt-4 text-black text-sm text-center">
                            don't have an account ? {" "}
                                <Link to="/register" className="text-blue-600 hover:underline">
                                Register
                            </Link>
                            
                        </p>
                </form>
            </div>
        </div>
    );
};


export default LoginForm;