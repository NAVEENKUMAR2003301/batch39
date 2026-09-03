// // // // JavaScript


// // // // variable :- 


// // // // var  - global scope , function scope

// // // // let  - block scope

// // // // const - block scope


// // // // rules


// // // // var 

// // // // 1. declration  // 2. intialiazation

// // // var a = 10

// // // // 3. reuse    // 4.reintialization

// // //     a = 12

// // // // 5. reDeclration

// // // var a = 13

// // // console.log(a)


// // // // let 

// // // // 1. declration // 2. reintialization

// // // let b = 15 

// // // // 3. reuse      // 4. reintialization

// // //     b = 16

// // // // 5. reDeclration 

// // // // let b 

// // // console.log(b);


// // // // const 

// // // // 1. declration  // intialization 

// // // const c = 17 

// // // // 3. reuse // reintialization

// // //     //   c = 18 
    
// // // // 5. redeclration 

// // // // const c 

// // // console.log(c);



// // // // printing Statement

// // // // 1. console.log()

// // // let d = 55 

// // // console.log(d);
// // // console.log(100);



// // // // 2. alert()


// // // // let e = 1000
// // // // alert(e)

// // // // 3. confirm()

// // // // const f = "did you know programing ?"

// // // // confirm(f)

// // // // 4. prompt()


// // // // var name = "what is your name"

// // // // prompt(name)



// // // // 5. document.writeln()

// // // // let g = "hello"

// // // // document.writeln(g)



// // // // i want to print user age in console

// // // // let userAge = prompt("how old are you ?")

// // // // console.log(userAge);


// // // // i want to print pop way to user name 

// // // // let userName = prompt("what is your name ?")

// // // // alert(userName)

// // // // i want to print user name in ui

// // // // var userName = prompt("what is your name")

// // // // document.writeln(userName)


// // // // console method


// // // // 1. console.log()

// // // console.log(122);


// // // // 2. console.warn()

// // // console.warn(122);


// // // // 3. console.error()

// // // console.error(122);


// // // // 4. console.clear()



// // // console.clear()


// // // // DataTypes 

// // // // 1. primitive DataType

// // // // string - ""

// // // let name = "naveen"

// // // console.log((name));


// // // // number - 123


// // // let num = 12

// // // console.log(typeof(num));


// // // // boolean - true , false 


// // // let boo = false

// // // console.log(typeof(boo));


// // // // undefined 


// // // let empty; 

// // // console.log(empty);


// // // // null 

// // // // let random = prompt()

// // // // console.log(random);














// // // // 2. non primitive DataType


// // // // Array - []

// // // let fruit = ["graps","Apple","orange","banana","giwi","papaya",123,true]

// // // console.log(fruit[2]);

// // // console.log(fruit[0]);  // array first value
// // // console.log(fruit[fruit.length-1]); // array last value





// // // // object - {}

// // // let employee = {
// // //     name : "priya",
// // //     role : ["software engineer","designer"],
// // //     isdone: true,
// // //     qualification : ["BE","ME"]
// // // }


// // // console.log(employee);
// // // console.log(employee.name);
// // // console.log(employee.isdone);
// // // console.log(employee.role[1]);


// // // console.clear()



// // // // operator 





// // // // Arithmetic operator 


// // // // meaning           syntax

// // // // addition            + 

// // // console.log(1 + 2);

// // // // subraction          - 

// // // console.log(1 - 1);


// // // // multiplication      * 


// // // console.log(2*5);


// // // // division           /

// // // console.log(10 / 200);


// // // // modulus           %

// // // console.log(44 % 200);


// // // // exponencial       **

// // // console.log(5**3); // 5*5*5 


// // // // increament       ++   = +1

// // // // post Inc   = var ++

// // // // Pre  Inc   = ++ var



// // // let num1 = 3

// // // --num1

// // // console.log(num1);

// // // // searching element first find in variable side means u can calculate that value side till variable only

// // // let num2 = 4      // null

// // //     num2 = -- num2

// // //     console.log(num2);



// // // // searching element first find in value side means u can calculate that value side entair value.


// // // let num3 = 5     // null

// // // let num4 = num3++ // num3 = 5 ++ = +1 // 6


// // // console.log("num 3",num3); // num 3  = 6
// // // console.log("num 4",num4); // num 4  = 5







// // // let num5 = 2 // null 

