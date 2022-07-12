let slides = document.querySelectorAll(".slide")

for(let slide of slides){
    slide.onclick = ()=>{
        format()
        slide.classList.add('active')
    }
}

format = () =>{
    for(let i of slides){
        i.classList.remove("active")
    }
}