console.log('this is about variables and data types');
// var variable is globaly  and its change also 
var a=2;
var b=3;
console.log(a+b);
var c='garg'

// check datatype with the help of (typeof)
console.log(typeof a,typeof b, typeof c);
// for constant value we can not change after create
const a1=43;
// let is a global variable we use any where make chnage on it but not re-declared
let a11=1;
a11=4
console.log(a11)

// string 
let x='nonu bhai'
// number
let y=123;
let z=2.4;
// boolean
const xyz=true;
// undefined
let q=undefined;
// object
let r=null;

console.log(x,y,z,xyz,q,r)
console.log(typeof x,typeof y,typeof z,typeof xyz,typeof q,typeof r)

// it work as dictionary in python
let o = {
    // if key is single value without sapce we write it without '' it otherwise we use it
    name:'garg',
    'job code': 5600
}
console.log(o)
// add
o.salary = 100
console.log(o)
// update
o.salary=500
console.log(o)