// // // let num6 = -- num5 // -- num5 = 1

// // // console.log(num5); // 1
// // // console.log(num6); // 1



// // // let num7 = 4  // null
// // // let num8 = --num7  // --num7 // 3
// // // let num9 = num8++  //  3


// // // console.log(num7); // 3      / num7 : 3
// // // console.log(num8); // 5 / 4  / num8 : 4
// // // console.log(num9); // 4 / 5  / num9 : 3

    





// // // // decreament       --   = -1

// // // // Post Dec  = var --

// // // // Pre  Dec  = -- var




// // // console.clear();








// // // // Assignment operator

// // // let num10 = 20
// // // let additionalVal = 100


// // //     // num10 = num10 + additionalVal

// // //     num10 **= additionalVal

// // //     console.log(num10);
    





// // // // comparision operator

// // // meaning    syntex    example       result

// // // lessThen     <         5 < 5        false

// // // greaterThen  >         6 > 5        true

// // // lessThenEq   <=        5 <= 5       true

// // // greaterThenEq >=       7 >= 8       false

// // // loosyTypeEq   ==       5 == "5"     true

// // // loosyNotEq    !=       5 != "5"     false


// // // strictlyTypeEq ===    5 === "5"     false

// // // strictlyNotEq  !==    "5" !== "5"     false






// // // // logical operator


// // // AND - &&


// // // true && true && true = true 

// // // false && true && true = false 


// // // OR - ||

// // // false || false || false = false 

// // // true  || false  || false = true 


// // // NOT - !


// // // !(true) = false  
// // // !(false) = true

// // // Comparison & Logical Operators
// // // Find the output of each console.log()

// // // 1
// // console.log(5 == "5" && !(5 === 5) || 6 > 7);

// // //   true && false || false
// // //   false || false = false

// // // 2
// // console.log(10 > 5 && 8 < 12 || 4 === "4");

// // //          true && true || false
// // //          true || false         = true

// // // 3
// // console.log(7 === 7 && 10 != "10" || 5 >= 5);

// // //          true    && false || true
// // //          false || true        = true

// // // 4
// // console.log(15 < 10 || 20 > 15 && 5 == "5");

// // //          false   || true  &&  true 
// // //          true && true       = true

// // // 5
// // console.log(!(10 === "10") && 8 <= 8 || 3 > 6);

// // //          true && true || false 
// // //          true  || false     = true

// // // 6
// // console.log(12 >= 10 && !(5 != 5) || 7 < 3); 

// // //          true && true || false 
// // //          true || false      = true

// // // 7
// // console.log(6 == "6" && 8 !== "8" || !(10 < 5));

// // //          true &&  true || true
// // //           true || true      = true

// // // 8
// // console.log(!(15 > 20) && 5 === "5" || 9 >= 9); 

// // //          true && false || true
// // //          false || true       = true

// // // 9
// // console.log(20 != "20" || 7 <= 7 && !(4 === 5));

// // //          false || true && true 
// // //           true && true       = true

// // // 10
// // console.log(10 === "10" && 5 > 3 || !(8 <= 8));

// // //          false  && true || false 

// // //          false || false       = false





// // // // ternery operator


// // // condition ? statement : statement ;


// // 5=="5"  ? console.log("condition true") : console.log("condition false");

// // let pwd = false 

// // pwd ? console.log("allow the home page") : console.log("password incorrect");



 

// // // concatination  + 


// // var str1 = "iron"
// // var str1 = "spider"
// // let str2 = "man"


// // console.log(str1 +" kjjkjd "+ str2);


// // // template string  ``

// // console.log(`${str1} kjjkjd ${str2}`);

// // console.clear()

// // // typeCasting method


// // // 1. implicit typeCasting 

// // // console.log("hello" + 12);

// // // string tc - string anything is string


// // console.log(typeof("hello" + "hello"));
// // console.log(typeof("hello" + 12));
// // console.log(typeof("hello" + true));
// // console.log(typeof("hello" + undefined));
// // console.log(typeof("hello" + null));
// // console.log(typeof("hello" + [1,2]));
// // console.log(typeof("hello" + {k:2}));


// // // number tc 


// // console.log(typeof(null + "hello"));
// // console.log(typeof(null + 1));
// // console.log(typeof(null + true));
// // console.log(typeof(null + undefined));
// // console.log(typeof(null + null));
// // console.log(typeof(null + []));
// // console.log(typeof(null + {}));


