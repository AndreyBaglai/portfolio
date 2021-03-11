const filters = document.querySelector('.filters');

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

filters.addEventListener('input', (e) => {
  const filter = e.target;

  if(filter.matches('input')) {
    const output = filter.nextElementSibling;
    output.value = filter.value;
  }
});
