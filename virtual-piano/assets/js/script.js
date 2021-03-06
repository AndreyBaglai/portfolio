const piano = document.querySelector('.piano');

const fullscreenBtn = document.querySelector('.fullscreen');

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

piano.addEventListener('click', (e) => {
  const pianoKey = e.target;

  if (pianoKey.classList.contains('piano-key')) {
    const note = pianoKey.dataset.note;
    const src = `./assets/audio/${note}.mp3`;
    
    playAudio(src);
  }
});

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}