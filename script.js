let hr = document.querySelector('#hrs');
let mn = document.querySelector('#min');
let sc = document.querySelector('#sec');

let s_hr = document.querySelector('#s_hrs');
let s_mn = document.querySelector('#s_min');
let s_sc = document.querySelector('#s_sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital clock 
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampme');

    s_hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    s_mn.style.transform = `rotateZ(${mm}deg)`;
    s_sc.style.transform = `rotateZ(${ss}deg)`;

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    var am = h > + 12 ? 'PM' : 'AM';

    // convert 25 hrs to 12 hrs
    if (h > 12) {
        h = h - 12;
    }

    // Add zero before single digit 
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

})


