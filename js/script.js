console.log("hello JS!");
var x = "student";
var y = "Belgium";
var z = "Kas";
var n = "1";
console.log("Vous serez "+ x + " et habiterez a " + y + ", et marie a " + z + " avec " + n + " enfants.");
var currentYear = 2017;
var birthYear = 1988;
console.log("My Age is " + (currentYear - birthYear));
var myAge = 29;
var y = 100;
var x = "chocolate";
var n = 2;
console.log ("Il vous reste " + ((y - myAge)*n) + " de " + x + " avant d'atteindre l'age de " + y + " ans.");
var result = (1 + 2) * 3 + 4 / 2;

//Logique
console.log (result);
var lang = "en";
var enMessage = "Hello World"
if (lang = "en") {
  console.log (enMessage);
}
var score = 60;
var result;
if (score >= 90) {
  console.log (result = "A");
}
  else if (score < 90 && score > 50) {
  console.log (result = "B");
}
  else if (score <= 50) {
  console.log (result = "C");
}
var singWord = "pomme";
var number = 5;
var result;
if (number > 1) {
  console.log ("Je possede " + number +" " + (result = singWord + "s"))
}
else if  (number === 1) {
console.log ("Je possede " + number +" " + (result = singWord));
}
//Functions
var a = 8-4;
var b = 21/7;
var c = 20*5;
var percent = (c/a)*100;
var speed = c/b;
console.log (a, b, c, percent, speed)
//Buckles
//even&odd
for(var i=0; i<=20; i++) {
if (i%2 === 0) {
console.log(i+ " is even");
}else {
console.log(i+ " is odd");
}
}
//tables
for (var i=0; i<=10; i++) {
  console.log(i + " * 9 = "+ (i*9))
}
//grades
