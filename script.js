const root = document.documentElement;
const nav = document.querySelector('nav');
const refresh = document.getElementById('refresh');
const setmode = document.getElementById('setmode');
const darkmode = document.getElementById('darkmode');
const lightmode = document.getElementById('lightmode');
const container = document.getElementById('container');
const up = document.getElementById('up');

// Refresh button
refresh.onclick = function(){
    window.location.reload();
}

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

// Scroll to top button
window.onscroll = function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        up.style.display = "block";
    }else{
        up.style.display = "none";
    }
}

up.onclick = function goUp(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

// Tooltip
const tooltip = document.getElementById('tooltip');
let mouseX = 0;
let mouseY = 0;
let calcX = 0;
let calcY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
function animate(){
    calcX = mouseX - 68;
    calcY = mouseY - 106;

    tooltip.style.left = `${calcX}px`;
    tooltip.style.top = `${calcY}px`;

    requestAnimationFrame(animate);
}
animate();

const pole = document.getElementById('pole');
pole.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.innerHTML = '<img src="img/pole-universitaire-vichy.jpg">';
});
pole.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '';
});

const trilogy = document.getElementById('trilogy');
trilogy.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.innerHTML = '<img src="img/trilogy.jpg">';
});
trilogy.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '';
});

const carpenterbrut = document.getElementById('carpenterbrut');
carpenterbrut.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.innerHTML = '<img src="img/CarpenterBrut.jpg">';
});
carpenterbrut.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '';
});

const waveshaper = document.getElementById('waveshaper');
waveshaper.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.innerHTML = '<img src="img/Waveshaper.webp">';
});
waveshaper.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '';
});

const daftpunk = document.getElementById('daftpunk');
daftpunk.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.innerHTML = '<img src="img/daft-punk.jpg">';
});
daftpunk.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '';
});

const bloodborne = document.getElementById('bloodborne');
bloodborne.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.innerHTML = '<img src="img/bloodborne.jpg">';
});
bloodborne.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '';
});

const outerwilds = document.getElementById('outerwilds');
outerwilds.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.innerHTML = '<img src="img/Outer-Wilds.avif">';
});
outerwilds.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '';
});

const uncharted = document.getElementById('uncharted');
uncharted.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.innerHTML = '<img src="img/uncharted-2.webp">';
});
uncharted.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '';
});