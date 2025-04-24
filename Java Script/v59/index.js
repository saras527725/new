let random = Math.random()
// take output in top lert 
let a=prompt("enter first number")
let b=prompt("enter second number")
let c=prompt("enter operation")

let obj ={
    "+":"*",
    "*":"+",
    "-":"/",
    "/":"-"
}

if (random>0.1) {
    alert(`${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`${eval(`${a} ${c} ${b}`)}`)

}