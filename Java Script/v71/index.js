console.log(document.querySelector('.container').innerHTML)

// for check inner text any tag 
console.log(document.querySelector('.container').innerText)

// if you want to chnge text in any tag 
console.log(document.querySelector('.box1').innerText='Shashank')

// same tag with other inner tag 
console.log(document.querySelector('.container').outerHTML)

// if you want to find tag name  
console.log(document.querySelector('.container').tagName)

// node name is comment ,text and any other node 
console.log(document.querySelector('.container').nodeName)

// text content same as innertext
console.log(document.querySelector('.container').textContent)

// if you want to hide any thing or check it is hidden or not
console.log(document.querySelector('.box').hidden=true)

// check atribute is present or not
console.log(document.querySelector('.box1').hasAttribute('style'))

// for get the atributes
console.log(document.querySelector('.box1').getAttribute('style'))

// for update atribute
console.log(document.querySelector('.box1').setAttribute('style','display:inline'))

// remove any atribute
console.log(document.querySelector('.box').removeAttribute('hidden'))

// if you want to edit any thing on live site 
document.designMode='on'

/* there are some insertion  methods */