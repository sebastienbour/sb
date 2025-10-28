const root = document.documentElement;
const nav = document.querySelector('nav');
const setmode = document.getElementById('setmode');
const darkmode = document.getElementById('darkmode');
const lightmode = document.getElementById('lightmode');
const container = document.getElementById('container');

// Light/Dark mode 
function setLightmode(){
    darkmodeOn = false;
    lightmode.style.display = 'block';
    darkmode.style.display = 'none';
    root.style.setProperty('--primary-color', 'white');
    root.style.setProperty('--secondary-color', 'black');
    root.style.setProperty('--nav-color-hover', '#3a4150');
    root.style.setProperty('--text-color', '#555555');
}
function setDarkmode(){
    darkmodeOn = true;
    lightmode.style.display = 'none';
    darkmode.style.display = 'block';
    root.style.setProperty('--primary-color', 'black');
    root.style.setProperty('--secondary-color', 'white');
    root.style.setProperty('--nav-color-hover', '#e5e7eb');
    root.style.setProperty('--text-color', '#bbbbbb');
}

let darkmodeOn = false;
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
    setLightmode();
}else{
    setDarkmode();
}
setmode.onclick = function(){
    if(darkmodeOn){
        setLightmode();
    }else{
        setDarkmode();
    }
}