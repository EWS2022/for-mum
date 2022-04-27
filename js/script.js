let button = document.querySelector('button');
let page = document.querySelector('.page_1');
let audio = document.createElement('audio');
audio.setAttribute('src', 'dabro-yunost.mp3');
button.onclick = function(){
    page.classList.toggle('page_open');
    audio.play();
}
