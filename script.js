setInterval(() =>{
    let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let ampm = document.getElementById('ampm')

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_dot = document.querySelector('.hr_dot')
let min_dot = document.querySelector('.min_dot')
let sec_dot = document.querySelector('.sec_dot')



let now = new Date()
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();
let am = h >= 12? 'PM' : 'AM'
// let am = ''
// if (h >= 12){
//     am = "PM"
// }else{
//     am = 'AM'
// }

if (h > 12){
    h -= 12;
}
h = (h < 10) ? '0' + h : h;
m = (m < 10) ? '0' + m : m;
s = (s < 10) ? '0' + s : s;

hour.innerHTML = h + '<br><span>Hours</span>';
minute.innerHTML = m + '<br><span>Minutes</span>';
second.innerHTML = s + '<br><span>Seconds</span>';;
ampm.innerHTML = am;

hh.style.strokeDashoffset = 440 - (440 * h) /12;
mm.style.strokeDashoffset = 440 - (440 * m) /60;
ss.style.strokeDashoffset = 440 - (440 * s) /60;

hr_dot.style.transform = `rotate(${h * 30}deg)`
min_dot.style.transform = `rotate(${m * 6}deg)`
sec_dot.style.transform = `rotate(${s * 6}deg)`





})
