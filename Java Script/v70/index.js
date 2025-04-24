let boxes = document.querySelector('.container').children

function randomcolor(){
    let a= Math.ceil(0+ Math.random()*255)
    let b= Math.ceil(0+ Math.random()*255)
    let c= Math.ceil(0+ Math.random()*255)
    return `rgb(${a},${b},${c})`
}
// console.log(Array.from(boxes))
console.log(randomcolor())
Array.from(boxes).forEach(e=> {
        e.style.backgroundColor=randomcolor()
    }
)