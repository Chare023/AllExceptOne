let headerCtn = document.querySelector('.video-ctn');
let headerImg = document.getElementById('headerImg');
let headerVideo = document.getElementById('headerVideo');
let playBtn = document.getElementById('playBtn');

headerCtn.addEventListener('click', () => {
    headerImg.style.display = 'none';
    playBtn.style.display = 'none';
    headerVideo.style.display = 'block';
})