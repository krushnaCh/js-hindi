//primitive datatypes 

//string,Number boolean,null,defined,symbol,BIGInt

//Reference(Non primitive )

//Array,Objects,functions

const score=100;

const scorevalue=100.3;

const isLoggedIn=false;

let userEmail;

const Id=Symbol('123')
const anotherId=Symbol('123')

console.log(Id===anotherId);

const heros=["shaktiman","Ironman","Superman"]
console.log("heros");

let myObj={
    name:"krushna",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof Id);
console.log(typeof anotherId);
