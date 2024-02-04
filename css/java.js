function redirect(destination) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    document.getElementById('loading').style.display = 'block';
    document.querySelector('.loader').style.display = 'block';

    const randomTime = Math.random() * (900 - 50) + 50; 
    setTimeout(() => {
        overlay.style.display = 'none';
        document.getElementById('loading').style.display = 'none';
        document.querySelector('.loader').style.display = 'none';
        window.location.href = destination + ".html";
    }, randomTime);
}


function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}

function changeWallpaper(newSrc) {
    document.getElementById('mainWallpaper').src = newSrc;
}
  
function showOverlayForRandomTime() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    document.getElementById('loading').style.display = 'block';
    document.querySelector('.loader').style.display = 'block';

    const randomTime = Math.random() * (800 - 200) + 200; 
    setTimeout(() => {
        overlay.style.display = 'none';
        document.querySelector('.message').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
        document.querySelector('.loader').style.display = 'none';
    }, randomTime);
}

function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const displayParam = getURLParameter('display');

if (displayParam === 'block') {
    showOverlayForRandomTime();
}
