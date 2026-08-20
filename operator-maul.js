/* # 1. Operator penugasan / assignment operator => Menginisiasi/Mendeklarasikan/Memberikan nilai pada variabel, dan mengubah nilai yang sudah ada */

// MENGINISIASI/MENDEKLARASIKAN NILAI
const nama = "Maul";
let lokasi = "Indonesia, Makassar";

console.info(" # Mendeklarasikan Nilai dengan Assignment Operator (=)");
console.log(nama);
console.log(lokasi);

// MENGUBAH NILAI
lokasi = "Russia, Moskow";

console.info("# Mengubah Nilai dengan Assignment Operator (=)");
console.log(lokasi);

/* # 2. Aritmethic Operator => Operator aritmetika adalah operator standar yang digunakan untuk proses aritmetika, seperti
penambahan ( + ), pengurangan ( - ), pengalian ( * ), ataupun pembagian ( / ), hingga modulus/sisa bagi (%). */

// - Contoh Operator Aritmatika
console.info("Operator Aritmatika (+,-,*,/)");
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);

// - Sisa Bagi / Modulus (%) => mengembalikan sisa hasil bagi operan kiri dan operan kanan

let operan1 = 20;
let operan2 = 4;

console.info("Operator Modulus (%)");
console.log(operan1 % operan2); // 0, karena 20 habis di bagi 4

// - Increment (++) => Menambah 1 Nilai
let operan3 = 3;
let operan4 = 3;

console.info("Operator Increment (++)");
console.log(operan3++); // ++ di akhir mengambil nilai nya dlu, lalu yang kedua kali di tambah
console.log(operan3++);
console.log(++operan4); // kalau ++ di awal, langsung di tambah 1 lalu dikembalikan/tampilkan
console.log(++operan4);

// - Decrement (--) => Mengurangi 1 Nilai
let operan5 = 5;
let operan6 = 5;

console.info("Operator Decrement (--)");
console.log(operan5--); //Aturan penempatan operator (++/--) nya sama seperti Increment
console.log(operan5--);
console.log(--operan5);
console.log(--operan5);

// - Eksponensial (**) => pangkat
let operan7 = 9;

console.info("Operator Eksponensial (**)");
console.log(operan7 ** 2); // 9 * 9, karena 9 pangkat dua jadi 9 * 9
console.log(operan7 ** 5); // 9 * 9 * 9 * 9 * 9 , karena 9 pangkat 5 jadi 9 * 9......

// # 3. Comparison Operator / Operator Perbandingan
/* Comparison Operrator / Operator perbandingan adalah operator yang digunakan untuk membandingkan dua nilai dan
mengembalikan nilai boolean ( true atau false ) sebagai hasil perbandingan*/

// Sama (==) => Membandingkan dua operan, tanpa melihat tipe datannya
const operan8 = 9;
const operan9 = "9";
const is8Equal9 = operan8 == operan9;

console.info("Operator Comparison");
console.info("Operator Sama (==)");
console.log(is8Equal9); //true, karena sama sama 9, meskipun operan 9 string dan operan 8 number

// Tidak Sama (!=) => Membandingkan dua operan, tanpa
/* memperhatikan tipe data. Jika nilai
kedua operan dianggap tidak sama,
operasi akan mengembalikan true ,
sebaliknya false . */

console.info("Operator Tidak Sama (!=)");
console.log(operan8 != operan9); // false karena nilai nya sama waalaupun tipe data nya berbeda

// Identik (===) => Membandingkan dua operan dengan tipe datanya
console.info("Operator Identik (===)");
console.log(operan8 === operan9); // false, karena tipe datanya berbeda

// Tidak Identik (!==) => Membandingkan dua operan dengan tipe datanya dan membalikkan hasil (True jadi false dan sebaliknya)
console.info("Operator Tidak Identik (!==)");
console.log(operan8 !== operan9); // True, karena tipe datanya berbeda

// Lebih dari (>) => Membandingkan dua operan apakah operan pertama lebih besar dari pada operan dua

var operan10 = 9;
var operan11 = 10;
console.info("Operator Lebih Dari (>)");
console.log(operan10 > operan11); // False, karena Operan 10 lebih kecil daripada operan 11

// Lebih dari atau samadengan (>=) => sama seperti lebih dari, cuman ada tambahan sama dengan
console.info("Operator Lebih dari Atau Sama dengan (>=)");
console.log(operan10 >= operan10); // True, karena operan 10 sama dengan 10

// Kurang Dari (<) => Membandingkan dua operan apakah operan pertama lebih kecil daripada operan kedua
console.info("Operator Kurang Dari (<)");
console.log(operan10 < operan11); // True, karena operan10 lebih kecil dari operan11

// Kurang Dari (<=) => sama seperti kurang dari cuman ada tambahan kondisi yaitu sama dengan
console.info("Operator Kurang Dari (<=)");
console.log(operan10 <= operan11); // True, karena operan10 lebih kecil dari operan11

// # 4. Logical Operator
/*
    Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean. Dengan
operator logika, kita bisa melakukan operasi gerbang logika, seperti AND dan OR. Operator
logika dapat digunakan untuk menetapkan logika yang lebih kompleks.
*/

// - AND (&&) => Dua kondisi harus benar baru dinyatakan True
var operan12 = true;
var operan13 = false;

console.info("Operator AND (&&)");
console.log(operan12 && operan13); // False karena operan 13 false

// - OR (||) = Salah satu kondisi harus benar/true lalu dinyatakan true
console.info("Operator OR (||)");
console.log(operan12 || operan13); // True karena operan 12 true

// - NOT (!) = Mengubah operan true jadi false dan sebalikany
console.info("Operator NOT (!)");
console.log(!true); //False Karena dibalikkan
console.log(!false); // True karena dibalikkan

// # 5. Operator String / String Operator
/*
Operator string adalah operator yang digunakan untuk menggabungkan dua nilai string.
Operator ini menggunakan simbol + dan termasuk dalam kategori binary operator.
*/

const namaDepan = "Maul";
const namaBelakang = "Terbul";
let merged = namaDepan + namaBelakang;

console.info("Operator String (+)");
console.log(merged); // hasilnya MaulTerbul karena di merged Menggabungkan nya dengan operator string (+)
