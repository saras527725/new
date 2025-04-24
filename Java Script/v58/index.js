function hey(name) { 
    console.log('hey',name,'how are you')
    console.log('hello ',name,'garg')
    
}
hey('shashank')

function sum(a,b) {
    console.log(a+b)    
}
sum(5,6)

// or we get result with return
function sum1(a,b,c) {
    return(a+b+c)
} 
d=sum1(2,3,4)
console.log(d)

// arrow function
const a =  (x)=>{
    console.log('this is number',x)
}
a(5);