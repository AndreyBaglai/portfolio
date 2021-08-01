const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const containerBtn = document.querySelector('.btn-container');
const buttons = document.querySelectorAll('.btn');

const fullscreenBtn = document.querySelector('.fullscreen');

containerBtn.addEventListener('click', (e) => {
  const activeButton = e.target;
  const isLetters = activeButton.dataset.letters === 'letters';

  buttons.forEach((btn) => {
    if (btn.classList.contains('btn-active')) {
      btn.classList.remove('btn-active');
    }
  });

  activeButton.classList.add('btn-active');

  isLetters
    ? pianoKeys.forEach((key) => {
        key.classList.add('letter');
      })
    : pianoKeys.forEach((key) => {
        key.classList.remove('letter');
      });
});

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

piano.addEventListener('mousedown', (e) => {
  const pianoKey = e.target;

  if (pianoKey.classList.contains('piano-key')) {
    const note = pianoKey.dataset.note;
    const src = `./assets/audio/${note}.mp3`;

    pianoKeys.forEach((key) => {
      if (key.classList.contains('piano-key-active')) {
        key.classList.remove('piano-key-active');
      }
    });

    pianoKey.classList.add('piano-key-active');
    playAudio(src);
  }
});

piano.addEventListener('mouseup', () => {
  pianoKeys.forEach(key => {
    key.classList.remove('piano-key-active');
  });
});

piano.addEventListener('mouseover', (e) => {
  const pianoKey = e.target;
  const pressAnyMouseKey = e.buttons !== 0;

  if (pianoKey.classList.contains('piano-key') && pressAnyMouseKey) {
    const note = pianoKey.dataset.note;
    const src = `./assets/audio/${note}.mp3`;

    pianoKeys.forEach((key) => {
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

window.addEventListener('keydown', (e) => {
  const keyCode = e.code.slice(-1);

  if (e.repeat) return;

  let note = '';
  let keyLetter = '';
  let src = ``;

  pianoKeys.forEach((key) => {
    if (key.classList.contains('piano-key-active')) {
      key.classList.remove('piano-key-active');
    }

    note = key.dataset.note;
    keyLetter = key.dataset.letter;
    src = `./assets/audio/${note}.mp3`;

    if (keyCode === keyLetter) {
      key.classList.add('piano-key-active');
      playAudio(src);
    }
  });
});

window.addEventListener('keyup', () => {
  pianoKeys.forEach(key => {
    key.classList.remove('piano-key-active');
  });
});