// Cara mendeklarasikan array ada 3 cara di js

// 1. Menggunakan Object Constructor Array()
console.info("BUAT ARRAY PAKAI CONSTRUCTOR Array()");
const arrayConstructor = new Array(1, 2, 3, 4);
const arrayKosong = new Array();
console.log(arrayConstructor); // [1,2,3,4]
console.log(arrayKosong); // []

// 2. Menggunakan Array.from()
console.info("BUAT ARRAY PAKAI Array.from()"); // Membuat array Baru
const splitBuah = Array.from("Pisang");
const spilitNama = Array.from("MAUL");
console.log(spilitNama);
console.log(splitBuah); // (6) ['P', 'i', 's', 'a', 'n', 'g']

// Andaikan ingin membuat/array baru dengan value yang sama
console.info("MEMBUAT ARRAY BARU DENGAN VALUE YANG SAMA");
const arrayLama = new Array("Satu", "Dua", "Tiga", "Empat");
const arrayBaru = Array.from(arrayLama);
const isArrayLamaIdentikArrayBaru = arrayLama === arrayBaru;
console.log(isArrayLamaIdentikArrayBaru ? "Ya sama Bro" : "Sorry Bro Beda");
console.log(arrayBaru);
console.log(arrayLama);

// 3. Menggunakan Array literal []
console.info("BUAT ARRAY PAKAI Literal ([])");
const arrayLiteral = [
  "Ayam", // String // elemen 1, indeks ke 0
  "Bebek", // string // elemen 2, indeks ke 1
  10, //number //elemen 3, indeks ke 2
  true, //boolean // elemen 4, indeks ke 3
  { ayam: "hidup", cicak: "mati" }, // object // elemen 5, indeks ke 4
  ["cicak", "bebek"], // Array object // elemen 6, indeks ke 5
]; // per elemen bisa berbeda tipe datanya

// untuk mengaksesnya kita bisa gunakan [] dengan no indeks nya
// indeks di mulai dari 0
console.info("MENGAKSES DATA DI DALAM ARRAY");
const objectArrayLiteral = arrayLiteral[4];

// const { ayam, cicak } = objectArrayLiteral; // Megakses object yang ada di dalam arrayLiteral dengan destructuring object
// console.log(objectArrayLiteral);
// console.log(ayam);
// console.log(ayam === "hidup" ? "BENER BRO" : "SALAH LOH YAH");

const arrayArrayLiteral = arrayLiteral[5]; // mengakse array yang ada di dalam arrayLiteral
console.log(arrayArrayLiteral[0]); // Cicak
console.log(arrayArrayLiteral[1]); // Bebek

const booleanArrayLiteral = arrayLiteral[3];
console.log(booleanArrayLiteral);

const stringArrayLiteral = arrayLiteral[0];
console.log(stringArrayLiteral);

console.log(arrayLiteral); // value ayam masih hidup
arrayLiteral[4].ayam = "mati"; // matikan sudah mati
console.log(arrayLiteral); // sudah berubah menjadi mati

arrayLiteral[4]["cicak"] = "hidup";
console.log(arrayLiteral);

// APKAH BISA ATAU TIDAK
// apakah destructuring object bisa mengubah value property object di dalam array?

// CARA BARU KAYAKNYA
// const [, , , , objekHewan] = arrayLiteral;
// Variabel objekHewan di sana adalah nama variabel baru yang kita buat bebas untuk
// menampung isi dari elemen indeks ke-4 tersebut.
// Koma ke-1: Melompati "Ayam" (indeks 0)
// Koma ke-2: Melompati "Bebek" (indeks 1)
// Koma ke-3: Melompati 10 (indeks 2)
// Koma ke-4: Melompati true (indeks 3)
// Jadi, fungsi 4 koma di depan adalah untuk berjalan maju sampai ke elemen kelima
// (indeks ke-4), yaitu tempat object tersebut berada.
// Koma di situ artinya "Lewati/abaikan elemen di posisi ini"

// objekHewan.ayam = "Bakar"; // mengubah value ayam (property obejct index ke-4)
// objekHewan.cicak = "Potong leher"; // mengubah value cicak (property object index ke-4)
// console.log(arrayLiteral[4]);

// CARA LAIN
// ==========================================
// MENGUBAH VALUE OBJECT INDEKS KE-4
// DENGAN GABUNGAN ARRAY & OBJECT DESTRUCTURING
// ==========================================

// 1. Array Destructuring (Pakai koma untuk sampai ke indeks 4)
const [, , , , objekHewan] = arrayLiteral;

// 2. DI SINI KITA PAKAI OBJECT DESTRUCTURING!
// Kita bongkar object-nya, ganti nilainya, lalu gabungkan kembali (Trik Immutable)
const { ayam, cicak } = objekHewan;

// Modifikasi data lewat assignment hasil destructuring ke dalam arrayLiteral asli
arrayLiteral[4] = {
  ayam: "Panggang", // Mengubah nilai ayam memakai nama variabel destructuring tadi
  cicak: "Potong Ekor",
};

console.log(arrayLiteral[4]);
// Output: { ayam: 'Bakar', cicak: 'Potong leher' } -> BERHASIL DIUBAH!

