// Object
// Property dan Value
// Property = nama dari index / var
// value = nilai / data yg disimpan di index

// var bioData = {
//     nama : "Ryan",
//     password : "123dqwda",
//     notelp : "0813123123",
//     laptop : {
//         type : "ROG",
//         ram : "8GB",
//     }
// }
// var bioData2 = {
//     nama : "Syahm",
//     password : "asfasf1231",
//     notelp : ["08238532", "09213124214"],
// }
// console.log(bioData.notelp);
// console.log(bioData);
// console.log(bioData.notelp[0]); // untuk index ke 0 pada array
// console.log(bioData.laptop.type); // untuk manggil array dalam array

// ------------------------------

// var toko = {
//     barisanBuah: ["Apel", "Mangga", "Duren"],
//     barisanDaging: ["Ayam", "Sapi", "Kambing"],
//     barisanSnack: ["Taro", "Cheetos", "Chitato"],
// };

// console.log(toko.barisanDaging[1]);

// ---------------

// var toko = {
//     barisanBuah: [
//         "Apel",
//         "Mangga",
//         [
//             {nama : "monthong", harga : 4000},
//             {nama : "musanking", harga: 500000},
//         ],
//     ],
//     barisanDaging: ["Ayam", "Sapi", "Kambing"],
//     barisanSnack: ["Taro", "Cheetos", "Chitato"],
    
// };
// console.log(toko.barisanBuah[2][1].harga)

// // Method
// // Sebuah function di dalam object
// var namaBelakang;
// var nama = "Yuhuu";
// var bioData = {
//     nama : "Ryan",
//     namaBelakang: "Syahm",
//     password : ["123dqwda", "abc123"],
//     notelp : ["0813123123", "0812412414"],
//     laptop : {
//         type : "ROG",
//         ram : "8GB",
//     },
//     namaFull: function(){
//         return this.nama + " " + this.namaBelakang; // this. digunakan untuk mengambil data dari dalam object, tanpa .this untuk mengambil dari luar
//     },
// };
// bioData.alamat = ["Pekanbaru", "Jakarta"],
// delete bioData.password.splice(1,1); // delete index 1, cuma 1
// bioData.notelp.push("12412412412"); // nambah no telp
// bioData.notelp[0] = "99999999999999"; // nambah no telp di index 0
// console.log(bioData);
// delete bioData.password; // delete password
// console.log(bioData.namaFull());
// console.log(bioData.nama.split(""));

// Class
class bioData{
    constructor(nama, usia, pekerjaan){
        this.name = nama;
        this.age = usia;
        this.job = pekerjaan;
        this.fullName = function(){
            return this.name + " " + this.age;
        }
    }
}

var John = new bioData("John", 50, "Hunter");
console.log(John);
// console.log(John.usia);

// class bioData {
//     constructor(nama, namaBelakang, usia, pekerjaan) {
//       this.namaDepan = nama;
//       this.lastName = namaBelakang;
//       this.usia = usia;
//       this.okupasi = pekerjaan;
//       this.fullName = function () {
//         return this.namaDepan + " " + this.lastName;
//       };
//     }
//   }
  
//   var john = new bioData("John", "Wick", 50, "Hunter");
//   console.log(john.namaBelakang);