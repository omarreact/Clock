let hours = document.querySelector('#h');
let minutes = document.querySelector('#m');
let seconds = document.querySelector('#s');
let ampm = document.querySelector('#ampm');




let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
let am;


if( h < 12){
    am = 'AM';
}else{
    am = 'PM';
}
ampm.textContent = am;

hours.textContent = h;
minutes.textContent = m;
seconds.textContent = s;

setInterval(function(){
    time = new Date();
    h = time.getHours();


    if( h > 12){
        h = h - 12;
    }


    m = time.getMinutes();
    s = time.getSeconds();


    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;


    if( h < 12){
        am = 'AM';
    }else{
        am = 'PM';
    }

    ampm.textContent = am;
}, 1000);


