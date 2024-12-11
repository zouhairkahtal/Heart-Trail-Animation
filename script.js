const bodyEl = document.querySelector('body')

bodyEl.addEventListener("mousemove",(event)=>{
    const Xp = event.clientX 
    const Yp = event.clientY 
    const spanEl = document.createElement('span')
    bodyEl.appendChild(spanEl)
    const size = Math.random()*100
    spanEl.style.width = size + 'px'
    spanEl.style.height = size + 'px'
    spanEl.style.top = Yp + 'px'
    spanEl.style.left = Xp + 'px'
    setTimeout(()=>{
        spanEl.remove()
    },3000)
})