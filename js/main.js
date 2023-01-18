let headerCtn = document.querySelector('.video-ctn');
let headerImg = document.getElementById('headerImg');
let headerVideo = document.getElementById('headerVideo');
let playBtn = document.getElementById('playBtn');
let burgerBtn = document.getElementById('burgerBtn');
let topHeaderNav = document.getElementById('topHeaderNav');
let topHeader = document.getElementById('topHeader');

let showMenu = false;

console.log(headerCtn);
if (headerCtn !== null) {
    headerCtn.addEventListener('click', () => {
        headerImg.style.display = 'none';
        playBtn.style.display = 'none';
        headerVideo.style.display = 'block';
    });
}

burgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        burgerBtn.classList.add('close');
        topHeaderNav.style.display = 'flex';
        topHeader.classList.add('header-mobile');
        showMenu = true;
    } else {
        burgerBtn.classList.remove('close');
        topHeaderNav.style.display = 'none';
        topHeader.classList.remove('header-mobile');

        showMenu = false;
    }
}
