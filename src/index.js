import { registrarImg } from "./lazy"
const contenedor = document.querySelector('#imagenes')

/* API call (unsplash) */
const API = 'https://source.unsplash.com/'
const traerImgByCategory = (category) => { 
    const API_c =  `${API}category/${category}/360x320`
    return API_c
}


const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

const clean = document.querySelector('#clean')


function traerImg(e) {
    let tipo = e.target.className.slice(0, 3)
    if(tipo == "arq"){
        tipo = "buildings"
    }else if(tipo == "fud"){
        tipo = "food"
    } else {
        tipo = "objects"
    }
    const resImg = traerImgByCategory( tipo )
    const placeHolder = document.createElement('div')
    const img = document.createElement('img')

    placeHolder.className = 'bg-gray-300'
    placeHolder.style.width = "360"
    placeHolder.style.height = "320"
    placeHolder.style.display = "inline-block" 
    
    img.className = 'shadow-xl rounded-sm '

    img.dataset.src = resImg

    placeHolder.appendChild(img)
    appendedImages++
    printLog()
    contenedor.appendChild(placeHolder)
    registrarImg(img)
}

btn1.addEventListener('click', traerImg )
btn2.addEventListener('click', traerImg )
btn3.addEventListener('click', traerImg )
const limpiar = () => {
    console.clear()
    console.log('Imagenes limpiadas 🧹')
    contenedor.innerHTML = ''
}
clean.addEventListener('click', limpiar  )