// 1. Buatlah sebuah function dengan nama changeWord yang berfungsi untuk menggantikan sebuah kata didalam sebuah kalimat.
// Function ini akan menerima 3 parameter, yaitu :
// - selectedText => Kata yang terdapat pada sebuah kalimat dan merupakan kata yang akan diganti nantinya.
// - changedText => Kata yang akan menjadi pengganti pada sebuah kalimat nantinya.
// - text => Sebuah kalimat.

function changeWord(selectedText, changedText, text) {
  const kalimatBaru = text.replace(selectedText, changedText);
  return kalimatBaru;
}

const kalimat1 =
  "chapter 2 binar membahas tentang bahasa pemrograman javascript";

console.log("======= SOAL NO 1 =======");
console.log("kalimat SEBELUM diubah :", kalimat1);
console.log(
  "kalimat SETELAH diubah :",
  changeWord("membahas", "belajar", kalimat1)
);

// ===========================================================================================================================================

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
  if (typeof givenNumber == "number") {
    if (givenNumber % 2 != 0) {
      return `Angka ${givenNumber} adalah ANGKA GANJIL`;
    } else {
      return `Angka ${givenNumber} adalah ANGKA GENAP`;
    }
  } else if (typeof givenNumber == "undefined") {
    return "Error: Bro where is the paramater?";
  } else {
    return "Error: Invalid data type";
  }
};

console.log("======= SOAL NO 2 =======");
console.log(
  checkTypeNumber(10),
  ". Output ini bertipe data",
  typeof checkTypeNumber(10)
);
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

// ===========================================================================================================================================

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

function getAngkaTerbesarKedua(dataNumbers) {
  const newDataNumbers = [];
  if (Array.isArray(newDataNumbers)) {
    for (let i = 0; i < dataNumbers.length; i++) {
      if (typeof dataNumbers[i] != "number") {
        return "Error : Value array ada yang bukan angka";
      } else {
        if (newDataNumbers.includes(dataNumbers[i])) {
          continue;
        } else {
          newDataNumbers.push(dataNumbers[i]);
        }
      }
    }
  } else if (typeof dataNumbers == "undefined") {
    return "Error: Bro where is the paramater?";
  } else {
    return "Error: Invalid data type";
  }

  const sortNumbers = newDataNumbers.sort(function (a, b) {
    return b - a;
  });
  return sortNumbers[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log("======= SOAL NO 3 =======");
console.log(
  "Angka terbesar kedua adalah",
  getAngkaTerbesarKedua(dataAngka),
  ". Output ini bertipe data",
  typeof getAngkaTerbesarKedua(dataAngka)
);

// ===========================================================================================================================================

// 4. Hari ini Toko Pak Aldi berhasil menjual banyak sepatu. Pada gambar disamping terdapat data sepatu-sepatu yang terjual dari toko Pak Aldi dalam bentuk array of object.
// Tugas kamu adalah membuat sebuah function yang berfungsi membantu Pak Aldi untuk menghitung total seluruh sepatu yang terjual.
// Function ini akan menerima satu parameter, yaitu:
// - dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product.
// Kriteria function:
// 1. Beri nama function tersebut getTotalPenjualan
// 2. function ini harus return data dengan tipe number
// 3. function ini harus return total penjumlahan dari properti totalTerjual pada data yang diberikan
// 4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualan) {
  let totalPenjualan = 0;
  if (Array.isArray(dataPenjualan)) {
    dataPenjualan.forEach((item) => {
      totalPenjualan += item.totalTerjual;
    });
  } else if (typeof dataPenjualan == "undefined") {
    return "Error: Bro where is the paramater?";
  } else {
    return "Error: Invalid data type";
  }

  return totalPenjualan;
}

console.log("======= SOAL NO 4 =======");
console.log(
  "Total penjualan adalah",
  getTotalPenjualan(dataPenjualanPakAldi),
  ". Output ini bertipe data",
  typeof getTotalPenjualan(dataPenjualanPakAldi)
);

// ===========================================================================================================================================

// 5.Hari ini Toko buku milik Ibu Daniela berhasil menjual banyak sekali buku-buku novel. Gambar disamping adalah data penjualan buku-buku novel yang dijual di Toko buku milik Ibu Daniela, dalam format array of object.
// Tugas kamu adalah membuat sebuah function yang berfungsi membantu Ibu Daniela untuk mendapatkan informasi berupa Total Keuntungan, Total Modal, Produk Buku Terlaris, Penulis Buku Terlaris dan Persentase Keuntungan dari data penjualan yang telah disediakan diatas.
// Function yang kamu buat ini akan me-return sebuah data yang berbentuk sebuah object yang dari beberapa properti.
// Function ini akan menerima satu parameter, yaitu:
// - dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product.
// Kriteria function:
// 1. Beri nama function tersebut getInfoPenjualan
// 2. function ini harus return data dengan tipe object
// 3. Data object harus berisi properti seperti yang dijelaskan sebelumnya yaitu totalKeuntungan, totalModal, produkBukuTerlaris, persentaseKeuntungan, dan penulisTerlaris
// 4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  if (Array.isArray(dataPenjualan)) {
    // MENCARI TOTAL KEUNTUNGAN
    let totalKeuntungan = 0;
    dataPenjualan.forEach((item) => {
      totalKeuntungan += (item.hargaJual - item.hargaBeli) * item.totalTerjual;
    });
    const totalKeuntunganFormat = totalKeuntungan.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    // MENCARI TOTAL MODAL
    let totalModal = 0;
    dataPenjualan.forEach((item) => {
      totalModal += (item.totalTerjual + item.sisaStok) * item.hargaBeli;
    });
    const totalModalFormat = totalModal.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    // MENCARI PERSENTASE KEUNTUNGAN
    let persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

    // MENCARI BUKU TERLARIS & PENULIS BUKU TERLARIS
    let totalJualProdukBukuTerlaris = 0;
    let produkBukuTerlaris = "";
    let penulisTerlaris = "";
    dataPenjualan.forEach((item) => {
      if (item.totalTerjual > totalJualProdukBukuTerlaris) {
        totalJualProdukBukuTerlaris = item.totalTerjual;
        produkBukuTerlaris = item.namaProduk;
        penulisTerlaris = item.penulis;
      }
    });

    let hasil = {};
    hasil.totalKeuntungan = totalKeuntunganFormat;
    hasil.totalModal = totalModalFormat;
    hasil.persentaseKeuntungan = persentaseKeuntungan.toFixed(2) + "%";
    hasil.produkBukuTerlaris = produkBukuTerlaris;
    hasil.penulisTerlaris = penulisTerlaris;

    return hasil;
  } else if (typeof dataPenjualan == "undefined") {
    return "Error: Bro where is the paramater?";
  } else {
    return "Error: Invalid data type";
  }
}

console.log("======= SOAL NO 5 =======");
console.log(
  getInfoPenjualan(dataPenjualanNovel),
  ". Output ini bertipe data",
  typeof getInfoPenjualan(dataPenjualanNovel)
);
