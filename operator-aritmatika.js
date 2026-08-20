// Operator Tambah (+)
var a = 30;
var b = 15;
var jumlah = a + b;
console.info("Operasi Tambah +");
console.log(jumlah); //45

// Operator Kurang (-)
var kurang = a - b;
console.info("Operasi Kurnag -");
console.log(kurang); //15

// Operator Kali (*)
var kali = a * b;
console.info("Operasi Kali %");
console.log(kali); // 450

// Operator Bagi (/)
let bagi = a / b;
console.info("Operasi Bagi /");
console.log(bagi); // 2

// Operator Modulus (%)
let modulus = a % b;
console.info("Operasi Modulus %");
console.log(modulus);

// Operator Kurung ()
// mendahului operasi aritmatika
var a = 4;
var b = 5;
var c = 6;

var nilai = a + (b - c);
var nilaiAkhir = nilai * 2 + a - 10 + (a + b);
var nilaiAkhir2 = 10 + (2 - 5) * 2;
var nilaiAkhir3 = (b % 2) + (3 + 5) * 2 * a;
console.info("Operasi tanda Kurung ()");
console.log(nilai);
console.log(nilaiAkhir);
console.log(nilaiAkhir2);
console.log(nilaiAkhir3); // 65

// ()% -> */ -> +-