// // // boolean tc 


// // console.log(typeof(true + "hello"));
// // console.log(typeof(true + 1));
// // console.log(typeof(true + true));
// // console.log(typeof(true + undefined));
// // console.log(typeof(true + null));
// // console.log(typeof(true + [1,2]));
// // console.log(typeof(true + {h:3}));


// // console.clear()

// // // 2. explicit typeCasting


// // // String explicit TypeCasting 

// // // String()

// // console.log(typeof(String(100)));
// // console.log(typeof(String(true)));
// // console.log(typeof(String(undefined)));
// // console.log(typeof(String(null)));
// // console.log(typeof(String([1,2])));
// // console.log(typeof(String({k:9})));

// // // number explicit TypeCasting

// // // Number 

// // console.log(Number());
// // console.log(Number(""));
// // console.log(Number("123"));
// // console.log(Number("a1"));
// // console.log(Number(true));
// // console.log(Number(undefined));
// // console.log(Number(null));
// // console.log(Number([1,2]));
// // console.log(Number({j:1}));

// // // Boolean explicit TypeCasting

// // console.log(Boolean());
// // console.log(Boolean(""));
// // console.log(Boolean("123"));
// // console.log(Boolean("a1"));
// // console.log(Boolean(true));
// // console.log(Boolean(undefined));
// // console.log(Boolean(null));
// // console.log(Boolean([]));
// // console.log(Boolean({}));


// // console.clear();


// // // Flow control Statement

// // // conditional statement

// // // if statement

// // // if(condition){
// // //     statement 
// // // }

// // // condition = true ; {allow}

// // if(51<=5){
// //     console.log("hello");
    
// // }


// // // if else statement 

// // // if(condition){
// // //     statement
// // // }else{
// // //     statement
// // // }


// // // condition = true ; {if inside allow}, condition = false ; {else inside allow}


// // let age = 27 

// // if(age>=18){
// //     console.log("you can vote");
    
// // }else{
// //     console.log("you can't vote");
    
// // }






// // // else if statement 

// // let hour = 26


// // if(hour>=1 && hour <= 7){
// //     console.log("good morning");
    
// // }else if(hour >= 8 && hour <= 12){
// //     console.log("morning");
    
// // }else if(hour >= 13 && hour <= 15){
// //     console.log("good afternoon");
    
// // }else if(hour >= 17 && hour <= 19){
// //     console.log("good evening");
    
// // }else if(hour >= 20 && hour <= 24){
// //     console.log("good night");
    
// // }else{
// //     console.log("invalid time");
    
// // }



// // // nested if statement 


// // // let age1 = prompt("enter your Age")
// // // let height = prompt("enter your height use cm")
// // // let weight = prompt("enter your weight use kg")


// // // if(age1>=18){
// // //     if(height >= 160){
// // //         if(weight >= 60){
// // //             alert("congradulations your selected");
            
// // //         }else{
// // //             alert("your weight is not enough");
            
// // //         }

// // //     }else{
// // //         alert("your height is not enough");
        
// // //     }
// // // }else{
// // //     alert("your age is not enough");
    
// // // }


// // // switch statement

// // // let hello = "hi"
// // // switch(hello){
// // //     case "hi" : statement ;break;
// // // }


// // let trafficLight = "red"

// // switch(trafficLight){
// //     case "red" : console.log("stop the vechile");break
// //     case "yellow" : console.log("start the vechile");break
// //     case "green" : console.log("start the vechile");break

// //     default : console.log("signal not work");break
    
    
// // }














// // // loop statement


// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);




// // // for loop 


// // for(intialization ; condition ; iteration){
// //     statement
// // }


// for(let a = 1 ; a <= 5 ; a++){
//     console.log("for loop",a); // 1 2 3 4 5
    
// }


// // flow :- 

// // a = 1 ;  1 <= 5 = true ; 1++ = 2
// // a = 2 ;  2 <= 5 = true ; 2++ = 3
// // a = 3 ;  3 <= 5 = true ; 3++ = 4
// // a = 4 ;  4 <= 5 = true ; 4++ = 5
// // a = 5 ;  5 <= 5 = true ; 5++ = 6
// // a = 6 ;  6 <= 5 = false.



