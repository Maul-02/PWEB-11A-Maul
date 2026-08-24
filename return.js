// RETURN VALUE
// Mengembalikan nilai dari function nya
// Return umumnya berada di akhir function
function jumlah(a, b) {
  const result = a + b;
  return result;
  // Return untuk mengembalikan hasil dari function
}

console.log("2 + 8 = ", jumlah(2, 8));

// KESALAHAN UMUM RETURN
function sapaAkuBang() {
  return "Halo Diks"; //Return Sudah Dieksekusi, sehingga code di bawah nya tidak akan pernah dieksekusi
  console.log("Halo Juga Bangs"); //Tidak pernah di eksekusi
}

// CONTOH Rumus Luas Persegi
function luasPersegi(sisi) {
  const hasil = sisi * sisi;
  return hasil;
  // return sisi * sisi;
}
// luasPersegi(20);
console.log(luasPersegi(19));

// CONTOH
function sapaByZona(waktu) {
  let result = "";
  if (waktu === "Pagi") {
    result = "Selamat Pagi";
  } else if (waktu === "Siang") {
    result = "Selamat Siang";
  } else if (waktu === "Sore") {
    result = "Selamat Sore";
  } else if (waktu === "Malam") {
    result = "Selamat Malam";
  } else {
    result = "Waktu tidak Valid";
  }
  return result;
}

console.info("SAPA VERSI IF ELSE");
console.log(sapaByZona("Malam"));
console.log(sapaByZona("Tengah Malam"));

// VERSI RINGKAS
function sapaByZonaRingkas(waktu) {
  //   return `Selamat ${waktu}`;
  return "Selamat " + waktu;
  //   return `selamat ${waktu;}`
}

console.info("SAPA VERSI RINGKAS");
console.log(sapaByZonaRingkas("Malam"));
console.log(sapaByZonaRingkas("Tengah Malam"));

const isTwoFunctionSame = sapaByZona("Malam") === sapaByZonaRingkas("Malam");
console.info("APAKAH KEDUA FUNGSI SAMA?!");
console.log(isTwoFunctionSame);
console.log(sapaByZona("Tengah Malam") === sapaByZonaRingkas("Tengah Malam")); // waktu tidak valid === selamat tengah malam
