// Identifier = nama function, dan wajib
// Sepakat pakai camel case disetiap function yang dibuat
// () parenthess => menyimpan parameter/arguments
// {} curly braces => isi dari function/fungsi yang akan berjalan
// Return => utuk mengembalikan atau memberikan output dari fungsi/function nya

function greetWorld() {
  console.log("Hello World");
}

function convertCelciusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log(
    "Hasil Konversi Celcius ke Fahrenheit " + temperatureInFahrenheit,
  );
}

convertCelciusToFahrenheit(20); //Contoh menggunakan ekspresi langsung = 68
convertCelciusToFahrenheit(10); // hasilnya = 50

const temperatureinCelcius = 50;

convertCelciusToFahrenheit(temperatureinCelcius); // Contoh Menggunakan Variable di parameter function = 122

// console.log(convertCelciusToFahrenheit); // Yang di console function/code nya

// Temperature di parameter di functio convert itu di update/ubah ke 20/10, jadi temperature/parameter dalam function ikut jadi 20/10

// Salah satu kelebihan Javascript => Hoisting, yakni memungkinkan kita menulis kode pemanggilan sebelum code pendeklarasian function KHUSUS JS
// Gak bisa kalau di php!
// doubleTwo(4); // 8
// fullName("Maul", "Terbul");
// doubleTwo(); // Nan
// fullName(); //undifined
// kaliTiga();
kaliTiga(9);
// Kalau parameter nya number itu erornya bisa Nan
// Kalau parameter nya string itu erornya bisa Undifined

function doubleTwo(number = 2) {
  console.log(number * 2);

  //   console.log(number * 2);
}

// Contoh tidak pakai default parameter, bingung untuk menentukan hasil dari parameter yang kosong
function kaliTiga(number) {
  if (number != NaN || number != undefined) {
    console.log(number * 3);
  } else {
    console.log("Not A Number");
  }
}

function fullName(namaPertama, namaKedua) {
  console.log(namaPertama + " " + namaKedua);
} //Parameter/argument bisa lebih dari satu
