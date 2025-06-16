import { motion } from "framer-motion";
import React, { useState } from "react";


export default function Dashboard() {
    const [form, setForm] = useState({
        nim: "",
        nama: "",
        jk: "",
        tempatLahir: "",
        tanggalLahir: "",
        alamat: "",
        agama: "",
        prodi: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Data Mahasiswa:", form);
        alert("Data Mahasiswa berhasil disimpan! (simulasi)");
    };

    return (
        <div className="min-h-screen bg-ungu-300 flex flex-col items-center justify-center px-4 py-10">
            <div className="bg-white p-6 rounded-lg w-full max-w-xl">
                <h2 className="text-3xl font-bold text-center text-black mb-1">Data Mahasiswa</h2>
                

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input label="NIM" name="nim" value={form.nim} onChange={handleChange} placeholder="Masukkan NIM (10 digit)" />
                    <Input label="Nama Lengkap" name="nama" value={form.nama} onChange={handleChange} placeholder="Masukkan nama lengkap sesuai KTP" />

                    <div className="flex gap-6">
                        <label className="flex items-center text-black">
                            <input type="radio" name="jk" value="Laki-Laki" checked={form.jk === "Laki-Laki"} onChange={handleChange} className="mr-2" />
                            Laki-Laki
                        </label>
                        <label className="flex items-center text-black">
                            <input type="radio" name="jk" value="Perempuan" checked={form.jk === "Perempuan"} onChange={handleChange} className="mr-2" />
                            Perempuan
                        </label>
                    </div>

                    <Input label="Tempat Lahir" name="tempatLahir" value={form.tempatLahir} onChange={handleChange} placeholder="Contoh: Jakarta" />
                    <Input label="Tanggal Lahir" name="tanggalLahir" value={form.tanggalLahir} onChange={handleChange} type="date" />

                    <div>
                        <label className="block text-black mb-1">Alamat Lengkap :</label>
                        <textarea
                            name="alamat"
                            value={form.alamat}
                            onChange={handleChange}
                            placeholder="Contoh: Jl. Haji Rambutan, Gg. Ikan Bawal, Meikarta"
                            className="w-full border p-2 rounded placeholder:italic"
                        />
                    </div>

                    <Select label="Agama" name="agama" value={form.agama} onChange={handleChange} options={[
                        "-- Pilih Agama --", "Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Konghucu"
                    ]} />

                    <Select label="Program Studi" name="prodi" value={form.prodi} onChange={handleChange} options={[
                        "-- Pilih Program Studi --", "Teknik Informatika", "PGSD", "Sistem Informasi", "Manajemen", "Hukum",
                        "HI", "Farmasi", "Kedokteran", "Kehutanan", "Fisika", "Kimia", "Geologi"
                    ]} />

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-kuning btn text-black rounded-full font-semibold py-2"
                    >
                        Tambah Data
                    </motion.button>
                </form>
            </div>
        </div>
    );
}

const Input = ({ label, name, value, onChange, placeholder = "", type = "text" }: any) => (
    <div>
        <label className="block text-black mb-1">{label} :</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border p-2 rounded placeholder:italic"
        />
    </div>
);

const Select = ({ label, name, value, onChange, options }: any) => (
    <div>
        <label className="block text-black mb-1">{label} :</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded placeholder:italic"
        >
            {options.map((opt: string, idx: number) => (
                <option key={idx} value={opt === options[0] ? "" : opt} disabled={idx === 0}>
                    {opt}
                </option>
            ))}
        </select>
    </div>
);
