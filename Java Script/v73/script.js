function createcard(thumnail,duration,title,name,view,month){
    let x
    if (view>10000) {
        x=Math.trunc(view/1000) +'k'
    }
    if (view>1000000) {
        x=Math.trunc(view/1000000) +'m'
    }
let html = `<div class=main>
<div class="rem1">
            <img src=${thumnail}
                alt="wait">
            <p class="rem">${duration}</p>
        </div>
        <div>
            <h4>${title}</h4>
            <p>${name} ${x} views ${month} months ago</p>
        </div>
        </div>`
    document.querySelector('.container').innerHTML=document.querySelector('.container').innerHTML + html
}
createcard('https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB19wZ1Xom2N5iWreyZPUh7UXs2gA',13.45,'JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course','CodeWithHarry',562323,2)
createcard('https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB19wZ1Xom2N5iWreyZPUh7UXs2gA',13.4,'JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course','CodeWithHarry',56223,2)
createcard('https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB19wZ1Xom2N5iWreyZPUh7UXs2gA',13.4,'JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course','CodeWithHarry',56223,2)