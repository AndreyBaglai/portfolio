const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');

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

    pianoKeys.forEach(key => {
      if (key.classList.contains('piano-key-active')) {
        key.classList.remove('piano-key-active');
      }
    });
    
    pianoKey.classList.add('piano-key-active');
    playAudio(src);
  }
});

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}
