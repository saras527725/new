console.log("v63")
// create array
let a=[1,2,3,4,5]
console.log(a)
// find the type of data
console.log(typeof(a))
// find length
console.log(a.length)
// search anythingby indexing
console.log(`indexing of 2 in this arra is ${a[2]}`)
// array are mutable that's why we change any thing by value
a[1]=55
console.log(a)
// change array to string
console.log(a.toString())
// join array by giving anything between every value
console.log(a.join(' and '))
// remove value by end with the help of pop
console.log(a.pop())//print pop value
console.log(a)
// push add anything at the end
console.log(a.push(543)) //it return the length
console.log(a)
// add something start
a.unshift(554)
console.log(a)
// delet somthing from start
a.shift()
console.log(a)
// delet the value but memory is alocated and its work by location
delete a[2]
console.log(a)

let b= [43,534,6,46,64]
let c=[545,5,55,45,32]
// concatination
console.log(a.concat(b,c))
// sorting
c.sort(function(a, b){return a - b});
console.log(c)
// print value between two location
console.log(b.slice(1,3))
// remove anything from given tow location
b.splice(1,3)
console.log(b)
// add also by this
c.splice(1,3,22)
console.log(c)
// reverse array
c.reverse()
console.log(c)
// forEach loop for array
a.forEach((value,index,a) => {
    console.log(value,index,a)
});
// map 
let newa = a.map(e=>{
    return e**2
})
console.log(newa)

// if condition in function
let gt=(e=>{
    if (e>7) {
        return true
    }
    return false
})
// filter
console.log(a.filter(gt))

let x=[1,2,3,4,5,6,7,8]

// loop add tow number
let red=((a,b)=>{
    return a+b
})
// reduce work a=a+x[i] where i is indexing of start from 0 and a=0 
console.log(x.reduce(red))

let y='shashank'
console.log(Array.from(y))