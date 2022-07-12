let stat = "X"
    but1 = document.getElementsByClassName("division")[0]
    but2 = document.getElementsByClassName("division")[1]
    but3 = document.getElementsByClassName("division")[2]
    but4 = document.getElementsByClassName("division")[3]
    but5 = document.getElementsByClassName("division")[4]
    but6 = document.getElementsByClassName("division")[5]
    but7 = document.getElementsByClassName("division")[6]
    but8 = document.getElementsByClassName("division")[7]
    but9 = document.getElementsByClassName("division")[8]
    com1 = document.getElementsByClassName("divislon")[0]
    num1 = document.getElementsByClassName('num1')[0]
    num2 = document.getElementsByClassName('num2')[0]

//---------------------------------------------------------------------------------------------------------------------------
    but1.onclick = () =>{if(but1.innerHTML == ''){but1.innerHTML = stat; but1.style.background = "#7797c9"; changeStat()}}
    but2.onclick = () =>{if(but2.innerHTML == ''){but2.innerHTML = stat; but2.style.background = "#7797c9"; changeStat()}}
    but3.onclick = () =>{if(but3.innerHTML == ''){but3.innerHTML = stat; but3.style.background = "#7797c9"; changeStat()}}
    but4.onclick = () =>{if(but4.innerHTML == ''){but4.innerHTML = stat; but4.style.background = "#7797c9"; changeStat()}}
    but5.onclick = () =>{if(but5.innerHTML == ''){but5.innerHTML = stat; but5.style.background = "#7797c9"; changeStat()}}
    but6.onclick = () =>{if(but6.innerHTML == ''){but6.innerHTML = stat; but6.style.background = "#7797c9"; changeStat()}}
    but7.onclick = () =>{if(but7.innerHTML == ''){but7.innerHTML = stat; but7.style.background = "#7797c9"; changeStat()}}
    but8.onclick = () =>{if(but8.innerHTML == ''){but8.innerHTML = stat; but8.style.background = "#7797c9"; changeStat()}}
    but9.onclick = () =>{if(but9.innerHTML == ''){but9.innerHTML = stat; but9.style.background = "#7797c9"; changeStat()}}
//---------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------
    formatAll=()=>{
        but1.innerHTML=""; but1.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
        but2.innerHTML=""; but2.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
        but3.innerHTML=""; but3.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
        but4.innerHTML=""; but4.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
        but5.innerHTML=""; but5.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
        but6.innerHTML=""; but6.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
        but7.innerHTML=""; but7.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
        but8.innerHTML=""; but8.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
        but9.innerHTML=""; but9.style.background = " linear-gradient(45deg, rgba(75,75,196,1) , rgba(0,212,255,1))";
}

//------------------------------------------------
changeStat = () => {
    stat == "O"? stat = "X": stat = "O"}
//------------------------------------------------

setInterval(() => {
    if (but1.innerHTML == but2.innerHTML && but1.innerHTML == but3.innerHTML && but1.innerHTML !== ""){
        console.log(111);
        changeStat();
        com1.innerHTML = `Win ${stat}`;
        stat == 'X'? num1.innerHTML = num1.innerHTML*1+1 :  num2.innerHTML = num2.innerHTML*1+1
        formatAll()
    }else if (but1.innerHTML == but5.innerHTML && but1.innerHTML == but9.innerHTML && but1.innerHTML != ''){
        changeStat();
        com1.innerHTML = `Win ${stat}`;
        
        stat == 'X'? num1.innerHTML = num1.innerHTML*1+1 :  num2.innerHTML = num2.innerHTML*1+1
        formatAll()
    }else if (but7.innerHTML == but5.innerHTML && but7.innerHTML == but3.innerHTML && but7.innerHTML != ''){
        changeStat();
        com1.innerHTML = `Win ${stat}`;
        
        stat == 'X'? num1.innerHTML = num1.innerHTML*1+1 :  num2.innerHTML = num2.innerHTML*1+1
        formatAll()
    }else if (but4.innerHTML == but5.innerHTML && but4.innerHTML == but6.innerHTML && but4.innerHTML != ''){
        changeStat();
        com1.innerHTML = `Win ${stat}`;
        
        stat == 'X'? num1.innerHTML = num1.innerHTML*1+1 :  num2.innerHTML = num2.innerHTML*1+1
        formatAll()
    }else if (but7.innerHTML == but8.innerHTML && but7.innerHTML == but9.innerHTML && but7.innerHTML != ''){
        changeStat();
        com1.innerHTML = `Win ${stat}`;
        
        stat == 'X'? num1.innerHTML = num1.innerHTML*1+1 :  num2.innerHTML = num2.innerHTML*1+1
        formatAll()
    }else if (but1.innerHTML == but4.innerHTML && but1.innerHTML == but7.innerHTML && but1.innerHTML != ''){
        changeStat();
        com1.innerHTML = `Win ${stat}`;
        
        stat == 'X'? num1.innerHTML = num1.innerHTML*1+1 :  num2.innerHTML = num2.innerHTML*1+1
        formatAll()
    }else if (but2.innerHTML == but5.innerHTML && but2.innerHTML == but8.innerHTML && but2.innerHTML != ''){
        changeStat();
        com1.innerHTML = `Win ${stat}`;
        
        stat == 'X'? num1.innerHTML = num1.innerHTML*1+1 :  num2.innerHTML = num2.innerHTML*1+1
        formatAll()
    }else if (but3.innerHTML == but6.innerHTML && but3.innerHTML == but9.innerHTML && but3.innerHTML != ''){
        changeStat();
        com1.innerHTML = `Win ${stat}`;
        
        stat == 'X'? num1.innerHTML = num1.innerHTML*1+1 :  num2.innerHTML = num2.innerHTML*1+1
        formatAll()
    }else if(but1.innerHTML!="" && but2.innerHTML!="" && but3.innerHTML!="" &&
                but4.innerHTML!="" && but5.innerHTML!="" && but6.innerHTML!="" && 
                but7.innerHTML!="" && but8.innerHTML!="" &&  but9.innerHTML!=""
           ){com1.innerHTML = 'Nobody'; formatAll()}
}, 0);