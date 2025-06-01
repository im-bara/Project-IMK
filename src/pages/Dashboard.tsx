import React, { useState } from "react";

export default function dashboard() {
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
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Data Mahasiswa:", form);
        alert("Data Mahasiswa berhasil disimpan! (simulasi)");
    };

    return (
        <>
         <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4 py-10">
            <div className="bg-gray-400 p-8 rounded-lg w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-center text-black mb-1">Data Mahasiswa</h2>
                <p className="text-center mb-6 text-black">
                    Form Mahasiswa
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-black">NIM :</label>
                        <input
                            type="text"
                            name="nim"
                            value={form.nim}
                            onChange={handleChange}
                            placeholder="Masukan NIM (10 Digit)"
                            className="w-full border p-2 rounded text-italic" />
                    </div>

                    <div>
                        <label className="block mb-1 text-black">Nama Lengkap :</label>
                        <input 
                            type="text"
                            name="nama"
                            value={form.nama}
                            onChange={handleChange}
                            placeholder="Masukan Nama lengkap sesuai dengan KTP"
                            className="w-full border p-2 rounded text-white text italic"
                        />
                    </div>

                    <div className="flex gap-6">
                        <label className="flex text-black items-center">
                            <input 
                                type="radio"
                                name="jk"
                                value="Laki-Laki"
                                checked={form.jk === "Laki-Laki"}
                                onChange={handleChange}
                                className="mr-2 text-black"
                            />
                            Laki-Laki
                        </label>
                        <label className="flex text-black items-center">
                            <input 
                                type="radio"
                                name="jk"
                                value="Perempuan"
                                checked={form.jk === "Perempuan"}
                                onChange={handleChange}
                                className="mr-2 text-black"
                            />
                            Perempuan
                        </label>

                    </div>

                    <div>
                        <label className="block mb-1 text-black">Tempat Lahir :</label>
                        <input 
                            type="text"
                            name="tempatLahir"
                            value={form.tempatLahir}
                            onChange={handleChange}
                            className="w-full border p-2 rounded text-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-black">Tanggal Lahir :</label>
                        <input 
                            type="date"
                            name="tempatLahir"
                            value={form.tempatLahir}
                            onChange={handleChange}
                            className="w-full border p-2 rounded text-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-black">Alamat Lengkap :</label>
                        <textarea
                            name="alamat"
                            value={form.alamat}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        
                        ></textarea>


                    </div>

                    <div>
                        <label className="block mb-1 text-black">Agama :</label>
                        <select
                            name="agama"
                            value={form.agama}
                            onChange={handleChange}
                            className="w-full border p-rounded text-white"
                                                
                        >
                            <option value="">-- Pilih Agama --</option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen">Kristen</option>
                            <option value="Katolik">Katolik</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Buddha">Buddha</option>
                            <option value="Konghucu">Konghucu</option>
                            <option value="Jawa">JAWA JAWA JAWA</option>

                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 text-black">Program Studi :</label>
                        <select
                            name="prodi"
                            value={form.prodi}
                            onChange={handleChange}
                            className="w-full border p-rounded text-white"
                                                
                        >
                            <option value="">-- Pilih Program Studi --</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Sastra Mesin">Sastra Mesin</option>
                            <option value="PGSD">Pendidikan Guru Sekolah Dasar</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Sastra Bangunan">Sastra Bangunan</option>
                            <option value="Manajemen">Manajemen</option>
                            <option value="Hukum">Hukum</option>
                            <option value="Racism">Racism</option>

                        </select>
                    </div>


                    <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
              Simpan Data
            </button>
                </form>


            </div>
            
         </div>
        
        
        
        </>
    )
}