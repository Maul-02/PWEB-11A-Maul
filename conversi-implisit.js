// Konversi implisit => konversi otomatis dari js tanpa instruksi eksplisit dari proggramer

const age = 40;
const message = "anda berumur: " + age; // Hasilnya jadi String, jadinya penggabungan string/ dua suku kata
const jumlah = "40" + 40;

console.info("Konversi Implisit antara string dan number");
console.log(message);
console.log(age);
console.log(jumlah); //4040
console.log(Number(jumlah) + age); //4080, karena jumlah di ubah ke number (4040) di tambah age (40)

const boolean = true; //1 dan 0 (true dan false)
const nomor = 10;
const result = boolean + nomor;

console.info("Konversi implisit Boolean dan Number");
console.log(result);

const pertanyaan = jumlah + boolean; // semua di konversi menjadi string sehingga hasil nya jadi 4040true
console.info("Konversi implisit Boolean dan string");
console.log(pertanyaan); //4040true

const gabungan = jumlah + boolean + nomor; // String tetap memimpin // semua di konversi menjadi string
console.log(gabungan);
