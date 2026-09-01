// SISTEM PENENTUAN GAJI KARYAWAN
// WAJIB PAKAI ARROW FUNCTION
// Buat satu function dengan nama hitungGaji yang memiliki 3 parameter (nama, gajiPokok, jumlahJamLembur)
// Ketentuannya sebagai berikut:
// - Setiap jam lembur (per jam) mendapatkan tambahan Rp25.000
// - Hitung total uang lembur (jumlahJamLembur * 25.000)
// - Hitung gaji pokok sebelum bonus (gajiPokok + uangLembur)
// - Karyawan mendapatkan bonus berdasarkan gaji sebelum bonus dengan ketentuan:
// Jika gaji >= 5.000.000 -> bonus 10%,
// Jika gaji >= 3.000.000 -> bonus 5%,
// Jika kurang dari 3.000.000 -> tidak dapat bonus
// - Hitung gaji akhir (gajiSebelumBonus + bonus)
// - Gunakan ternary operator untuk menentukan status:
// Gaji Akhir >= 5.000.000 -> "Gaji nama Lumayan Tinggi"
// Gaji Akhir selain itu -> "Gaji nama Standar"
// Return value functionnya harus string
// Contoh output yang diharapkan: "nama mendampatkan gaji totalGaji dengan status Gaji sesuai dengan status"

const hitungGaji = (nama, gajiPokok, jumlahJamLembur) => {
  const bonusLemburPerJam = 25000;
  const totalUangLembur = bonusLemburPerJam * jumlahJamLembur;
  const gajiPokokSebelumBonus = gajiPokok + totalUangLembur;
  // lanjutkan
  let bonus;

  if (gajiPokokSebelumBonus >= 5000000) {
    bonus = 0.1;
  } else if (gajiPokokSebelumBonus >= 3000000) {
    bonus = 0.05;
  } else {
    bonus = 0.0;
  }

  const bonusTernary =
    gajiPokokSebelumBonus >= 500000
      ? gajiPokokSebelumBonus * 0.1
      : gajiPokokSebelumBonus >= 3000000
        ? gajiPokokSebelumBonus * 0.05
        : 0; //ust numan

  let gajiAKhir = gajiPokokSebelumBonus + bonusTernary;

  // const status = gajiAKhir >= 5000000 ? "Gaji Tinggi" : "Gaji UMR"; //ust numan

  return `${nama} mendapatkan gaji Rp${gajiAKhir} dengan status ${status};`; //ust numan

  // return gajiAKhir >= 5000000
  // ? `${nama} mendapatkan gaji ${gajiAKhir} dengan status Gaji Tinggi`
  // : `${nama} mendapatkan gaji ${gajiAKhir} dengan status Gaji UMR `;
};

console.log(hitungGaji("Maul", 2000000, 4));
