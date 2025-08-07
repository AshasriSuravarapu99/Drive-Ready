let heading = document.createElement('h1')
heading.innerText = "Hello"
heading.setAttribute('class','headings')
let val = document.getElementsByTagName('body')[0]
val.appendChild(heading)
console.log(heading);
                                                                                