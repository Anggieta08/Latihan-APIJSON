UBAH OBJECT JADI JSON
// const user ={
//     nama : "Anggieta",
//     nik : "08090809",
//     email : "anggieta0809@gmail.com"
// };


// console.log(JSON.stringify(user));

VANILLA JQUERY
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4 && xhr.status == 200 ) {
//         let user = JSON.parse(this.responseText);
//         console.log(user);
//     }
// }
// xhr.open('GET', 'percobaan.json', true);
// xhr.send();

JQUERY
$.getJSON('percobaan.json', function(data){
    console.log(data);

});