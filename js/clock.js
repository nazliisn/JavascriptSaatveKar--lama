
let name =prompt("Lütfen adınızı giriniz")
let myName=document.querySelector("#myName")
myName.innerHTML=name
let myClock=document.querySelector("#myClock")
let currentdate = new Date();         
const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

 function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = weekday[today.getDay()];   
    m = checkTime(m);
    s = checkTime(s);
    console.log(m);
    console.log(2);
    myClock.innerHTML=  h + ":" + m + ":" + s + " "+ day;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

showTime();