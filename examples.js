/*
variable
var let const
const array: can crud, cant reinit
*/

/* 
base type
string number boolean null undefined
console.log(typeof s)
template string using `` ${}
*/
let s = 'yzh';
console.log(typeof s);
console.log(`my name is ${s}`);

/*
property
method
*/
console.log(s.length);
console.log(s.toUpperCase());
console.log(String.toString());

/*
construct
new
literal
    array:[]
*/
let newA = new Array();
// let literalA = [];

/*
array op
*/
let literalB = ['go','py','java','js','ts'];
console.log(literalB);
console.log(literalB[0]);
console.log(literalB);
console.log(literalB.sort());

/*
object op
*/
let ob = {
    name:'yzh',
    hobbies : [
        'game',
        'dreaming',
        'earn money'
    ]
}
console.log(ob);
console.log(ob.hobbies[0]);
ob['testAddProperty'] = true;
console.log(ob);

/**
forEach:do callbackFunc
map:do callbackFunc and return res as array, 
filter:do callbackFunc and return ele as array, only true ele will be return
*/

/**
 * == ignore data type
 * === strict data type
 */

/**
 * control flow
 * if
 * else if
 * else
 * 
 * loop
 * for
 * for of
 * while
 * 
 * ?:
 * 
 * switch
 * case
 */

/**
 * function
 * 
 * default param
 * 
 * arrow function
 */

/**
 * oop
 * this
 * prototype
 * constructor
 */
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.getIntroduce = ()=>console.log(`i am ${this.name} and ${this.age} years old.`);

console.log(new Person('yzh',27));

// syntax sugar
class Person1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getIntroduce(){
        console.log(`i am ${this.name} and ${this.age} years old.`);
    }
}

console.log(new Person1('yzh',27));

/**
 * DOM document object model
 * window
 * document
 * querySelector
 * NodeList
 * HTMLCollection is not an js array, need to transform first
 */
