// JavaScript


// variable :- 


// var  - global scope , function scope

// let  - block scope

// const - block scope


// rules


// var 

// 1. declration  // 2. intialiazation

var a = 10

// 3. reuse    // 4.reintialization

    a = 12

// 5. reDeclration

var a = 13

console.log(a)


// let 

// 1. declration // 2. reintialization

let b = 15 

// 3. reuse      // 4. reintialization

    b = 16

// 5. reDeclration 

// let b 

console.log(b);


// const 

// 1. declration  // intialization 

const c = 17 

// 3. reuse // reintialization

    //   c = 18 
    
// 5. redeclration 

// const c 

console.log(c);



// printing Statement

// 1. console.log()

let d = 55 

console.log(d);
console.log(100);



// 2. alert()


// let e = 1000
// alert(e)

// 3. confirm()

// const f = "did you know programing ?"

// confirm(f)

// 4. prompt()


// var name = "what is your name"

// prompt(name)



// 5. document.writeln()

// let g = "hello"

// document.writeln(g)



// i want to print user age in console

// let userAge = prompt("how old are you ?")

// console.log(userAge);


// i want to print pop way to user name 

// let userName = prompt("what is your name ?")

// alert(userName)

// i want to print user name in ui

// var userName = prompt("what is your name")

// document.writeln(userName)


// console method


// 1. console.log()

console.log(122);


// 2. console.warn()

console.warn(122);


// 3. console.error()

console.error(122);


// 4. console.clear()



console.clear()


// DataTypes 

// 1. primitive DataType

// string - ""

let name = "naveen"

console.log((name));


// number - 123


let num = 12

console.log(typeof(num));


// boolean - true , false 


let boo = false

console.log(typeof(boo));


// undefined 


let empty; 

console.log(empty);


// null 

// let random = prompt()

// console.log(random);














// 2. non primitive DataType


// Array - []

let fruit = ["graps","Apple","orange","banana","giwi","papaya",123,true]

console.log(fruit[2]);

console.log(fruit[0]);  // array first value
console.log(fruit[fruit.length-1]); // array last value





// object - {}

let employee = {
    name : "priya",
    role : ["software engineer","designer"],
    isdone: true,
    qualification : ["BE","ME"]
}


console.log(employee);
console.log(employee.name);
console.log(employee.isdone);
console.log(employee.role[1]);


console.clear()



// operator 





// Arithmetic operator 


// meaning           syntax

// addition            + 

console.log(1 + 2);

// subraction          - 

console.log(1 - 1);


// multiplication      * 


console.log(2*5);


// division           /

console.log(10 / 200);


// modulus           %

console.log(44 % 200);


// exponencial       **

console.log(5**3); // 5*5*5 


// increament       ++   = +1

// post Inc   = var ++

// Pre  Inc   = ++ var



let num1 = 3

--num1

console.log(num1);

// searching element first find in variable side means u can calculate that value side till variable only

let num2 = 4      // null

    num2 = -- num2

    console.log(num2);



// searching element first find in value side means u can calculate that value side entair value.


let num3 = 5     // null

let num4 = num3++ // num3 = 5 ++ = +1 // 6


console.log("num 3",num3); // num 3  = 6
console.log("num 4",num4); // num 4  = 5







let num5 = 2 // null 

let num6 = -- num5 // -- num5 = 1

console.log(num5); // 1
console.log(num6); // 1



let num7 = 4  // null
let num8 = --num7  // --num7 // 3
let num9 = num8++  //  3


console.log(num7); // 3      / num7 : 3
console.log(num8); // 5 / 4  / num8 : 4
console.log(num9); // 4 / 5  / num9 : 3

    





// decreament       --   = -1

// Post Dec  = var --

// Pre  Dec  = -- var




console.clear();








// Assignment operator

let num10 = 20
let additionalVal = 100


    // num10 = num10 + additionalVal

    num10 **= additionalVal

    console.log(num10);
    





// comparision operator

// logical operator

// ternery operator

