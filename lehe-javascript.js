console.log("javascript töötab!");

console.log(document.getElementById("tekst"));

document.getElementById("tekst").innerText ="Uus tekst!";

var frontEnd = ["Javascript", "PHP", "Java", "HTML", "CSS", "C#"];



// frontEnd.shift(); // võtab elemendi eest ära
// frontEnd.pop(); //võtab elemendi lõpust ära
frontEnd.unshift("Angular"); // lisab elemendi algusesse
frontEnd.push("Python"); // lisab elemendi lõppu
// frontEnd.splice(0); // kustutab kõik alates indeksiga 0
// frontEnd.splice(0, 1); // kustutab ühe elemendi alates indeksist 0
//frontEnd.splice(2, 3); // kustutab 3 elementi alates indeksist 2
//frontEnd[1] = frontEnd[2] //asendab järjekorras 2 oleva elemendi järjekorras 3 oleva elemendiga


  var uusMuutuja = frontEnd[0].split("a"); // stringist/sõnast massiivi tegemine
 // järjekorras esimesest sõnast tükeldades A-st
  var uusMuutuja2 = frontEnd[1].split(""); // stringist massiivi tegemine
 // tükeldadess teist sõna
   var uusMuutuja3 = frontEnd[1].split("")[0]; // massiivi tegemine ja seejärel esimese tähe võtmine
    // võtame teise sõna algustähe
console.log(uusMuutuja);
// console.log(uusMuutuja2);
// console.log(uusMuutuja3);


document.getElementById("tekst").innerText = frontEnd;
//document.getElementById("tekst").innerText = uusMuutuja