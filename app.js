/*//fucntion statement
function greet() {
  console.log('hi');
}
greet();  //callback function


//functions are first-class
function log(helo){
    helo();          //invoke function
}
log(greet);


//function expression
var greetMe = function () {
   console.log('hello world');
}
greetMe();


//function first-class expression

log(greetMe);


//use a fucntion in a expression on the fly
log(function () {
    console.log('my name is kk')
});*/

/*
var hacker = require('./module/extra');
hacker();
*/

//object literals
var person = {
    firstname: 'krishna',
    lastname: 'kondoju',
      ass: function () {  //ass is a method
          console.log('hahaha   ' + this.firstname+'  '+this.lastname);
      }
};
person.ass();

//console.log(person['firstname']);   another method to get name value
//prototypical inhertance

function fuck(firstnam, lastnam) {
    this.firstnam = firstnam;
    this.lastnam = lastnam;
}
fuck.prototype.gre = function () {
    console.log('helo,' + this.firstnam + this.lastnam);
};
var john = new fuck('krishna','kanth');
john.gre();
console.log(john.__proto__);

/*var jon = new fuck('krisna','kanth');
jon.gre();
console.log(john.__proto__);
console.log(jon.__proto__);
console.log(john.__proto__ === jon.__proto__);*/

//console.log(john.firstnam);
//immidate invoked function expression
var firstname = 'hakc';
(function (lastname) {
    this.firstname = 'chandu';
//var firstname ='chandu';
    console.log(this.firstname + lastname);
}('reddy'));
console.log(firstname);


// connecting another js file using require

/*var wish =  require('./module/greet');    //require is keyword for module connecting
wish();*/

var wish = require('./module/mix');
wish.english();
wish.spanish();

















