// Konversi Eksplisit -> konversi paling mudah untuk developer

// 1. Mengubah ke STring

let angka = 100;
let isFauzanMarried = false;
let floatNumber = 3.14;

console.info("1. Sebelum Di konversi");
console.log(angka);
console.log(isFauzanMarried);
console.log(floatNumber);

// String (Parameter); parameter -> variabel atau ekspresi yang ingin dikonversi ke string
const angkaToString = String(angka);
const isFauzanMarriedToString = String(isFauzanMarried);
const floatNumberToString = String(floatNumber);

// .toString(): tanpa parameter, deklarasi nya setelah variabel atau ekspresi
const angkaToString2 = angka.toString();
const isFauzanMarriedToString2 = isFauzanMarried.toString();
const floatNumberToString2 = floatNumber.toString();

console.info("1. Konversi ke String: menggunakan String(Parameter)");
console.log(angkaToString);
console.log(isFauzanMarriedToString);
console.log(floatNumberToString);

console.info("Konversi ke String: menggunakan .toString()");
console.log(angkaToString2);
console.log(isFauzanMarriedToString2);
console.log(floatNumberToString2);

// 2. Konversi ke Number()

let strNumber = "890";
let floatNumber2 = "3.14";
let isFulanAbsent = true;

console.info("2. Sebelum Di Konversi");
console.log(strNumber);
console.log(floatNumber2);
console.log(isFulanAbsent);

// Number(Param): Param/parameter: Variabel atau ekspresi yang ingin dikonversi
const numFromString = Number(strNumber);
const floatFromString = Number(floatNumber2);
const numFromBoolean = Number(isFulanAbsent);

console.info("2. Konversi ke number menggunakan Number(Parameter)");
console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

// parseInt(param)
let pixel = "500px";
let height = "175cm";
let weight = "84kg";

const pixelToInt = parseInt(pixel);
const heightToInt = parseInt(height);
const weightToInt = parseInt(weight);

console.info("2. Konversi ke number (interger) meggunakan parseInt()");
console.log(pixelToInt);
console.log(heightToInt);
console.log(weightToInt);

// parseFloat(param)
let phi = "3.14Phi";
let tegangan = "20.5Volt";

const phiToNumber = parseFloat(phi);
const teganganToNumber = parseFloat(tegangan);

console.info("2. Konversi ke Number (Float) menggunakan parseFloat()");
console.log(phiToNumber);
console.log(teganganToNumber);

// 3. Konversi Ke Boolean
let number = 123;
let string3 = "string";
let empty = null;
let kosong = "";
let notANumber = NaN;

console.info("Konversi ke Boolean menggunakan Boolean()");
console.log(Boolean(number)); // contoh parameter dengan variabel
console.log(Boolean(4 + 3)); // contoh parameter dengan Ekspresi/contoh ekspresi
console.log(Boolean(string3));
console.log(Boolean(empty));
console.log(Boolean(kosong));
console.log(Boolean(notANumber));
