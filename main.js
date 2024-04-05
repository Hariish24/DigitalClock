// switching clock format 24hrs
const formatSwitchbtn = document.querySelector(".format-switch-btn");

formatSwitchbtn.addEventListener("click",() => {
    formatSwitchbtn.classList.toggle("active");

    var formatvalue = formatSwitchbtn.getAttribute("data-format");
    if(formatvalue === "12" ){
        formatSwitchbtn.setAttribute("data-format","24");
    }
    else{
        formatSwitchbtn.setAttribute("data-format","12");
    }
});
//getting current time
function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";
    //set the time period
    if(hours >= 12){
        period="PM";
    }
    //set in 12hr clock-format
    var formatvalue = formatSwitchbtn.getAttribute("data-format");
    
    if(formatvalue === "12"){
        hours = hours > 12  ? hours % 12 : hours;
  
    }
    

    //add the 0 for the values lower than 10
    if(hours < 10){
        hours = "0"+ hours;
    }

    if(minutes < 10){
        minutes = "0"+ minutes;
    }

    if(seconds < 10){
        seconds = "0"+ seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".period").innerHTML = period;
    document.querySelector(".seconds").innerHTML = seconds;
}

var updateClock = setInterval(clock,1000)

//get the date in javascript
var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default",{weekday:"long"});
const monthName = today.toLocaleString("default",{month:"long"});

document.querySelector(".month-name").innerHTML= monthName;
document.querySelector(".day-name").innerHTML= dayName;
document.querySelector(".date-number").innerHTML= dayNumber;
//document.querySelector(".year").innerHTML= year;

// for dot menu
const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click",() =>{
    dotMenu.classList.toggle("active");
});

//active-menu
document.addEventListener("click", (e) => {
     if(e.target.id !== "active-menu"){
        dotMenu.classList.remove("active");
     }
});