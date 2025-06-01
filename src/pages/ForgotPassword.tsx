import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ForgotPassword() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Masukkan Email atau Username terlebih dahulu");
      setSent(false);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find((user: any) =>
      user.email === input || user.username === input
    );

    if (!found) {
      setError("Email atau Username tidak ditemukan");
      setSent(false);
    } else {
      setError("");
      setSent(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="bg-gray-600 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-semibold text-center mb-2">Forgot Password</h2>
          <p className="text-center text-black mb-6">Reset akses akunmu</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-black">Email atau Username:</label>
              <input
                type="text"
                className={`placeholder:italic w-full p-2 border rounded-md ${
                  error ? "border-red-500" : "border-blue-300"
                }`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Masukkan Email atau Username"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              {sent && (
                <p className="text-green-600 text-sm mt-1">
                  Link reset berhasil dikirim (simulasi)!
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 text-white py-2 rounded-full shadow-md transition-all"
            >
              Kirim Link Reset
            </button>
          </form>

          <div className="text-center mt-4 text-sm text-black">
            Already have an Account ? {" "}
            <button onClick={() => navigate("/login")} className="text-cyan-400 hover:underline">
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
