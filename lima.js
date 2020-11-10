// Array
// Element adalah satu data di dalam array

// var nama = "Ryan";
// var namaStorage = ["Ryan", "Syahm", 98];

// // console.log(namaStorage[1].length);
// console.log(namaStorage.join(" * "));

// var panjangArr = namaStorage.length;
// console.log(panjangArr);

// for (var i = 0; i < 3; i++){
// console.log(namaStorage[i])
// }

// var nama = "Ryan";
// var namaStorage = ["Ryan", "Syahm", 98];

// namaStorage.pop(); // Menghilangkan element yg paling belakang di Array
// namaStorage.push("RyN"); // Menambahkan element baru di Array paling belakang
// namaStorage.shift(); // Menghilangkan element yg paling depan di Array
// namaStorage.unshift("Sym"); // Menambahkan element baru di Array paling depan
// namaStorage.splice(1, 2, "Huehe"); // Menghapus dan Menambahkan (Urutan index, Jumlah yg mau dihapus, Nambahin Huehe)
// namaStorage.slice(1, 3); // Ngambil angka dari index yg ditentukan sampai yg ditentukan (Mulai dari index 1, Sampai index 3)
// namaStorage[0]; // Mengubah atau Menambah secara manual pada index yang ditentukan []
// buah[buah.length] = "Pisang"; // menghitung panjang Array, otomatis nambahin paling belakang 

// console.log(namaStorage)

// var nama = "Ryan";
// var namaStorage = [
//     nama,
//     "Bambang",
//     "Susilo",
//     nama,
//     "Bambang",
//     "Susilo",
//     nama,
//     "Bambang",
//     "Susilo",
//     nama,
//     "Bambang",
//     "Susilo",
// ]

// namaStorage.splice(1, 1);
// console.log(namaStorage);
// namaStorage.splice(3, 1);
// console.log(namaStorage);
// namaStorage.splice(5, 1);
// console.log(namaStorage);
// namaStorage.splice(7, 1);
// console.log(namaStorage);

// for (var i = 1; i <= namaStorage.length; i += 2){
//     namaStorage.splice(i, 1);
// }
// console.log(namaStorage)

// Slice
// var namaStorage = [
//     "Ryan",
//     "Ryn",
//     "Syah",
//     "Syahm",
//     "Yuhuu",
// ];
// console.log(namaStorage.slice(1, 3)); // Ngambil angka dari index yg ditentukan sampai yg ditentukan (Mulai dari index 1, Sampai index 3)

// var buah1 = ["Apel", "Mangga", "Jeruk"];
// var buah2 = ["Duren", "Kiwi"];

// var buah3 = buah1.concat(buah2);
// console.log(buah3);