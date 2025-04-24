  console.log('it is about loop')
//   for loop
  for (let i = 0; i < 100; i++) {
    console.log(i+1)
    
  }

let dic={
    name:'shashank',
    role:5,
    comapny:'lwg'
}
//   for in loop
for (const key in dic) {
        const element = dic[key];
        console.log(key,element)
}

// for of loop
for (const i of 'garg') {
    console.log(i)
}

let i=5;
// while loop
while (i<6) {
    console.log(i)
    i+=1
}

let j=1
// first do then check condition
do {
    console.log(j)
    j++
} while (j<6);