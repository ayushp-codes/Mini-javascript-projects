
let container=document.querySelector('.container')
let randomBtn = document.querySelector('.randomBtn')
let colorInput = document.querySelector('#colorInput')
let Applybtn = document.querySelector('.Applybtn')
let currentcolorvalue = document.querySelector('.currentcolorvalue')

const changeColor =(color) =>{
    container.style.backgroundColor=color;
    currentcolorvalue.innerText=color;
}
const colorArray = [
  "red","blue","green","yellow","orange","purple","pink","brown","black","white",
  "gray","cyan","magenta","lime","maroon","navy","olive","teal","aqua","silver",
  "gold","coral","crimson","indigo","ivory","khaki","lavender","mintcream","orchid","plum",
  "salmon","sienna","tan","tomato","turquoise","violet","wheat","chocolate","beige","azure",
  "bisque","chartreuse","cornflowerblue","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta",
  "darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet",
  "deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite",
  "honeydew","hotpink","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen",
  "lightskyblue","lightslategray","lightsteelblue","lightyellow","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue"
]

const generatenewcolor=()=>{
    const randomno=Math.floor(Math.random()*colorArray.length)
    return colorArray[randomno]

}
const handlerandomBtn = () => {
    let color=generatenewcolor()
    changeColor(color);
}

const handleApplybtn = () => {
    const color =colorInput.value
    changeColor(color);
}


randomBtn.addEventListener('click', handlerandomBtn)
Applybtn.addEventListener('click', handleApplybtn)


let fontBtn = document.querySelector('.fontBtn')
let texts = document.querySelectorAll('.text')

const fontArray = [
  "Arial",
  "Georgia",
  "Courier New",
  "Verdana",
  "Times New Roman",
  "Trebuchet MS"
]

let fontIndex = 0

fontBtn.addEventListener('click', () => {
    fontIndex = (fontIndex + 1) % fontArray.length

    texts.forEach(text => {
        text.style.fontFamily = fontArray[fontIndex]
    })
})
