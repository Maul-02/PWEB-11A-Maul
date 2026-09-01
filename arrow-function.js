// Function biasa

function doubleThree(number) {
  return number * 3 * 2;
}

// FUnction bisa mereturn function
function doubleFour(number) {
  return function (x) {
    return number * x * 4;
  };
}

// First Class Citizen => function yang diperlakukan layaknya sebuah nilai.
const functionBiasa = doubleFour(2);
const functionBiasaLanjutann = functionBiasa(4);

console.info("FUNCTION BIASA");
// console.log(doubleFour(2));
console.log(doubleFour(2)(5)); // cara langsung panggil

console.log(functionBiasa(2));

// Expression function
const sayZubair = function () {
  return "Halo Zubair";
};

// Coba Hoisting (MEmanggil function sebelum di deklarasikan)
// Privilage hoisting hanya milik function biasa
// Tidak bisa karena yang bisa hoisting cuman di FUNCTION BIASA
// console.log(sayMaul("Maulana"));

// Arrow Function
// Function/penulisan/anotasinya di ganti dengan =>
// sayMaul adalah identifier
// Kurung di awal adalah parameter
// Bisa Tanpa Parameter,tinggal kosongkan saja parameter ya
const sayMaul = (nama) => {
  return "Hello " + nama;
};

// Penulisan Lebih Singkat
// Syarat: Parameter nya cuma satu
// return kalo gaada kondisi/cuma 1 operasi ndk perlu di tulis
const sayMaulDua = (nama) => "Hallo " + nama;

// Coba Panggilan biasa
console.log(sayMaul("Maulana"));
console.log(sayMaulDua("Mual"));

// Chalenge: buat satu arrow function bernama hitungNilai dengan
// 3 parameter yaitu (nama, nilai tugas, nilaiUjian)
// ketentuannya sebagai berikut
// 1. NIlai tugas memiliki bobot 40%
// 2. Nilai Ujian memiliki bobot 60%
// 3. Hitung dulu nilai akhir nya menggunakan operasi aritmatika
// Jika nilai akhir >= 75, "Selamat nama lulus dengan nilai nilaiAkhir"
// Jika nilai akhir nya < 75, "Mohon Maaf nama tidak lulus denga nilaiAkhir"

const hitungNiali = (nama, nilaiTugas, nilaiUjian) => {
  //   let nilaiAkhir = nilaiTugas * 0.4 + nilaiUjian * 0.6;

  //   if (nilaiAkhir >= 75) {
  //     return `Selamat ${nama} lulus dengan nilai ${nilaiAkhir}`;
  //   } else {
  //     return `Mohon Maaf ${nama} tidak lulus dengan nilai ${nilaiAkhir}`;
  //   }

  //   Jawaban ustd numan
  const bobotNialiTugas = nilaiTugas * 0.4;
  const bobotNialiUjian = nilaiUjian * 0.6;
  let nialiAkhir = bobotNialiTugas + bobotNialiUjian;

  //   // If else
  //   if (nialiAkhir >= 75) {
  //     console.log("Selamat " + nama + " Lulus Dengan Nilai " + nialiAkhir);
  //     console.log(`Selamat ${nama} Lulus Dengan Nilai ${nialiAkhir}`);
  //   } else {
  //     console.log(
  //       "Mohon Maaf " + nama + " Tidak Lulus Dengan Nilai " + nialiAkhir,
  //     );
  //     console.log(`Mohon Maaf ${nama} Tidak Lulus Dengan Nilai ${nialiAkhir}`);
  //   }

  //   Ternry Operator
  //   hanya bisa dua kondisi
  return nialiAkhir >= 75
    ? console.log(`Selamat ${nama} Lulus Dengan Nilai ${nialiAkhir}`)
    : console.log(`Mohon Maaf ${nama} Tidak Lulus Dengan Nilai ${nialiAkhir}`);
};

hitungNiali("Numan", 100, 100); // cara satu
console.log(hitungNiali("Maul", 10, 10)); //cara console
