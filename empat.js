//var angka = 0;

// While
// while (angka >10){
//     console.log(angka);
//     angka ++;
// }

// Do While
// do {
//     console.log(angka);
//     angka ++;

// } while (angka<10);

// For
// var i;
// for (i=0; i<10; i++){
//     console.log(i);
// }
// console.log (i, "Lah?");

// var i;
// for(i=1; i<=30; i++){
//     if (i%2 === 0){
//     console.log("Genap \t", i);
//     }
//     else{
//     console.log("Ganjil \t", i);
//     }
// }

// Baris Horizontal atau Kesamping
// var output = "";
// for (var i = 0; i < 5; i++){
//     output += "*";
// }
// console.log(output);

// Baris Vertikal atau Kebawah
// var output = "";
// for (var i = 0; i < 5; i++){
//     output += "*\n";
// }
// console.log(output);

// Square
// var output = "";
// for (j = 0; j < 5; j++){
//     for(i = 0; i < 5; i++){
//         output = output + " * ";
//     }
//     output += "\n";
// }
// console.log(output);

// Segitiga Kebalik
// var output = "";
// for (var i = 1; i < 6; i++){
//     for (var j = 6; i < j; j--){
//     output += "*";
//     }
//     output += "\n";
// }
// console.log(output);

// Segitiga
// var output = "";
// for (var i = 1; i < 6; i++){
//     for (var j = 0; i > j; j++){
//     output += "*";
//     }
//     output += "\n";
// }
// console.log(output);

var output = "";
for (var i = 0; i < 7; i++){
    for (var j = 7; i < j; j--){
    output += "   ";
    }
    
    for (var k = 0; i > k; k++){
        output += " * ";
    }
    for (var l = 1; i > l; l++){
        output += " * "
    }
    output += "\n";

}
console.log(output);