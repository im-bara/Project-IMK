export function getBotResponse(input: string): string {
  const msg = input.toLowerCase();

  if (msg.includes("faq")) return "FAQ :\n\n1.Ini Placeholder ya\n2.ini juga sama\n3.Inijuga sama";
  if (msg.includes("daftar")) return "Untuk membuat akun silahkan untuk ketuk tombol 'Register' Di Navbar ataupun di Halaman Utama Kampus";
  if (msg.includes("masuk")) return "Untuk login ke bisa ketuk tombol 'Login' Di Navbar ataupun di HalamanUtama Kampus";
  if (msg.includes("dashboard") || msg.includes("form mahasiswa") || msg.includes("form")) return "Login terlebih dahulu untuk, masuk ke Form Mahasiswa ataupun Dashboard";


  return "Maaf, saya tidak mengerti maksud anda";

}