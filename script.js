// 1. Buatlah sebuah function dengan nama changeWord yang berfungsi untuk menggantikan sebuah kata didalam sebuah kalimat.
// Function ini akan menerima 3 parameter, yaitu :
// - selectedText => Kata yang terdapat pada sebuah kalimat dan merupakan kata yang akan diganti nantinya.
// - changedText => Kata yang akan menjadi pengganti pada sebuah kalimat nantinya.
// - text => Sebuah kalimat.

function changeWord(selectedText, changedText, text) {
  const kalimatBaru = text.replace(selectedText, changedText)
  return kalimatBaru
}

const kalimat1 = "chapter 2 binar membahas tentang bahasa pemrograman javascript"

console.log("kalimat SEBELUM diubah :", kalimat1)
console.log("kalimat SETELAH diubah :", changeWord('membahas', 'belajar', kalimat1))

// 2. Buatlah sebuah function yang berfungsi mendeteksi apakah sebuah angka termasuk angka genap atau ganjil.
// Function ini akan menerima satu parameter, yaitu :
// - givenNumber ⇒ angka yang akan dicheck oleh function
// Kriteria function yang harus kamu buat:
// • Beri nama function tersebut checkTypeNumber
// • Menggunakan arrow function
// • function ini harus return data dengan tipe string
// • function ini harus return data berupa GENAP ATAU GANJIL
// • function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

const checkTypeNumber = (givenNumber) => {
  if(typeof givenNumber == "number"){
    if(givenNumber % 2 != 0){
      return "Ganjil"
    } else {
      return "Genap"
    }
  } else if(typeof givenNumber == "undefined") {
    return "Error: Bro where is the paramater?"
  } else {
    return "Error: Invalid data type"
  }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())

// 3. Buatlah sebuah function yang berfungsi untuk mendapatkan angka terbesar kedua dari sebuah array.
// Misal diberikan sebuah array yang terdiri dari beberapa angka [2,3,5,6,6,4], berdasarkan data dari array tersebut
// dapat kita simpulkan bahwasanya angka terbesar dari array tersebut adalah 6, angka kedua terbesar adalah 5,
// dan angka ketiga terbesar adalah 4. Maka dari itu function yang akan kamu buat ini akan me-return angka
// kedua terbesar pada array yang telah diberikan, yaitu angka 5.
// Function ini akan menerima satu parameter, yaitu:
// - dataNumbers ⇒ Array yang berisi beberapa angka
// Kriteria function:
// 1. Beri nama function tersebut getAngkaTerbesarKedua
// 2. function ini harus return data dengan tipe number
// 3. function ini harus return data angka terbesar kedua dari angka-angka yang diberikan di dalam array
// 4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.
