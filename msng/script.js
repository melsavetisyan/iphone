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
// setInterval(() => {
//     modeP==1? bgClick.style.marginRight = "25px": bgClick.style.marginLeft = "20px"
// }, 0);


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

document.body.style.backgroundColor   = " black"

let messenger = document.createElement("div")
    screen.appendChild(messenger)
    messenger.style.height = "555px"
    messenger.style.width = "310px"
    messenger.style.marginTop = "20px"
    messenger.style.marginLeft = "auto"
    messenger.style.marginRight = "auto"
    messenger.style.borderRadius = "40px"
    messenger.style.background = "red"
    messenger.style.paddingTop = "px"

    userBar = document.createElement('div')
    messenger.appendChild(userBar)
    
    userBar.style.width = "310px"
    userBar.style.height = "60px"
    userBar.style.backgroundColor = "green"
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
    sms.style.width = '270px'
    sms.style.marginLeft = "47px"
    sms.style.marginTop = "10px"

    myMsg = document.createElement('div')
    sms.appendChild(myMsg)
    myMsg.style.width = "200px"
    myMsg.style.height = "50px"
    myMsg.style.backgroundColor = "lightblue"
    myMsg.style.borderRadius = "15px"

    me = document.createElement('div')
    sms.appendChild(me)
    me.style.width = '50px'
    me.style.height = '50px'
    me.style.backgroundColor = "#081678"
    me.style.margin = 0
    me.style.borderRadius = "50%"
    me.style.marginLeft = '10px'
    myImg = document.createElement('img')
    me.appendChild(myImg)
    myImg.src= "img/me.png"
    myImg.style.width = "50px"
    myImg.style.width = "50px"

 // -------------------------------------------------------------------------------------------------------------------

    sms1 = document.createElement('div')
    messenger.appendChild(sms)
    sms1.style.display = "flex"
    sms1.style.width = '270px'
    sms1.style.marginLeft = "47px"
    sms1.style.marginTop = "10px"

    myMsg1 = document.createElement('div')
    sms1.appendChild(myMsg1)
    myMsg1.style.width = "200px"
    myMsg1.style.height = "50px"
    myMsg1.style.backgroundColor = "lightblue"
    myMsg1.style.borderRadius = "15px"

    me1 = document.createElement('div')
    sms1.appendChild(me1)
    me1.style.width = '50px'
    me1.style.height = '50px'
    me1.style.backgroundColor = "#081678"
    me1.style.margin = 0
    me1.style.borderRadius = "50%"
    me1.style.marginLeft = '10px'
    
    myImg1 = document.createElement('img')
    me1.appendChild(myImg1)
    myImg1.src= "img/me.png"
    myImg1.style.width = "50px"
    myImg1.style.width = "50px"

    // ---------------------------------------------------------------------------------------------------------
    sms2 = document.createElement('div')
    messenger.appendChild(sms2)
    sms2.style.display = "flex"
    sms2.style.width = '270px'
    sms2.style.marginLeft = "47px"
    sms2.style.marginTop = "10px"

    myMsg2 = document.createElement('div')
    sms2.appendChild(myMsg2)
    myMsg2.style.width = "200px"
    myMsg2.style.height = "50px"
    myMsg2.style.backgroundColor = "lightblue"
    myMsg2.style.borderRadius = "15px"

    me2 = document.createElement('div')
    sms2.appendChild(me2)
    me2.style.width = '50px'
    me2.style.height = '50px'
    me2.style.backgroundColor = "#081678"
    me2.style.margin = 0
    me2.style.borderRadius = "50%"
    me2.style.marginLeft = '10px'

    myImg2 = document.createElement('img')
    me2.appendChild(myImg2)
    myImg2.src= "img/me.png"
    myImg2.style.width = "50px"
    myImg2.style.width = "50px"
// ---------------------------------------------------------------------------------------------------------
    sms3 = document.createElement('div')
    messenger.appendChild(sms3)
    sms3.style.display = "flex"
    sms3.style.width = '270px'
    sms3.style.marginLeft = "47px"
    sms3.style.marginTop = "10px"

    myMsg3 = document.createElement('div')
    sms3.appendChild(myMsg3)
    myMsg3.style.width = "200px"
    myMsg3.style.height = "50px"
    myMsg3.style.backgroundColor = "lightblue"
    myMsg3.style.borderRadius = "15px"

    me3 = document.createElement('div')
    sms3.appendChild(me3)
    me3.style.width = '50px'
    me3.style.height = '50px'
    me3.style.backgroundColor = "#081678"
    me3.style.margin = 0
    me3.style.borderRadius = "50%"
    me3.style.marginLeft = '10px'

    myImg3 = document.createElement('img')
    me3.appendChild(myImg3)
    myImg3.src= "img/me.png"
    myImg3.style.width = "50px"
    myImg3.style.width = "50px"

    // ---------------------------------------------------------------------------------------------------------
    sms4 = document.createElement('div')
    messenger.appendChild(sms4)
    sms4.style.display = "flex"
    sms4.style.width = '270px'
    sms4.style.marginLeft = "47px"
    sms4.style.marginTop = "10px"

    myMsg4 = document.createElement('div')
    sms4.appendChild(myMsg4)
    myMsg4.style.width = "200px"
    myMsg4.style.height = "50px"
    myMsg4.style.backgroundColor = "lightblue"
    myMsg4.style.borderRadius = "15px"

    me4 = document.createElement('div')
    sms4.appendChild(me4)
    me4.style.width = '50px'
    me4.style.height = '50px'
    me4.style.backgroundColor = "#081678"
    me4.style.margin = 0
    me4.style.borderRadius = "50%"
    me4.style.marginLeft = '10px'

    myImg4 = document.createElement('img')
    me4.appendChild(myImg4)
    myImg4.src= "img/me.png"
    myImg4.style.width = "50px"
    myImg4.style.width = "50px"


