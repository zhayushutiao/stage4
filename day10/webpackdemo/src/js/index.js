import div from './a';
import p from './b';

// 引入b.css
import '../css/b.css'
// 引入less文件
import a from '../less/a.less'

// console.log(div());
// console.log(p());

let divEle = div()
divEle.className = a.con

// 引入图片
import img from '../img/404.jpg'
let pic = document.createElement('img')
pic.src = img

document.body.appendChild(pic)
document.body.appendChild(divEle)
document.body.appendChild(p())