//var date = new Date();
//
//console.log(date.getFullYear());
//console.log(date.getMonth());
//console.log(date.getDay());
//console.log(date.getHours());
//console.log(date.getMinutes());

//var x=4;
//var y=3;
//var z=2;
//var w= (x+y*z) / (x*y);
//
//console.log(Math.pow (w, z));

var days = 485;
var year = days / 360;
days = days % 360;
console.log(days);
var months = days / 30;
days = days % 30;
console.log(days);
var weeks = days / 7;
days = days % 7;
console.log(days);

console.log(Math.floor(year), "Tahun")
console.log(Math.floor(months), "Bulan")
console.log(Math.floor(weeks), "Minggu")
console.log(days, "hari");