// ---------------------------------------------------------------------------------------------------------
    sms5= document.createElement('div')
    messenger.appendChild(sms5)
    sms5.style.display = "flex"
    sms5.style.width = '270px'
    sms5.style.marginLeft = "47px"
    sms5.style.marginTop = "10px"

    myMsg5 = document.createElement('div')
    sms5.appendChild(myMsg5)
    myMsg5.style.width = "200px"
    myMsg5.style.height = "50px"
    myMsg5.style.backgroundColor = "lightblue"
    myMsg5.style.borderRadius = "15px"

    me5 = document.createElement('div')
    sms5.appendChild(me5)
    me5.style.width = '50px'
    me5.style.height = '50px'
    me5.style.backgroundColor = "#081678"
    me5.style.margin = 0
    me5.style.borderRadius = "50%"
    me5.style.marginLeft = '10px'

    myImg5 = document.createElement('img')
    me5.appendChild(myImg5)
    myImg5.src= "img/me.png"
    myImg5.style.width = "50px"
    myImg5.style.width = "50px"

// ---------------------------------------------------------------------------------------------------------
    sms6 = document.createElement('div')
    messenger.appendChild(sms6)
    sms6.style.display = "flex"
    sms6.style.width = '270px'
    sms6.style.marginLeft = "47px"
    sms6.style.marginTop = "10px"

    myMsg6 = document.createElement('div')
    sms6.appendChild(myMsg6)
    myMsg6.style.width = "200px"
    myMsg6.style.height = "50px"
    myMsg6.style.backgroundColor = "lightblue"
    myMsg6.style.borderRadius = "15px"

    me6 = document.createElement('div')
    sms6.appendChild(me6)
    me6.style.width = '50px'
    me6.style.height = '50px'
    me6.style.backgroundColor = "#081678"
    me6.style.margin = 0
    me6.style.borderRadius = "50%"
    me6.style.marginLeft = '10px'

    myImg6 = document.createElement('img')
    me6.appendChild(myImg6)
    myImg6.src= "img/me.png"
    myImg6.style.width = "50px"
    myImg6.style.width = "50px"

// ---------------------------------------------------------------------------------------------------------
   sms7 = document.createElement('div')
   messenger.appendChild(sms7)
   sms7.style.display = "flex"
   sms7.style.width = '270px'
   sms7.style.marginLeft = "47px"
   sms7.style.marginTop = "10px"

   myMsg7 = document.createElement('div')
   sms7.appendChild(myMsg7)
   myMsg7.style.width = "200px"
   myMsg7.style.height = "50px"
   myMsg7.style.backgroundColor = "lightblue"
   myMsg7.style.borderRadius = "15px"

   me7 = document.createElement('div')
   sms7.appendChild(me7)
   me7.style.width = '50px'
   me7.style.height = '50px'
   me7.style.backgroundColor = "#081678"
   me7.style.margin = 0
   me7.style.borderRadius = "50%"
   me7.style.marginLeft = '10px'


   myImg7 = document.createElement('img')
    me7.appendChild(myImg7)
    myImg7.src= "img/me.png"
    myImg7.style.width = "50px"
    myImg7.style.width = "50px"
//  -------------------------------------------------------------------------------------------------------------------


    msgInputBar = document.createElement('div')
    messenger.appendChild(msgInputBar)
    msgInputBar.style.width = "310px"
    msgInputBar.style.marginLeft = "auto"
    msgInputBar.style.marginRight = "auto"
    msgInputBar.style.height = "60px"
    msgInputBar.style.borderRadius = "35px"
    msgInputBar.style.backgroundColor = ""
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

    enter = document.createElement('div')
    msgInputBar.appendChild(enter)
    enter.style.width = "50px"
    enter.style.height = "50px"
    enter.style.backgroundColor = "yellow"
    enter.style.borderRadius = "50%"
    enter.style.marginRight = "10px"
    enter.style.cursor = "pointer"  