import x from './x.js'
console.log(x)
console.log('hi')


import jpg from './assets/1.jpg'
console.log(jpg)
const div = document.querySelector('#app1')
div.innerHTML = ` <img src="${jpg}"> `


const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)
button.onclick = ()=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{module.default()},()=>{console.log('或许是路径写错了')})
}