// // // while loop 


// // intialization 

// // while(condition){
// //     statement 

// //     iteration
// // }



// let val = 3

// while(val >= 10){
//     console.log("while loop",val);

//     val--
    
// }


// // val = 3 ; 3 >= 0 = true ; 3 ; 3-- = 2
// // val = 2 ; 2 >= 0 = true ; 2 ; 2-- = 1 
// // val = 1 ; 1 >= 0 = true ; 1 ; 1-- = 0 
// // val = 0 ; 0 >= 0 = true ; 0 ; 0-- = -1
// // val = -1 ; -1 >= 0 = false.


// // // do while loop 


// // intialization 

// // do{
// //     statement 

// //     iteration 
// // }


// // while(condition)



// let val1 = 3

// do{
//     console.log("do while loop",val1);

//     val1--
    
// }

// while(val1 >= 0)









// // // for of loop - string ,array , function


// // for(declration of variable){
// //     console.log(declration);
    
// // }

// let str = "javascript"

// for(let a of str){
//     console.log(a);
    
// }

// let arr = ["apple","orange","banana","giwi"]

// for(let b of arr){
//     console.log(b);
    
// }



// // // for in loop - object

// let obj= {
//     empName : "arun",
//     empId   : "stk-26-7689",
//     role    : "full stack"
// }


// for(let c in obj){
//     console.log(c , obj[c]);
    
// }




// console.clear();


// // function 


// // block of code
// // reuse code
// // easy debug
// // clean code and readable 
// // reuse value



// // syntex 

// // function one(parameter){
// //     statement 
// //     return 
// //     yield
// // }

// // one("argument")




// function two(){
//     let a = "hi"
//     console.log(a);


//     if(0){
//         console.log(1+1);
        
//     }else{
//         console.log(5);
        
//     }


//     for(let a = 1 ; a <= 5 ; a++){
//         console.log(a);
        
//     }
    
// }

// two()



// // parameter , argument 


// function three(name , age , department){

//     console.log("name",name);
//     console.log("age",age);
//     console.log("department",department);
    

// }

// three("arun",23,"ECE")
// three("kamal",23,"ECE")


// // return  - reusable value

// function four(salary){
//     return salary // 50000
// }

// let salary1 = four(50000) //50000

// console.log(salary1);

// function bonus(bonuss){
//     console.log(salary1 + bonuss);
    
// }

// bonus(5000)

// console.clear();





// // // scope

// // function scopeCheck(){
// //     if(true){
// //         var a5 = "global scope"
// //         let b5 = "block scope"
// //         const c5 = "block scope"
// //         console.log(b5);
// //         console.log(c5);
// //     }

// //     console.log(a5);
    
// // }

// // scopeCheck()


// // // hoisting


// // console.log(a6);
// // var a6 = "hi"



// // let b6 = 12
// // console.log(b6);



// // console.log(c6);
// // const c6 = 15




// // self invoke function 

// (function(product,discount){
//     alert(`now going on sale, ${product} better price , the discount is ${discount}%`)
// })("shoes",50)


// higherorder function , callback function 


let higherOrder = ()=>{
    console.log("higher order function");
    
}

let callback1 = ()=>{
    console.log("callback function");
    
}

higherOrder(callback1())


// generator function 


function* cashback(){
    yield "20% cashback"
    yield "70% cashback"
    yield "better luck next time"
    yield "100% cashback"
}

let allCash = cashback()

for(let a of allCash){
    console.log(a);
    
}

// console.log(allCash.next().value);
// console.log(allCash.next().value);
// console.log(allCash.next().value);
// console.log(allCash.next().value);
// if(allCash.next().done){
//     console.log("all value done");
    
// }

function clgForm(name,age,department,disability="no"){

    console.log("name",name);
    console.log("age",age);
    console.log("department",department);
    console.log("disability",disability);
    
    
    
    

}

clgForm("karthi",24,"cyber","no")
clgForm("priya",24,"IT","yes")


// types of function 


// named function
named("named function")

function named(parameter){
    console.log(parameter);
    
}


// annonymous function 


var annonymous = function(parameter){
    console.log(parameter);
    
}

annonymous("annonymous function")


// arrow function 

var arrow = (parameter)=>{
    console.log(parameter);
    
}

arrow("arrow function")
clgForm("dinesh",22,"CSE")