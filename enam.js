// Function
// Function bisa di deklarasi mau berapa pun, yang penting nanti fungsi nya ditarok di akhir
// return untuk melanjutkan data dari function 1 ke function lainnya

// function tambah(num){
//     return(num*2)
// }
// console.log(tambah(2));

// -----------------------

// function namafunction(){
//     console.log("Hello Ryan")
// }

// namafunction();

// -------------------

// function greeting(name){
//     console.log("Hai " + name + " Ganteng");
// }

// greeting("Ryan");

// ----------------------

// Menjalankan (3 * 2) + 2
// function tambah(bebas){
//     bebas = bebas * 2;
//     bebas = bebas + 2;
//     return bebas;
// }

// var kurang = function (angkalagi, lagiangka){
//     total = angkalagi+lagiangka;
//     return total;
    
// }

// console.log((tambah(3)) + kurang(10, 20));


// function genapganjil(num){
//     if (num % 2 == 0){
//         console.log("Genap")
//     } else{
//         console.log("Ganjil")
//     }
    
// }
// genapganjil(1);
// genapganjil(2);
// genapganjil(3);

// function kotak(num){
// var output = "";
// for (j = 0; j < num; j++){
//     for(i = 0; i < num; i++){
//         output = output + " * ";
//     }
//     output += "\n";
// }
// return output;
// }
// console.log(kotak(3));

// ----------------------

// Ketika Y = 1, return x

// function pangkat(x,y){
//     if (y == 1){
//         return x;
//     } else{
//         return (x = x * pangkat (x, y-1));
//     }
// }

// console.log(pangkat(4,2));

// ------------------------

// function tambah(x){
//     return x + tiga();
// }
// function tiga(){
//     return 3;
// }
// var hasil = tiga();
// console.log(tambah(10));

// function sayHello(){
//     console.log("Hola");
// }
// setTimeout(sayHello, 3000); // untuk running ketika udah 3 detik
// setInterval(sayHello, 1000); // running terus2an tiap 1 detik

// ---------------------------

// nyari kaliDua(z, v) dulu 3x2 terus baru tambah
// function tambah(x,y){
//     return x + kaliDua(y, x);
// }

// function kaliDua(z, v){
//     return z * v;
// }

// console.log(tambah(3,2));

// ---------------------------

// Buat mindahin perhuruf
function blender(bebas){
    return bebas.split("");
}
console.log(blender("Melon"));