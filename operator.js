// 3 jenis operator

// Unary Operator => Operator yang memiliki 1 operan

typeof "Dicoding";
// typeoff fungsi nya untuk mengetahui tipe data Operan

// Binary Operator => Operator yang memiliki 2 operan
4 + 5;
10 / 2;
5 * 4;

// Ternary Operator = > Operator yang memiliki 3 Operan / conditional operator
let inputAge = 18;
let maxAge = 18;

// Menggunakan percabangan/ if else
if (inputAge < maxAge) {
  console.log("Maaf anda belum layak nonton ini");
} else if ((inputAge = maxAge)) {
  console.log("Umur Anda Pas");
} else {
  console.log("Silahkan nonton sepuasnya");
}

// Menggunakan Ternary Operator (Berlaku jika kondisi nya hanya 2)
inputAge <= maxAge
  ? "Maaf anfa belum layak nonton"
  : "Anda Selamat Menonton sepuasnya";

// Assingment Operator '=' : Menginisiasi nilai/memberikan nilai, bisa juga memperbarui nilai
console.info("Operator Assignment");
var variabel = 90;
console.log(variabel);

variabel = 40;
console.log(variabel);

// Operator Aritatika tambahan
// Increment (++)
var x = 50;
var y = 50;
console.info("Operator Artimatika: Increment"); // untuk menambah 1 nilai dari variable to' tidak untuk ekspresi
console.log(x++); // mengulang nilai awal dlu
console.log(x++); // mengulang nilai awal dlu
console.log(++y); // langsung nambah
console.log(++y); // langsung nambah

// Decrement (--)
var z = 100;
var c = 100;
console.info("Operator Aritmatika: Decrement"); // untuk mengurangi 1 nilai dari variavle to' tidak untuk ekspresi
console.log(z--);
console.log(z--);
console.log(--c);
console.log(--c);

// Eksponensial/Pangkat (**), Harus ada 2 operan
var d = 4;
console.info("Operator Aritmatika: Eksponensial (Pangkat)");
console.log(d ** 2);
console.log(d ** d);

// OPERASI COMPARISON/PERBANDINGAN/COMPARISON OPERATOR = membandingkan dua nilai dan mengembalikan dua nilai (True dan False)
console.info("Comparison Operator");
// Sama (==) => Untuk membandingkan ke dua operand apakah nilainya/valuenya sama tanpa membandingkan tipe datanya.
let q = 10;
let w = "10";
let isQEqualW = q == w; // true or false

// Tidak Sama (!=) => Untuk membandingkan kedua operan apakah nilai nya tidak sama tapi tidak dengan tipe datanya
let isQNotEqualW = q != w;

console.info("Operator Sama (==)");
console.log(isQEqualW);
console.log(isQNotEqualW);

console.info("RUMUS OPERATOR PERBANDINGAN");
console.info("SAMA (==)");
console.log(false == false);
console.log(false == true);
console.log(false == false);
console.info("RUMUS OPERATOR PERBANDINGAN");
console.info("TIDAK SAMA (!=)");
console.log(false != false);
console.log(false != true);
console.log(false != false);

// Identik (===) => Untuk Membandingkan ke dua operan apakah nilainya/valuenya sama dan juga tipe datanya
console.info("Operator Identik (===)");
// isQEqualW = q === w;
let e = 10;
let r = "10";
let isEEqualR = e === r;
console.log(isEEqualR);
