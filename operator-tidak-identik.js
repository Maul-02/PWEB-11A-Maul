// 1. Contoh Penggunaan/Penerapan Operator Tidak Identik Pada Javascript
let num = 5;
let numString = "5";

console.info("Penerapan Operator Tidak Identik (!==");
console.log(num !== 5); // false (nilai sama)
console.log(num !== 10); // true (nilai beda)
console.log(num !== numString); // true (nilai beda)
console.log("sepakat" !== "sepakat"); // false (nilai sama)

// 2. Perbedaan dengan !=

console.info("Perbedaan dengan operator Tidak Sama (!=) ");
console.log(num !== numString); // true  -> beda tipe (number vs string)
console.log(num != numString); // false -> "5" dikonversi jadi 5, jadi dianggap sama

console.log(0 !== false); // true, beda tipe (number vs boolean)
console.log(0 != false); // false -> false dikonversi jadi 0

console.log(null !== undefined); // true -> beda tipe
console.log(null != undefined); // false -> dianggap sama secara loose
