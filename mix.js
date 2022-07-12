modeP = -1
blockedScreen=() =>{
    date = new Date()
    min = date.getMinutes()
    hour = date.getHours()
    day = date.getDate()
    month = date.getMonth() + 1
 
    min < 10 ? min = "0" + min : min = min
    hour < 10 ? hour = "0" + hour : hour = hour
    month < 10 ? month = "0" + month : month = month
    day < 10 ? day = "0" + day : day = day

    iphone = document.createElement('div')
    document.body.appendChild(iphone)
    
        
    iphone.style.margin = "auto"
    iphone.style.marginTop = 0
    iphone.style.border = "10px solid gold"
    iphone.style.borderRadius = "40px"
    iphone.style.width = "320px"
    iphone.style.height = "600px"
    iphone.style.position = "realitive"
    iphone.style.boxShadow = "0px 20px 15px #33333335"
 
    screen = document.createElement('div')
    iphone.appendChild(screen)
    screen.style.zIndex = "10"
    screen.style.position = "absolute"
    screen.style.background = ' linear-gradient(45deg,#F17C5888, #E9458488, #24AADB88, #27DBB188, #FFDC1888, #FF370688)';
    screen.style.backgroundSize = '300%, 300%';
    screen.style.animation = 'gradient 5s linear infinite';
    screen.style.animationDirection = 'alternate';
    screen.style.width = "320px"
    screen.style.height = "600px"
    screen.style.borderRadius = "30px"
    icon = document.createElement('div')
    icon.style.marginTop = "15px"
    screen.appendChild(icon)
 
    infobar = document.createElement('div')
    icon.appendChild(infobar)
    infobar.style.display = "flex"
    infobar.style.height = "1px"
    infobar.style.width = "1px"
    infobar.style.alignItems = "center"
    infobar.justifyContent = 'center'
 
    ddmm = document.createElement('div')
    infobar.appendChild(ddmm)
    ddmm.style.height = '20px'
    ddmm.style.width = '40px'
    ddmm.style.marginLeft = "16px"
 
    p2 = document.createElement("p")
    ddmm.appendChild(p2)
    p2.innerHTML = `${day}/${month}`
    p2.style.margin = 0
    p2.style.fontSize = '15px'
    p2.style.userSelect = "none"
    p2.style.color = 'white'
    p2.style.fontFamily = "Nunito, sans-serif"
 
    bang = document.createElement("div")
    infobar.appendChild(bang)
    bang.style.zIndex = 50
    bang.style.top = 0
    bang.style.left = '62px'
    bang.style.position = "absolute"
    bang.style.width = '200px'
    bang.style.height = '30px'
    bang.style.borderRadius = "0px 0px 20px 20px"
    bang.style.background = "black"
 
    bgMode = document.createElement("div")
    infobar.appendChild(bgMode)
    bgMode.style.width = '40px'
    bgMode.style.height = "19px"
    bgMode.style.background = 'white'
    bgMode.style.margin = "auto"
    bgMode.style.marginTop = '10px'
    bgMode.style.borderRadius = "25px"
    bgMode.style.cursor = "pointer"
    bgMode.style.border = "4px solid gold"
    bgMode.style.margin = "-10px auto auto 213px"

    bgClick = document.createElement("div")
    bgMode.appendChild(bgClick)
    bgClick.style.width = "20px"
    bgClick.style.height = "20px"
    bgClick.style.borderRadius = '25px'
    bgClick.style.background = "black"
    // bgClick.style.marginRight = "25px"
    setInterval(() => {
        modeP==1? bgClick.style.marginRight = "25px": bgClick.style.marginLeft = "20px"
    }, 0);


    bgMode.onclick = () =>{
     if(modeP == 1){
        bgClick.style.background = "white"
        bgClick.style.marginLeft = "20px"
        document.body.style.background = "white"
        modeP*=-1
        bgMode.style.background = "black"
    }else{
        bgClick.style.background = "black"
        bgClick.style.marginLeft = 0
        document.body.style.background = "black"
        modeP*=-1
        bgMode.style.background = "white"
    }
    }
 
    camera = document.createElement("div")
    bang.appendChild(camera)
 
    camera.style.position = "absolute"
    camera.style.bottom = "8px"
    camera.style.width = "1rem"
    camera.style.height = "1rem"
    camera.style.borderRadius = "50%"
    camera.style.border = ".2rem solid #1e1f22"
    camera.style.background = "#447bb5a6"
    camera.style.left = "150px"
    camera.style.top = "10%"
 
    speaker = document.createElement("div")
    bang.appendChild(speaker)
    speaker.style.position = "absolute"
    speaker.style.rigth = '3.9rem'
    speaker.style.width = "5.2rem"
    speaker.style.height = ".6rem"
    speaker.style.background = "#333333"
    speaker.style.borderRadius = ".2rem"
    speaker.style.left = "3rem"
    speaker.style.top = "25%"
 
 
 
    time = document.createElement("div")
    icon.appendChild(time)
    p = document.createElement("P")
    time.appendChild(p)
    time.style.height = "100px"
    time.style.width = "320px"
    time.style.background = ""
    setInterval(() => p.innerHTML = `${hour}:${min}`, 0);
 
    p.style.fontSize = "100px"
    p.style.marginLeft = "45px"
    p.style.userSelect = "none"
    p.style.color = 'white'
    p.style.fontFamily = "Nunito, sans-serif"


    unblockBut = document.createElement("div")
    screen.appendChild(unblockBut)
    unblockBut.style.width = '70px'
    unblockBut.style.height = "70px"
    unblockBut.style.borderRadius = "50%"
    unblockBut.style.background = "black"
    unblockBut.style.marginLeft = "auto"
    unblockBut.style.marginRight = "auto"
    unblockBut.style.marginTop = "250px"
    unblockBut.style.cursor = "pointer"

    unblockImg = document.createElement("img")
    unblockBut.appendChild(unblockImg)
    unblockImg.src = "img/power.png"
    unblockImg.style.width = "70px"
    unblockImg.style.height = "60px"
    unblockImg.style.borderRadius = "50%"
    unblockImg.style.marginTop = "4px"

    unblockBut.onclick = () =>{
        document.body.innerHTML = ""
        screenIphone()
    }

}
screenIphone=()=>{

    date = new Date()
    min = date.getMinutes()
    hour = date.getHours()
    day = date.getDate()
    month = date.getMonth() + 1
 
    min < 10 ? min = "0" + min : min = min
    hour < 10 ? hour = "0" + hour : hour = hour
    month < 10 ? month = "0" + month : month = month
    day < 10 ? day = "0" + day : day = day
    iphone = document.createElement('div')
    document.body.appendChild(iphone)
        
    iphone.style.margin = "auto"
    iphone.style.marginTop = 0
    iphone.style.border = "10px solid gold"
    iphone.style.borderRadius = "40px"
    iphone.style.width = "320px"
    iphone.style.height = "600px"
    iphone.style.position = "realitive"
    iphone.style.boxShadow = "0px 20px 15px #33333335"
 
    screen = document.createElement('div')
    iphone.appendChild(screen)
    screen.style.zIndex = "10"
    screen.style.position = "absolute"
    screen.style.background = ' linear-gradient(45deg,#F17C5888, #E9458488, #24AADB88, #27DBB188, #FFDC1888, #FF370688)';
    screen.style.backgroundSize = '300%, 300%';
    screen.style.animation = 'gradient 5s linear infinite';
    screen.style.animationDirection = 'alternate';
    screen.style.width = "320px"
    screen.style.height = "600px"
    screen.style.borderRadius = "30px"
    icon = document.createElement('div')
    icon.style.marginTop = "15px"
    screen.appendChild(icon)
 
    infobar = document.createElement('div')
    icon.appendChild(infobar)
    infobar.style.display = "flex"
    infobar.style.height = "1px"
    infobar.style.width = "1px"
    infobar.style.alignItems = "center"
    infobar.justifyContent = 'center'
 
    ddmm = document.createElement('div')
    infobar.appendChild(ddmm)
    ddmm.style.height = '20px'
    ddmm.style.width = '40px'
    ddmm.style.marginLeft = "16px"
 
    p2 = document.createElement("p")
    ddmm.appendChild(p2)
    p2.innerHTML = `${day}/${month}`
    p2.style.margin = 0
    p2.style.fontSize = '15px'
    p2.style.userSelect = "none"
    p2.style.color = 'white'
    p2.style.fontFamily = "Nunito, sans-serif"
 
    bang = document.createElement("div")
    infobar.appendChild(bang)
    bang.style.zIndex = 50
    bang.style.top = 0
    bang.style.left = '62px'
    bang.style.position = "absolute"
    bang.style.width = '200px'
    bang.style.height = '30px'
    bang.style.borderRadius = "0px 0px 20px 20px"
    bang.style.background = "black"
 
    bgMode = document.createElement("div")
    infobar.appendChild(bgMode)
    bgMode.style.width = '40px'
    bgMode.style.height = "19px"
    bgMode.style.background = 'white'
    bgMode.style.margin = "auto"
    bgMode.style.marginTop = '10px'
    bgMode.style.borderRadius = "25px"
    bgMode.style.cursor = "pointer"
    bgMode.style.border = "4px solid gold"
    bgMode.style.margin = "-10px auto auto 213px"

    bgClick = document.createElement("div")
    bgMode.appendChild(bgClick)
    bgClick.style.width = "20px"
    bgClick.style.height = "20px"
    bgClick.style.borderRadius = '25px'
    bgClick.style.background = "black"
    // bgClick.style.marginRight = "25px"
    setInterval(() => {
        modeP==1? bgClick.style.marginRight = "25px": bgClick.style.marginLeft = "20px"
    }, 0);


    bgMode.onclick = () =>{
     if(modeP == 1){
        bgClick.style.background = "white"
        bgClick.style.marginLeft = "20px"
        document.body.style.background = "white"
        modeP*=-1
        bgMode.style.background = "black"
    }else{
        bgClick.style.background = "black"
        bgClick.style.marginLeft = 0
        document.body.style.background = "black"
        modeP*=-1
        bgMode.style.background = "white"
    }
    }
 
    camera = document.createElement("div")
    bang.appendChild(camera)
 
    camera.style.position = "absolute"
    camera.style.bottom = "8px"
    camera.style.width = "1rem"
    camera.style.height = "1rem"
    camera.style.borderRadius = "50%"
    camera.style.border = ".2rem solid #1e1f22"
    camera.style.background = "#447bb5a6"
    camera.style.left = "150px"
    camera.style.top = "10%"
 
    speaker = document.createElement("div")
    bang.appendChild(speaker)
    speaker.style.position = "absolute"
    speaker.style.rigth = '3.9rem'
    speaker.style.width = "5.2rem"
    speaker.style.height = ".6rem"
    speaker.style.background = "#333333"
    speaker.style.borderRadius = ".2rem"
    speaker.style.left = "3rem"
    speaker.style.top = "25%"
 
 
 
    time = document.createElement("div")
    icon.appendChild(time)
    p = document.createElement("P")
    time.appendChild(p)
    time.style.height = "100px"
    time.style.width = "320px"
    time.style.background = ""
    setInterval(() => p.innerHTML = `${hour}:${min}`, 0);
 
    p.style.fontSize = "100px"
    p.style.marginLeft = "45px"
    p.style.userSelect = "none"
    p.style.color = 'white'
    p.style.fontFamily = "Nunito, sans-serif"
 
    icons1 = document.createElement('div')
    icons2 = document.createElement('div')
    icons3 = document.createElement('div')
    icons4 = document.createElement('div')
    icon.appendChild(icons1)
    icon.appendChild(icons2)
    icon.appendChild(icons3)
    icon.appendChild(icons4)
 
    icons1.style.marginTop = "90px"
    icons1.style.display = "flex"
    icons1.style.justifyContent = "center"
    icons2.style.marginTop = "10px"
    icons2.style.display = "flex"
    icons2.style.justifyContent = "center"
    icons3.style.marginTop = "10px"
    icons3.style.display = "flex"
    icons3.style.justifyContent = "center"
    icons4.style.display = "flex"
    icons4.style.justifyContent = "center"
 
    app1 = document.createElement("div")
    icons1.appendChild(app1)
    app1.style.margin = "10px"
    app1.style.zIndex = "100"
    app1.style.background = "white"
    app1.style.width = "60px"
    app1.style.height = "60px"
    app1.style.borderRadius = "15px"
    app1.style.boxShadow = "0px 5px 5px #33333340"
    app1.style.cursor = "pointer"
    app1.style.transform = "transform 400ms case-in-out"
    //-----------------------------------
    app2 = document.createElement("div")
    icons1.appendChild(app2)
    app2.style.margin = "10px"
    app2.style.zIndex = "100"
    app2.style.background = "white"
    app2.style.width = "60px"
    app2.style.height = "60px"
    app2.style.borderRadius = "15px"
    app2.style.boxShadow = "0px 5px 5px #33333340"
    app2.style.cursor = "pointer"
    app2.style.transform = "transform 400ms case-in-out"
    //-----------------------------------
    app3 = document.createElement("div")
    icons1.appendChild(app3)
    app3.style.margin = "10px"
    app3.style.zIndex = "100"
    app3.style.background = "white"
    app3.style.width = "60px"
    app3.style.height = "60px"
    app3.style.borderRadius = "15px"
    app3.style.boxShadow = "0px 5px 5px #33333340"
    app3.style.cursor = "pointer"
    app3.style.transform = "transform 400ms case-in-out"
    //-----------------------------------
    app4 = document.createElement("div")
    icons1.appendChild(app4)
    app4.style.margin = "10px"
    app4.style.zIndex = "100"
    app4.style.background = "white"
    app4.style.width = "60px"
    app4.style.height = "60px"
    app4.style.borderRadius = "15px"
    app4.style.boxShadow = "0px 5px 5px #33333340"
    app4.style.cursor = "pointer"
    app4.style.transform = "transform 400ms case-in-out"
    //-----------------------------------
    app5 = document.createElement("div")
    icons2.appendChild(app5)
    app5.style.margin = "10px"
    app5.style.zIndex = "100"
    app5.style.background = "white"
    app5.style.width = "60px"
    app5.style.height = "60px"
    app5.style.borderRadius = "15px"
    app5.style.boxShadow = "0px 5px 5px #33333340"
    app5.style.cursor = "pointer"
    app5.style.transform = "transform 400ms case-in-out"
    //-----------------------------------
    app6 = document.createElement("div")
    icons2.appendChild(app6)
    app6.style.margin = "10px"
    app6.style.zIndex = "100"
    app6.style.background = "white"
    app6.style.width = "60px"
    app6.style.height = "60px"
    app6.style.borderRadius = "15px"
    app6.style.boxShadow = "0px 5px 5px #33333340"
    app6.style.cursor = "pointer"
    app6.style.transform = "transform 400ms case-in-out"
    //-----------------------------------
 
    app7 = document.createElement("div")
    icons2.appendChild(app7)
    app7.style.margin = "10px"
    app7.style.zIndex = "100"
    app7.style.background = "white"
    app7.style.width = "60px"
    app7.style.height = "60px"
    app7.style.borderRadius = "15px"
    app7.style.boxShadow = "0px 5px 5px #33333340"
    app7.style.cursor = "pointer"
    app7.style.transform = "transform 400ms case-in-out"
    //-----------------------------------
    app8 = document.createElement("div")
    icons2.appendChild(app8)
    app8.style.margin = "10px"
    app8.style.zIndex = "100"
    app8.style.background = "white"
    app8.style.width = "60px"
    app8.style.height = "60px"
    app8.style.borderRadius = "15px"
    app8.style.boxShadow = "0px 5px 5px #33333340"
    app8.style.cursor = "pointer"
    app8.style.transform = "transform 400ms case-in-out"
 
    //-----------------------------------
    app9 = document.createElement("div")
    icons3.appendChild(app9)
    app9.style.margin = "15px"
    app9.style.zIndex = "100"
    app9.style.background = "white"
    app9.style.width = "60px"
    app9.style.height = "60px"
    app9.style.borderRadius = "15px"
    app9.style.boxShadow = "0px 5px 5px #33333340"
    app9.style.cursor = "pointer"
    app9.style.transform = "transform 400ms case-in-out"
 
 
 
 
    app10 = document.createElement("div")
    icons3.appendChild(app10)
    app10.style.margin = "15px"
    app10.style.zIndex = "100"
    app10.style.background = "white"
    app10.style.width = "60px"
    app10.style.height = "60px"
    app10.style.borderRadius = "15px"
    app10.style.boxShadow = "0px 5px 5px #33333340"
    app10.style.cursor = "pointer"
    app10.style.transform = "transform 400ms case-in-out"
 
 
 
    app11 = document.createElement("div")
    icons3.appendChild(app11)
    app11.style.margin = "15px"
    app11.style.zIndex = "100"
    app11.style.background = "white"
    app11.style.width = "60px"
    app11.style.height = "60px"
    app11.style.borderRadius = "15px"
    app11.style.boxShadow = "0px 5px 5px #33333340"
    app11.style.cursor = "pointer"
    app11.style.transform = "transform 400ms case-in-out"
 
    divTg = document.createElement("div")
    app1.appendChild(divTg)

    divInst = document.createElement("div")
    app2.appendChild(divInst)

    divGal = document.createElement("div")
    app3.appendChild(divGal)

    divXO = document.createElement("div")
    app4.appendChild(divXO)

    divMsg = document.createElement('div')
    app9.appendChild(divMsg)

    divAudio = document.createElement("div")
    app10.appendChild(divAudio)

    divCalc = document.createElement("div")
    app11.appendChild(divCalc)


    
    iconeTg = document.createElement("img")
    iconeInst = document.createElement("img")
    iconeGal = document.createElement("img")
    iconeXO = document.createElement('img')
    iconeAudio = document.createElement('img')
    iconeCalc = document.createElement('img')
    iconeMsg = document.createElement("img")
 
 
    a1 = document.createElement('a')
    divTg.appendChild(a1)
    a1.appendChild(iconeTg)
    iconeTg.src = "icon/Tg.png"
    iconeTg.style.width = '60px'
    iconeTg.style.height = "60px"
    a1.href = "https://t.me/melsavetisyan"
 
    a2 = document.createElement('a')
    divInst.appendChild(a2)
    a2.appendChild(iconeInst)
    iconeInst.src = "icon/Inst.png"
    iconeInst.style.width = '60px'
    iconeInst.style.height = "60px"
    a2.href = "https://www.instagram.com/melsavetisyan/"
 
    a3 = document.createElement('a')
    divGal.appendChild(a3)
    a3.appendChild(iconeGal)
    iconeGal.src = "icon/Gal.png"
    iconeGal.style.width = '60px'
    iconeGal.style.height = "60px"
    iconeGal.style.borderRadius = "25px"
    a3.href = "slider/slider.html"

    a4 = document.createElement('a')
    divXO.appendChild(a4)
    a4.appendChild(iconeXO)
    iconeXO.src = "icon/xo.png"
    iconeXO.style.width = '60px'
    iconeXO.style.height = "60px"
    iconeXO.style.borderRadius = "15px"
    a4.onclick = () => xoGame()
 
    a9 = document.createElement('a')
    divMsg.appendChild(a9)
    a9.appendChild(iconeMsg)
    iconeMsg.src = "icon/msgr.png"
    iconeMsg.style.width = '60px'
    iconeMsg.style.height = "60px"
    iconeMsg.style.borderRadius = "15px"
    a9.onclick = () => msgr()

 
    a10 = document.createElement('a')
    divAudio.appendChild(a10)
    a10.appendChild(iconeAudio)
    iconeAudio.src = "icon/audio.png"
    iconeAudio.style.width = '60px'
    iconeAudio.style.height = "60px"
    a10.onclick = () => audioPlayer()
 
    a11 = document.createElement('a')
    divCalc.appendChild(a11)
    a11.appendChild(iconeCalc)
    iconeCalc.src = "icon/calc.png"
    iconeCalc.style.width = '60px'
    iconeCalc.style.height = "60px"
    iconeCalc.style.borderRadius = "25px"
    a11.onclick = () => calculator()
 
    app1.classList.add("app")
    app2.classList.add("app")
    app3.classList.add("app")
    app4.classList.add("app")
    app5.classList.add("app")
    app6.classList.add("app")
    app7.classList.add("app")
    app8.classList.add("app")
    app9.classList.add("app")
    app10.classList.add("app")
    app11.classList.add("app")
    
    app1.style.userSelect = 'none'   
    app2.style.userSelect = 'none'
    app3.style.userSelect = 'none'
    app4.style.userSelect = 'none'
    app5.style.userSelect = 'none'
    app6.style.userSelect = 'none'
    app7.style.userSelect = 'none'
    app8.style.userSelect = 'none'
    app9.style.userSelect = 'none'
    app10.style.userSelect = 'none'
    app11.style.userSelect = 'none'
 
    toHome = document.createElement('div')
    icons4.appendChild(toHome)
    toHome.style.width = "200px"
    toHome.style.height = "10px"
    toHome.style.background = "white"
    toHome.style.borderRadius = "10px"
    toHome.style.marginTop = '5px'
    toHome.classList.add("toHome")
    toHome.style.cursor = "pointer"
    toHome.style.marginLeft = "auto"
    toHome.style.marginRight = "auto"
 
    toHome.onclick = () => {
       document.body.innerHTML = ""
       screenIphone()
    }

    //----------------------------------------------------------
    dragover = e => e.preventDefault()
    dragenter = e => {
        e.target.style.border = "3px solid green"
    }

    dragleave = e => {
        e.target.style.border = "" 
    }

    dragdrop = e => {
        ddstr = document.getElementsByClassName("dragstarted")[0]
        console.log(e.target.innerHTML);
        if (e.target.innerHTML != ""){
            console.log("ffafafsg");
        }
        if(e.target.innerHTML == ""){
        e.target.append(ddstr)
        } 
        
        e.target.style.border = ""  
    }

    //----------------------------------------------------------
    app1.addEventListener("dragover", dragover)
    app1.addEventListener("dragenter", dragenter)
    app1.addEventListener("dragleave", dragleave)
    app1.addEventListener("drop", dragdrop)

    app2.addEventListener("dragover", dragover)
    app2.addEventListener("dragenter", dragenter)
    app2.addEventListener("dragleave", dragleave)
    app2.addEventListener("drop", dragdrop)

    app3.addEventListener("dragover", dragover)
    app3.addEventListener("dragenter", dragenter)
    app3.addEventListener("dragleave", dragleave)
    app3.addEventListener("drop", dragdrop)

    app4.addEventListener("dragover", dragover)
    app4.addEventListener("dragenter", dragenter)
    app4.addEventListener("dragleave", dragleave)
    app4.addEventListener("drop", dragdrop)

    app5.addEventListener("dragover", dragover)
    app5.addEventListener("dragenter", dragenter)
    app5.addEventListener("dragleave", dragleave)
    app5.addEventListener("drop", dragdrop)

    app6.addEventListener("dragover", dragover)
    app6.addEventListener("dragenter", dragenter)
    app6.addEventListener("dragleave", dragleave)
    app6.addEventListener("drop", dragdrop)

    app7.addEventListener("dragover", dragover)
    app7.addEventListener("dragenter", dragenter)
    app7.addEventListener("dragleave", dragleave)
    app7.addEventListener("drop", dragdrop)

    app8.addEventListener("dragover", dragover)
    app8.addEventListener("dragenter", dragenter)
    app8.addEventListener("dragleave", dragleave)
    app8.addEventListener("drop", dragdrop)
    
    app9.addEventListener("dragover", dragover)
    app9.addEventListener("dragenter", dragenter)
    app9.addEventListener("dragleave", dragleave)
    app9.addEventListener("drop", dragdrop)
    

    app10.addEventListener("dragover", dragover)
    app10.addEventListener("dragenter", dragenter)
    app10.addEventListener("dragleave", dragleave)
    app10.addEventListener("drop", dragdrop)

    app11.addEventListener("dragover", dragover)
    app11.addEventListener("dragenter", dragenter)
    app11.addEventListener("dragleave", dragleave)
    app11.addEventListener("drop", dragdrop)



    //----------------------------------------------------------
    iconeTg.draggable = false
    a1.draggable = false
    divTg.draggable = true

    iconeInst.draggable = false
    a2.draggable = false
    divInst.draggable = true

    iconeGal.draggable = false
    a3.draggable = false
    divGal.draggable = true

    iconeXO.draggable = false
    a4.draggable = false
    divXO.draggable = true

    iconeMsg.draggable = false
    a9.draggable = false
    divMsg.draggable = true

    iconeAudio.draggable = false
    a10.draggable = false
    divAudio.draggable = true

    iconeCalc.draggable = false
    a11.draggable = false
    divCalc.draggable = true

    function dragstart(e){
        console.log(e.target);
    setTimeout(() => {
        e.target.style.display = 'none'
        e.target.classList.add('dragstarted')
    }, ); }



    divTg.addEventListener('dragstart', dragstart)
    divInst.addEventListener('dragstart', dragstart)
    divGal.addEventListener('dragstart', dragstart)
    divXO.addEventListener('dragstart', dragstart)
    divMsg.addEventListener('dragstart', dragstart)
    divAudio.addEventListener('dragstart', dragstart)
    divCalc.addEventListener('dragstart', dragstart)

    function dragend(e){
        e.target.style.display = ''
        e.target.classList.remove('dragstarted')
    }


    divTg.addEventListener('dragend', dragend )
    divInst.addEventListener('dragend', dragend )
    divGal.addEventListener('dragend', dragend )
    divXO.addEventListener('dragend', dragend )
    divMsg.addEventListener('dragend', dragend )
    divAudio.addEventListener('dragend', dragend )
    divCalc.addEventListener('dragend', dragend )
}
calculator =() =>{

    document.body.innerHTML = ""
    document.body.style.display = 'flex'
    document.body.style.alignItems = 'center'

    let date = new Date()
    min = date.getMinutes()
    hour = date.getHours()
    day = date.getDate()
    month = date.getMonth()+1

    min < 10 ? min = "0" + min: min = min
    hour < 10 ? hour = "0" + hour: hour = hour
    month < 10 ? month = "0" + month: month = month
    day < 10 ? day = "0" + day: day = day

    document.body.innerHTML = ""
    // modeP==-1? document.body.style.background = "black": document.body.style.background = "white"
    iphone = document.createElement('div')
    document.body.appendChild(iphone)
    // document.body.style.background = "black"
    iphone.style.margin = "auto"
    iphone.style.marginTop = 0
    iphone.style.border = "10px solid gold"
    iphone.style.borderRadius = "40px"
    iphone.style.width="320px"
    iphone.style.height = "600px"
    iphone.style.position = "realitive"
    iphone.style.boxShadow = "0px 20px 15px #33333335"

    calc = document.createElement('div')
    iphone.appendChild(calc)
    calc.classList.add("calc")
    calc.style.margin = "0 auto"
    calc.style.maxWidth = "300px"
    calc.style.height = "570px"
    calc.style.borderRadius = "30px"
    calc.style.background = "linear-gradient(45deg,#F17C5888, #E9458488, #24AADB88, #27DBB188, #FFDC1888, #FF370688)"
    calc.style.animation = "gradient0 5s linear infinite"
    calc.style.backgroundSize = '742% 259%'
    calc.style.animationDirection = 'alternate'
    calc.style.color = "#fff"
    calc.style.fontFamily = "Arial"
    calc.style.padding = "15px"


    infobar = document.createElement('div')
    calc.appendChild(infobar)
    infobar.style.display = "flex"
    infobar.style.height = "0px"
    infobar.style.width = "600px"
    infobar.style.alignItems = "center"
    infobar.style.marginBottom = '0';
    infobar.style.position = "absolute"

    bgMode = document.createElement("div")
    infobar.appendChild(bgMode)
    bgMode.style.width = '40px'
    bgMode.style.height = "19px"
    bgMode.style.background = 'white'
    bgMode.style.margin = "auto"
    bgMode.style.marginTop = '10px'
    bgMode.style.borderRadius = "25px"
    bgMode.style.cursor = "pointer"
    bgMode.style.border = "4px solid gold"
    bgMode.style.margin = "-10px auto auto 248px"

    bgClick = document.createElement("div")
    bgMode.appendChild(bgClick)
    bgClick.style.width = "20px"
    bgClick.style.height = "20px"
    bgClick.style.borderRadius = '25px'
    bgClick.style.background = "black"
    // bgClick.style.marginRight = "25px"
    modeP==-1? bgClick.style.marginRight = "25px": bgClick.style.marginLeft = "20px"

    

    bgMode.onclick = () =>{
     if(modeP == 1){
        bgClick.style.background = "white"
        bgClick.style.marginLeft = "20px"
        document.body.style.background = "white"
        modeP*=-1
        bgMode.style.background = "black"
    }else{
        bgClick.style.background = "black"
        bgClick.style.marginLeft = 0
        document.body.style.background = "black"
        modeP*=-1
        bgMode.style.background = "white"
    }
    }

    
    ddmm = document.createElement('div')
    infobar.appendChild(ddmm)
    ddmm.style.height = '20px'
    ddmm.style.width = '40px'
    ddmm.style.marginLeft = "16px"
    

    p2 = document.createElement("p")
    ddmm.appendChild(p2)
    p2.innerHTML = `${hour}:${min}` 
    p2.style.fontSize = '15px'
    p2.style.marginTop = 0
    p2.style.marginLeft = '-555px'


    bang = document.createElement("div")
    infobar.appendChild(bang)
    bang.style.zIndex = 50
    bang.style.position = "absolute"
    bang.style.width = '200px'
    bang.style.height = '30px'
    bang.style.borderRadius = "0px 0px 20px 20px"
    bang.style.background = "black"
    bang.style.margin = '47px';
    

    camera = document.createElement("div")
    bang.appendChild(camera)

    camera.style.position = "absolute"
    camera.style.bottom = "8px"
    camera.style.width = "1rem"
    camera.style.height = "1rem"
    camera.style.borderRadius = "50%"
    camera.style.border = ".2rem solid #1e1f22"
    camera.style.background = "#447bb5a6"
    camera.style.left = "150px"
    camera.style.top = "10%"

    speaker = document.createElement("div")
    bang.appendChild(speaker )
    speaker.style.position = "absolute"
    speaker.style.rigth = '3.9rem'
    speaker.style.width = "5.2rem"
    speaker.style.height = ".6rem"
    speaker.style.background = "#333333"
    speaker.style.borderRadius = ".2rem"
    speaker.style.left = "3rem"
    speaker.style.top = "25%"   
    //==========================================================================================================
    //==========================================================================================================
    //==========================================================================================================


        
        calcScreen = document.createElement('div')
        calc.appendChild(calcScreen)
        calcScreen.classList.add("calcScreen")
        calcScreen.style.height = '125px';
        calcScreen.style.padding = ' 10px';
        calcScreen.style.display = ' grid';
        calcScreen.style.justifytems = "end";
        calcScreen.style.alignItems = 'end';
        
        result = document.createElement('p')
        calcScreen.appendChild(result)
        result.classList.add("result")

        buttons = document.createElement('div')
        calc.appendChild(buttons)
        buttons.classList.add("buttons")

        ac = document.createElement('div')
        buttons.appendChild(ac)
        ac.classList.add("ac")
        ac.classList.add("btn")
        ac.classList.add("bgGrey")
        ac.innerHTML = "AC"

        plusMinus = document.createElement('div')
        buttons.appendChild(plusMinus)
        plusMinus.classList.add("plusMinus")
        plusMinus.classList.add("btn")
        plusMinus.classList.add("bgGrey")
        plusMinus.innerHTML = "+/-"

        procent = document.createElement('div')
        buttons.appendChild(procent)
        procent.classList.add("procent")
        procent.classList.add("btn")
        procent.classList.add("bgGrey")
        procent.innerHTML = "%"

        division = document.createElement('div')
        buttons.appendChild(division)
        division.classList.add("division1")
        division.classList.add("btn")
        division.classList.add("bgOrange")
        division.innerHTML = "/"

        seven = document.createElement('div')
        buttons.appendChild(seven)
        seven.classList.add("seven")
        seven.classList.add("btn")
        seven.innerHTML = "7"

        eight = document.createElement('div')
        buttons.appendChild(eight)
        eight.classList.add("eight")
        eight.classList.add("btn")
        eight.innerHTML = "8"

        nine = document.createElement('div')
        buttons.appendChild(nine)
        nine.classList.add("nine")
        nine.classList.add("btn")
        nine.innerHTML = "9"

        multiplay = document.createElement('div')
        buttons.appendChild(multiplay)
        multiplay.classList.add("multiplay")
        multiplay.classList.add("btn")
        multiplay.classList.add("bgOrange")
        multiplay.innerHTML = "X"

        four = document.createElement('div')
        buttons.appendChild(four)
        four.classList.add("four")
        four.classList.add("btn")
        four.innerHTML = "4"

        five = document.createElement('div')
        buttons.appendChild(five)
        five.classList.add("five")
        five.classList.add("btn")
        five.innerHTML = "5"

        six = document.createElement('div')
        buttons.appendChild(six)
        six.classList.add("six")
        six.classList.add("btn")
        six.innerHTML = "6"

        minus = document.createElement('div')
        buttons.appendChild(minus)
        minus.classList.add("minus")
        minus.classList.add("btn")
        minus.classList.add("bgOrange")
        minus.innerHTML = "-"

        one = document.createElement('div')
        buttons.appendChild(one)
        one.classList.add("one")
        one.classList.add("btn")
        one.innerHTML = "1"

        two = document.createElement('div')
        buttons.appendChild(two)
        two.classList.add("two")
        two.classList.add("btn")
        two.innerHTML = "2"

        three = document.createElement('div')
        buttons.appendChild(three)
        three.classList.add("three")
        three.classList.add("btn")
        three.innerHTML = "3"

        plus = document.createElement('div')
        buttons.appendChild(plus)
        plus.classList.add("plus")
        plus.classList.add("btn")
        plus.classList.add("bgOrange")
        plus.innerHTML = "+"

        zero = document.createElement('div')
        buttons.appendChild(zero)
        zero.classList.add("zero")
        zero.classList.add("btn")
        zero.innerHTML = "0"

        dot = document.createElement('div')
        buttons.appendChild(dot)
        dot.classList.add("dot")
        dot.classList.add("btn")
        dot.innerHTML = "."

        equal = document.createElement('div')
        buttons.appendChild(equal)
        equal.classList.add("equal")
        equal.classList.add("btn")
        equal.classList.add("bgOrange")
        equal.innerHTML = "="

        firstNum = ""
        secoundNum = ""
        option = ""
        res = true
        ket = true
        mulpl = 1

        toHome = document.createElement('div')
        calc.appendChild(toHome)
        toHome.style.width = "200px"
        toHome.style.height = "10px"
        toHome.style.background = "white"
        toHome.style.borderRadius = "10px"
        toHome.style.marginTop = '10px'
        toHome.classList.add("toHome")
        toHome.style.cursor = "pointer"
        toHome.style.marginLeft = "auto"
        toHome.style.marginRight = "auto"
    
        toHome.onclick = () => {
        document.body.innerHTML = ""
        screenIphone()
        }
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
setInterval(() => {``

        if(firstNum.length <8){
            if (option == "" && res) {
                one.onclick = () => firstNum+=one.innerHTML
                two.onclick = () => firstNum+=two.innerHTML
                three.onclick = () => firstNum+=three.innerHTML
                four.onclick = () => firstNum+= four.innerHTML
                five.onclick = () => firstNum+= five.innerHTML
                six.onclick = () => firstNum+= six.innerHTML
                seven.onclick = () => firstNum+= seven.innerHTML
                eight.onclick = () => firstNum+= eight.innerHTML
                nine.onclick = () => firstNum+= nine.innerHTML
                zero.onclick = () => firstNum+= zero.innerHTML
        }
        }else{
            firstNum = firstNum[0]+firstNum[1]+firstNum[2]+firstNum[3]+firstNum[4]+firstNum[5]+firstNum[6]+firstNum[7]
        }
        if(firstNum != "" && option == "" && res && firstNum != '-'){
            division.onclick = () => option = division.innerHTML
            multiplay.onclick = () => option = multiplay.innerHTML
            plus.onclick = () => option = plus.innerHTML
            minus.onclick = () => option = minus.innerHTML
        }
        
        if(secoundNum.length <8){
            if(option != ''&& res){
            one.onclick = () => secoundNum+=one.innerHTML
            two.onclick = () => secoundNum+=two.innerHTML
            three.onclick = () => secoundNum+=three.innerHTML
            four.onclick = () => secoundNum+= four.innerHTML
            five.onclick = () => secoundNum+= five.innerHTML
            six.onclick = () => secoundNum+= six.innerHTML
            seven.onclick = () => secoundNum+= seven.innerHTML
            eight.onclick = () => secoundNum+= eight.innerHTML
            nine.onclick = () => secoundNum+= nine.innerHTML
            zero.onclick = () => secoundNum+= zero.innerHTML
        }
        }else{
            secoundNum = secoundNum[0]+secoundNum[1]+secoundNum[2]+secoundNum[3]+secoundNum[4]+secoundNum[5]+secoundNum[6]+secoundNum[7]
        }
        
        if (option == "" && res){
            result.innerHTML = firstNum
        }else if(option != "" && secoundNum =="" && res){
            result.innerHTML = option
        }else if(secoundNum != "" && option != "" && res){
            result.innerHTML = secoundNum
        }
        
        function eqFormat(){
            firstNum = result.innerHTML
            secoundNum = ""
            option = ""
            res = true
            mulpl = -1
        }
        equal.onclick = () =>{
            res = false
            if(option == "/"){
                result.innerHTML = firstNum*1/secoundNum*1   
            }else if (option == "X"){
                result.innerHTML = firstNum*1*secoundNum*1
            }else if (option == "+") {
                result.innerHTML = firstNum*1+secoundNum*1
            }else if (option == "-"){
                result.innerHTML = firstNum*1-secoundNum*1
            }if (result.innerHTML =="666"){
                screem()
            } eqFormat()
        }
        if (firstNum !='' && option !='' && secoundNum == ''){
            ket = true
        }
        
        dot.onclick = () =>{
        if(ket == true){
            if(firstNum == ""){
                firstNum = "0."
            }else if (firstNum != "" && option ==""){
                firstNum+="." 
            }else if (option != "" && secoundNum == ""){
                secoundNum = '0.5'
            }else if (secoundNum != ""){
                secoundNum+="."
            }
        }
        ket = false   
        }
        
        
        
        function formatAll(){
            firstNum = ""
            result.innerHTML = ""
            secoundNum = ""
            option = ""
            res = true
            ket = true
            mulpl = 1
        }
        ac.onclick = () => formatAll()
        
        plusMinus.onclick = () =>{
                if (firstNum =="-"){
                    firstNum = ""
                }else if (secoundNum == "-"){
                    secoundNum = ""
                }else if(firstNum == ""){
                    firstNum+="-"
                }else if (firstNum != '' && option == ''){
                    firstNum*=(-1)
                }else if(option != '' && secoundNum ==""){
                    secoundNum+='-'
                }else if (secoundNum !=''){
                    secoundNum*=(-1)
                }
        }
        
            if (firstNum != '' && option ==""){
                procent.onclick = () =>{firstNum = (firstNum*1)/100}
            }else if (secoundNum != ''){
                procent.onclick = () =>{secoundNum = (secoundNum*1)/100}
            }
        
        
        screem = () => {
            document.body.innerHTML = "";
        let anonImg = document.createElement("img")
            audio = document.createElement('audio')
            audio.src = "folder/sc.mp3"
            document.body.appendChild(anonImg)
            document.body.appendChild(audio)
            anonImg.src = 'folder/scr.jpg'
            anonImg.style.height = "107vh"
            anonImg.style.width = "50vw"
            document.body.style.justifyContent = "center"
            document.body.style.marginTop = '10px'
            document.body.style.background = "darkred";
            audio.play()
            setTimeout(() => {
                 modeP==1? document.body.style.background = "black": document.body.style.background = "white";
                 calculator()
            }, 3000);
        }

        

}, 0);
}
audioPlayer = ()=>{
    // -------------Visual-----------------
    document.body.innerHTML = ""
    
    
    let date = new Date()
    min = date.getMinutes()
    hour = date.getHours()
    
    min < 10 ? min = "0" + min: min = min
    hour < 10 ? hour = "0" + hour: hour = hour
    
    
    iphone = document.createElement('div')
    document.body.appendChild(iphone)
    iphone.style.margin = "auto"
    iphone.style.marginTop = 0
    iphone.style.border = "10px solid gold"
    iphone.style.borderRadius = "40px"
    iphone.style.width="320px"
    iphone.style.height = "600px"
    iphone.style.position = "realitive"
    
    let main = document.createElement("div")
    iphone.appendChild(main)

    let player = document.createElement("div")
    main.appendChild(player)
    player.className = ("player")
    player.id = ("player")
    player.style.borderRadius = '30px'
    player.style.maxWidth = '260px'
    player.style.width = '100%'
    player.style.padding = '30px'
    // player.style.boxShadow = "5px, 6px, 3px, -4px, #0000004d"
    // player.style.transition = '0.1s all'
    //-----------------------------------------------------------
    player.style.position ='absolute';
    player.style.background =' linear-gradient(45deg,#F17C5888, #E9458488, #24AADB88, #27DBB188, #FFDC1888, #FF370688)';
    player.style.backgroundSize = '300%, 300%';
    player.style.animation = 'gradient 5s linear infinite';
    player.style.animationDirection = 'alternate';
    player.style.top = "18px"
    player.style.height = "540px"
    
    
    //===================================================================================
    infobar = document.createElement('div')
    player.appendChild(infobar)
    infobar.style.display = "flex"
    infobar.style.height = "1px"
    infobar.style.width = "1px"
    infobar.style.alignItems = "center"
    infobar.justifyContent = 'center'
    
    bgMode = document.createElement("div")
    infobar.appendChild(bgMode)
    bgMode.style.width = '40px'
    bgMode.style.height = "19px"
    bgMode.style.background = 'white'
    bgMode.style.margin = "auto"
    bgMode.style.marginTop = '10px'
    bgMode.style.borderRadius = "25px"
    bgMode.style.cursor = "pointer"
    bgMode.style.border = "4px solid gold"
    bgMode.style.margin = "-25px auto auto 233px"

    bgClick = document.createElement("div")
    bgMode.appendChild(bgClick)
    bgClick.style.width = "20px"
    bgClick.style.height = "20px"
    bgClick.style.borderRadius = '25px'
    bgClick.style.background = "black"
    // bgClick.style.marginRight = "25px"
    setInterval(() => {
        
        modeP==-1? bgClick.style.marginRight = "25px": bgClick.style.marginLeft = "20px"
    }, 0);


    bgMode.onclick = () =>{
     if(modeP == 1){
        bgClick.style.background = "white"
        bgClick.style.marginLeft = "20px"
        document.body.style.background = "white"
        modeP*=-1
        bgMode.style.background = "black"
    }else{
        bgClick.style.background = "black"
        bgClick.style.marginLeft = 0
        document.body.style.background = "black"
        modeP*=-1
        bgMode.style.background = "white"
    }
    }
    

    
    ddmm = document.createElement('div')
    infobar.appendChild(ddmm)
    ddmm.style.height = '20px'
    ddmm.style.width = '40px'
    ddmm.style.marginLeft = "16px"
    
    p2 = document.createElement("p")
    ddmm.appendChild(p2)
    p2.innerHTML = `${hour}:${min}`
    p2.style.marginTop = '-15px'
    p2.style.marginLeft = "-310px"
    p2.style.marginRight = 0
    p2.style.fontSize = '15px'
    p2.style.color = "white"
    p2.style.userSelect = "none"

    
    bang = document.createElement("div")
    infobar.appendChild(bang)
    bang.style.zIndex = 50
    bang.style.top = 0
    bang.style.left = '62px'
    bang.style.position = "absolute"
    bang.style.width = '200px'
    bang.style.height = '30px'
    bang.style.borderRadius = "0px 0px 20px 20px"
    bang.style.background = "black"
    
    
    
    camera = document.createElement("div")
    bang.appendChild(camera)
    
    camera.style.position = "absolute"
    camera.style.bottom = "8px"
    camera.style.width = "1rem"
    camera.style.height = "1rem"
    camera.style.borderRadius = "50%"
    camera.style.border = ".2rem solid #1e1f22"
    camera.style.background = "#447bb5a6"
    camera.style.left = "150px"
    camera.style.top = "10%"
    
    speaker = document.createElement("div")
    bang.appendChild(speaker )
    speaker.style.position = "absolute"
    speaker.style.rigth = '3.9rem'
    speaker.style.width = "5.2rem"
    speaker.style.height = ".6rem"
    speaker.style.background = "#333333"
    speaker.style.borderRadius = ".2rem"
    speaker.style.left = "3rem"
    speaker.style.top = "25%"   
    //===================================================================================
    
    
    let title = document.createElement('div')
    player.appendChild(title)
    title.className = ('title')
    title.style.fontStyle = "normal"
    title.style.fontWeight = '500'
    title.style.fontSize = '14px'
    title.style.lineHeight = "16px"
    title.style.color = "#2B3C5B"
    title.style.textAlign = "center"
    title.style.userSelect = "none"
    
    let cover = document.createElement('div')
    player.appendChild(cover)
    cover.className = ('cover')
    cover.style.display = "flex"
    cover.style.justifyContent = "center"
    cover.style.margin = "9px 0"
    
    
    let coverImg = document.createElement('img')
    cover.appendChild(coverImg)
    coverImg.className = ("coverImg ")
    coverImg.src = ('img/cover.png')
    coverImg.style.width = '250px'
    coverImg.style.height= '230px'
    coverImg.style.userSelect = "none"
    
    
    let song = document.createElement('div')
    player.appendChild(song)
    song.className = ('song')
    song.style.fontStyle="normal"
    song.style.fontSize = '24px'
    song.style.fontWeight= "bold"
    song.style.color = "2B3C5B"
    
    let audio = document.createElement('audio')
    player.appendChild(audio)
    
    let progressContainer = document.createElement('div')
    player.appendChild(progressContainer)
    progressContainer.className= ('progressContainer')
    progressContainer.style.background = '#E4E9ED'
    progressContainer.style.borderRadius = "5px"
    progressContainer.style.width = "100%"
    progressContainer.style.height = "10px"
    progressContainer.style.marginTop = '63px'
    progressContainer.style.display = "flex"
    progressContainer.style.alignItems = "center"
    progressContainer.style.cursor = "pointer"
    
    let progress = document.createElement('div')
    progressContainer.appendChild(progress)
    progress.className = ('progress')
    progress.style.background = "#2B3C5B"
    progress.style.borderRadius = "5px"
    progress.style.height = "10px"
    
    let timeMother = document.createElement("div")
    player.appendChild(timeMother)
    timeMother.className = ('timeMother')
    timeMother.style.display = "flex"
    timeMother.style.justifyContent = "space-between"
    timeMother.style.marginTop = "15px"
    
    
    let time1 = document.createElement("div")
    timeMother.appendChild(time1)
    time1.className = ('time1')
    time1.style.userSelect = "none"
    
    
    let time2 = document.createElement("div")
    timeMother.appendChild(time2)
    time2.className = ('time2')
    time2.innerHTML = (audio.duration)
    time2.style.userSelect = "none"
    
    let volMother = document.createElement('div')
    player.appendChild(volMother)
    volMother.className = ("volMother")
    volMother.style.display = "flex"
    volMother.style.justifyContent = "space-between"
    volMother.style.gap = "20px"
    
    let volStatus = document.createElement('div')
    volMother.appendChild(volStatus)
    volStatus.className = ('volStatus')
    volStatus.style.cursor = "pointer"
    volStatus.style.width = "40px"
    
    let volStatusImg = document.createElement("img")
    volStatus.appendChild(volStatusImg)
    volStatusImg.src = ('img/soundOn.png')
    volStatusImg.style.width = '40px'
    volStatus.style.height = '40px'
    volStatus.style.userSelect = "none"
    
    let volBar = document.createElement("div")
    volMother.appendChild(volBar)
    volBar.className = ("volBar")
    volBar.style.width = "90%"
    
    volBar.style.display = "flex"
    volBar.style.alignItems = "center"
    
    
    let volContainer = document.createElement('div')
    volBar.appendChild(volContainer)
    volContainer.className = ('volContainer')
    volContainer.style.background = 'rgb(228, 233, 237)';
    volContainer.style.borderRadius = '5px';
    volContainer.style.width ='100%';
    volContainer.style.height = '10px';
    volContainer.style.display = 'flex';
    volContainer.style.aligItems = 'center';
    volContainer.style.cursor = 'pointer';
    
    let volProgress = document.createElement('div')
    volContainer.appendChild(volProgress)
    volProgress.className =("volProgress")
    volProgress.style.background = 'rgb(43, 60, 91)';
    volProgress.style.borderRadius = '5px';
    volProgress.style.width = '100%'
    
    let buttons = document.createElement('div')
    player.appendChild(buttons)
    buttons.className = ("buttons")
    
    buttons.style.display = 'flex'
    buttons.style.justifyContent = "space-around"
    buttons.style.alignItems = "center"
    buttons.style.maxWidth = "184px"
    buttons.style.width = "100%"
    buttons.style.margin = "auto" 
    buttons.style.marginTop = "25px"
    
    let prev = document.createElement("div")
    buttons.appendChild(prev)
    prev.className = ('prev')
    prev.style.cursor = "pointer"
    
    
    let prevImg = document.createElement('img')
    prev.appendChild(prevImg)
    prevImg.className = ('imgSrc')
    prevImg.src = ('img/prev.png')
    prevImg.style.width = '50px'
    prevImg.style.height = "50px"
    prevImg.style.userSelect = "none"

    let play = document.createElement("div")
    buttons.appendChild(play)
    play.className = ('play')
    play.style.cursor = "pointer"
    play.style.marginLeft = "25px"
    play.style.marginRight = '25px'
    
    let playImg = document.createElement("img")
    play.appendChild(playImg)
    playImg.className = ('imgSrc')
    playImg.src = ('img/play.png')
    playImg.style.width = '75px'
    playImg.style.height = "75px"
    playImg.style.userSelect = "none"
    
    let next = document.createElement("div")
    buttons.appendChild(next)
    next.className = ('next')
    next.style.cursor = "pointer"
    
    let nextImg = document.createElement('img')
    next.appendChild(nextImg)
    nextImg.className = ('imgSrc')
    nextImg.style.width = '50px'
    nextImg.style.height = "50px"
    nextImg.src = ('img/next.png')
    nextImg.style.userSelect = "none"

    let h1 = document.createElement('h1')
        main.appendChild(h1)
        instImg = document.createElement("img")
        instLink = document.createElement('a')
        instLink.classList.add("a")
        main.appendChild(instImg)
        main.appendChild(instLink)
    
        toHome = document.createElement('div')
        player.appendChild(toHome)
        toHome.style.width = "200px"
        toHome.style.height = "10px"
        toHome.style.background = "white"
        toHome.style.borderRadius = "10px"
        toHome.style.marginTop = '5px'
        toHome.classList.add("toHome")
        toHome.style.cursor = "pointer"
        toHome.style.marginLeft = "auto"
        toHome.style.marginRight = "auto"
        toHome.style.marginTop= '45px'
        toHome.onclick = () => {
            document.body.innerHTML = ""
            screenIphone()
        }
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //-----------------------------------------FUNCTIONAL-------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
    
    
    //-------------------------------------------
    nSongs = [
        'Sakura',
        "Colors",
        'Texture',
        'Babylon',
        'Bella Ciao',
        'My LIfe Is Going On',
        'Volna',
        'I Will Survive',
        'Faya' 
    ]
    songs  = []
    for(s of nSongs){
        songs.unshift(s)
    }

    let sIndex = 0
    title.innerHTML = songs.sIndex
    const loadSong = (x) => {
        title.innerHTML = x
        audio.src = `audio/${x}.mp3`
        cover.src = `img/cover${sIndex + 1}.png`
    }
    loadSong(songs[sIndex])
    
    playSong = () =>{
        player.classList.add('play')
        playImg.src = "img/pause.png"
        audio.play()
        coverImg.style.animation ='rotation 8s infinite linear';
        instImg.innerHTML = ""
        instImg.src = ""
        instImg.style.width = 0
        instImg.style.height = 0
        instLink.innerHTML = ""
        document.createElement("a")
    
        // setTimeout(() => {
        //     instImg.style.width = "50px"
        //     instImg.style.height = "40px"
        //     instImg.style.marginTop = "620px"
        //     instImg.src = "img/inst_logo.png"
        //     instLink.style.marginTop="621px"
        //     instLink.style.color="white"
        //     instLink.style.textDecoration = "none"
        //     instLink.style.transition = "0.3s all"
        //     instLink.href = "https://www.instagram.com/melsavetisyan"
        //     instLink.innerHTML = "melsavetisyan"
        //     instLink.target = "_blank"
        //     h1.style.textAlign - "center"
        //     h1.innerHTML = "Mels Avetisyan"
        //     h1.style.position = "absolute"
        //     h1.style.top = "70px"
        //     h1.style.color = "White"
        // }, 5000);
    }
    
    pauseSong = () =>{
        player.classList.remove('play')
        playImg.src = "img/play.png"
        audio.pause()
        coverImg.style.animation ='';
        
    }
    play.onclick = () =>{
        const isPlaying = player.classList.contains('play')
        isPlaying?pauseSong():playSong()
    }
    
    nextSong = () => {
        sIndex++
        if(sIndex>songs.length-1){
            sIndex=0
        }
        loadSong(songs[sIndex])
        playSong()
    }
    
    prevSong = () => {
        sIndex--
        if(sIndex<0){
            sIndex=songs.length-1
        }
        loadSong(songs[sIndex])
        playSong()
    }
    
    next.onclick = () => {
        nextSong()
    }
    prev.onclick = () =>{
        prevSong()
    }
    
    updateProgress = (x) =>{
        const {duration, currentTime} = x.srcElement
        const progressProcent = (currentTime / duration)*100
        progress.style.width = `${progressProcent}%`
        progress.style.transition =  `width 0.4s`
    }
    audio.addEventListener("timeupdate", updateProgress)
    
    setProgress = (e) => {
        const clickX = e.offsetX
        const duration = audio.duration
        audio.currentTime = (clickX/240)*duration
    }
    progressContainer.addEventListener('click', setProgress)
    
    audio.addEventListener('ended', nextSong)
    
    let minutes =  ''
    let secounds =  ''
    let minutes2 =  ''
    let secounds2 = ''
    ////-------------------------------------------------------
    setInterval(() => {
    minutes = Math.floor(audio.currentTime/60) 
    secounds = Math.floor(audio.currentTime - (minutes*60))
    minutes2 = Math.floor(audio.duration/60) 
    secounds2 = Math.floor(audio.duration - (minutes2*60))
        if(minutes<10 && secounds<10){
            time1.innerHTML = `0${minutes}:0${secounds}`
        }else if(minutes<10 && secounds>=10){
            time1.innerHTML = `0${minutes}:${secounds}`
        }else if (minutes>=10 && secounds<10){
            time1.innerHTML = `${minutes}:0${secounds}`
        }else {
            time1.innerHTML = `${minutes}:${secounds}`
        }
        minutes2<10 && secounds2<10 ? time2.innerHTML = `0${minutes2}:0${secounds2}` 
            :minutes2>=10 && secounds2<10 ? time2.innerHTML = `${minutes2}:0${secounds2}`
            :minutes2<10 && secounds2>=10?time2.innerHTML = `0${minutes2}:${secounds2}`
            :time2.innerHTML = `${minutes2}:${secounds2}` 
    }, 0);
    
    soundOn = () => {
        volStatus.classList.add("soundOn")
        volStatusImg.src = "img/soundOn.png"
        audio.volume = 1
    }
    soundOff=() =>{
        volStatus.classList.remove("soundOn")
        volStatusImg.src = "img/soundOff.png"
        audio.volume = 0
    }
    volStatus.addEventListener("click", () =>{
        let isMute = volStatus.classList.contains("soundOn")
        isMute?soundOff():soundOn()
    })
    
    function setVolProgress(e){
        const widthVol = this.clientWidth
        const clickX = e.offsetX
        audio.volume = clickX/widthVol
        volProgress.style.width = `(audio.volume*100)%`
    }
     volContainer.addEventListener("click", setVolProgress)
     
    
    
     function changeVolProgress(e){
        const widthVol = this.clientWidth
        const clickX = e.offsetX 
        const dbgb = clickX/widthVol*100 + "%"
        volProgress.style.width = dbgb
        volProgress.style.transition =  `width 0.5s`
    }
    volContainer.addEventListener("click", changeVolProgress)    
}
msgr = () =>{

    document.body.innerHTML = ""

    date = new Date()
    min = date.getMinutes()
    hour = date.getHours()
    day = date.getDate()
    month = date.getMonth() + 1
    
    min < 10 ? min = "0" + min : min = min
    hour < 10 ? hour = "0" + hour : hour = hour
    month < 10 ? month = "0" + month : month = month
    day < 10 ? day = "0" + day : day = day
    iphone = document.createElement('div')
    document.body.appendChild(iphone)
        
    iphone.style.margin = "auto"
    iphone.style.marginTop = 0
    iphone.style.border = "10px solid gold"
    iphone.style.borderRadius = "40px"
    iphone.style.width = "320px"
    iphone.style.height = "600px"
    iphone.style.position = "realitive"
    iphone.style.boxShadow = "0px 20px 15px #33333335"
    
    screen = document.createElement('div')
    iphone.appendChild(screen)
    screen.style.zIndex = "10"
    screen.style.position = "absolute"
    screen.style.background = ' linear-gradient(45deg,#F17C5888, #E9458488, #24AADB88, #27DBB188, #FFDC1888, #FF370688)';
    screen.style.backgroundSize = '300%, 300%';
    screen.style.animation = 'gradient 5s linear infinite';
    screen.style.animationDirection = 'alternate';
    screen.style.width = "320px"
    screen.style.height = "600px"
    screen.style.borderRadius = "30px"
    icon = document.createElement('div')
    icon.style.marginTop = "15px"
    screen.appendChild(icon)
    
    infobar = document.createElement('div')
    icon.appendChild(infobar)
    infobar.style.display = "flex"
    infobar.style.height = "1px"
    infobar.style.width = "1px"
    infobar.style.alignItems = "center"
    infobar.justifyContent = 'center'
    
    ddmm = document.createElement('div')
    infobar.appendChild(ddmm)
    ddmm.style.height = '20px'
    ddmm.style.width = '40px'
    ddmm.style.marginLeft = "16px"
    
    p2 = document.createElement("p")
    ddmm.appendChild(p2)
    p2.innerHTML = `${hour}:${min}`
    p2.style.margin = 0
    p2.style.fontSize = '15px'
    p2.style.userSelect = "none"
    p2.style.color = 'white'
    
    bang = document.createElement("div")
    infobar.appendChild(bang)
    bang.style.zIndex = 50
    bang.style.top = 0
    bang.style.left = '62px'
    bang.style.position = "absolute"
    bang.style.width = '200px'
    bang.style.height = '30px'
    bang.style.borderRadius = "0px 0px 20px 20px"
    bang.style.background = "black"
    
    bgMode = document.createElement("div")
    infobar.appendChild(bgMode)
    bgMode.style.width = '40px'
    bgMode.style.height = "19px"
    bgMode.style.background = 'white'
    bgMode.style.margin = "auto"
    bgMode.style.marginTop = '10px'
    bgMode.style.borderRadius = "25px"
    bgMode.style.cursor = "pointer"
    bgMode.style.border = "4px solid gold"
    bgMode.style.margin = "-10px auto auto 213px"
    
    bgClick = document.createElement("div")
    bgMode.appendChild(bgClick)
    bgClick.style.width = "20px"
    bgClick.style.height = "20px"
    bgClick.style.borderRadius = '25px'
    bgClick.style.background = "black"
    bgClick.style.marginRight = "25px"
    setInterval(() => {
        modeP==1? bgClick.style.marginRight = "25px": bgClick.style.marginLeft = "20px"
    }, 0);
    
    
    bgMode.onclick = () =>{
     if(modeP == 1){
        bgClick.style.background = "white"
        bgClick.style.marginLeft = "20px"
        document.body.style.background = "white"
        modeP*=-1
        bgMode.style.background = "black"
    }else{
        bgClick.style.background = "black"
        bgClick.style.marginLeft = 0
        document.body.style.background = "black"
        modeP*=-1
        bgMode.style.background = "white"
    }
    }
    
    camera = document.createElement("div")
    bang.appendChild(camera)
    
    camera.style.position = "absolute"
    camera.style.bottom = "8px"
    camera.style.width = "1rem"
    camera.style.height = "1rem"
    camera.style.borderRadius = "50%"
    camera.style.border = ".2rem solid #1e1f22"
    camera.style.background = "#447bb5a6"
    camera.style.left = "150px"
    camera.style.top = "10%"
    
    speaker = document.createElement("div")
    bang.appendChild(speaker)
    speaker.style.position = "absolute"
    speaker.style.rigth = '3.9rem'
    speaker.style.width = "5.2rem"
    speaker.style.height = ".6rem"
    speaker.style.background = "#333333"
    speaker.style.borderRadius = ".2rem"
    speaker.style.left = "3rem"
    speaker.style.top = "25%"

    
    let messenger = document.createElement("div")
        screen.appendChild(messenger)
        messenger.style.height = "555px"
        messenger.style.width = "310px"
        messenger.style.marginTop = "0"
        messenger.style.marginLeft = "auto"
        messenger.style.marginRight = "auto"
        messenger.style.borderRadius = "40px"
        messenger.style.background = "#534d4d"
        messenger.style.paddingTop = "px"
    
        userBar = document.createElement('div')
        messenger.appendChild(userBar)
        
        userBar.style.width = "310px"
        userBar.style.height = "60px"
        userBar.style.backgroundColor = "#12848d"
        userBar.style.marginLeft = "auto"
        userBar.style.marginRight = "auto"
        userBar.style.borderRadius = "40px 40px 0 0"
        userBar.style.marginTop = "10px"
        userBar.style.position = "absoulte"
        userBar.style.display = "flex"
    
        userPic = document.createElement('div')
        userBar.appendChild(userPic)
        userPic.style.width = "50px"
        userPic.style.height = "50px"
        userPic.style.backgroundColor = "aqua"
        userPic.style.borderRadius = "50%"
        userPic.style.marginLeft = "20px"
        userPic.style.marginTop = "5px"
        userPic.style.marginRight = "10px"
    
        userImg = document.createElement('img')
        userPic.appendChild(userImg)
        userImg.src = "img/message.png"
        userImg.style.width = "50px"
        userImg.style.height = "50px"
        userImg.style.borderRadius = "50%"
    
        userName = document.createElement("div")
        userBar.appendChild(userName)
        userName.style.width = '100px'
        userName.style.height = '35px'
        // userName.style.background = "grey"
        userName.style.marginTop = "5px"
        
        pUsName = document.createElement('p')
        userName.appendChild(pUsName)
        pUsName.innerHTML = "Mels"
        pUsName.style.fontSize = "35px"
        pUsName.style.marginTop = 0
        pUsName.style.marginLeft = "15px"
        pUsName.style.color = "white"
    
    
        usStatus = document.createElement('div')
        userName.appendChild(usStatus)
        usStatus.style.width = '100px'
        usStatus.style.height = '20px'
        // usStatus.style.background = "pink"
        usStatus.style.marginTop = "-40px"
        usStatus.style.marginRight = "0px"
        usStatus.style.paddingTop = "0px"
        usStatus.style.display = "flex"
    
        statusLighter = document.createElement('div')
        usStatus.appendChild(statusLighter)
        statusLighter.style.height = "15px"
        statusLighter.style.width = "15px"
        statusLighter.style.borderRadius = '50%'
        statusLighter.style.backgroundColor = "lightgreen"
        statusLighter.style.marginTop= "2px"
        statusLighter.style.marginLeft = "10px"
    
        pUsStatus = document.createElement("p")
        usStatus.appendChild(pUsStatus)
        pUsStatus.innerHTML = "Active"
        pUsStatus.style.color = "white"
        pUsStatus.style.marginTop = 0
        pUsStatus.style.marginLeft = "5px"
        pUsStatus.style.fontSize = "18px"
        
    
        sms = document.createElement('div')
        messenger.appendChild(sms)
        sms.style.display = "flex"
        
        sms.style.marginLeft = "47px"
        sms.style.marginTop = "10px"
    
        myMsg = document.createElement('div')
        sms.appendChild(myMsg)
        myMsg.style.width = "200px"
        myMsg.style.height = "50px"
        myMsg.style.backgroundColor = "lightblue"
        myMsg.style.borderRadius = "15px"
    
        msgTxt = document.createElement("p")
        myMsg.appendChild(msgTxt)
    
        me = document.createElement('div')
        sms.appendChild(me)
        me.style.width = '50px'
        me.style.height = '50px'
        me.style.backgroundColor = "#081678"
        me.style.margin = 0
        me.style.borderRadius = "50%"
        me.style.marginLeft = '10px'
    
        sms.style.width = '0'
        me.style.display = "none"
    
        myImg = document.createElement('img')
        me.appendChild(myImg)
        myImg.src= "img/me.png"
        myImg.style.width = "50px"
        myImg.style.width = "50px"
        // msgTxt.style.fontSize = "20px"
        
        msgTxt.style.marginTop = 0
    setInterval(() => {
        if (msgTxt.innerHTML.length > 20 ){
            msgTxt.style.fontSize = "20px"
            msgTxt.style.height = "5px"
            msgTxt.style.marginTop = '0px'
            if(msgTxt.innerHTML.length > 50 ){
                msgTxt.style.fontSize = "15px"
            }
        }else{
            msgTxt.style.fontSize = "20px"
            msgTxt.style.marginTop = '10px'
        }
    
        if (msgTxt2.innerHTML.length > 20 ){
            msgTxt2.style.fontSize = "20px"
            msgTxt2.style.height = "5px"
            msgTxt2.style.marginTop = '0px'
            if(msgTxt2.innerHTML.length > 50 ){
                msgTxt2.style.fontSize = "15px"
            }
        }else{
            msgTxt2.style.fontSize = "20px"
            msgTxt2.style.marginTop = '10px'
        }
    
        if (msgTxt3.innerHTML.length > 20 ){
            msgTxt3.style.fontSize = "20px"
            msgTxt3.style.height = "5px"
            msgTxt3.style.marginTop = '0px'
            if(msgTxt3.innerHTML.length > 50 ){
                msgTxt3.style.fontSize = "15px"
            }
        }else{
            msgTxt3.style.fontSize = "20px"
            msgTxt3.style.marginTop = '10px'
        }
        if (msgTxt4.innerHTML.length > 20 ){
            msgTxt4.style.fontSize = "20px"
            msgTxt4.style.height = "5px"
            msgTxt4.style.marginTop = '0px'
            if(msgTxt4.innerHTML.length > 50 ){
                msgTxt4.style.fontSize = "15px"
            }
        }else{
            msgTxt4.style.fontSize = "20px"
            msgTxt4.style.marginTop = '10px'
        }
        
        if (msgTxt5.innerHTML.length > 20 ){
            msgTxt5.style.fontSize = "20px"
            msgTxt5.style.height = "5px"
            msgTxt5.style.marginTop = '0px'
            if(msgTxt5.innerHTML.length > 50 ){
                msgTxt5.style.fontSize = "15px"
            }
        }else{
            msgTxt5.style.fontSize = "20px"
            msgTxt5.style.marginTop = '10px'
        }
    
        if (msgTxt6.innerHTML.length > 20 ){
            msgTxt6.style.fontSize = "20px"
            msgTxt6.style.height = "5px"
            msgTxt6.style.marginTop = '0px'
            if(msgTxt6.innerHTML.length > 50 ){
                msgTxt6.style.fontSize = "15px"
            }
        }else{
            msgTxt6.style.fontSize = "20px"
            msgTxt6.style.marginTop = '10px'
        }
        if (msgTxt7.innerHTML.length > 20 ){
            msgTxt7.style.fontSize = "20px"
            msgTxt7.style.height = "5px"
            msgTxt7.style.marginTop = '0px'
        if(msgTxt7.innerHTML.length > 50 ){
            msgTxt7.style.fontSize = "15px"
        }
        }else{
            msgTxt7.style.fontSize = "20px"
            msgTxt7.style.marginTop = '10px'
        }
    }, 0);
    
     // -------------------------------------------------------------------------------------------------------------------
    
        // sms1 = document.createElement('div')
        // messenger.appendChild(sms)
        // sms1.style.display = "flex"
        // sms1.style.width = '0px'
        // sms1.style.marginLeft = "47px"
        // sms1.style.marginTop = "10px"
    
        // myMsg1 = document.createElement('div')
        // sms1.appendChild(myMsg1)
        // myMsg1.style.width = "200px"
        // myMsg1.style.height = "50px"
        // myMsg1.style.backgroundColor = "lightblue"
        // myMsg1.style.borderRadius = "15px"
        
        // msgTxt1 = document.createElement("p")
        // myMsg1.appendChild(msgTxt1)
        
        
    
        // me1 = document.createElement('div')
        // sms1.appendChild(me1)
        // me1.style.width = '50px'
        // me1.style.height = '50px'
        // me1.style.backgroundColor = "#081678"
        // me1.style.margin = 0
        // me1.style.borderRadius = "50%"
        // me1.style.marginLeft = '10px'
        // me1.style.display = "none"
    
        // myImg1 = document.createElement('img')
        // me1.appendChild(myImg1)
        // myImg1.src= "img/me.png"
        // myImg1.style.width = "50px"
        // myImg1.style.width = "50px"
    
        // ---------------------------------------------------------------------------------------------------------
        sms2 = document.createElement('div')
        messenger.appendChild(sms2)
        sms2.style.display = "flex"
        sms2.style.width = '0'
        sms2.style.marginLeft = "47px"
        sms2.style.marginTop = "10px"
    
        myMsg2 = document.createElement('div')
        sms2.appendChild(myMsg2)
        myMsg2.style.width = "200px"
        myMsg2.style.height = "50px"
        myMsg2.style.backgroundColor = "lightblue"
        myMsg2.style.borderRadius = "15px"
        
        msgTxt2 = document.createElement("p")
        myMsg2.appendChild(msgTxt2)
    
        me2 = document.createElement('div')
        sms2.appendChild(me2)
        me2.style.width = '50px'
        me2.style.height = '50px'
        me2.style.backgroundColor = "#081678"
        me2.style.margin = 0
        me2.style.borderRadius = "50%"
        me2.style.marginLeft = '10px'
        me2.style.display = "none"
    
        myImg2 = document.createElement('img')
        me2.appendChild(myImg2)
        myImg2.src= "img/me.png"
        myImg2.style.width = "50px"
        myImg2.style.width = "50px"
    
        msgTxt2.style.fontSize = "20px"
        msgTxt2.style.marginTop = 0
    // ---------------------------------------------------------------------------------------------------------
        sms3 = document.createElement('div')
        messenger.appendChild(sms3)
        sms3.style.display = "flex"
        sms3.style.width = '0px'
        sms3.style.marginLeft = "47px"
        sms3.style.marginTop = "10px"
    
        myMsg3 = document.createElement('div')
        sms3.appendChild(myMsg3)
        myMsg3.style.width = "200px"
        myMsg3.style.height = "50px"
        myMsg3.style.backgroundColor = "lightblue"
        myMsg3.style.borderRadius = "15px"
        
        msgTxt3 = document.createElement("p")
        myMsg3.appendChild(msgTxt3)
    
        me3 = document.createElement('div')
        sms3.appendChild(me3)
        me3.style.width = '50px'
        me3.style.height = '50px'
        me3.style.backgroundColor = "#081678"
        me3.style.margin = 0
        me3.style.borderRadius = "50%"
        me3.style.marginLeft = '10px'
        me3.style.display = "none"
    
        myImg3 = document.createElement('img')
        me3.appendChild(myImg3)
        myImg3.src= "img/me.png"
        myImg3.style.width = "50px"
        myImg3.style.width = "50px"
    
        msgTxt3.style.fontSize = "20px"
        msgTxt3.style.marginTop = 0
        // ---------------------------------------------------------------------------------------------------------
        sms4 = document.createElement('div')
        messenger.appendChild(sms4)
        sms4.style.display = "flex"
        sms4.style.width = '0px'
        sms4.style.marginLeft = "47px"
        sms4.style.marginTop = "10px"
    
        myMsg4 = document.createElement('div')
        sms4.appendChild(myMsg4)
        myMsg4.style.width = "200px"
        myMsg4.style.height = "50px"
        myMsg4.style.backgroundColor = "lightblue"
        myMsg4.style.borderRadius = "15px"
        
        msgTxt4 = document.createElement("p")
        myMsg4.appendChild(msgTxt4)
    
        me4 = document.createElement('div')
        sms4.appendChild(me4)
        me4.style.width = '50px'
        me4.style.height = '50px'
        me4.style.backgroundColor = "#081678"
        me4.style.margin = 0
        me4.style.borderRadius = "50%"
        me4.style.marginLeft = '10px'
        me4.style.display = "none"
    
        myImg4 = document.createElement('img')
        me4.appendChild(myImg4)
        myImg4.src= "img/me.png"
        myImg4.style.width = "50px"
        myImg4.style.width = "50px"
    
        msgTxt4.style.fontSize = "20px"
        msgTxt4.style.marginTop = 0
    // ---------------------------------------------------------------------------------------------------------
        sms5= document.createElement('div')
        messenger.appendChild(sms5)
        sms5.style.display = "flex"
        sms5.style.width = '0px'
        sms5.style.marginLeft = "47px"
        sms5.style.marginTop = "10px"
    
        myMsg5 = document.createElement('div')
        sms5.appendChild(myMsg5)
        myMsg5.style.width = "200px"
        myMsg5.style.height = "50px"
        myMsg5.style.backgroundColor = "lightblue"
        myMsg5.style.borderRadius = "15px"
        
        msgTxt5 = document.createElement("p")
        myMsg5.appendChild(msgTxt5)
    
        me5 = document.createElement('div')
        sms5.appendChild(me5)
        me5.style.width = '50px'
        me5.style.height = '50px'
        me5.style.backgroundColor = "#081678"
        me5.style.margin = 0
        me5.style.borderRadius = "50%"
        me5.style.marginLeft = '10px'
        me5.style.display = "none"
    
        myImg5 = document.createElement('img')
        me5.appendChild(myImg5)
        myImg5.src= "img/me.png"
        myImg5.style.width = "50px"
        myImg5.style.width = "50px"
    
        msgTxt5.style.fontSize = "20px"
        msgTxt5.style.marginTop = 0
    // ---------------------------------------------------------------------------------------------------------
        sms6 = document.createElement('div')
        messenger.appendChild(sms6)
        sms6.style.display = "flex"
        sms6.style.width = '0px'
        sms6.style.marginLeft = "47px"
        sms6.style.marginTop = "10px"
    
        myMsg6 = document.createElement('div')
        sms6.appendChild(myMsg6)
        myMsg6.style.width = "200px"
        myMsg6.style.height = "50px"
        myMsg6.style.backgroundColor = "lightblue"
        myMsg6.style.borderRadius = "15px"
        
        msgTxt6 = document.createElement("p")
        myMsg6.appendChild(msgTxt6)
    
        me6 = document.createElement('div')
        sms6.appendChild(me6)
        me6.style.width = '50px'
        me6.style.height = '50px'
        me6.style.backgroundColor = "#081678"
        me6.style.margin = 0
        me6.style.borderRadius = "50%"
        me6.style.marginLeft = '10px'
        me6.style.display = "none"
    
        myImg6 = document.createElement('img')
        me6.appendChild(myImg6)
        myImg6.src= "img/me.png"
        myImg6.style.width = "50px"
        myImg6.style.width = "50px"
    
        msgTxt6.style.fontSize = "20px"
        msgTxt6.style.marginTop = 0
    // ---------------------------------------------------------------------------------------------------------
        sms7 = document.createElement('div')
        messenger.appendChild(sms7)
        sms7.style.display = "flex"
        sms7.style.width = '0px'
        sms7.style.marginLeft = "47px"
        sms7.style.marginTop = "10px"
    
        myMsg7 = document.createElement('div')
        sms7.appendChild(myMsg7)
        myMsg7.style.width = "200px"
        myMsg7.style.height = "50px"
        myMsg7.style.backgroundColor = "lightblue"
        myMsg7.style.borderRadius = "15px"
            
        msgTxt7 = document.createElement("p")
        myMsg7.appendChild(msgTxt7)
    
        me7 = document.createElement('div')
        sms7.appendChild(me7)
        me7.style.width = '50px'
        me7.style.height = '50px'
        me7.style.backgroundColor = "#081678"
        me7.style.margin = 0
        me7.style.borderRadius = "50%"
        me7.style.marginLeft = '10px'
        me7.style.display = "none"
    
        myImg7 = document.createElement('img')
        me7.appendChild(myImg7)
        myImg7.src= "img/me.png"
        myImg7.style.width = "50px"
        myImg7.style.width = "50px"
    
        msgTxt7.style.fontSize = "20px"
        msgTxt7.style.marginTop = 0
    //  -------------------------------------------------------------------------------------------------------------------
    
    
        msgInputBar = document.createElement('div')
        messenger.appendChild(msgInputBar)
        msgInputBar.style.width = "310px"
        msgInputBar.style.marginLeft = "auto"
        msgInputBar.style.marginRight = "auto"
        msgInputBar.style.height = "60px"
        msgInputBar.style.borderRadius = "35px"
        msgInputBar.style.backgroundColor = "#12848d"
        msgInputBar.style.marginTop = "10px"
        msgInputBar.style.paddingTop = "10px"
        msgInputBar.style.display = "flex"
    
        divInput = document.createElement('div')
        msgInputBar.appendChild(divInput)
        // divInput.style.backgroundColor = "orange"
        divInput.style.width = "215px"
        divInput.style.height = "50px"
        divInput.style.marginLeft = "auto"
        divInput.style.marginRight = "auto"
        divInput.style.marginTop = 0
    
        input = document.createElement('input')
        divInput.appendChild(input)
        input.style.width = "210px"
        input.style.height = "40px"
        input.style.borderRadius = "35px"
        input.style.marginLeft = "auto"
        input.style.marginRight = "auto"
        input.style.border = "0"
        input.style.marginTop = "3px"
    
        setInterval(() => {
            if(input.value.length%20 == 0 &&input.value !=""){ 
               input.value += `<br>`}
    
            }, 0);    
    
        enter = document.createElement('div')
        msgInputBar.appendChild(enter)
        enter.style.width = "50px"
        enter.style.height = "50px"
        enter.style.backgroundColor = "yellow"
        enter.style.borderRadius = "50%"
        enter.style.marginRight = "10px"
        enter.style.cursor = "pointer"  
    
        enterPng = document.createElement("img")
        enter.appendChild(enterPng)
        enterPng.src = "img/enter.png"
        enterPng.style.width = "40px"
        enterPng.style.height = "40px"
        enterPng.style.marginTop = "3px"
        enterPng.style.marginLeft = '3px'
    
        toHome = document.createElement('div')
        messenger.appendChild(toHome)
        toHome.style.width = "200px"
        toHome.style.height = "10px"
        toHome.style.background = "white"
        toHome.style.borderRadius = "10px"
        toHome.style.marginTop = '2px'
        toHome.classList.add("toHome")
        toHome.style.cursor = "pointer"
        toHome.style.marginLeft = "auto"
        toHome.style.marginRight = "auto"
     
        toHome.onclick = () => {
           document.body.innerHTML = ""
           screenIphone()
        }
    
    
    let smsId = 1
    setInterval(() => {
        
        enter.onclick = () =>{
            if (input.value != "" && input.value !=" ") {
                if(smsId == 1){
                    sms.style.width = "270px"
                    me.style.display = ""
                    msgTxt.innerHTML = input.value
                    input.value = ""
                    smsId++
                }else if (smsId == 2){
                    sms2.style.width = "270px"
                    me2.style.display = ""
                    msgTxt2.innerHTML = input.value
                    input.value = ""
                    smsId++
                }else if (smsId == 3){
                    sms3.style.width = "270px"
                    me3.style.display = ""
                    msgTxt3.innerHTML = input.value
                    input.value = ""
                    smsId++
                }else if (smsId == 4){
                    sms4.style.width = "270px"
                    me4.style.display = ""
                    msgTxt4.innerHTML = input.value
                    input.value = ""
                    smsId++
                }else if (smsId == 5){
                    sms5.style.width = "270px"
                    me5.style.display = ""
                    msgTxt5.innerHTML = input.value
                    input.value = ""
                    smsId++
                }else if (smsId == 6){
                    sms6.style.width = "270px"
                    me6.style.display = ""
                    msgTxt6.innerHTML = input.value
                    input.value = ""
                    smsId++
                }else if (smsId == 7){
                    sms7.style.width = "270px"
                    me7.style.display = ""
                    msgTxt7.innerHTML = input.value
                    input.value = ""
                    smsId++
                }else if (smsId == 8){
                    smsId = 2
                    msgTxt.innerHTML = input.value
                    input.value = ""
                    
                    sms2.style.width = "0px"
                    me2.style.display = "none"
                    msgTxt2.innerHTML = ""
                    
                    sms3.style.width = "0px"
                    me3.style.display = "none"
                    msgTxt3.innerHTML = ""
                    
                    sms4.style.width = "0px"
                    me4.style.display = "none"
                    msgTxt4.innerHTML =  ""
                    
                    sms5.style.width = "0px"
                    me5.style.display = "none"
                    msgTxt5.innerHTML = ""
                   
                    sms6.style.width = "0px"
                    me6.style.display = "none"
                    msgTxt6.innerHTML = ""
                   
                    sms7.style.width = "0px"
                    me7.style.display = "none"
                    msgTxt7.innerHTML = ""
                }
            } 
        }
        input.addEventListener("keypress", function(e) {if (e.key === "Enter") {enter.onclick()}});
    }, 0);
    
}
xoGame = () => {
    document.body.innerHTML = ""
    document.body.style.justifyContent ='center';
    document.body.style.justifyItems = 'center'
    document.body.style.display = 'flex'
    document.body.style.fontFamily = "'Nunito', sans-serif"
//-----------------------------------------------------------------------------------------
    date = new Date()
    min = date.getMinutes()
    hour = date.getHours()
    day = date.getDate()
    month = date.getMonth() + 1

    min < 10 ? min = "0" + min : min = min
    hour < 10 ? hour = "0" + hour : hour = hour
    month < 10 ? month = "0" + month : month = month
    day < 10 ? day = "0" + day : day = day

    iphone = document.createElement('div')
    document.body.appendChild(iphone)
    iphone.style.margin = "auto"
    iphone.style.border = "10px solid gold"
    iphone.style.borderRadius = "40px"
    iphone.style.width = "320px"
    iphone.style.height = "600px"
    iphone.style.position = "realitive"
    iphone.style.boxShadow = "0px 20px 15px #33333335"

    contain = document.createElement("div")
    iphone.appendChild(contain)
    commandab = document.createElement("div")

    infobar = document.createElement('div')
    contain.appendChild(infobar)
    infobar.style.display = "flex"
    infobar.style.height = "0px"
    infobar.style.width = "600px"
    infobar.style.alignItems = "center"
    infobar.style.marginBottom = '0';
    infobar.style.position = "absolute"
    infobar.style.marginTop = "15px"
    infobar.style.marginLeft = "15px"

    bgMode = document.createElement("div")
    infobar.appendChild(bgMode)
    bgMode.style.width = '40px'
    bgMode.style.height = "19px"
    bgMode.style.background = 'white'
    bgMode.style.margin = "auto"
    bgMode.style.marginTop = '10px'
    bgMode.style.borderRadius = "25px"
    bgMode.style.cursor = "pointer"
    bgMode.style.border = "4px solid gold"
    bgMode.style.margin = "-10px auto auto 248px"

    bgClick = document.createElement("div")
    bgMode.appendChild(bgClick)
    bgClick.style.width = "20px"
    bgClick.style.height = "20px"
    bgClick.style.borderRadius = '25px'
    bgClick.style.background = "black"
    // bgClick.style.marginRight = "25px"
    setInterval(() => {
        modeP==1? bgClick.style.marginRight = "25px": bgClick.style.marginLeft = "20px"
        modeP == -1? document.body.background = "white": document.body.style.background = "black"
    }, 0);
    bgMode.onclick = () =>{
     if(modeP == 1){
        bgClick.style.background = "white"
        bgClick.style.marginLeft = "20px"
        document.body.style.background = "white"
        modeP*=-1
        bgMode.style.background = "black"
    }else{
        bgClick.style.background = "black"
        bgClick.style.marginLeft = 0
        document.body.style.background = "black"
        modeP*=-1
        bgMode.style.background = "white"
    }
    }

    
    ddmm = document.createElement('div')
    infobar.appendChild(ddmm)
    ddmm.style.height = '20px'
    ddmm.style.width = '40px'
    ddmm.style.marginLeft = "16px"
    

    p2 = document.createElement("p")
    ddmm.appendChild(p2)
    p2.innerHTML = `${hour}:${min}` 
    p2.style.fontSize = '15px'
    p2.style.marginTop = 0
    p2.style.marginLeft = '-555px'


    bang = document.createElement("div")
    infobar.appendChild(bang)
    bang.style.zIndex = 50
    bang.style.position = "absolute"
    bang.style.width = '200px'
    bang.style.height = '30px'
    bang.style.borderRadius = "0px 0px 20px 20px"
    bang.style.background = "black"
    bang.style.margin = '47px';
    

    camera = document.createElement("div")
    bang.appendChild(camera)

    camera.style.position = "absolute"
    camera.style.bottom = "8px"
    camera.style.width = "1rem"
    camera.style.height = "1rem"
    camera.style.borderRadius = "50%"
    camera.style.border = ".2rem solid #1e1f22"
    camera.style.background = "#447bb5a6"
    camera.style.left = "150px"
    camera.style.top = "10%"

    speaker = document.createElement("div")
    bang.appendChild(speaker )
    speaker.style.position = "absolute"
    speaker.style.rigth = '3.9rem'
    speaker.style.width = "5.2rem"
    speaker.style.height = ".6rem"
    speaker.style.background = "#333333"
    speaker.style.borderRadius = ".2rem"
    speaker.style.left = "3rem"
    speaker.style.top = "25%"   

    
    
//------------------------------------------------------------------------------------------

let stat = "X"
    

    gameStation = document.createElement("div")
    contain.appendChild(gameStation)
    gameStation.style.marginLeft = "83px"
    gameStation.style.paddingRigth = "5px"
   
    gameStation.appendChild(commandab)
    contain.style.height = '600px'
    contain.style.background = "grey"
    contain.style.background = "linear-gradient(45deg,#F17C5888, #E9458488, #24AADB88, #27DBB188, #FFDC1888, #FF370688)"
    contain.style.animation = "gradient0 5s linear infinite"
    contain.style.backgroundSize = '700% 200%'
    contain.style.animationDirection = 'alternate'
    contain.style.borderRadius = "30px"


    commandab.style.display = "flex"
    comment = document.createElement("div")
    comment.classList.add("comment")
    comment.style.color = "black"
    comment.style.width = '130px'
    comment.style.marginTop = '200px'

    commandab.appendChild(comment)
    startedGame = document.createElement("p")
    comment.appendChild(startedGame)
    startedGame.innerHTML = "Game started"
    startedGame.style.fontSize = "15px"

    

    scores = document.createElement("div")
    commandab.appendChild(scores)
    scores.style.width = '50px'
    scores.style.height = '50px'
    scores.style.marginLeft = '0px'
    scores.style.display = 'flex'
    scores.style.flexDirection = 'column'
    scores.style.marginLeft = "-25px"
    scores.style.marginTop = "200px"

    thisScores1 = document.createElement("div")
    scores.appendChild(thisScores1)
    xScr = document.createElement("div")
    thisScores1.appendChild(xScr)
    thisScores1.style.display = "flex"

    xScr.innerHTML = "X"
    xScr.style.width = '100%'
    xScr.style.textAlign = "center"
    xScr.style.columns = "red"

    thisScores1.style.width = '100%'
    thisScores1.style.height = '50%'
    thisScores1.display = "flex"
    thisScores1.style.justifyContent = "space-around"
    thisScores1.alignItems = "center"


    scr1 = document.createElement("div")
    thisScores1.appendChild(scr1)
    scr1.innerHTML = "0"
    scr1.style.width = '100%'
    scr1.style.textAlign = "center"
    scr1.style.columns = "red"

    thisScores2 = document.createElement("div")
    scores.appendChild(thisScores2)
    oScr = document.createElement("div")
    oScr.innerHTML = "O"
    oScr.style.width = '100%'
    oScr.style.textAlign = "center"
    oScr.style.columns = "red"

    thisScores2.appendChild(oScr)
    thisScores2.style.width = '100%'
    thisScores2.style.height = '50%'
    thisScores2.display = "flex"
    thisScores2.style.justifyContent = "space-around"
    thisScores2.style.alignItems = "center"
    thisScores2.style.display = "flex"

    scr2 = document.createElement("div")
    thisScores2.appendChild(scr2)
    scr2.innerHTML = "0"
    scr2.style.width = '100%'
    scr2.style.textAlign = "center"
    scr2.style.columns = "red"

//--------------------------------------------------------------------
    game = document.createElement("div")
    gameStation.appendChild(game)
    game.style.display = "flex"

    first = document.createElement("div")
    game.appendChild(first)
    but1 = document.createElement("div")
    first.appendChild(but1)
    but1.classList.add("division")
    but1.classList.add("possition")

    but2 = document.createElement("div")
    first.appendChild(but2)
    but2.classList.add("division")
    but2.classList.add("possition")

    but3 = document.createElement("div")
    first.appendChild(but3)
    but3.classList.add("division")
    but3.classList.add("possition")

    secound = document.createElement("div")
    game.appendChild(secound)
    but4 = document.createElement("div")
    secound.appendChild(but4)
    but4.classList.add("division")
    but4.classList.add("possition")

    but5 = document.createElement("div")
    secound.appendChild(but5)
    but5.classList.add("division")
    but5.classList.add("possition")

    but6 = document.createElement("div")
    secound.appendChild(but6)
    but6.classList.add("division")
    but6.classList.add("possition")

    third = document.createElement("div")
    game.appendChild(third)
    but7 = document.createElement("div")
    third.appendChild(but7)
    but7.classList.add("division")
    but7.classList.add("possition")

    but8 = document.createElement("div")
    third.appendChild(but8)
    but8.classList.add("division")
    but8.classList.add("possition")

    but9 = document.createElement("div")
    third.appendChild(but9)
    but9.classList.add("division")
    but9.classList.add("possition")

    // but1 = document.getElementsByClassName("division")[0]
    // but2 = document.getElementsByClassName("division")[1]
    // but3 = document.getElementsByClassName("division")[2]
    // but4 = document.getElementsByClassName("division")[3]
    // but5 = document.getElementsByClassName("division")[4]
    // but6 = document.getElementsByClassName("division")[5]
    // but7 = document.getElementsByClassName("division")[6]
    // but8 = document.getElementsByClassName("division")[7]
    // but9 = document.getElementsByClassName("division")[8]
    // com1 = document.getElementsByClassName("divislon")[0]
    // num1 = document.getElementsByClassName('num1')[0]
    // num2 = document.getElementsByClassName('num2')[0]


    toHome = document.createElement('div')
    contain.appendChild(toHome)
    toHome.style.width = "200px"
    toHome.style.height = "10px"
    toHome.style.background = "white"
    toHome.style.borderRadius = "10px"
    toHome.style.marginTop = '10px'
    toHome.classList.add("toHome")
    toHome.style.cursor = "pointer"
    toHome.style.marginLeft = "auto"
    toHome.style.marginRight = "auto"
    toHome.style.marginTop = '175px'
    toHome.onclick = () => {
    document.body.innerHTML = ""
    screenIphone()
        }
//---------------------------------------------------------------------------------------------------------------------------
    but1.onclick = () => { if (but1.innerHTML == '') { but1.innerHTML = stat; but1.style.background = "#7797c9"; changeStat() } }
    but2.onclick = () => { if (but2.innerHTML == '') { but2.innerHTML = stat; but2.style.background = "#7797c9"; changeStat() } }
    but3.onclick = () => { if (but3.innerHTML == '') { but3.innerHTML = stat; but3.style.background = "#7797c9"; changeStat() } }
    but4.onclick = () => { if (but4.innerHTML == '') { but4.innerHTML = stat; but4.style.background = "#7797c9"; changeStat() } }
    but5.onclick = () => { if (but5.innerHTML == '') { but5.innerHTML = stat; but5.style.background = "#7797c9"; changeStat() } }
    but6.onclick = () => { if (but6.innerHTML == '') { but6.innerHTML = stat; but6.style.background = "#7797c9"; changeStat() } }
    but7.onclick = () => { if (but7.innerHTML == '') { but7.innerHTML = stat; but7.style.background = "#7797c9"; changeStat() } }
    but8.onclick = () => { if (but8.innerHTML == '') { but8.innerHTML = stat; but8.style.background = "#7797c9"; changeStat() } }
    but9.onclick = () => { if (but9.innerHTML == '') { but9.innerHTML = stat; but9.style.background = "#7797c9"; changeStat() } }
//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
formatAll = () => {
    but1.innerHTML = ""; but1.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
    but2.innerHTML = ""; but2.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
    but3.innerHTML = ""; but3.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
    but4.innerHTML = ""; but4.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
    but5.innerHTML = ""; but5.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
    but6.innerHTML = ""; but6.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
    but7.innerHTML = ""; but7.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
    but8.innerHTML = ""; but8.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
    but9.innerHTML = ""; but9.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
}

//------------------------------------------------
changeStat = () => {
    stat == "O" ? stat = "X" : stat = "O"
}
//------------------------------------------------

setInterval(() => {
    if (but1.innerHTML == but2.innerHTML && but1.innerHTML == but3.innerHTML && but1.innerHTML !== "") {
        console.log(111);
        changeStat();
        startedGame.innerHTML = `Win ${stat}`;
        stat == 'X' ? scr1.innerHTML = scr1.innerHTML * 1 + 1 : scr2.innerHTML = scr2.innerHTML * 1 + 1
        formatAll()
    } else if (but1.innerHTML == but5.innerHTML && but1.innerHTML == but9.innerHTML && but1.innerHTML != '') {
        changeStat();
        startedGame.innerHTML = `Win ${stat}`;

        stat == 'X' ? scr1.innerHTML = scr1.innerHTML * 1 + 1 : scr2.innerHTML = scr2.innerHTML * 1 + 1
        formatAll()
    } else if (but7.innerHTML == but5.innerHTML && but7.innerHTML == but3.innerHTML && but7.innerHTML != '') {
        changeStat();
        startedGame.innerHTML = `Win ${stat}`;

        stat == 'X' ? scr1.innerHTML = scr1.innerHTML * 1 + 1 : scr2.innerHTML = scr2.innerHTML * 1 + 1
        formatAll()
    } else if (but4.innerHTML == but5.innerHTML && but4.innerHTML == but6.innerHTML && but4.innerHTML != '') {
        changeStat();
        startedGame.innerHTML = `Win ${stat}`;

        stat == 'X' ? scr1.innerHTML = scr1.innerHTML * 1 + 1 : scr2.innerHTML = scr2.innerHTML * 1 + 1
        formatAll()
    } else if (but7.innerHTML == but8.innerHTML && but7.innerHTML == but9.innerHTML && but7.innerHTML != '') {
        changeStat();
        startedGame.innerHTML = `Win ${stat}`;

        stat == 'X' ? scr1.innerHTML = scr1.innerHTML * 1 + 1 : scr2.innerHTML = scr2.innerHTML * 1 + 1
        formatAll()
    } else if (but1.innerHTML == but4.innerHTML && but1.innerHTML == but7.innerHTML && but1.innerHTML != '') {
        changeStat();
        startedGame.innerHTML = `Win ${stat}`;

         stat == 'X' ? scr1.innerHTML = scr1.innerHTML * 1 + 1 : scr2.innerHTML = scr2.innerHTML * 1 + 1
        formatAll()
    } else if (but2.innerHTML == but5.innerHTML && but2.innerHTML == but8.innerHTML && but2.innerHTML != '') {
        changeStat();
        startedGame.innerHTML = `Win ${stat}`;

        stat == 'X' ? scr1.innerHTML = scr1.innerHTML * 1 + 1 : scr2.innerHTML = scr2.innerHTML * 1 + 1
        formatAll()
    } else if (but3.innerHTML == but6.innerHTML && but3.innerHTML == but9.innerHTML && but3.innerHTML != '') {
        changeStat();
        startedGame.innerHTML = `Win ${stat}`;

        stat == 'X' ? scr1.innerHTML = scr1.innerHTML * 1 + 1 : scr2.innerHTML = scr2.innerHTML * 1 + 1
        formatAll()
    } else if (but1.innerHTML != "" && but2.innerHTML != "" && but3.innerHTML != "" &&
        but4.innerHTML != "" && but5.innerHTML != "" && but6.innerHTML != "" &&
        but7.innerHTML != "" && but8.innerHTML != "" && but9.innerHTML != ""
    ) { startedGame.innerHTML = 'Nobody'; formatAll() }
}, 0); 
}

blockedScreen()