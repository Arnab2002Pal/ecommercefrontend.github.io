const btnElem = document.querySelector('.btn')

btnElem.addEventListener('mouseover',(event)=>{
    const x = event.pageX - btnElem.offsetLeft
    const y = event.pageY - btnElem.offsetTop

    btnElem.style.setProperty("--xPos", x + "px")
    btnElem.style.setProperty("--yPos", y + "px")
})

const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

//make horizontal scrolling for mobile view