//FUNCTION EXPRESSION
// sama seperti  menulis variable namun value nya function

// Coba Perilaku Hoisting => ERROR
// convertCelciusToFahrenheit(20);
// console.log(convertCelciusToFahrenheit(2));
// ERROR KARENA FUNCTION EXPRESSION TIDAK BISA HOISTING

const convertCelciusToFahrenheit = function (temp) {
  const result = (9 / 5) * temp + 32;
  return result;
};
// convertCelciusToFahrenheit = Identifier/Nama Funciton
// function = keyword function
// (temp) = Parameter
// {} = isi function/Function Body

console.info("CONTOH FUNCTION EXPRESSION");
console.log(
  "Hasil Conversi dari celcius ke fahrenheit: ",
  convertCelciusToFahrenheit(20),
);

// Function Expression tidak memiliki/ tidak bisa hoisting (Memungkinkan kita memanggil code/funciton nya lalu di bawah nya baru di buat function nya)
